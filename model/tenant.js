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
    authName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    authPhone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    authAvatar: {
        type: Sequelize.STRING,
        allowNull: true
    },
    
}