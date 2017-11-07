const api = require('express').Router();
const { User, Activity, Destination } = require('.../db/models');

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
  req.requestedUser.reload(User.options.scopes.populated())
  .then(requestedUser => res.json(requestedUser) )
  .catch(next)
});


api.put('/:userId', (req, res, next) => {
  req.requestedUser.update(req.body)
  .then(user => res.json(user) )
  .catch(next)
});

api.delete('/:userId', (req, res, next) => {
  req.requestedUser.destroy()
  .then( () => res.status(204).end() )
  .catch(next)
});
