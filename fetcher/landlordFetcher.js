const cheerio = require('cheerio');
const utils = require('./utils')
function fetch(data,url,isNoPage){
    let $ = cheerio.load(data);
    let landlord = {
        id: utils.getUrlId(url),
        username: getName($,isNoPage),
        img: getImg($,isNoPage),
        auth: getAuth($,isNoPage),
        info: getInfo($,isNoPage),
        busInfo: getBusInfo($,isNoPage),
        houses: getHouses($,isNoPage)
    }
    return landlord;
}
function getHouses($,isNoPage){
    let houses = []
    if(isNoPage){ // 有房主首页则异步ajax后面再获取
        $('.fd_room dd').each((index,element)=>{
            let $element = $(element)  
            let item = {
                url:$element.find('.room_link a').attr('href'),
                title:$element.find('.room_link a').attr('title')
            }
            houses.push(item)        
        });
    }
    return houses;
}
function getBusInfo($,isNoPage){
    let info = {}   
    if(isNoPage){
        $('.fd_infor ul li').each((index,element)=>{
            let $element = $(element)        
            if(index == 0){
                info.houseAmount = utils.allTrim($element.find('span').text())
            } else if(index == 1){
                info.onlineReply = utils.allTrim($element.find('span').text())
            } else if(index == 2){
                info.reviewAmount = utils.allTrim($element.find('span').text())
            } else if(index == 3){
                info.perConfirm = utils.allTrim($element.find('span').text())
            } else if(index == 4){
                info.orderAmount = utils.allTrim($element.find('span').text())
            } else if(index == 5){
                info.orderSuccess = utils.allTrim($element.find('span').text())
            }
        })
    } else {
        $('.infor_ul li').each((index,element)=>{
            let $element = $(element)      
            if(index == 0){
                info.onlineReply = utils.allTrim($element.find('strong').text())                
            } else if(index == 1){
                info.perConfirm = utils.allTrim($element.find('strong').text())                                
            } else if(index == 2){
                info.orderSuccess = utils.allTrim($element.find('strong').text())                                
            }
        })
        info.houseAmount = $('.nav_bg2').find('span').text()
        info.reviewAmount = $('.nav_bg3').find('span').text()
        info.orderAmount = $('.nav_bg4').find('span').text()
    }
    return info    
}
function getName($,isNoPage){
    if(isNoPage){
        return utils.allTrim($('.fd_infor').find('h1').text())
    }
    return utils.allTrim($('.fd_name').text())
}
function getAuth($,isNoPage){
    if(isNoPage){
        return null
    }
    let auth = {
        name: $('.rz_ul li').first().find('strong').text(),
        ava: $('.rz_ul li').first().next().find('strong').text(),
        zima: $('.rz_ul li').find('.ico_zhima i').text() || false
    }
    return utils.objectStringify(auth);
}
function getImg($,isNoPage){
    if(isNoPage){
        return $('.fd_con .img_con img').attr('src')
    }
    return $('.fd_img img').attr('src')
}
function getInfo($,isNoPage){
    if(isNoPage){
        return null
    }
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



module.exports = fetch