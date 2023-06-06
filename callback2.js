
console.log("Program started");
var fs = require("fs");

fs.readFile('callback.txt', function (err, data) {
    if (err) {
        console.error(err.stack);
        return; 
    } 
    console.log(data.toString());
 });

console.log("Program ended");