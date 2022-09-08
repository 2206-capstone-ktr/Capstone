'use strict';

const {
  db,
  models: { User, Itinerary, UserTable, Event },
} = require('../server/db');
const ItineraryEvent = require('../server/db/models/ItineraryEvent');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({
      email: 'cody@gmail.com',
      password: '123',
      firstName: 'Cody',
      lastName: 'Coder',
    }),
    User.create({
      email: 'murphy@gmail.com',
      password: '123',
      firstName: 'Murphy',
      lastName: 'Coder',
    }),
    User.create({
      email: 'admin@gmail.com',
      password: '123',
      firstName: 'Admin',
      lastName: 'Administrator',
      isAdmin: true,
    }),
  ]);

  const itineraries = await Promise.all([
    Itinerary.create({
      name: 'Vacation',
      city: 'Seattle',
      description: 'Spending the week with our Seattle family',
      startDate: '2022-09-29',
      endDate: '2022-10-02',
    }),
    Itinerary.create({
      name: 'Island Hopping',
      city: 'Honolulu',
      description: `Island hopping between Hawai'i, O'Ahu, Maui, and Kauai`,
      startDate: '2022-11-06',
      endDate: '2022-11-13',
    }),
    Itinerary.create({
      name: 'Family Trip',
      city: 'Chicago',
      description: 'Spending the week with our Chicago family',
      startDate: '2022-10-19',
      endDate: '2022-10-23',
    }),
    Itinerary.create({
      name: 'New Years in NYC',
      city: 'New York City',
      startDate: '2022-12-30',
      endDate: '2023-1-01',
    }),
  ]);

  const userTables = await Promise.all([
    UserTable.create({
      editAccess: true,
      userId: 1,
      itineraryId: 1,
    }),
    UserTable.create({
      editAccess: true,
      userId: 1,
      itineraryId: 2,
    }),
    UserTable.create({
      editAccess: true,
      userId: 2,
      itineraryId: 3,
    }),
    UserTable.create({
      editAccess: true,
      userId: 1,
      itineraryId: 4,
    }),
    UserTable.create({
      editAccess: true,
      userId: 2,
      itineraryId: 4,
    }),
  ]);
  const events = await Promise.all([
    Event.create({
      ta_location_id: 1,
      eventType: 'Restaurant',
      name: 'Wild Mountain Cafe',
      latitude: '47.69083',
      longitude: '-122.37454',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-s/0b/a8/05/a6/wild-mountain-cafe.jpg',
      rating: '4.5',
      price_level: '$$ - $$$',
      website: 'http://www.thewildmountaincafe.com',
      phone: '+1 206-297-9453',
      address: '1408 NW 85th St, Seattle, WA 98117-4236',
    }),
    Event.create({
      ta_location_id: 2,
      eventType: 'Restaurant',
      name: 'The Thirsty Fish',
      latitude: '47.695404',
      longitude: '-122.37524',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-s/0e/47/a4/11/garden-scramble.jpg',
      rating: '4.0',
      price_level: '$ - $$',
      website: 'http://www.facebook.com/pages/The-Thirsty-Fish/131688173545690',
      phone: '+1 206-782-1999',
      address: '9041 Holman Rd NW, Seattle, WA 98117-3426',
    }),
    Event.create({
      ta_location_id: 3,
      eventType: 'Restaurant',
      name: 'Thai Siam',
      latitude: '47.688652',
      longitude: '-122.37694',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-s/0e/91/fc/69/photo0jpg.jpg',
      rating: '4.5',
      price_level: '$$ - $$$',
      website: 'http://www.thaisiamrestaurant.com/',
      phone: '+1 206-783-3668',
      address: '8305 15th Ave NW, Seattle, WA 98117-3604',
    }),
    Event.create({
      ta_location_id: 4,
      eventType: 'Attraction',
      name: "Ballard Farmer's Market",
      latitude: '47.667007',
      longitude: '-122.38397',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-s/01/5d/69/0e/ballard-farmer-s-market.jpg',
      rating: '4.5',
      price_level: '',
      website: 'http://www.sfmamarkets.com/visit-ballard-farmers-market/',
      phone: '+1 206-781-6776',
      address: 'Ballard Ave Between 20th & 22nd, Seattle, WA',
    }),
  ]);

  const itineraryEvents = await Promise.all([
    ItineraryEvent.create({ position: 0, day: 0, eventId: 1, itineraryId: 1 }),
    ItineraryEvent.create({ position: 1, day: 1, eventId: 2, itineraryId: 1 }),
    ItineraryEvent.create({ position: 5, day: 1, eventId: 3, itineraryId: 1 }),
    ItineraryEvent.create({ position: 8, day: 2, eventId: 4, itineraryId: 1 }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
