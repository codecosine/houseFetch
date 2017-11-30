const level = require('level');
// 创建本地数据库
const db = level('./event/db');
const Jobs = require('level-jobs');
const maxConcurrency = 5;
// 创建队列，并发度1
const queue = Jobs(db, worker, {
    maxConcurrency: 1,
    maxRetries: 3,    
});

//module.exports = queue;

function worker(id, payload, cb) {
    sendEventToRemoteService(payload, (err) => {
        if (err) {
            console.error('Error processing event %s: %s',payload.id, err.message);
        }
        else {
            console.log('event %s successfully relayed', payload.id);
        }
        cb(err);
    });
}
// 模拟复杂异步处理流程
function sendEventToRemoteService(payload, cb) {
    setTimeout(() => {
        Promise.resolve().then(res=>{
            // if (Math.random() > 0.5) {
            //     cb(new Error('something awful has happened'));
            // }
            cb();
        })
    }, 100);
}
for(let i = 0; i < 5; i++) {
    queue.push({
        id: i,
        event: 'door opened'
    });
}
