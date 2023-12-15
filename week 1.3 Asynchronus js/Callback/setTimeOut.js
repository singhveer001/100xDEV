// Asynchronous functions
function printToScreen(){
    console.log("Hello world");
}
setTimeout(printToScreen,1 * 1000)

let counter =0;
for(let i=0; i<1000; i++){
    counter = counter +1 ;
}

console.log(counter);


// To check how it inner running callback queue part vagera
// http://latentflip.com/
// louoe