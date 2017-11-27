var Sequelize = require('sequelize');

module.exports = {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    houseId: {
        type: Sequelize.STRING,
        allowNull: true
    },
    price: {
        type: Sequelize.STRING,
        allowNull: true
    },
    scoreAll: {
        type: Sequelize.STRING,
        allowNull: true
    },
    score1: {
        type: Sequelize.STRING,
        allowNull: true
    },
    score2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    score3: {
        type: Sequelize.STRING,
        allowNull: true
    },
    score4: {
        type: Sequelize.STRING,
        allowNull: true
    },
    score5: {
        type: Sequelize.STRING,
        allowNull: true
    },
    
}