"use strict";
const x = 101;
console.log(x);
function greet(firstName) {
    console.log("Hello" + firstName);
}
greet("Veer");
function sum(a, b) {
    return a + b;
}
let value = sum(2, 3);
console.log(value);
function runAfter1s(fn) {
    setTimeout(fn, 1000);
}
runAfter1s(function () {
    console.log("Hi There");
});
