const axios = require('axios');
const cheerio = require('cheerio');
const utils = require('./utils')
function getReviews(id){
    const url = 'http://gz.xiaozhu.com/ajax.php'
    return new Promise(function(resolve,reject){
        let reviews = [];    
        axios.get(url,{
            params: {
                op:'Ajax_GetDetailComment',
                lodgeId:id,
                cityDomain:undefined,
                p:1 ,
            }
        }).then(res=>{
            let $ = cheerio.load(res.data);
            $('.dp_box').each((i,ele)=>{
                let $element = $(ele)
                var evaluation = {
                    'tenantId':utils.getUrlId($element.find('a').attr('href')),
                    'content':utils.allTrim($element.find('.dp_con').text()),// 没有去掉h6
                    'username':utils.allTrim($element.find('.dp_con h6 a').text()),            
                    'time':$element.find('.dp_con h6 i').text()
                }
                reviews.push(evaluation)
            })
            resolve(reviews)
        }).catch(err=>{
            reject(err)
        })
    })
}
module.exports = getReviews