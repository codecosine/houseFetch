var test = require('../api/house')
var axios = require('axios')
// const db = require('../model')

test.unitTest('http://gz.xiaozhu.com/fangzi/6502682415.html').then(data=>{
    console.log(data)
    //db.House.save(data)             
})
// const url = 'http://gz.xiaozhu.com/ajax.php'
// axios.get(url,{
//     params: {
//         op:'Ajax_GetDetailComment',
//         lodgeId:6502682415,
//         cityDomain:undefined,
//         p:2 ,
//     }
// }).then(res=>{
//     console.log(res.data)
// })
