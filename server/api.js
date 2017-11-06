'use strict';

const api = require('express').Router();
const db = require('../db');
const { User, Activity, Destination } = require('../db/models');

module.exports = api;

api.get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

// api.use('/users', require('./users'));
// api.use('/destinations', require('./destinations'));

api.use( (req, res, next) => {
  res.status(404).send(`Something's wrong!`);
});