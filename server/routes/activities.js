const api = require('express').Router();
const { User, Activity, Destination } = require('.../db/models');

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

api.get('/activityId', (req, res, next) => {
  // Activity.findById(req.params.activityId)
  req.requestedActivity.reload(Activity.options.scopes.populated())
  .then(requestedActivity => res.json(requestedActivity))
  .catch(next)
});

api.put('/:activityId', (req, res, next) => {
  // Activity.findById(req.params.activityId)
  req.requestedActivity.update(req.body)
  .then(activity => res.json(activity))
  .catch(next)
});

api.delete('/:activityId', (req, res, next) => {
  Activity.destroy( { where: { id: req.params.activityId } } )
  .then( () => res.status(204).end() )
  .catch(next)
});
