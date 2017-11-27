var Sequelize = require('sequelize');

module.exports = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
    },
    houseId: {
        type: Sequelize.STRING,
        allowNull: true
    },
    tenantId: {
        type: Sequelize.STRING,
        allowNull: true
    },
    content: {
        type: Sequelize.STRING,
        allowNull: true
    },
    checkInTime: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    reply: {
        type: Sequelize.STRING,
        allowNull: true,
    }
}