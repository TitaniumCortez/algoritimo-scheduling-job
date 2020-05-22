const scheduling = require('./schedulingJobs');
const data = require('./data');
const props = require('./config');

console.log(scheduling({ props, data }));

