const cheerio = require('cheerio');
const utils = require('./utils')
function fetch(data,url){
    let id = url.substring(url.lastIndexOf("/")+1);
    let $ = cheerio.load(data);
    let house = {
        id: id.replace(/[^0-9]/g,""),
        info: getInfo($),
        price: getPrice($),
        introduce: getIntro($),
        des: getDes($),
        score: getScore($),
        selfcomment: getSelfcomment($),
    }
    return house;
}
function getInfo($){
    let info = $('.pho_info')
    let title = info.find('h4 em').text()
    let address = info.find('p').attr('title')
    return {
        title,
        address
    }
}

function getPrice($){
    return $('#pricePart .day_l').find('span').text()
}
function getIntro($){
    /**
     * 结构优化
     */
    let introduce = $('#introduce')
    let res = '';
    introduce.find('li').each((i,ele)=>{
        let $element = $(ele)
        res += utils.allTrim($element.find('h6').text()+':')
        res += utils.allTrim($element.find('p').text()+',')
    })
    return res
}
function getDes($){
    let des = $('.detail_intro_item')
    let res = ''
    des.each(function(i,elem){
        let $element = $(elem)
        res += utils.allTrim($element.find('.info_l p').text()+':')
        res += utils.allTrim($element.find('.info_r p').text()+',')
    })
    return res
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