const Sequelize = require('sequelize');
const db = require('../db');

const UserTable = db.define('userTable', {
  editAccess: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = UserTable;
