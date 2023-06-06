console.log("----Program started.-----");
var fs = require("fs");
var zlib = require('zlib');

// Compress the file stream.txt to stream.txt.gz
fs.createReadStream('stream.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('stream.txt.gz'));
  
console.log("File Compressed.");
console.log("-----Program ended.-----");