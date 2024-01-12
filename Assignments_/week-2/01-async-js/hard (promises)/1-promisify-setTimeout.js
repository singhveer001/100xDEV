/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
console.log("start");
function wait(n) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(`promise Resolve after ${n} seconds`)
        },n * 1000)
    })
}

// wait(5).then(function(value){
//     console.log(value);
// })

module.exports = wait;
