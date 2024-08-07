const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post" // this is a reference to the post model
    },
    user: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Likes', likeSchema); // Ensure the model name is 'Likes'