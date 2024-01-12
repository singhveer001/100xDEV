
const fs = require("fs");

console.log("Start");
const filePath = "Assignments_/week-2/01-async-js/easy/4-file.txt";
const dataToWritten = "Shikhar Dhawan, my cricket hero, is a dynamic left-handed batsman known \n for his stylish strokes and remarkable fielding." ;
fs.writeFile(filePath,dataToWritten,function(err){
    
    if(err){
        console.log("Error occur while writing file",err);
    }
    else{
        console.log("Your file is written successfully");
    }
})