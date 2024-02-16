const express = require("express");
const jwt = require("jsonwebtoken")
const jwtPassword = "123456";


const app = express();
app.use(express.json());
const ALL_USERS = [
    {
        username:"veer@gmail.com",
        password:"123",
        name: "Veer singh"
    },
    {
        username:"veerbhan@gmail.com",
        password:"1234",
        name: "Veerbhan singh"
    },
    {
        username:"veersingh@gmail.com",
        password:"123123",
        name: "Veersingh"
    }
]


function userExists(username,password){
    // write return logic to return true or false if this user exist
    // in ALL_USERS array
    // hard todo - try to use the find function in js
    let userExists = false;
    for(let i=0; i<ALL_USERS.length;i++){
        if( ALL_USERS[i].username == username &&  ALL_USERS[i].password == password){
            userExists =  true;
        }
    }
   
    return userExists;


}

// POST /signin: Accepts a username and password in the request body, 
// checks if the user exists in the ALL_USERS array, and if so, generates a JWT containing the username. 
// It returns the JWT as a response.

app.post('/signin',function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    if(!(userExists(username,password))){
        return res.status(403).json({
            msg:"User dosen't exist in memory db",
        })
    }


    var token = jwt.sign({username:username},jwtPassword);
    return res.json({
        token,
    })
})

// GET /users: Requires a JWT in the request header for authentication. 
// It decodes the JWT to extract the username, 
// then returns a list of all users (from ALL_USERS) excluding the user with the decoded username.

app.get("/users",function(req,res){
        
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username 
        res.json({
            users: ALL_USERS.filter(function(value){
                if(value.username == username){
                    return false;
                }else{
                    return true;
                }
            })
        })
})

app.listen(4002,function(){
    console.log("running on port 4002");
}); 