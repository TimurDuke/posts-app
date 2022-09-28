const mongoose = require('mongoose');
const {nanoid} = require('nanoid');
const config = require('./config');

const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

const run = async () => {
    await mongoose.connect(config.mongo.db);

    const collections = await mongoose.connection.db.listCollections().toArray();

    for (const coll of collections) {
        await mongoose.connection.db.dropCollection(coll.name);
    }

    const [user1, user2] = await User.create({
        username: "user",
        password: "user",
        token: nanoid()
    }, {
        username: "admin",
        password: "admin",
        token: nanoid()
    });

    const [post1, post2, post3] = await Post.create({
        title: "Post 1",
        image: "fixtures/post1.jpeg",
        description: null,
        user: user1['_id'],
        datetime: "2022-09-28T05:56:35.310Z"
    }, {
        title: "Post 2",
        image: null,
        description: "Post 2 description",
        user: user1['_id'],
        datetime: "2022-09-28T06:56:35.310Z"
    }, {
        title: "Post 3",
        image: "fixtures/post3.jpg",
        description: "Post 3 description",
        user: user2['_id'],
        datetime: "2022-09-28T07:56:35.310Z"
    });

    await Comment.create({
            user: user1['_id'],
            post: post1['_id'],
            text: "post 1 comment 1",
            datetime: "2022-09-28T05:59:54.688Z"
        }, {
            user: user1['_id'],
            post: post2['_id'],
            text: "post 2 comment 1",
            datetime: "2022-09-28T06:59:54.688Z"
        }, {
            user: user1['_id'],
            post: post2['_id'],
            text: "post 2 comment 2",
            datetime: "2022-09-28T07:59:54.688Z"
        }, {
            user: user2['_id'],
            post: post3['_id'],
            text: "post 3 comment 1",
            datetime: "2022-09-28T08:59:54.688Z"
        }, {
            user: user2['_id'],
            post: post3['_id'],
            text: "post 3 comment 2",
            datetime: "2022-09-28T09:59:54.688Z"
        }, {
            user: user2['_id'],
            post: post3['_id'],
            text: "post 3 comment 3",
            datetime: "2022-09-28T01:59:54.688Z"
        },
    );

    await mongoose.connection.close();
};

run().catch(console.error);