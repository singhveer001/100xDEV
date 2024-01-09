// In This code we created one generic function so we dont have to 
// repaeat same function Again and again 
function square (n){
    return n * n;
}

function cube(n){
    return n * n * n
}

function quad(n){
    return n * n * n * n;
}

// Generic Function
// Introducing callback
function sumOfSomething(a,b,fun){ // in this function we passing function so we dont have to create again and again same function for other
    let square1 = fun(a);
    let square2 = fun(b);
    return square1 + square2;
}

let ans = sumOfSomething(2,3,square);
let ans2 = sumOfSomething(2,2,quad);
let ans3 = sumOfSomething(2,2,cube);