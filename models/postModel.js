var mongoose = require("mongoose");

var postModel = new mongoose.Schema(
    {
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        title: String,
        content: String,
        multimedia: {
            type: String,
            default: null,
        },
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
);

var post = mongoose.model("post", postModel);

module.exports = post;
