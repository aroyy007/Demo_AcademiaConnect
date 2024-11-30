const express = require('express');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const {
    getPendingUsers,
    approveUser,
    rejectUser,
    deletePost,
    uploadRoutine,
    createNotification,
} = require('../controllers/adminController');

const router = express.Router();

router.use(protect, adminOnly);

router.get('/users/pending', getPendingUsers);
router.post('/users/approve/:userId', approveUser);
router.post('/users/reject/:userId', rejectUser);
router.delete('/posts/:postId', deletePost);
router.post('/routines/upload', uploadRoutine);
router.post('/notifications', createNotification);

module.exports = router;