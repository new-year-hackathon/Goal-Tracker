const Sequelize = require('sequelize');
const db = require('./database');

const Pet = db.define('pet', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
    },
    imageUrl: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: 'https://bit.ly/3o7TCXu',
    },
})

module.exports = Pet;