
// promisify this async function 
// Returned undefined
/*
function myOwnSetTimeout(callback,duration){
    setTimeout(function(){
        callback();
    },duration);
}
*/

// Returning a promise
// Defining
function promisifyiedMyOwnSetTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration)
    });
    return p;
}

// Calling
let ans = promisifyiedMyOwnSetTimeout(1000);
ans.then(function(){
    console.log("Timeout is done");
})
