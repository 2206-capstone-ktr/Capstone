const router = require('express').Router();
const {
  models: { User, Itinerary },
} = require('../db');
module.exports = router;

// GET all users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
// GET one user
router.get('/:userId', async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const user = await User.findByPk(req.params.userId);
      res.status(200).send(user);
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    next(err);
  }
});
// GET all itineraries for a single user
router.get('/:userId/itineraries', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const itineraries = await user.getItineraries();
    res.send(itineraries);
  } catch (error) {
    next(error);
  }
});
//POST user
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await User.create(req.body));
  } catch (err) {
    next(err);
  }
});

//PUT user
router.put('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);
    if (user) {
      res.send(await user.update(req.body));
    } else {
      res.status(404).send('User Not Found');
    }
  } catch (err) {
    next(err);
  }
});

//DELETE user
router.delete('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await user.findByPk(userId);
    if (user) {
      await user.destroy();
      res.status(204).send(user);
    } else {
      res.status(404).send('User Not Found');
    }
  } catch (err) {
    next(err);
  }
});
