const Sequelize = require('sequelize');
const db = require('../db');

const Event = db.define('event', {
  eventType: {
    type: Sequelize.STRING,
  },
});

module.exports = Event;
