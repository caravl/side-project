const db = require('../db');
const Sequelize = require('sequelize');

const Suggestion = db.define('suggestion', {
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rating: {
    type: Sequelize.ENUM,
    values: ['1', '2', '3', '4', '5']
  },
  comment: {
    type: Sequelize.TEXT
  }
});

module.exports = Suggestion;
