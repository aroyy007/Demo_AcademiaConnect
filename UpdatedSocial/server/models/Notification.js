// File: routes/notifications.js

const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
    getNotifications,
    createNotification,
    markNotificationAsRead
} = require('../controllers/notificationController');

const router = express.Router();

router.use(protect);

router.get('/', getNotifications);
router.post('/', createNotification);
router.put('/:notificationId/read', markNotificationAsRead);

module.exports = router;
