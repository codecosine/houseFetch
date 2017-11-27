
const config = require('../config.js')
module.exports = function(){
    // implement your job functions.
  var myJobs = {
    add: function(a, b, callback) { callback(a + b); },
    succeed: function(arg, callback) { callback(); },
    fail: function(arg, callback) { callback(new Error('fail')); }
  }
  
  // setup a worker
  var worker = require('coffee-resque').connect({
    host: config.REDIS.host,
    port: config.REDIS.port
  }).worker('*', myJobs)
  
  // some global event listeners
  //
  // Triggered every time the Worker polls.
  worker.on('poll', function(worker, queue) {})
  
  // Triggered before a Job is attempted.
  worker.on('job', function(worker, queue, job) {})
  
  // Triggered every time a Job errors.
  worker.on('error', function(err, worker, queue, job) {
    console.log('worker on error')
    
  })
  
  // Triggered on every successful Job run.
  worker.on('success', function(worker, queue, job, result) {
      console.log('worker on success')
  })
  
  worker.start()

  myJobs.add(6,2,(a)=>console.log(a))
  myJobs.add(2,2,(a)=>console.log(a))
  myJobs.succeed('success',()=>console.log('success'))
  myJobs.add(8,2,(a)=>console.log(a))
  myJobs.fail('fail',()=>new Error('fail exist'))
}