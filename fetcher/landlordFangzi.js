const cheerio = require('cheerio');
const utils = require('./utils')
function fetch(data,url){
    // let id = url.substring(url.lastIndexOf("/")+1);
    let $ = cheerio.load(data);
    let houses = []
    $('.column .hover_bg').each((index,element)=>{
        let $element = $(element)
        let item =  {
          url: $element.find('.room_con .room_detail dt a').attr('href'),
          title: $element.find('.room_con .room_detail dt a').text(),
        }
        houses.push(item)
    });
    return houses;
}
module.exports = fetch