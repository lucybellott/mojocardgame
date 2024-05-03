// create your User model here
const sequelize = require('../src/db/config')
const { DataTypes } = require('sequelize')


const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

//export model
module.exports = User