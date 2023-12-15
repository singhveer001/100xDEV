// Callback hell
// This look like very messi and non understandable


setTimeout(()=>{
    console.log("Medicine 1 recieved");
        setTimeout(()=>{
            console.log("Medicine 2 received");
                 setTimeout(()=>{
                     console.log("Medicine 3 received");
        },2000)
    },2000)

},2000)
