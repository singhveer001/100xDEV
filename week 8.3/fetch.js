// Axios

function main(){
    fetch("https://sum-server.100xdevs.com/todos")
        .then( async (response) =>{
            const json = await response.json();
            // console.log(json.todos.length);
            console.log(json);
        })
}

// This is also same as above (this is async await syntx and upper part is .then)
async function main(){
        const response = await fetch("https://sum-server.100xdevs.com/todos")
        const json = await response.json();
        console.log(json.todos.length);
}

main();