const User = require('./user');
const Destination = require('./destination');
const Activity = require('./activity');

User.belongsToMany(Destination);
Destination.belongsToMany(User);
Destination.hasMany(Activity);
Activity.belongsTo(Destination);
// Activity.belongsTo(User);
//sequelize syntax for belongsToMany
// separate activity to suggestions and activity
module.exports = {
  User: User,
  Destination: Destination,
  Activity: Activity
}
