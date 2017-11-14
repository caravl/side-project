const db = require('../db');
const Sequelize = require('sequelize');

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.ENUM,
    values: ['food', 'entertainment', 'culture', 'other']
  }
});

module.exports = Activity;
