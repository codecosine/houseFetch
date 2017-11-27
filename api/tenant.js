const axios = require('axios');
const config = require('../config')
const fetcher = require('../fetcher/landlordFetcher')
const fetcherFangzi = require('../fetcher/landlordFangzi')
/**
 * 房东有4个连续的子页面
 * /yuding.html
 * /pinglun.html
 * /fangzi.html
 * /no.html
 * 单次请求限制,采用随机Sleep
 * 
 */
function solve(url){
    return new Promise(function(resolve,reject){
        var sleep = Math.random()* config.SLEEP_TIME_OUT
        console.log('sleep:'+sleep)
        setTimeout(function callback(){
            let list = {};
            axios.get(url)
             .then(res=> {
                let tenant = fetch(res.data,url)
                resolve(tenant)
             }).catch(err=>{
                reject(err)
             })
        },sleep)  
    })
}

function unitTest(url){
    if(!url){
        var url = 'http://www.xiaozhu.com/fangke/24108555801/';
    }
    solve(url).then(data=>{
        console.log(data)
    })
}
module.exports = {
    solve,    
    unitTest,    
}
