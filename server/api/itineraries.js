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
    const itineraries = await Itinerary.findByPk(itineraryId, {
      include: Event,
    });
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
        imageUrl: req.body.photo.images.large.url,
        itineraryId: req.params.itineraryId,
        ta_location_id: req.body.location_id,
      })
    );
  } catch (err) {
    next(err);
  }
});

// // PUT Itinery Event
// // edit order of events, day 0 is unassigned // not functional yet
// router.put('/:itineraryId/editEvent', async (req, res, next) => {
//     try {
//       const allEvents = req.body;
//       await Promise.all(
//         allEvents.map(async (event) => {
//           await ItineraryEvent.findOne({
//             where: {
//               itineraryId: event.itineraryId,
//               eventId: event.eventId,
//             },
//           }).then(async (foundEvent) => {
//             const singleEvent = allEvents.find((event) => {
//               return (
//                 event.eventId === foundEvent.eventId &&
//                 event.itineraryId === foundEvent.itineraryId
//               );
//             });
//             await foundEvent.update(singleEvent);
//           });
//         })
//       );
//       next();
//     } catch (error) {
//       next(error);
//     }
//   },
//   getItinerarybyId
// );

// DELETE Itinerary Event (also removes from ItineraryEvent Table)
router.delete('/:itineraryId/deleteEvent/:eventId', async (req, res, next) => {
  try {
    const itinerary = await Itinerary.findByPk(req.params.itineraryId);
    const deletedEvent = await Event.findOne({
      where: {
        itineraryId: req.params.itineraryId,
        id: req.params.eventId,
      },
    });
    const deletedEventPosition = await ItineraryEvents.findOne({
      where: {
        itineraryId: req.params.itineraryId,
        eventId: deletedEvent.id,
      },
    });
    await itinerary.removeEvent(req.params.eventId);
    await Event.destroy({
      where: {
        itineraryId: req.params.itineraryId,
        id: req.params.eventId,
      },
    });
    const events = await ItineraryEvents.findAll({
      where: {
        itineraryId: req.params.itineraryId,
      },
    });
    events.forEach(async (event) => {
      if (
        event.position !== null &&
        event.position > deletedEventPosition.position
      ) {
        await event.update({ position: event.position - 1 });
      }
    });

    res.send(deletedEvent);
  } catch (error) {
    next(error);
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
