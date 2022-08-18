const Sequelize = require('sequelize');
const db = require('../db');

const ItineraryEvent = db.define('itineraryEvent', {
  day: {
    type: Sequelize.DATE,
  },
  position: {
    type: Sequelize.INTEGER,
  },
});

module.exports = ItineraryEvent;
