const axios = require('axios');
const superAgent = require('superagent');
const config = require('../config')
const fetcher = require('../fetcher/landlordFetcher')
const fetcherFangzi = require('../fetcher/landlordFangzi')
/**
 * 房东有4个连续的子页面
 * /yuding.html
 * /pinglun.html
 * /fangzi.html
 * /no.html
 * 
 */
function solve(url){
    return new Promise(function(resolve,reject){
        let list = {};
        superAgent.get(url).set({
            Referer: url,
            'User-Agent': config.UA
        }).end((err,response)=> {
            if (err) {
                reject(err)
            }
            //console.log(response.request.req.path.includes('no.html'))
            let isNoPage = response.request.req.path.includes('no.html')
            let landlord = fetcher(response.text,url,isNoPage)
            if(!isNoPage){
                axios.get(url+'fangzi.html').then(fangziRes=>{
                    landlord.houses = fetcherFangzi(fangziRes.data)
                    resolve(landlord)                        
                })
            } else {
                resolve(landlord)
            }
        })
    })
}

function unitTest(url){
    if(!url){
        var url = 'http://www.xiaozhu.com/fangdong/110426400/';
    }
    return solve(url)
}
module.exports = {
    solve,    
    unitTest,    
}
