const api = require('express').Router();
const { User, Activity, Destination } = require('.../db/models');

module.exports = api;

api.get('/', (req, res, next) => {
  Destination.findAll( { where: { country_name: x } } )
    .then(destination => res.json(destination))
    .catch(next)
});

api.get('/destinationId', (req, res, next) => {
  Destination.findById(req.params.destinationId)
    .then(destination => res.json(destination))
    .catch(next)
});

api.post('/', (req, res, next) => {
  Destination.create(req.body)
    .then(destination => res.json(destination))
    .catch(next)
});

api.put('/:destinationId', (req, res, next) => {
  Destination.findById(req.params.destinationId)
    .then(destination => destination.update(req.body))
    .catch(next)
});

api.delete('/:destinationId', (req, res, next) => {
  Destination.destroy( { where: { id: req.params.destinationId } } )
    .then( () => res.status(204).end() )
    .catch(next)
});
