
const config = require('../config')
const level = require('level');
const evnetDb = level('./event/db');
const Jobs = require('level-jobs');

const house = require('../api/house');
const landlord = require('../api/landlord');
const tenant = require('../api/tenant')
const db = require('../model')

const options = {
    maxConcurrency: config.MAX_CONCURRENCY,
    maxRetries: config.MAX_RETRIES,
    // backoff: {
    //   randomisationFactor: 0,
    //   initialDelay: 10,
    //   maxDelay: 1000
    // }
};

function worker(id, payload, cb) {
    var sleep = Math.random()*config.SLEEP_TIME_OUT + 8000;
    console.log('Spider processing event %s:'+ payload.name + ',sleep:'+sleep)
    setTimeout(()=>{Spider[payload.name](payload,(err)=>{
        if (err) {
            console.error('Error processing event %s: %s',id, err.message);
        }
        cb(err);
    })},sleep)
}
const Spider = {
    addTenant({url,landlord},cb){
        tenant.solve(url,landlord).then(data=>{
            db.Tenant.save(data)     
            console.log(data.dynamic)
            // 将点评中不重复的房东放进队列
            data.dynamic.forEach(ele=>{
                queue.push({
                    name: 'addLandlord',
                    url: ele
                })
            })
            cb()            
        }).catch(err=>{
            cb(err)
        })
    },
    addLandlord(url,cb){
        landlord.solve(url).then(data=>{
            //将房源信息的房子的收集行动放进队列
            db.Landlord.save(data)
            if(data.houses){
                console.log('房东的房子入列了'+data.houses)            
                data.houses.forEach(ele=>{
                    queue.push({
                        name: 'addHouse',
                        url: ele.url
                    })
                })
            }
            cb()
        }).catch(err=>{
            cb(err)
        })
    },
    addHouse({url},cb){
        house.solve(url).then(data=>{
            // 数据库表更新
            db.House.save(data)         
            db.Review.save(data.selfcomment)
            // 房东信息入列
            //this.addLandlord(data.landlord)
            
            cb()
            queue.push({
                name: 'addLandlord',
                url: data.landlord
            })
            // 房客信息入列
            data.selfcomment.forEach(element => {
                queue.push({
                    name:'addTenant',
                    url:element.path,
                    landlord: data.landlord// 房客入列的时候知道是哪个房东带进来的
                })
            });
           
        }).catch(err=>{
            cb(err)
        })
    },
}
const queue = Jobs(evnetDb, worker, options);
queue.push({
    name:'addHouse',
    url:'http://su.xiaozhu.com/fangzi/22932799503.html',
})