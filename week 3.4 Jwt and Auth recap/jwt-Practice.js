const jwt = require("jsonwebtoken")

// decode,verify , generate

//jwt generation
const value = {
    name: "Harkirat",
    accountNumber: 123123123
}

// jwt (function to generate we use sign)
const token = jwt.sign(value,"secret");
console.log(token);

// This token has been generated using this secret, and hence this token can only be verified using this secret
// this is your jwt/checkbook => eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTcwODMzNjEzNn0.F8IgdanGiRy_mlB9ScOnyysda_S5CUyRecd8tHODHXg
// (and this can be decode by anyone without secret and look at what is inside) => 
// using this token anyone can decode this in jwt.io website
// But without secret anyone other cant verify 


//Verifying 
const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTcwODMzNjc4M30.6rJzA4uuWd-kVLboL6UfSJ9KniXbQE9rtyU15t7oBmI","secret")
                                        
console.log(verifiedValue);

// Anyone can see the content of jwt given the original thing without the secret that was use to sign it but only 
// the server that sign it can verify it , if you try to create another variation of it the server will rejected
