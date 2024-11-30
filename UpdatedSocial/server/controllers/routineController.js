const Routine = require('./models/Routine');

exports.getRoutine = async (req, res) => {
    try {
        const { semester, section } = req.params;
        const routine = await Routine.findOne({ semester, section });
        if (!routine) {
            return res.status(404).json({ message: 'Routine not found' });
        }
        res.status(200).json(routine);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.editRoutine = async (req, res) => {
    try {
        const { routineId } = req.params;
        const { schedule } = req.body;
        const routine = await Routine.findByIdAndUpdate(routineId, { schedule }, { new: true });
        if (!routine) {
            return res.status(404).json({ message: 'Routine not found' });
        }
        res.status(200).json(routine);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};