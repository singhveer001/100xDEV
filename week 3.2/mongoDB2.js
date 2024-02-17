// How to create backend server that can store data in the database

const express = require("express");
// const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://user1:user1%401@cluster0.zdn8o0x.mongodb.net/userapp");

const User = mongoose.model("Users", {
    name: String,
    email: String,
    password: String
  });

app.post("/signup", async function(req,res){

    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const exisingUser = await User.findOne({email:username});
    if(exisingUser){
        return res.status(400).send("Username already exist");
    }

    const user =new User( {
        name: name,
        email: username,
        password: password,
      });

     user.save();
      res.json({
        "msg": "User created successfully"
      })
})

app.listen(3077,function(){
    console.log("Server started");
});