const Post = require("../model/postModel");
const Comment = require("../model/commentModels");

const createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;
    const comment = new Comment({
      post,
      user,
      body,
    });
    const saved = await comment.save();

    const updatePost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: saved._id } },
      { new: true }
    )
      .populate("comments")
      .exec();
    //! yaha new true karne ka matlab hai ki jo bhi app return karoge new update wala karna jab hme required ho

    res.status(200).json({
        post:updatePost
    })
     

  } catch (error) {
     return res.status(500).json({
        error:"error while creating comment"
     })
  }
};
module.exports = { createComment };
