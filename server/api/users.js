const router = require('express').Router()
const {User} = require('../db/models')

router.post('/', async (req, res, next) => {
    try {
      console.log('server received post signup request');
      const user = await User.create(req.body);
      req.login(user, (err) => (err ? next(err) : res.json(user)));
    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists');
      } else {
        next(err);
      }
    }
});

router.put('/:userId', async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.userId);
      await User.update(req.body);
      res.json(user);
    } catch (err) {
      next(err);
    }
});

module.exports = router;