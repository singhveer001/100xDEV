
console.log("At the top 1");

function promisifiedTimeout(){
    console.log("function Called 3");
    return new Promise(function(resolve){
        console.log("Inside promise callback 4");
        setTimeout(function(){
            console.log("setTimeout Called 5");
            resolve("Done baby ! im burnt out ")
        },5000);  
    });
}

console.log("in the middle 2");

promisifiedTimeout().then(function(value){
    console.log("Promisified then 6");
    console.log(value);
})