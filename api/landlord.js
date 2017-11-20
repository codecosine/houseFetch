const axios = require('axios');
const config = require('../config')
const fetcher = require('../fetcher/landlordFetcher')
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
                 if(res.request.path.includes('no.html')){
                    //list.local= fetcher(res.data,url)                     
                    reslove()                
                 }
                 list.local= fetcher(res.data,url)
                 console.log(list)
                 return null       
                 //return axios.get(url+'yuding.html')
             }).then(res=>{
                list.local= fetcher(res.data,url)                
                return axios.get(url+'fangzi.html')
             }).then(res=>{
                list.local= fetcher(res.data,url)                
                return axios.get(url+'pinglun.html')
             }).then(res=>{
                list.local= fetcher(res.data,url)                
             }).catch(err=>{
                reject(err)
             })
        },sleep)  
    })
}
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
