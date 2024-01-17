// Creating an http server
// using express
// node default library => no
const express = require("express");

const app = express();

function calculateSum(n){
    let ans =0;
    for(let i=0; i<n; i++){
        ans = ans + i;
    }
    return ans;
}

app.get('/',function(req,res){
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send("Hi you answer is :" + ans.toString());
})

app.listen(3004);