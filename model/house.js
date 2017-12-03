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
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true
    },
    labels: {
        type: Sequelize.STRING,
        allowNull: true
    },
    introduce: {
        type: Sequelize.STRING,
        allowNull: true
    },
    info1: {
        type: Sequelize.STRING,
        allowNull: true
    },
    info2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    info3: {
        type: Sequelize.STRING,
        allowNull: true
    },
    info4: {
        type: Sequelize.STRING,
        allowNull: true
    },
    info5: {
        type: Sequelize.STRING,
        allowNull: true
    },
    info6: {
        type: Sequelize.STRING,
        allowNull: true
    },
}