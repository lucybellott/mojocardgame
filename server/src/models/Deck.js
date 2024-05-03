const sequelize = require('../src/db/config')
const { DataTypes } = require('sequelize')


const Deck = sequelize.define('Deck', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    xp:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

//export model
module.exports = Deck