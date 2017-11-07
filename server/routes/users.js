const api = require('express').Router();
const { User  } = require('../../db/models/user');
const { Destination  } = require('../../db/models/destination');
const { Activity  } = require('../../db/models/activity');

module.exports = api;

api.param('id', (req, res, next, id) => {
  User.findById(id)
  .then(function (user) {
    if (!user) throw error;
    req.requesteduser = user;
    next();
    return null;
  })
  .catch(next);
})

api.get('/', (req, res, next) => {
  User.findAll({})
  .then(users => res.json(users))
  .catch(next)
});

api.post('/', (req, res, next) => {
  User.create(req.body)
  .then(user => res.status(201).json(user))
  .catch(next)
});

api.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
  .then(user => res.json(user))
  .catch(next)
});


api.put('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
  .then(user => user.update(req.body) )
  .catch(next)
});

api.delete('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
  .then(foundUser => {
    return foundUser.destroy();
  })
  .catch(next)
});
