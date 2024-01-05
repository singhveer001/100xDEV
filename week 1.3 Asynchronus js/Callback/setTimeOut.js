// Asynchronous functions
function printToScreen(){
    console.log("Hello world");
}
setTimeout(printToScreen,1 * 1000) 

// any function that gets called asynchronusly 
// basically any function web apis called its ccalled callback 
// printToScreen is callback because it is being called back by some external async call
// A function is being called asynchrounsly thats called a callback
// when you pass function inside a function thats called callback   
// setTimout is a function and i gave  setTimout another function as an argument thats usually callback  

let counter =0;
for(let i=0; i<1000; i++){
    counter = counter +1 ;
}

console.log(counter);


// To check how it inner running callback queue part vagera
// http://latentflip.com/
// louoe