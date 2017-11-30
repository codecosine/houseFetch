
const config = require('../config.js')
module.exports = function(jobs){
  // setup a worker
  var worker = require('coffee-resque').connect({
    host: config.REDIS.host,
    port: config.REDIS.port
  }).worker('*', jobs)
  
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
  return worker

}