console.log("----Program started.-----");
var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('stream.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('streamoutput2.txt');

// Pipe the read and write operations | read stream.txt and write data to streamoutput2.txt
readerStream.pipe(writerStream);

console.log("-----Program ended.-----");