const User = require('./user');
const Destination = require('./destination');
const Activity = require('./activity');

User.hasMany(Destination);
Destination.belongsTo(User);
Destination.hasMany(Activity);
Activity.belongsTo(Destination);
Activity.belongsTo(User);

module.exports = {
  User: User,
  Destination: Destination,
  Activity: Activity
}
