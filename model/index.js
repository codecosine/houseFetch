
var Sequelize = require('sequelize');
var config = require('../config');
var userSchema = require('./user')

// var sequelize = new Sequelize(
//     config.db.name,
//     config.db.user,
//     config.db.passwd,
//     {
//         'dialect': 'mysql',
//         'host': config.db.host,
//         'port': config.db.port
//     }
// );

//var User = sequelize.define('user', userSchema);

var House = {
    //重复判断, 无论如何进行houseHy 表的更新
    save(){
        console.log('save')
    }
}
var Tenant = {
    save(){
        console.log('save')
    }
}
var Review = {
    save(){
        console.log('save')
    }
}
var Landlord = {
    //判断是否存在房东详情页),无论如何进行landlordHistory表的更新
    save(){
        console.log('save')
    }
}
module.exports = {
    House,
    Landlord,
    Tenant,
    Review
};