let currentCount = 0;
console.log(currentCount);
function UpdateCounter(){
    
    currentCount++;
    console.clear(); // clearing previous value 
    console.log(currentCount); // Printing current value
    
}

setInterval(UpdateCounter,1000);