var Sequelize = require('sequelize');

module.exports = {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    landlordId: {
        type: Sequelize.STRING,
        allowNull: true
    },
    houseAmount: {
        type: Sequelize.STRING,
        allowNull: true
    },
    reviewAmount: {
        type: Sequelize.STRING,
        allowNull: true
    },
    orderAmount: {
        type: Sequelize.STRING,
        allowNull: true
    },
    onlineReply: {
        type: Sequelize.STRING,
        allowNull: true
    },
    perConfirm: {
        type: Sequelize.STRING,
        allowNull: true
    },
    orderSuccess: {
        type: Sequelize.STRING,
        allowNull: true
    },
    
}