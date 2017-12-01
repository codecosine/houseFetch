var test = require('../api/house')
const db = require('../model')

test.unitTest().then(data=>{
    console.log(data)
    db.House.save(data)             
})
