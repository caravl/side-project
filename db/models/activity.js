const db = require('../db');
const Sequelize = require('sequelize');

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.ENUM,
    values: ['food', 'entertainment', 'culture', 'other']
  },
  rating: {
    type: Sequelize.ENUM,
    values: ['1', '2', '3', '4', '5']
  },
  comment: {
    type: Sequelize.TEXT
  }
});

module.exports = Activity;
