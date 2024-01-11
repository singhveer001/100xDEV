// function sum(a,b){
    // return a+b ;
// }

function sum(a,b){
    return new Promise(function(resolve){
        resolve(a+b);  // it return the response only not argument
    })
}

// if we have to call this promisifed function

sum.then(function(ans){
    console.log(ans);  // ans is still sum
})