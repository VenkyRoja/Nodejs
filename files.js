//-------------1--------------------------Path module---------------

const path = require('path');

var pathObj = path.parse(__filename); 

console.log(pathObj);
console.log(pathObj.base);
console.log(pathObj.dir);

//-------------2--------------------------OS module---------------

const os = require('os');

var totalMemory = os.totalmem; 
var freeMemory = os.freemem; 

console.log('Total Memory: ' + totalMemory);

//Template string | E56 | ES2015 | ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);  //Use tilde `
console.log(`Free Memory:  ${freeMemory}`); 

//-------------3--------------------------File System module---------------

const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files); 

function myreaddir(fs, myPath) {
    console.log('Path: ' + myPath);
    fs.readdir(myPath, function(err, files2){
        if(err) console.log('Error:\n', err);
        else console.log('Result:\n', files2);
    });
}

myreaddir(fs, './');
myreaddir(fs, '$');