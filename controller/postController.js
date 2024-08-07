const Post = require("../model/postModel");

const createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({
      title,
      body,
    });

    const savedPost = await post.save();
    res.json({
      post: savedPost,
    });
  } catch (error) {
    return res.json({
      error: "error occured",
    });
  }
};

const getAllPost = async (req, res) => {
  try {
    const allPost = await Post.find()
      .populate("likes")
      .populate("comments")
      .exec();
   // console.log("Enter in getllpost");
    res.json({
      allPost,
    });
  } catch (error) {
    return res.json({
      error: "error occured",
    });
  }
};

module.exports = { createPost, getAllPost };
