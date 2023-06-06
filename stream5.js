console.log("----Program started.-----");
var fs = require("fs");
var zlib = require('zlib');
   
// Decompress the file stream.txt.gz to streamUnzipped.txt
fs.createReadStream('stream.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('streamUnzipped.txt'));
     
console.log("File Decompressed.");   
console.log("-----Program ended.-----");