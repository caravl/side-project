var Promise = require('bluebird');

var {
  User,
  Destination,
  Activity,
  Suggestion
} = require('../db/models');

var data = {
  user: [
    {
      name: 'Kate',
      email: 'kate@io.com'
    },
    {
      name: 'Tom',
      email: 'tom@pugs.com'
    },
    {
      name: 'Chelsea',
      email: 'chels@gmail.com'
    }
  ],
  destination: [
    {
      city: 'Machu Pichu',
      country: 'Peru'
    },
    {
      city: 'Odessa',
      country: 'Ukraine'
    },
    {
      city: 'Istanbul',
      country: 'Turkey'
    },
    {
      city: 'Edinburgh',
      country: 'United Kingdom'
    },
    {
      city: 'Mora',
      country: 'Sweden'
    },
    {
      city: 'Budapest',
      country: 'Hungary'
    },
    {
      city: 'Cape Town',
      country: 'South Africa'
    }
  ],
  activity: [],
  suggestion: []
}
