// Creating middleware to find number of request

const express = require("express");
const app = express();

let numberOfRequest = 0;

function calculateRequest(req,res,next){
    numberOfRequest++;
    console.log(numberOfRequest);
    next();
}

app.get('/healthCheckup',calculateRequest,function(req,res){
    
})

app.get('/healthCheckup2',calculateRequest,function(req,res){

})

app.listen(3012);