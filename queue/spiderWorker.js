
const queue = require('../queue')
const house = require('../api/house');
const landlord = require('../api/landlord');
const tenant = require('../api/tenant')
const db = require('../model')

function worker(id, payload, cb) {
    console.log(payload)
    //var sleep = Math.random()*config.SLEEP_TIME_OUT + 8000;            
    Spider[payload.name](payload,(err)=>{
        cb(err);
    })
}
function sendEventToRemoteService(payload, cb) {
    setTimeout(() => {
        let err;
        if (Math.random() > 0.5) {
            err = Error('something awful has happened');
        }
        cb(err);
    }, 100);
}

const Spider = {
    addTenant(url,landlord,callback){
        tenant.solve(url,landlord).then(data=>{
            db.Tenant.save(data)            
            console.log(data.dynamic)
        // 将点评中不重复的房东放进队列
        data.dynamic.forEach(ele=>{
            this.addLandlord(ele)
        })
        }).catch(err=>{
            console.error('addTenant:'+err)
        })
    },
    addLandlord(url,callback){
        landlord.solve(url).then(data=>{
            //将房源信息的房子的收集行动放进队列
            db.Landlord.save(data)
            if(data.houses){
                console.log('房东的房子入列了'+data.houses)            
                data.houses.forEach(ele=>{
                    this.addHouse(ele.url)
                })
            }
        }).catch(err=>{
            console.error('addLandlord:'+err)
        })
    },
    addHouse({url},cb){
        house.solve(url).then(data=>{
            cb(data)
        }).catch(err=>{
            cb(err)
        })
    },
}
module.exports = worker
  