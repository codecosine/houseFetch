const cheerio = require('cheerio');
const utils = require('./utils')
function fetch(data,url,originUrl){
    let $ = cheerio.load(data);
    let tenant = {
        id: utils.getUrlId(url),
        username: getName($),
        img: getImg($),
        auth: getAuth($),
        info: getInfo($),
        dynamic: getDynamic($,originUrl)
    }
    return tenant;
}
function getDynamic($,originUrl){
    var list = [];
    // todo 这里找的时候要直接划开进来的
    $('.fk_trend_wrapper .fk_trend_con .fk_trend_T').each((index,element)=>{
        let $element = $(element)
        if($element.text().includes('入住')){
            var url = $element.find('a').attr('href')
            if(url!= originUrl){
                list.push(url)
            }
        } 
    });
    return [...new Set(list)]
}
function getName($){
    return utils.allTrim($('.fk_name').text())
}
function getAuth($){
    let auth = {
        phone: $('.fk_yz_ul li').first().find('strong').text(),
    }
    return utils.objectStringify(auth);
}
function getImg($){
    return $('.fk_img img').attr('src')
}
function getInfo($){
    let info = {}
    $('.fk_person li').each((index,element)=>{
        let $element = $(element)        
        if(index == 0){
            info.username = utils.allTrim($element.text())
        } else if(index == 1){
            info.registerTime = utils.allTrim($element.text())
        } else if(index == 2){
            info.age = utils.allTrim($element.text())
        } 
    })
    return info;
}



module.exports = fetch