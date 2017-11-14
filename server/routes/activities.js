const api = require('express').Router();
const Activity = require('../../db/models');

api.param('activityId', (req, res, next, id) => {
  Activity.findById(id)
  .then((activity) => {
    if (!activity) {
      var error = new Error('This activity is not found!')
      error.status = 404
      throw error
    }
    req.requestedActivity = activity
    next();
  })
  .catch(next);
})

api.get('/', (req, res, next) => {
  Activity.findAll()
    .then(activity => res.json(activity))
    .catch(next)
});

api.post('/', (req, res, next) => {
  Activity.create(req.body)
    .then(activity => res.status(201).json(activity))
    .catch(next)
});

api.get('/:activityId', (req, res, next) => {
  res.json(req.requestedActivity)
});

api.put('/:activityId', (req, res, next) => {
  req.requestedActivity.update(req.body)
  .then(activity => res.json(activity))
  .catch(next)
});

api.delete('/:activityId', (req, res, next) => {
  req.requestedActivity.destroy()
  .then(() => res.status(204).end())
  .catch(next)
});

module.exports = api;
