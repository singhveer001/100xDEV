// Creating login input validation for facebook => at the time of login checking email or pssword are valid or not

const express = require("express")
const zod = require("zod");
const app = express();

app.use(express.json())

function validateInput(obj){
    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8)
    })
    
    const response = schema.safeParse(obj)
    return response;
}

app.post("/login",function(req,res){
        const response = validateInput(req.body);
        if(!response.success){
            res.status(411).json({
                msg: "Your input are invalid"   
            })
            return ;
        }
        res.send("Your password is correct");
        // res.send(response);
        
})

app.listen(3016,()=>{
    console.log("Server started");
})