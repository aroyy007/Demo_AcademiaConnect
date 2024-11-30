const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    try {
        const { title, content, images } = req.body;
        const post = await Post.create({ title, content, images, userId: req.user._id });
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const posts = await Post.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .populate('userId', 'name');

        const total = await Post.countDocuments();

        res.status(200).json({
            posts,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalPosts: total,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const index = post.likes.indexOf(req.user._id);
        if (index === -1) {
            post.likes.push(req.user._id);
        } else {
            post.likes.splice(index, 1);
        }

        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.commentOnPost = async (req, res) => {
    try {
        const { content } = req.body;
        const post = await Post.findById(req.params.postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        post.comments.push({ userId: req.user._id, content });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};