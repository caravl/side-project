const api = require('express').Router();
const { User, Activity, Destination } = require('.../db/models');

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
  Destination.findAll( { where: { country_name: x } } )
  .then(destination => res.json(destination))
  .catch(next)
});

api.post('/', (req, res, next) => {
  Destination.create(req.body)
  .then(destination => res.status(201).json(destination))
  .catch(next)
});

api.get('/:destinationId', (req, res, next) => {
  req.requestedDestination.reload(Destination.options.scopes.populated())
  .then(requestedDestination => res.json(requestedDestination))
  .catch(next)
});

api.put('/:destinationId', (req, res, next) => {
  req.requestedDestination.update(req.body)
  .then(destination => res.json(destination))
  .catch(next)
});

api.delete('/:destinationId', (req, res, next) => {
  // req.requestedDestination.destroy()
  Destination.destroy( { where: { id: req.params.destinationId } } )
  .then( () => res.status(204).end() )
  .catch(next)
});
