const router = require('express').Router();
const {
  models: { Itinerary, User, Event, ItineraryEvent },
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

// POST Itinerary Event
router.post('/:itineraryId/addEvent', async (req, res, next) => {
  try {
    const itinerary = await Itinerary.findByPk(req.params.itineraryId);
    res.status(201).send(
      await itinerary.createEvent({
        ...req.body,
        eventType: req.body.category.name,
        imageUrl: req.body.photo.images.large.url,
        itineraryId: req.params.itineraryId,
        ta_location_id: req.body.location_id,
      })
    );

    // .send(await itinerary.createEvent(req.body));
  } catch (err) {
    next(err);
  }
});

// DELETE Itinerary Event (also removes from ItineraryEvent Table)
router.delete('/:itineraryId/deleteEvent/:eventId', async (req, res, next) => {
  try {
    const event = await Event.findByPk(req.params.eventId);
    const itinerary = await Itinerary.findByPk(req.params.itineraryId);
    await itinerary.removeEvent(event.id);
    await event.destroy();
    res.status(200).send(event);
  } catch (err) {
    next(err);
  }
});

// test event
// {
//   "eventType": "Restaurant",
//   "ta_location_id": "3172098",
//   "name": "Butcher Bar",
//   "longitude": "-73.916306",
//   "latitude": "40.76445"
// }
