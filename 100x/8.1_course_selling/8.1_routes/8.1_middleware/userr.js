const jwt = require("jsonwebtoken")
const JWT_ADMIN_SECRET = "Admin123"


function userMiddleware(res , req , next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token , JWT_ADMIN_SECRET)

    if(decoded){
        req.userid = decoded.id;
        next()
    }else {
        res.status(403).json({
            message : "You are not signed in"
        })
    }
}

module.exports = {
    userMiddleware : userMiddleware
}