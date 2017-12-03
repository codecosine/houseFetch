const cheerio = require('cheerio');
const request = require('superagent');
const config = require('../config')

function solve(url){
    return new Promise(function(resolve,reject){
        request.get(url).set({
                Referer: url,
                'User-Agent': config.UA()
            })
            .end(function(err,sres){
                var entrys = []        
                if(err){
                    reject(err);
                }
                var $ = cheerio.load(sres.text);
                $('.pic_list li').each(function(i,elem){
                    var $element = $(elem)
                    var $img = $element.find('.lodgeunitpic')
                    entrys.push({
                        url: $element.find('.resule_img_a').attr('href'),
                        title: $img.attr('title'),
                        imgUrl: $img.attr('src')
                    })
                })
                resolve(entrys)
        })
    })
    
}
module.exports = {
    solve,    
}

