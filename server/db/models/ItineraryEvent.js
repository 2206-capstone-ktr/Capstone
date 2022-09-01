const Sequelize = require('sequelize');
const db = require('../db');

const ItineraryEvent = db.define('itineraryEvent', {
  day: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  position: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = ItineraryEvent;
