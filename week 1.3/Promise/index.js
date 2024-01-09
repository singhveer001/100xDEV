// Async chaining

function medicine2(){
    console.log("Medicine 2 received");
}

function medicine1(){
    console.log("Medicine 1 recieved");
    setTimeout(medicine2,2000)            
}
setTimeout(medicine1,2000);    // this is callback => we call function inside function (setTimeout is also function)

// Next is callback file