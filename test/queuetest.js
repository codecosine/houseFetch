var myJobs = {
  add: function(a, b, callback) { callback(a + b); },
  succeed: function(arg, callback) { callback(); },
  fail: function(arg, callback) { callback(new Error('fail')); }
}
const config = require('../config')

var resque = require('coffee-resque').connect({
  host: config.REDIS.host,
  port: config.REDIS.port
});
var worker = resque.worker('*',myJobs)
resque.enqueue('math', 'add', [1,2], function(err, remainingJobs) {
  console.log('New job queued. Remaining jobs in queue: ' + remainingJobs);
});

// some global event listeners
//
// Triggered every time the Worker polls.
worker.on('poll', function(worker, queue) {})

// Triggered before a Job is attempted.
worker.on('job', function(worker, queue, job) {})

// Triggered every time a Job errors.
worker.on('error', function(err, worker, queue, job) {})

// Triggered on every successful Job run.
worker.on('success', function(worker, queue, job, result) {})

worker.start()

myJobs.add(1,2)