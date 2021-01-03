const router = require('express').Router();
const {Goal} = require('../db/models')

// GET /api/goals
router.get('/', async (req, res, next) => {
    try {
        const goals = await Goal.findAll({
            where: {
                userId: req.user.id,
            }
        });
        res.json(goals);
    } catch (err) {
        next(err);
    }
});

module.exports = router;