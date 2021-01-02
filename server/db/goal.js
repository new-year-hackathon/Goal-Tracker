const Sequelize = require('sequelize');
const db = require('./database');

const Goal = db.define('goal', {
    goal: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
    },
})

module.exports = Goal;