const api = require('express').Router();
const { User  } = require('../../db/models/user');
const { Destination  } = require('../../db/models/destination');
const { Activity  } = require('../../db/models/activity');

module.exports = api;

api.param('id', (req, res, next, id) => {
  Destination.findById(id)
  .then(function (destination) {
    if (!destination) throw error;
    req.requestedDestination = destination;
    next();
    return null;
  })
  .catch(next);
});

api.get('/', (req, res, next) => {
  Destination.findAll( { where: { country_name: x } } ) // how should this be written?
  .then(destination => res.json(destination))
  .catch(next)
});

api.post('/', (req, res, next) => {
  Destination.create(req.body)
  .then(destination => res.status(201).json(destination))
  .catch(next)
});

api.get('/:destinationId', (req, res, next) => {
  Destination.findById(req.params.destinationId)
  .then(destination => res.json(destination))
  .catch(next)
});

api.put('/:destinationId', (req, res, next) => {
  Destination.findById(req.params.destinationId)
  .then(destination => destination.update(req.body))
  .catch(next)
});

api.delete('/:destinationId', (req, res, next) => {
  Destination.findById(req.params.destinationId)
  .then(destination => {
    return destination.destroy();
  })
  .catch(next)
});
