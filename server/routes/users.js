const api = require('express').Router();
const { User, Activity, Destination } = require('.../db/models');

module.exports = api;

api.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next)
});

api.get('/userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => res.json(user))
    .catch(next)
});

api.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(next)
});

api.put('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => user.update(req.body))
    .catch(next)
});

api.delete('/:userId', (req, res, next) => {
  User.destroy( { where: { id: req.params.userId } } )
    .then( () => res.status(204).end() )
    .catch(next)
});
