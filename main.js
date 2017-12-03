const entrys = require('./api/entry');
const queue = require('./queue')
// 入口方式1：从地区主页寻找房子=》
const entryUrl = 'http://gz.xiaozhu.com/';
entrys.solve(entryUrl).then(houses=>{
    console.log(houses);
    // 将入口的所有房子推进队列顶部
    houses.forEach((element,index) => {
        queue.push({
            name:'addHouse',
            url:element.url
        },errorHandle)
    })
}).catch(err=>{
    console.error(err)
})
function errorHandle(err) {
    if (err) console.error('Error pushing work into the queue', err.stack);
}
// 入口方式2: 自定义一个房子入列=》
// let houseTest = 'http://gz.xiaozhu.com/fangzi/9122291564.html';
// queue.push({
//     name:'addHouse',
//     url: houseTest,
// },errorHandle)
