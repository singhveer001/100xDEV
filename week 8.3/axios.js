const axios = require("axios")

// async function main(){
//     const response = await fetch("https://sum-server.100xdevs.com/todos")
//     const json = await response.json();
//     console.log(json.todos.length);
// }

// using axios library
async function main(){
    const response = await axios.get("https://sum-server.100xdevs.com/todos")
    // response.data
    console.log(response.data.todos.length);
}

main()
// axios
// It will automatically understand ki data that coming back is json (means directly data mil rha upper part jaisa await nhi karna pad rha json data ko)
