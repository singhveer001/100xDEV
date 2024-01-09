const fs = require ("fs");

console.log("Start");  // First run

fs.readFile("week 2.1/Async Function/a.txt","utf-8",function(err,data){  
    console.log("Data read from file is:");
    // console.log(err);
    console.log(data);  // 4th run
})

let sum = 0;
for(let i=0 ; i<100; i++){
    sum = sum + i ;
}
console.log(sum);  // 2nd run
console.log("File end");  // 3rd run