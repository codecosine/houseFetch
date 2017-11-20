const cheerio = require('cheerio');
const request = require('superagent');

function solve(url){
    return new Promise(function(resolve,reject){
        request.get(url)
            .end(function(err,sres){
                var entrys = []        
                if(err){
                    //throw err;
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

