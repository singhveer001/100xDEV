const zod = require("zod");

// {
// email => string => should look like email
// password => should have 8 letter
// }

function validateInput(obj){

const schema = zod.object({
    email : zod.string().email(),
    password : zod.string().min(8)
})

const response = schema.safeParse(obj)
console.log(response);
}

// validateInput(["1",2,3])
validateInput({
    email : "Veer@gmail.com",
    password : "veersingh"
})