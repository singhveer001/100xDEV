

const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

// Now here we see how we write schema(commented part)
//  {
//     email : string => email,
//     password : atleast 8 letter 
//     country : "IN","US"
// }

/*
// Converting upper structure(focus on syntax of schrma to familiar)
const schema = zod.object({
    email : zod.string(),
    password : zod.string(),
    country : zod.literal("IN").or(zod.literal("US")),
    kidneys : zod.array(zod.number())
})
*/


app.use(express.json());

app.post("/health-checkup",(req,res)=>{
    const kidneys= req.body.kidneys;
    const response = schema.safeParse(kidneys)
   
    if(!response.success){   // Agar success nhi hua to ye dega 
        res.status(411).json({
            msg : "Input is invalid"
        })
    } 
    else{
    res.send({    // Agar if part na likh ke direct ye likhenge to detail error ayega zod ke help se
        response
    })
    }
});

app.listen(3015);


/* 
// Zod
When you define data types (schemas) with Zod, 
it not only helps you enforce the structure of your data 
but also assists in handling errors that might occur during validation.

When you use Zod to validate data against a schema, it may encounter errors if the data doesn't conform to the specified structure.
Zod provides detailed error messages that can be helpful in understanding what went wrong during the validation process.
*/