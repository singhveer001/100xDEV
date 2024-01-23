const express = require("express");
const app = express();

app.get('/health-checkup',function(req,res){
    // Do health checks here
    const kidneyId = req.query.kidneyId ;
    const username = req.headers.username;
    const password = req.headers.password ;

    if(username != "Veerbhan" || password != "veer"){
        res.status(403).json({
            msg: "User doesnt exist ",
        });
        return ;
    }

    if(kidneyId !=1 && kidneyId != 2){
        res.status(411).json({
            msg: "Wrong inputs",  
        });
        return ;
    }

    // Do something with kidney here
    res.send("Your heart is healthy ");
})

app.listen(3003,function(){
    console.log("Server started");
});