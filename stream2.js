
console.log("----Program started.-----");
var fs = require("fs");
var data = 'Simply Easy Learning';

// Create a writable stream | Write the data to stream with encoding to be utf8
var writerStream = fs.createWriteStream('streamOutput.txt');
writerStream.write(data,'UTF8');

writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
   console.log("Write completed.");
});

writerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("-----Program ended.-----");