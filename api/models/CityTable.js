const Sequelize = require('sequelize');
const connection  = require ('../database/connectiondb')

const city = connection.define('city', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    name: {
        type: Sequelize.STRING,
        allowNull:false
    },
    state: {
        type: Sequelize.STRING,
        allowNull:false

    }

})

module.exports = city
