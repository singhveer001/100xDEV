function promisifiedTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(resolve,duration);
    })
    return p;
}


// Promise chaining
promisifiedTimeout(1000).then(function(){
    console.log("First is done");
    promisifiedTimeout(5000).then(function(){
        console.log("Second one is done");
    })
})