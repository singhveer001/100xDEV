// The problem in this code is that here we repeating 
// same type of functions(code) again and again That is 
// Problem here is DRY( DON'T REPEAT YOURSELF )

function square (n){
    return n * n;
}

function cube(n){
    return n * n * n
}

function sumOfSquare(a,b){
    let square1 = square(a);
    let square2 = square(b);
    return square1 + square2;
}
function sumOfcube(a,b){
    let cube1 = square(a);
    let cube2 = square(b);
    return cube1 + cube2;
}

let ans = sumOfSquare(2,4)
console.log(ans);

let ans2 = sumOfcube(2,4);
console.log(ans2);