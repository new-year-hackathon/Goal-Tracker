const db = require('./database')
const User = require('./user')
const Goal = require('./goal')
const Pet = require('./pet')

Goal.belongsTo(User)
User.hasMany(Goal)

Pet.belongsTo(User)
User.hasMany(Pet)

module.exports = {
  db,
  User,
  Goal,
  Pet
}
