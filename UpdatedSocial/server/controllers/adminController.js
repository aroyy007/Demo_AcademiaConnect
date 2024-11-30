const User = require('../models/User');
const Post = require('../models/Post');
const Routine = require('./models/Routine');
const Notification = require('../models/Notification');

exports.getPendingUsers = async (req, res) => {
    try {
        const pendingUsers = await User.find({ status: 'pending' });
        res.status(200).json(pendingUsers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.approveUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, { status: 'approved' }, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.rejectUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, { status: 'rejected' }, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.uploadRoutine = async (req, res) => {
    try {
        const { semester, section, department, schedule } = req.body;
        const routine = await Routine.create({ semester, section, department, schedule });
        res.status(201).json(routine);
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