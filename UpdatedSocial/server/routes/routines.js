const express = require('express');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const { getRoutine, editRoutine } = require('../controllers/routineController');

const router = express.Router();

router.get('/:semester/:section', protect, getRoutine);
router.put('/:routineId', protect, adminOnly, editRoutine);

module.exports = router;