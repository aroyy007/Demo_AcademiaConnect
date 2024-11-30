const mongoose = require('mongoose');

const scheduleItemSchema = new mongoose.Schema({
    day: { type: String, required: true },
    time: { type: String, required: true },
    subject: { type: String, required: true },
    teacher: { type: String, required: true },
    room: { type: String, required: true },
});

const routineSchema = new mongoose.Schema({
    semester: { type: Number, required: true },
    section: { type: String, required: true },
    department: { type: String, required: true },
    schedule: [scheduleItemSchema],
});

module.exports = mongoose.model('Routine', routineSchema);