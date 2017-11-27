var BaseModel = require('./base');
var Sequelize = require('sequelize');

module.exports = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        defaultValue: BaseModel.uid()
    },
    mail: {
        type: Sequelize.STRING,
        allowNull: false
    },
    passwd: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    auth: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'member',        
    },
    department: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '未分配',
    }
}