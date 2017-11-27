const cheerio = require('cheerio');
const utils = require('./utils')
function fetch(data,url){
    let id = url.substring(url.lastIndexOf("/")+1);
    let $ = cheerio.load(data);
    let tenant = {
        id: id.replace(/[^0-9]/g,""),
        username: getName($),
        img: getImg($),
        auth: getAuth($),
        info: getInfo($),
        dynamic: getDynamic($)
    }
    return tenant;
}
function getDynamic($){
    var list = [];
    $('.fk_trend_con fk_trend_T').each((index,element)=>{
        let $element = $(element)
        var url = $element.find('a').attr('href')
        list.push(url)
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
    return auth;
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