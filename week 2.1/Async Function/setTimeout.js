// Asynchronous Functions => setTimeout(function,time) , readFile , setInterval

console.log("Code Start");

function onDone(){
    console.log("Hello There");
}

setTimeout(onDone,3000);

console.log("Code end");