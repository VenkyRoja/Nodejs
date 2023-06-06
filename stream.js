console.log("----Program started.-----");

var fs = require("fs");
var data = '';

// Create a readable stream | Set the encoding to be utf8. 
var readerStream = fs.createReadStream('stream.txt');
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', (chunk)  => {
   data += chunk;
});

readerStream.on('end', () => {
   console.log(data);
});

readerStream.on('error', (err) => {
   console.log(err.stack);
});

console.log("-----Program ended.-----");