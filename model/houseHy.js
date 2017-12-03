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
    scoreDetails: {
        type: Sequelize.STRING,
        allowNull: true
    },
    
}