'use strict';

const api = require('express').Router();
const db = require('../db');
const { User, Activity, Destination } = require('../db/models');

module.exports = api;

api.use('/users', require('./routes/users'));
api.use('/destinations', require('./routes/destinations'));

api.use( (req, res, next) => {
  res.status(404).send(`Something's wrong!`);
});
