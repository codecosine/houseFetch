const entrys = require('./api/entry');
const house = require('./api/house');
const landlord = require('./api/landlord');
const db = require('./model')
const jobs = {
    addTenant(url){
        console.log('房客入列拉：'+url)
        db.Tenant.save(tenant)
        console.log(tenant.dynamic)
        
        // 将点评中不重复的房子放进队列
    },
    addLandlord(url){
        console.log('房东入列拉：'+landlord)
        landlord.solve(url).then(data=>{
            //将房源信息的房子的收集行动放进队列
            db.Landlord.save(data)
            console.log('房东的房子入列了'+data.houses)            
            data.houses.forEach(ele=>{
                this.addHouse(ele.url)
            })
        })
    },
    addHouse(url){
        console.log('房子入列拉:'+ url)        
        house.solve(url).then(data=>{
            db.House.save(data)         
            // 房东信息入列
            this.addLandlord(data.landlord)
            // review表更新
            db.Review.save(data.selfcomment)
            // 房客信息入列
            data.selfcomment.forEach(element => {
                this.addTenant(element.path)
            });
        }).catch(err=>{
            console.error(err.response.status)
        })
    },
    recoup(event){
        console.log('补偿队列')
    },
    add(a, b, callback) { 
        callback(a + b); 
    },
    succeed: function(arg, callback) { callback(); },
    fail: function(arg, callback) { callback(new Error('fail')); }
  }
const worker = require('./queue')(jobs)
worker.start()
// 入口方式1：从地区主页寻找房子=》
// const entryUrl = 'http://gz.xiaozhu.com/';
// entrys.solve(entryUrl).then(houses=>{
//     console.log(houses);
//     // 将入口的所有房子推进队列顶部
//     houses.forEach((element,index) => {
//         jobs.addHouse(element.url)
//     })
// })
// 入口方式2: 自定义一个房子入列=》
let houseTest = 'http://gz.xiaozhu.com/fangzi/12976912902.html';
jobs.addHouse(houseTest)
