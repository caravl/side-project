'use strict';

const api = require('express').Router();
const db = require('../db');
const models = require('../db/models');

module.exports = api;

api.use('/users', require('./routes/users'));
api.use('/destinations', require('./routes/destinations'));
api.use('/activities', require('./routes/activities'));
api.use('/suggestions', require('./routes/suggestions'));

api.use( (req, res, next) => {
  res.status(404).send(`Something's wrong!`);
});

// add error handling middleware ????
