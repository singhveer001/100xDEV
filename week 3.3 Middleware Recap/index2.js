const express = require("express")

const app = express()

// Middleware 
function isOldEnoughMiddleware(req,res,next){  // here next is coming new word
    const age = req.query.age;
    if(age>=14){
        next();
    }else{
        res.json({
            msg: "Sorry you are not of age yet"
        })
    }
}

// if you know any middleware and you have to use that middleware again and again in every route so in place of writing 
// that middleware name in every route you can directly write app.use(middleware name)
// so doing this you dont have to wiite middleware name in evry route

// app.use(isOldEnoughMiddleware);  // This part i'm commented because i writte middleware name in rotes
// one importent thing app.use can cath only below routes if we declare route first and then below that route
// use app.use then middleware dosent work, so order matters , so intoduce before declaring route so it can available for all route
app.get('/ride1',isOldEnoughMiddleware,function(req,res,next){
   
    res.json({
        msg : "You have successfully riden the ride 1"
    })
  
})

app.get('/ride2',isOldEnoughMiddleware,function(req,res){
   
     res.json({
         msg : "You have successfully riden the ride 2"
     })
    
 })

app.listen(3300,function(){
    console.log("Server started");
})