
var Sequelize = require('sequelize');
var config = require('../config');

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
    save(info){
        console.log('database save event')        
        console.log(info)        
    }
}
var Tenant = {
    save(info){
        console.log('saveTenant')
        console.log(info)        
    }
}
var Review = {
    save(info){
        console.log('saveReview')
        console.log(info)        
    }
}
var Landlord = {
    //判断是否存在房东详情页),无论如何进行landlordHistory表的更新
    save(info){
        console.log('saveLandlord')
        console.log(info)
    }
}
module.exports = {
    House,
    Landlord,
    Tenant,
    Review
};