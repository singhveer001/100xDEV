// setInterval => basically ye bhi setTimout jaisa hai but isme farak ye hai
            //    Ham jo bhi work diye hai vo everysecond yani diye hue time pr hota rhega

 
var counter =0;

function printCounter(){
    console.clear()
    console.log(counter);
    counter = counter +1 ;
}

setInterval(printCounter,1000)  // printCounter every one second pe call hota rhega

var counter2 =0;
for(var i=0; i<1000; i++){
    counter2 += 1;
}
// first ye print hoga & upar vale funcyion ke vja se clear bhi ho jayega 
// then upar vala loop(setInterval) chalne lgega or vo one by one print hoke clear hote rhega
console.log(counter2);  