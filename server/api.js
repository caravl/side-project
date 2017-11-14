'use strict';

const api = require('express').Router();
const db = require('../db');
const models = require('../db/models');

api.use('/users', require('./routes/users'));
api.use('/destinations', require('./routes/destinations'));
api.use('/activities', require('./routes/activities'));
api.use('/suggestions', require('./routes/suggestions'));

// error handling middleware
api.use( (err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).send(err.message || `Internal Server Error`);
});

module.exports = api;
