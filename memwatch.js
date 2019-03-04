var memwatch = require('node-memwatch');

var leakArray = [];

var hd = new memwatch.HeapDiff();
var leak = function () {
  leakArray.push("leak" + Math.random());
}

for (let i = 0; i < 10000; i++) {
  leak();
}

var diff = hd.end();

console.log(JSON.stringify(diff,null,2));