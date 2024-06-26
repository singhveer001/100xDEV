// How to gives type to any variable
const x : number = 101;
console.log(x);


// How to give types to argument of function
function greet(firstName : string ){
    console.log("Hello" + firstName);
}

greet("Veer") ;


// How to assign return type to a function
function sum(a:number, b:number) :number {
    return a+b;
}

let value = sum(2,3);
console.log(value);


// Function that take another function as input
function runAfter1s (fn : () => void){
    setTimeout(fn,1000);
}

runAfter1s(function(){
    console.log("Hi There");
})