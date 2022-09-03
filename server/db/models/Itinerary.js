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
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  endDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  days: {
    type: Sequelize.INTEGER,
  },
});

Itinerary.beforeValidate(
  (itin) =>
    (itin.days = Math.ceil(
      (Date.parse(itin.endDate) - Date.parse(itin.startDate)) /
        (1000 * 60 * 60 * 24)
    ))
);

module.exports = Itinerary;
