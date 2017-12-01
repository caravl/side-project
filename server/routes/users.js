const api = require('express').Router();
const User = require('../../db/models');

api.param('id', (req, res, next, id) => {
  User.findById(id)
  .then((user) => {
    if (!user) {
      var error = new Error('This user is not found!')
      error.status = 404
      throw error
    }
    req.requestedUser = user
    next();
  })
  .catch(next);
})

api.get('/', (req, res, next) => {
  User.findAll()
  .then(users => res.json(users))
  .catch(next)
});

api.post('/', (req, res, next) => {
  User.create(req.body)
  .then(user => res.status(201).json(user))
  .catch(next)
});

api.get('/:id', (req, res, next) => {
  res.json(req.requestedUser)
});

api.put('/:id', (req, res, next) => {
  req.requestedUser.update(req.body)
  .then(user => res.json(user))
  .catch(next)
});

api.delete('/:id', (req, res, next) => {
  req.requestedUser.destroy()
  .then(() => res.status(204).end())
  .catch(next)
});

module.exports = api;
