const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: String,
    description: String,
    datetime: Date
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;