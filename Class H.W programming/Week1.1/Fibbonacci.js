// Fibbonacci
let n=10;
let a =0;
let b = 1;

console.log(b);
console.log(a);

for(let i=2; i<=n ; i++){
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}