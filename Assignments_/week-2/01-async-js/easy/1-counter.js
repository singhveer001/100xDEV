let currentCount = 0;
console.log(currentCount);
function UpdateCounter(){
    
    currentCount++;
    console.clear();
    console.log(currentCount);
    
}

setInterval(UpdateCounter,1000);