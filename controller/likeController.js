const Post = require("../model/postModel");
const Likes = require('../model/likeModel');

const dummyLink = async (req, res) => {
  try {
    const { post, user } = req.body;
    const likes = new Likes({
      post,
      user,
    });

    const savedLike = await likes.save();

    const updatePost = await Post.findByIdAndUpdate(
        post,
        { $push: { likes: savedLike._id } },
        { new: true }
      )
        .populate("likes")
        .exec();
   
    res.status(200).json({
      post: updatePost,
    });
  } catch (err) {
    return res.status(500).json({
      error: "error while likes",
    });
  }
};



const unlikePost = async(req,res)=>{
     try{
         const{post,like} = req.body;
         const deletedLike = await Likes.findOneAndDelete({post:post,_id:like});

         const updatePost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true});

         res.json({
          message:"Sucessfull unlike",
          post:updatePost
         })
         
       }
     catch(err){
      return res.status(500).json({
        error: "error while unlikes",
      });
     }
}


module.exports = { dummyLink ,unlikePost};
