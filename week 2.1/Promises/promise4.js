
function myOwnPromisifedTimeout(){
    return new Promise(function(onDone,onError){
        onError();
    })
}

const p = myOwnPromisifedTimeout();
// This is how promisfed function signal error
p.then(function(){

})
.catch(function(){

})


//This is how Non promisifed function signalify error

fs.readFile( "a.txt","utf-8",function(err,data){

})