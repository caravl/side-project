const api = require('express').Router();
const User, Activity, Destination, Suggestion = require('../../../db/models');

module.exports = api;

api.param('id', (req, res, next, id) => {
  Activity.findById(id)
  .then(function (activity) {
    if (!activity) throw error;
    req.requestedActivity = activity;
    next();
  })
  .catch(next);
})

api.get('/', (req, res, next) => {
  Activity.findAll({})
    .then(activity => res.json(activity))
    .catch(next)
});

api.post('/', (req, res, next) => {
  Activity.create(req.body)
    .then(activity => res.status(201).json(activity))
    .catch(next)
});

api.get('/:activityId', (req, res, next) => {
  Activity.findById(req.requestedActivity)
  .then(activity => res.json(activity))
  .catch(next)
});

api.put('/:activityId', (req, res, next) => {
  Activity.findById(req.requestedActivity)
  .then(activity => activity.update(req.body))
  .catch(next)
});

api.delete('/:activityId', (req, res, next) => {
  Activity.findById(req.requestedActivity)
  .then(activity => {
    return activity.destroy();
  })
  .catch(next)
});

// throw createError(415, 'there's something wrong')
// check all variables and req.requested users
