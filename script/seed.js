'use strict'

const {
  db,
  models: { User, Itinerary, UserTable },
} = require('../server/db');

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
      city: 'Los Angeles',
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
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
