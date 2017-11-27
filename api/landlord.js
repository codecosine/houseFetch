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
                let isNoPage = res.request.path.includes('no.html')
                console.log('isNoPage:'+isNoPage)
                let landlord = fetch(res.data,url,isNoPage)
                if(!isNoPage){
                    axios.get(url+'fangzi.html').then(fangziRes=>{
                        landlord.houses = fetcherFangzi(fangziRes.data)
                        resolve(landlord)                        
                    })
                } else {
                    resolve(landlord)
                }
                
             }).catch(err=>{
                reject(err)
             })
        },sleep)  
    })
}

// .then(res=>{
//     list.local= fetcher(res.data,url)                
//     return axios.get(url+'fangzi.html')
//  }).then(res=>{
//     list.local= fetcher(res.data,url)                
//     return axios.get(url+'pinglun.html')
//  }).then(res=>{
//     list.local= fetcher(res.data,url)                
//  })
function unitTest(url){
    if(!url){
        //var url = 'http://www.xiaozhu.com/fangdong/4225205713/'        
        var url = 'http://www.xiaozhu.com/fangdong/110426400/';
    }
    solve(url).then(data=>{
        console.log(data)
    })
}
module.exports = {
    solve,    
    unitTest,    
}
