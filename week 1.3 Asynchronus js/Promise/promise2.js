// same code like promise1 only way of writing is different 

function promiseBody(resolve){
    setTimeout(resolve,10000);
}

function medicine1Get(){
    var  answer = new Promise(promiseBody)
    return answer; // it returns promise
}

function printThings(){
    console.log("Hii There");
}

var medicinePromise = medicine1Get();
console.log(medicinePromise);   // it prints promise

medicinePromise.then(printThings)