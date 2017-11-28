// var test = require('../api/tenant')
// test.unitTest();
var ex = /^\d$/;
var ex2 = /^\d$/
//var ex2 = /\/\d+\//
//var ex2 = /\d*/
var ex3 = /\\d+/
var str = "http://gz.xiaozhu.com/fangzi/12976912902/no.html"
//console.log(str.match(ex3))
//console.log(str.test(ex3))

var str = "http://gz.xiaozhu.com/fangzi/12976912902.html"
// console.log(str.replace(ex2,""))
// console.log(str.match(ex2))
// console.log(str.replace(/^[1-9]\d+/g,""))
//var ex2 = /\d*/
console.log(str.replace(/^[0-9]*$/g,""))
console.log(str.replace(/\d+/g,""))
console.log(str.replace(/[^0-9]+/g,""))
console.log(str.replace(/^(\d)+/g,""))
