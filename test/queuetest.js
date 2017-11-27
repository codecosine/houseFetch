const jobs = {
    add(a, b, callback) { 
        callback(a + b); 
    },
    fetchLandlord(a,b){

    },
    addHouse(house){
        setTimeout(() => {
            console.log('house')
        }, 1000);
    },
    succeed: function(arg, callback) { callback(); },
    fail: function(arg, callback) { callback(new Error('fail')); }
  }
const worker = require('../queue')(jobs)
worker.start()
jobs.add(6,2,(a)=>console.log(a))
jobs.fetchHouse('a')