const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    // Bearer asdasdasfn => ["Bearer", "asdasdasfn"]
    const words =  token.split(" ")
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken,JWT_SECRET);
    // username, type:"admin" | "user"
    // authentication, authorization
    if(decodedValue.username ){
        next();
    }else{
        res.status(403).json({
            message:"You are not authenticated "
        })
    }
}

module.exports = userMiddleware;