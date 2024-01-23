// Why do you need input validation?
// Lets see with an example
// What if the user sends you wrong input 

const express = require("express");
const app = express();

app.use(express.json());

app.post('/health-Checkup', function(req,res){
    // kidneys: [1,2]
    const kidneys = req.body.kidneys;  
    // so in body client can send wrong input (anything like number text or anything)
    // so its our responsibility to do input validation, so if client trying wrong input so it give error
    if(!kidneys){
        res.json({
            msg : "Wrong inputs"
        })
    }
    else{
    const kidneyLength = kidneys.length;
    res.send("you have " + kidneyLength + "kidneys");
    }
})


    // Global catches => another middleware => Used to show error in right way not show all directory details error
    // Global catches help you give the user a Better error messsage 
    // we can use this middleware in place of line 15 to 19 (another way)=> and we use this middleware in the end
    app.use(function(err,req,res,next){
        res.status(500).json({
            msg : "Sorry something is up with our server"
        })
    })

app.listen(3014)



// global catches
// Error-Handling-middleware: This is a special type of middleware function in express that has four arguments
// insted of three (`(err,req,res,next)`). 
// Express recognizes it as an error-handling middleware because of these four arguments.