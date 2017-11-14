const api = require('express').Router();
const Destination = require('../../db/models');

api.param('destinationId', (req, res, next, id) => {
  Destination.findById(id)
  .then((destination) => {
    if (!destination) {
      var error = new Error('This destination is not found!')
      error.status = 404
      throw error
    }
    req.requestedDestination = destination;
    next();
  })
  .catch(next);
});
// /api/destinations?country=USA
// req.query = { country: "USA" }
api.get('/', (req, res, next) => {
  var queryCountry = req.query.country
  var query = queryCountry ? { where : { country: queryCountry }} : {}
    Destination.findAll(query)
    .then(destination => res.json(destination))
    .catch(next)


});

api.post('/', (req, res, next) => {
  Destination.create(req.body)
  .then(destination => res.status(201).json(destination))
  .catch(next)
});

api.get('/:destinationId', (req, res, next) => {
  res.json(req.requestedDestination)
});

api.put('/:destinationId', (req, res, next) => {
  req.requestedDestination.update(req.body)
  .then(destination => res.json(destination))
  .catch(next)
});

api.delete('/:destinationId', (req, res, next) => {
  req.requestedDestination.destroy()
  .then(() => res.status(204).end()) // res.sendStatus(200)
  .catch(next)
});

module.exports = api;
