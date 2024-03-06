const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;  // Bearer tokem
    // Bearer asdasdasfn => ["Bearer", "asdasdasfn"]
    const words =  token.split(" ")  // ["Bearer" , "token"]
    const jwtToken = words[1];  //token

    const decodedValue = jwt.verify(jwtToken,JWT_SECRET);
    if(decodedValue.username){
        next();
    }else{
        res.status(403).json({
            message:"You are not authenticated "
        })
    }

}

module.exports = adminMiddleware;