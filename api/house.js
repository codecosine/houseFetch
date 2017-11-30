const axios = require('axios');
const superAgent = require('superagent');
const config = require('../config')
const fetcher = require('../fetcher/houseFetcher')
function solve(url){
    return new Promise(function(resolve,reject){
        superAgent.get(url).set({
            Referer: url,
            'User-Agent': config.UA
        }).end(function(err, response) {
            if (err) {
                reject(err)
            }
            resolve(fetcher(response.text,url))                          
        })
          
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
