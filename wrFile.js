var fs = require('fs')
var reader = fs.createReadStream('input.txt');
var writer = fs.createWriteStream('output.txt');

// reader.on('data', function (chunk) {
//   console.log('chunk: ',chunk);
//   writer.write(chunk);
// });

// reader.on('end', function () {
//   writer.end();
// })

reader.pipe(writer)