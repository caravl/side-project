const api = require('express').Router();
const { User  } = require('../../db/models/user');
const { Destination  } = require('../../db/models/destination');
const { Activity  } = require('../../db/models/activity');

module.exports = api;

api.param('id', (req, res, next, id) => {
  Activity.findById(id)
  .then(function (activity) {
    if (!activity) throw error;
    req.requestedActivity = activity;
    next();
    return null;
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
  Activity.findById(req.params.activityId)
  // req.requestedActivity.reload(Activity.options.scopes.populated())
  .then(activity => res.json(activity))
  .catch(next)
});

api.put('/:activityId', (req, res, next) => {
  Activity.findById(req.params.activityId)
  .then(activity => activity.update(req.body))
  .catch(next)
});

api.delete('/:activityId', (req, res, next) => {
  Activity.findById(req.params.activityId)
  .then(activity => {
    return activity.destroy();
  })
  .catch(next)
});
