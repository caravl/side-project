const User = require('./user')
const Destination = require('./destination')
const Activity = require('./activity')
const Suggestion = require('./suggestion')

User.belongsToMany(Destination, {through: 'travels'})
Destination.belongsToMany(User, {through: 'travels'}) // creates a new table in db named 'travels', with columns userId and destinationId, many to many relationship

Destination.hasMany(Activity, {as: 'locale'}) // places localeId on activity rows, optional
Activity.belongsTo(Destination, {foreignKey: 'locale'}); // places destinationId on activity row

Suggestion.belongsTo(User, {as: 'reviewer'}) // places userId on suggestion row
Suggestion.belongsTo(Activity) // places activityId on suggestion row
User.hasMany(Suggestion, {foreignKey: 'reviewer'}) // places reviewerId on suggestion rows

module.exports = {
  User: User,
  Destination: Destination,
  Activity: Activity,
  Suggestion: Suggestion
}

// should `through` be similarly named?
// alias correct?
