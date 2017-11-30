const axios = require('axios');
const superAgent = require('superagent');
const config = require('../config')
const fetcher = require('../fetcher/tenantFetcher')

function solve(url,landlord){
    return new Promise(function(resolve,reject){
        superAgent.get(url).set({
            Referer: url,
            'User-Agent': config.UA
        }).end((err,res)=> {
            if (err) {
                reject(err)
            }
            let tenant = fetcher(res.data,url,landlord)
            resolve(tenant)
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
