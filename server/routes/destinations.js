const api = require('express').Router();
const User, Activity, Destination, Suggestion = require('../../../db/models');

module.exports = api;

api.param('id', (req, res, next, id) => {
  Destination.findById(id)
  .then(function (destination) {
    if (!destination) throw error;
    req.requestedDestination = destination;
    next();
  })
  .catch(next);
});
// /api/destinations?country=USA
api.get('/', (req, res, next) => {
  var queryCountry = req.query.country //
  // req.query {'country': 'USA' }
  Destination.findAll( { where: { 'country': queryCountry } } )
  .then(destination => res.json(destination))
  .catch(next)
});

api.post('/', (req, res, next) => {
  Destination.create(req.body)
  .then(destination => res.status(201).json(destination))
  .catch(next)
});

api.get('/:destinationId', (req, res, next) => {
  Destination.findById(req.requestedDestination)
  .then(destination => res.json(destination))
  .catch(next)
});

api.put('/:destinationId', (req, res, next) => {
  Destination.findById(req.requestedDestination)
  .then(destination => destination.update(req.body))
  .catch(next)
});

api.delete('/:destinationId', (req, res, next) => {
  Destination.findById(req.requestedDestination)
  .then(destination => {
    return destination.destroy();
  })
  .catch(next)
});


// throw createError(415, 'there's something wrong')
// check all variables and req.requested users
