const router = require('express').Router();
const {
  models: { Itinerary },
} = require('../db');
module.exports = router;

// GET all itineraries
router.get('/', async (req, res, next) => {
  try {
    const itineraries = await Itinerary.findAll();
    res.json(itineraries);
  } catch (err) {
    next(err);
  }
});

// GET one itinerary
router.get('/:itineraryId', async (req, res, next) => {
  try {
    const itineraryId = req.params.itineraryId;
    const itineraries = await Itinerary.findByPk(itineraryId);
    res.json(itineraries);
  } catch (err) {
    next(err);
  }
});

// POST itinerary
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Itinerary.create(req.body));
  } catch (err) {
    next(err);
  }
});

// PUT itinerary
router.put('/:itineraryId', async (req, res, next) => {
  try {
    const itineraryId = req.params.itineraryId;
    const itinerary = await Itinerary.findByPk(itineraryId);
    if (itinerary) {
      res.send(await itinerary.update(req.body));
    } else {
      res.status(404).send('Itinerary Not Found');
    }
  } catch (err) {
    next(err);
  }
});

// DELETE itinerary
router.delete('/:itineraryId', async (req, res, next) => {
  try {
    const itineraryId = req.params.itineraryId;
    const itinerary = await Itinerary.findByPk(itineraryId);
    if (itinerary) {
      await itinerary.destroy();
      res.status(204).send(itinerary);
    } else {
      res.status(404).send('Itinerary Not Found');
    }
  } catch (err) {
    next(err);
  }
});
