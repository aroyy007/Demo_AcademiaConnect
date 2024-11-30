const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    type: { type: String, enum: ['social', 'university'], required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    read: { type: Boolean, default: false },
});

module.exports = mongoose.model('Notification', notificationSchema);