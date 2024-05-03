const sequelize = require('../src/db/config')
const { DataTypes } = require('sequelize')


const Card = sequelize.define('Card', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mojo:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stamina:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imgUrl:{
        type: DataTypes.STRING,
        
    }
})

//export model
module.exports = Card