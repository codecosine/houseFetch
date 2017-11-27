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
    avatar: {
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
    authZima: {
        type: Sequelize.STRING,
        allowNull: true
    },
    sex: {
        type: Sequelize.STRING,
        allowNull: true
    },
    age: {
        type: Sequelize.STRING,
        allowNull: true
    },
    constellation: {
        type: Sequelize.STRING,
        allowNull: true
    },
    zodiac: {
        type: Sequelize.STRING,
        allowNull: true
    },
    home: {
        type: Sequelize.STRING,
        allowNull: true
    },
    bloodType: {
        type: Sequelize.STRING,
        allowNull: true
    },
    job: {
        type: Sequelize.STRING,
        allowNull: true
    },
    education: {
        type: Sequelize.STRING,
        allowNull: true
    },
    
}