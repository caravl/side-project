const api = require('express').Router();
const User, Activity, Destination, Suggestion = require('../../../db/models');

module.exports = api;

api.param('id', (req, res, next, id) => {
  Suggestion.findById(id)
  .then(function (suggestion) {
    if (!suggestion) throw error;
    req.requestedSuggestion = suggestion;
    next();
  })
  .catch(next);
})

api.get('/', (req, res, next) => {
  Suggestion.findAll({})
    .then(suggestion => res.json(suggestion))
    .catch(next)
});

api.post('/', (req, res, next) => {
  Suggestion.create(req.body)
    .then(suggestion => res.status(201).json(suggestion))
    .catch(next)
});

api.get('/:suggestionId', (req, res, next) => {
  Suggestion.findById(req.requestedSuggestion)
  .then(suggestion => res.json(suggestion))
  .catch(next)
});

api.put('/:suggestionId', (req, res, next) => {
  Suggestion.findById(req.requestedSuggestion)
  .then(suggestion => suggestion.update(req.body))
  .catch(next)
});

api.delete('/:suggestionId', (req, res, next) => {
  Suggestion.findById(req.requestedSuggestion)
  .then(suggestion => {
    return suggestion.destroy();
  })
  .catch(next)
});

// throw createError(415, 'there's something wrong')
// check all variables and req.requested users
