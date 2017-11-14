const db = require('../db');
const Sequelize = require('sequelize');

const Suggestion = db.define('suggestion', {
  rating: {
    type: Sequelize.ENUM, // (value1,value2)
    values: ['1', '2', '3', '4', '5']
  },
  comment: {
    type: Sequelize.TEXT
  }
});

module.exports = Suggestion;
