var Sequelize = require('sequelize');

module.exports = {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: true
    },
    registerTime: {
        type: Sequelize.STRING,
        allowNull: true
    },
    age: {
        type: Sequelize.STRING,
        allowNull: true
    },
    avatar:{
        type: Sequelize.STRING,
        allowNull: true
    },
    authInfo: {
        type: Sequelize.STRING,
        allowNull: true
    },

    
}