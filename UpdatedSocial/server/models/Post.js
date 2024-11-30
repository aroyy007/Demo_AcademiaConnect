const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const editHistorySchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    previousContent: { type: String, required: true },
});

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    images: [{ type: String }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [commentSchema],
    createdAt: { type: Date, default: Date.now },
    editHistory: [editHistorySchema],
    deletedAt: { type: Date },
});

module.exports = mongoose.model('Post', postSchema);