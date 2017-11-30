const axios = require('axios');
const config = require('../config')
const fetcher = require('../fetcher/tenantFetcher')
/**
 * 房东有4个连续的子页面
 * /yuding.html
 * /pinglun.html
 * /fangzi.html
 * /no.html
 * 单次请求限制,采用随机Sleep
 * 
 */
function solve(url,landlord){
    return new Promise(function(resolve,reject){
            let list = {};
            axios.get(url)
             .then(res=> {
                let tenant = fetcher(res.data,url,landlord)
                resolve(tenant)
             }).catch(err=>{
                reject(err)
             })
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
