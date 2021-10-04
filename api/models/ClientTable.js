const Sequelize = require('sequelize');
const connection = require('../database/connectiondb');


const clients = connection.define('clients', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    birthdate: {
        type:Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.ENUM ('masculino', 'feminino', 'outro', 'prefiro não dizer'),
        allowNull:false
    },
    cities:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
            model: require('./CityTable'),
            key: 'id'
        }
    }
})


module.exports = clients
