const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { createPost, getPosts, likePost, commentOnPost } = require('../controllers/postController');

const router = express.Router();

router.use(protect);

router.post('/', createPost);
router.get('/', getPosts);
router.post('/:postId/like', likePost);
router.post('/:postId/comment', commentOnPost);

module.exports = router;