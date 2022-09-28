const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Comment = require('../models/Comment');

router.get('/', async (req, res) => {
    if (req.query.post) {
        try {
            const result = await Comment.find({post: req.query.post}).sort({"datetime": -1}).populate({path: "user"});

            if (result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        } catch (e) {
            res.sendStatus(500);
        }
    }
});

router.post('/', auth, async (req, res) => {
    const { post, text } = req.body;

    if (!post || !text) {
        return res.status(400).send({error: "Data not valid"});
    }

    const commentData = {
        user: req.user._id,
        post,
        text,
        datetime: new Date().toISOString(),
    };

    try {
        const comment = new Comment(commentData)
        await comment.save();

        res.send(comment);
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;