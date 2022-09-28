const express = require('express');
const router = express.Router();
const config = require('../config');
const path = require('path');
const multer = require('multer');
const {nanoid} = require('nanoid');
const Post = require('../models/Post');
const auth = require("../middleware/auth");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    },
});

const upload = multer({storage});

router.get('/', async (req,res) => {
    try {
        const posts = await Post
            .find()
            .sort({datetime: -1})
            .populate('user', 'username');

        res.send(posts);
    } catch (e) {
        res.status(500);
    }
});

router.get('/:id', async (req,res) => {
    try {
        const post = await Post
            .findById(req.params.id)
            .populate('user');
        if (!post) res.status(404).send({message: "This post is not found"});
        res.send(post);
    } catch (e) {
        res.status(500);
    }
});

router.post('/', auth, upload.single("image"), async (req, res) => {
    const {title, description} = req.body;
    if (!title) {
        return res.status(400).send({error: 'Data not valid'});
    }

    if ((description && !req.file) || (!description && req.file)) {
        const postData = {
            user: req.user._id,
            title,
            description: description || null,
            image: null,
            datetime: new Date().toISOString(),
        };

        if (req.file) {
            postData.image = 'uploads/' + req.file.filename;
        }

        try {
            const post = new Post(postData);

            await post.save();
            res.send(post);
        } catch (e) {
            res.status(400).send({error: e.errors});
        }
    } else {
        return res.status(400).send({message: "Data not valid"});
    }
});
module.exports = router;