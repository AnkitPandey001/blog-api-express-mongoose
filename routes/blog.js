
const express = require('express');
const router = express.Router();

//! controller Import
const {dummyLink,unlikePost} = require('../controller/likeController');
const{createComment} = require('../controller/commentController');
const{createPost,getAllPost} = require('../controller/postController');

router.post('/comments/create',createComment)
router.post('/dummyroute',dummyLink);
router.post('/createpost',createPost);
router.get('/getallpost',getAllPost);
router.delete('/unlikepost',unlikePost);
module.exports = router;