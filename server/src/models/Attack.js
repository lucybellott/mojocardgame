const sequelize = require('../src/db/config')
const { DataTypes } = require('sequelize')


const Attack = sequelize.define('Attack', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mojoCost:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    staminaCost:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

//export model
module.exports = Attack