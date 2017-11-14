const api = require('express').Router();
const Suggestion = require('../../db/models');

api.param('suggestionId', (req, res, next, id) => {
  Suggestion.findById(id)
  .then((suggestion) => {
    if (!suggestion) {
      var error = new Error('This suggestion is not found!')
      error.status = 404
      throw error
    }
    req.requestedSuggestion = suggestion;
    next();
  })
  .catch(next);
})

api.get('/', (req, res, next) => {
  Suggestion.findAll()
    .then(suggestion => res.json(suggestion))
    .catch(next)
});

api.post('/', (req, res, next) => {
  Suggestion.create(req.body)
    .then(suggestion => res.status(201).json(suggestion))
    .catch(next)
});

api.get('/:suggestionId', (req, res, next) => {
  res.json(req.requestedSuggestion)
});

api.put('/:suggestionId', (req, res, next) => {
  req.requestedSuggestion.update(req.body)
  .then(suggestion => res.json(suggestion))
  .catch(next)
});

api.delete('/:suggestionId', (req, res, next) => {
  req.requestedSuggestion.destroy()
  .then(() => res.status(204).end())
  .catch(next)
});

module.exports = api;
