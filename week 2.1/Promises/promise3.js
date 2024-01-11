function fn(){
    console.log("Hii there");
}

let X = Promise.resolve(fn());

X.then(function(value){
    console.log(value);
})
