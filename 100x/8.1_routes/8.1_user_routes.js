const {Router} = require("express")

const userRouter = Router()

userRouter.post("/user/signup", (req,res)=>{
    res.json({
        "message": "Your Signup endpoint is Ready"
    })
})

userRouter.post("user/signin" , (req,res)=>{
    
    res.json({
        "message": "Your Signin endpoint is Ready"
    })
})

userRouter.get("user/purchases" , (req,res)=>{
    
    res.json({
        "message": "Your purchased endpoint is Ready"
    })
})


module.exports = {
    userRouter : userRouter
}