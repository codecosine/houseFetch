const cheerio = require('cheerio');
const utils = require('./utils')
function fetch(data,url){
    let id = url.substring(url.lastIndexOf("/")+1);
    let $ = cheerio.load(data);
    let landlord = {
        id: id.replace(/[^0-9]/g,""),
        username: getName($),
        img: getImg($),
        auth: getAuth($),
        info: getInfo($),
    }
    return landlord;
}
function getName($){
    return utils.allTrim($('.fd_name').text())
}
function getAuth($){
    let auth = {
        name: $('.rz_ul li').first().find('strong').text(),
        ava: $('.rz_ul li').first().next().find('strong').text(),
        zima: $('.rz_ul li').find('.ico_zhima i').text() || false
    }
    return auth;
}
function getImg($){
    return $('.fd_img img').attr('src')
}
function getInfo($){
    let info = {}
    $('.fd_person li').each((index,element)=>{
        let $element = $(element)        
        if(index == 0){
            info.sex = utils.allTrim($element.text())
        } else if(index == 1){
            info.age = utils.allTrim($element.text())
        } else if(index == 2){
            info.constellation = utils.allTrim($element.text())
        } else if(index == 3){
            info.zodiac = utils.allTrim($element.text())
        } else if(index == 4){
            info.home = utils.allTrim($element.text())
        } else if(index == 5){
            info.bloodType = utils.allTrim($element.text())
        } else if(index == 6){
            info.job = utils.allTrim($element.text())
        } else if(index == 7){
            info.position = utils.allTrim($element.text())
        } else if(index == 8){
            info.education = utils.allTrim($element.text())
        }
    })
    return info;
}

function getScore($){
    return $('.comment_box .x_textscore').text()
    
}
function getSelfcomment($){
    let comments = $('#selfcomment')
    let res = [];
    comments.find('.dp_box').each((i,ele)=>{
        let $element = $(ele)
        var evaluation = {
            'tenant':utils.allTrim($element.find('a').text()),
            'content':utils.allTrim($element.find('.dp_con').text()),// 没有去掉h6
            'username':utils.allTrim($element.find('.dp_con h6 a').text()),            
            'time':$element.find('.dp_con h6 i').text()
        }
        res.push(evaluation)
    })
    return res
}
module.exports = fetch