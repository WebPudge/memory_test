var http = require('http');
var memwatch = require('node-memwatch');
require('heapdump')

memwatch.on('leak',function (info) {
  console.log("leak: ");
  console.log(info)
})
memwatch.on('state',function (state) {
  console.log("state: ");
  console.log(state)
})
var leakArray = [];
var leak = function () {
  leakArray.push('leak' + Math.random());
}

http.createServer(function (req, res){
  leak();
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337);
console.log('Server running at http://127.0.0.1:1337/')