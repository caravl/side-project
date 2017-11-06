const db = require('../db');
const Sequelize = require('sequelize');

const Destination = db.define('destination', {
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Destination;
