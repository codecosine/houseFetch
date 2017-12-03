var test = require('../api/landlord')
test.unitTest('http://www.xiaozhu.com/fangdong/110426400/').then(data=>{
    console.log(data)
    //db.House.save(data)             
})
test.unitTest('http://www.xiaozhu.com/fangdong/12070894101/').then(data=>{
    console.log(data)
    //db.House.save(data)             
})
