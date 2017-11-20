const cheerio = require('cheerio');
const request = require('superagent');
/**
 * 有同时打开限制,采用随机Sleep
 * houseDetail
 * 
 * title
 * address
 * 
 */
// function getTitleA($){
//     return $('.pho_info')
// }
function solve(url){
    return new Promise(function(resolve,reject){
        function callback(){
            request.get(url)
             .end(function(err,sres){
                    if(err){
                        reject(err);
                    }
                    var details = [];
                    var $ = cheerio.load(sres.text);
                    // $('#introduce li').each((i,ele)=>{
                    //     var $element = $(ele)
                        
                    //     details.push({
                    //         '房屋信息字段': $element.find('h6').text(),
                    //     })
                    // })
                    $('.info_r p').each(function(i,elem){
                        var $element = $(elem)
                        details.push({
                            '个性描述': $element.text()
                        })
                    })
                    resolve(details)                
            })
        }
        var sleep = Math.random()*8000
        console.log('sleep:'+sleep)
        setTimeout(callback,sleep)  
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
