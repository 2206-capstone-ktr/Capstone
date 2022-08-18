//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Itinerary = require('./models/Itinerary');
const UserTable = require('./models/UserTable');
const Event = require('./models/Event');
const ItineraryEvent = require('./models/ItineraryEvent');

//associations could go here!
User.belongsToMany(Itinerary, { through: UserTable });
Itinerary.belongsToMany(User, { through: UserTable });

Itinerary.belongsToMany(Event, { through: ItineraryEvent });
Event.belongsToMany(Itinerary, { through: ItineraryEvent });

module.exports = {
  db,
  models: {
    User,
    Itinerary,
    UserTable,
    Event,
    ItineraryEvent,
  },
};
