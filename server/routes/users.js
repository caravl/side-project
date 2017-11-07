const api = require('express').Router();
const { User  } = require('../../db/models/user');
const { Destination  } = require('../../db/models/destination');
const { Activity  } = require('../../db/models/activity');

module.exports = api;

api.param('id', (req, res, next, id) => {
  User.findById(id)
  .then(function (user) {
    if (!user) throw new Error('no user found');
    req.requesteduser = user;
    next();
    // return null;
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

api.get('/:id', (req, res, next) => {
  res.json(req.requesteduser)
});


api.put('/:id', (req, res, next) => {
  // use api.params
  User.findById(req.params.userId)
  .then(user => user.update(req.body) )
  // send response (updated user and 200 status code)
  .catch(next)
});

api.delete('/:id', (req, res, next) => {
  // use api.params
  User.findById(req.params.userId)
  .then(foundUser => {
    return foundUser.destroy();
  })
  .catch(next)
});
