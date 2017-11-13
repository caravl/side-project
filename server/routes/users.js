const api = require('express').Router();
const User, Activity, Destination, Suggestion = require('../../../db/models');

module.exports = api;

api.param('id', (req, res, next, id) => {
  User.findById(id)
  .then(function (user) {
    if (!user) throw new Error('no user found');
    req.requesteduser = user;
    next();
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
  User.findById(req.requesteduser)
  .then(user => user.update(req.body) )
  // send response (updated user and 200 status code)
  .catch(next)
});

api.delete('/:id', (req, res, next) => {
  User.findById(req.params.requesteduser)
  .then(foundUser => {
    return foundUser.destroy();
  })
  .catch(next)
});

// throw createError(415, 'there's something wrong')
// check all variables and req.requested users
