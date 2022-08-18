const Sequelize = require('sequelize');
const db = require('../db');

const Itinerary = db.define('itinerary', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
  startDate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endDate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Itinerary;
