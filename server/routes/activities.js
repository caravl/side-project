const api = require('express').Router();
const { User, Activity, Destination } = require('.../db/models');

module.exports = api;

api.get('/', (req, res, next) => {
  Activity.findAll()
    .then(activity => res.json(activity))
    .catch(next)
});

api.get('/activityId', (req, res, next) => {
  Activity.findById(req.params.activityId)
    .then(activity => res.json(activity))
    .catch(next)
});

api.post('/', (req, res, next) => {
  Activity.create(req.body)
    .then(activity => res.json(activity))
    .catch(next)
});

api.put('/:activityId', (req, res, next) => {
  Activity.findById(req.params.activityId)
    .then(activity => activity.update(req.body))
    .catch(next)
});

api.delete('/:activityId', (req, res, next) => {
  Activity.destroy( { where: { id: req.params.activityId } } )
    .then( () => res.status(204).end() )
    .catch(next)
});
