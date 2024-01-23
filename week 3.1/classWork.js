// Find the average time your server is taking to handle rquest

const express = require('express');
const app = express();

const before = new Date();
app.use(express.json())
app.post("/",function(req,res){
    res.json({
        msg : "Your response Recieved",
    })
})

const after = new Date() ;
const totalTime = after - before ;
console.log(totalTime);

app.listen(2013,()=>{
    console.log('Server Started');
});