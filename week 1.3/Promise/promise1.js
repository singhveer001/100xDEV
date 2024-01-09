
function medicine(){
    return new Promise( (resolve,reject) =>{
        setTimeout(resolve,7000);
    } )
}

medicine()
        .then(()=>{
            console.log("Medicine 1 Received");
        })