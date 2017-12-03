var tenant = require('../api/tenant')
var axios = require('axios')
// const db = require('../model')
tenant.unitTest().then(data=>{
    console.log(data)
}).catch(err=>{
    console.error(err)
})
//*** house */
// test.unitTest('http://gz.xiaozhu.com/fangzi/6502682415.html').then(data=>{
//     console.log(data)
//     //db.House.save(data)             
// })
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



// var test = require('../api/landlord')
// test.unitTest('http://www.xiaozhu.com/fangdong/110426400/').then(data=>{
//     console.log(data)
//     //db.House.save(data)             
// })
// test.unitTest('http://www.xiaozhu.com/fangdong/12070894101/').then(data=>{
//     console.log(data)
//     //db.House.save(data)             
// })

