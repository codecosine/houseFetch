const axios = require('axios');
const superAgent = require('superagent');
const config = require('../config')
const fetcher = require('../fetcher/houseFetcher')
const reviewsFetcher = require('../fetcher/reviewsFetcher')
function solve(url){
    return new Promise(function(resolve,reject){
        superAgent.get(url).set({
            Referer: url,
            'User-Agent': config.UA
        }).end(function(err, response) {
            if (err) {
                reject(err)
            }
            let house = fetcher(response.text,url)
            reviewsFetcher(house.id).then(reviews=>{
                house.reviews = reviews
                resolve(house)                                          
            }).catch(err=>{
                resolve(house)
            })
        })
          
    })
}
function unitTest(url){
    if(!url){
        var url = 'http://gz.xiaozhu.com/fangzi/12976912902.html';
    }
    return solve(url)
}
module.exports = {
    solve,    
    unitTest,    
}
