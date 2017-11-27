
var Sequelize = require('sequelize');
var config = require('../config');
var userSchema = require('./user')
var historySchema = require('./history')
var materialSchema = require('./material')
var messageSchema = require('./message')
var msgauthSchema = require('./msgauth')

var sequelize = new Sequelize(
    config.db.name,
    config.db.user,
    config.db.passwd,
    {
        'dialect': 'mysql',
        'host': config.db.host,
        'port': config.db.port
    }
);

var User = sequelize.define('user', userSchema);
var History = sequelize.define('history', historySchema);
var Material = sequelize.define('material', materialSchema);
var Message = sequelize.define('message', messageSchema);
var MsgAuth = sequelize.define('msgauth', msgauthSchema);

module.exports = {
    User,
    History,
    Material,
    Message,
    MsgAuth
};