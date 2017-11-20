const axios = require('axios');
const config = require('../config')
const fetcher = require('../fetcher/houseFetcher')
/**
 * 单次请求限制,采用随机Sleep
 * 
 */
function solve(url){
    return new Promise(function(resolve,reject){
        var sleep = Math.random()* config.SLEEP_TIME_OUT
        console.log('sleep:'+sleep)
        setTimeout(function callback(){
            axios.get(url)
             .then(res=> {
                resolve(fetcher((res.data)))                
            }).catch(err=>{
                reject(err)
            })
        },sleep)  
    })
}
function unitTest(url){
    if(!url){
        var url = 'http://gz.xiaozhu.com/fangzi/12976912902.html';
    }
    solve(url).then(data=>{
        console.log(data)
    })
}
module.exports = {
    solve,    
    unitTest,    
}
