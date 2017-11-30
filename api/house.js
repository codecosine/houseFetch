const axios = require('axios');
const superAgent = require('superagent');
const config = require('../config')
const fetcher = require('../fetcher/houseFetcher')
/**
 * 单次请求限制,采用随机Sleep
 * 
 */
function solve(url){
    return new Promise(function(resolve,reject){
        superAgent.get(url)
            .set({
                Referer: url,
                'User-Agent': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:39.0) Gecko/20100101 Firefox/39.0"
            }).end(function(err, response) {
                if (err) {
                    reject(err)
                }
                resolve(fetcher(response.text,url))                          
            })
          
    })
    // return new Promise(function(resolve,reject){
    //         axios.get(url)
    //          .then(res=> {
    //             resolve(fetcher(res.data,url))                
    //          }).catch(err=>{
    //             reject(err)
    //          })
    // })
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
