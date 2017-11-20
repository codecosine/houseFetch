const entrys = require('./api/entry');
const house = require('./api/house');

const entryUrl = 'http://gz.xiaozhu.com/';

entrys.solve(entryUrl).then(entrys=>{
    console.log(entrys);
    var houses = entrys.map((element,index) => {
        return house.solve(element.url)
    })
    console.log(houses)
    houses.forEach(element => {
        element.then(data=>{
            console.log('success'+ data)
        }).catch(err=>{
            console.error(err)
        })
    });
    // Promise.all(houses).then(data=>{
    //     console.log(data)
    // }).catch(err=>{
    //     console.error(err)
    // })
})