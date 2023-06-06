
console.log("Program started");
var fs = require("fs");
var data = fs.readFileSync('callback.txt');

console.log(data.toString());
console.log("Program ended");