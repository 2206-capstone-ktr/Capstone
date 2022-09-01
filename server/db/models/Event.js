const Sequelize = require('sequelize');
const db = require('../db');

const Event = db.define('event', {
  ta_location_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  longitude: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
  },
  rating: {
    type: Sequelize.STRING,
  },
  price_level: {
    type: Sequelize.STRING,
  },
  website: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
  },
  phone: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
});

module.exports = Event;
