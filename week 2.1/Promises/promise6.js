
function sumOfSquare(a,b,fun){
    let value1 = a * a;
    let value2 = b * b;
    fun(value1+value2);
}

// This is how you call non promisified async function
sumOfSquare(1,2,function(value){
    console.log(value);
})

// This is how you call promisified async function 
sumOfSquare(1,2).then(function(value){
    console.log(value);
})