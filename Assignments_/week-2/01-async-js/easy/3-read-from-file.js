
const fs = require("fs");

console.log("Start");
fs.readFile("Assignments_/week-2/01-async-js/easy/3-file.txt","utf-8",function(err,data){
    console.log("The content prints as: ");
    console.log(data);
})