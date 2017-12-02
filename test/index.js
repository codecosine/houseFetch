

var utils = require('../fetcher/utils')
var str = 'out<a>inner <em> cao </em></a>,outher'
console.log(utils.delHtmlTag(str))
console.log(utils.delHtmlText(str))