// File: controllers/notificationController.js

const Notification = require('../models/Notification');

exports.getNotifications = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const notifications = await Notification.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await Notification.countDocuments();

        res.status(200).json({
            notifications,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalNotifications: total,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.createNotification = async (req, res) => {
    try {
        const { type, title, content } = req.body;
        const notification = await Notification.create({ type, title, content });
        res.status(201).json(notification);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.markNotificationAsRead = async (req, res) => {
    try {
        const notification = await Notification.findByIdAndUpdate(
            req.params.notificationId,
            { read: true },
            { new: true }
        );
        if (!notification) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
