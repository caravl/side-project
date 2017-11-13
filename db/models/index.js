const User = require('./user');
const Destination = require('./destination');
const Activity = require('./activity');

User.belongsToMany(Destination);
Destination.belongsToMany(User);
Destination.hasMany(Activity);
Activity.belongsTo(Destination);
Suggestion.belongsTo(User);
User.hasMany(Suggestion);

module.exports = {
  User: User,
  Destination: Destination,
  Activity: Activity
}


// sequelize syntax for belongsToMany - as some alias (many to many relationship)
