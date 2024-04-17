// POST request in fetch vs axios
const axios = require("axios")

// POST
// async function main(){
//     const response = await fetch("https://www.toptal.com/developers/postbin/1713385729036-7286765102762",{
//         method: "POST",
//         body : {
//             username : "Veerbhan",
//             password: "123456"
//         },
//         headers : {
//             "Authorization" : "Bearer 123"
//         }
//     });
//     const textualData = await response.text();
//     console.log(textualData);
// }

// POST
// async function main(){
//     const response = await axios.post("https://httpdump.app/dumps/1b33c874-6221-44e5-86d3-ea976a839eee",{
//         username : "Veerbhan",
//         password: "123456"
//     },
//     {
//         headers : {
//             "Authorization" : "Bearer 123"
//         }
//     })
//     console.log(response.data);
// }

// If you do get request 2nd argument will be header , here you can not send body
// async function main(){
//     const response = await axios.get("https://httpdump.app/dumps/1b33c874-6221-44e5-86d3-ea976a839eee",
//     {
//         headers : {
//             "Authorization" : "Bearer 123"
//         }
//     })
//     console.log(response.data);
// }


// One more way to send if you dont want to atach axios.post
async function main(){
    const response = await axios(
    {  
        url: "https://httpdump.app/dumps/1b33c874-6221-44e5-86d3-ea976a839eee",
        method: "POST",
        headers : {
            "Authorization" : "Bearer 123"
            },
        data : {
            "username" : "SVeer"
        }
        }
    );
    console.log(response.data);
}
main();

// Things we can learn
// Change request method
// send body
// Send headers
// Check request on website httpdump.app