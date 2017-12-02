const cheerio = require('cheerio');
const utils = require('./utils')
function fetch(data,url){
    let $ = cheerio.load(data);
    let house = {
        id: utils.getUrlId(url),
        info: getInfo($),
        price: getPrice($),
        introduce: getIntro($),
        des: getDes($),
        score: getScore($),
        landlord: getLandlord($),
        reviews: [],
    }
    return house;
}
function getLandlord($){
    return {
        id:utils.getUrlId($('.lorder_name').attr('href')),
        username:$('.lorder_name').text(),
        url:$('.lorder_name').attr('href'),
        sex:$('.member_pic').hasClass('member_ico1')?'female':'male'
    }
}
function getInfo($){
    let info = $('.pho_info')
    let title = info.find('h4 em').text()
    let address = info.find('p').attr('title')
    let labels = ''
    info.find('.labels span').each((i,ele)=>{
        let $element = $(ele)
        labels += utils.delHtmlText($element.text()+",")
    })
    return {
        title,
        address,
        labels
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
    let res = {
        info1: '个性描述',
        info2: '内部情况',
        info3: '交通情况',
        info4: '周边情况',
        info5: '配套设施',
        info6: '入住须知',
    }
    des.each(function(i,elem){
        let $element = $(elem)
        var title = utils.allTrim($element.find('.info_l p').text())
        // 骚操作，直接遍历比对然后替换
        Object.keys(res).forEach(key=>{
            if(res[key] == title){
                res[key] = utils.allTrim($element.find('.info_r p').text())
            }
        })
    })
    return res
}
function getScore($){
    let details = '';
    $('.score_r li').each(function(i,elem){
        let $element = $(elem)        
        details += $element.text()+','
    })
    return {
        score:$('.comment_box .x_textscore').text() || '暂无评分统计',
        details,
    }
}
module.exports = fetch