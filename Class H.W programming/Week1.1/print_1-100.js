// Sum of 1-100

const n =100;
let sum = 0;
for(let i=0; i<=n ; i++){
    sum = sum + i;
}
console.log("sum of n number is: " ,sum);


// with function

function sumAll(startIndex,endIndex){
    var sum = 0;
    for (var i = startIndex; i< endIndex; i++){
        sum = sum + i;
    }
    return sum;
}

var sumIs = sumAll(1,6);
console.log("sum of n number is: " ,sumIs);


