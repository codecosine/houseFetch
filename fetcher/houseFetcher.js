const cheerio = require('cheerio');
const utils = require('./utils')
function fetch(data){
    let $ = cheerio.load(data);
    let house = {
        info: getInfo($),
        price: getPrice($),
        introduce: getIntro($)
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
    
    $('.info_r p').each(function(i,elem){
        let $element = $(elem)
        list.push({
            '个性描述': $element.text()
        })
    })
}
module.exports = fetch