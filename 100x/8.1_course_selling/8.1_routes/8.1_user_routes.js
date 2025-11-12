const {Router} = require("express")
const { userModel} = require("../db")
const z = require("zod")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const JWT_USER_SECRET = "User123"
const userRouter = Router()



userRouter.post("/signup",async (req,res)=>{
    const {email , password ,firstname , lastname } = req.body;

      // Adding zod validation , Hashing the password 
    try{
        const hashedPassword = await bcrypt.hash(password , 3)
        await userModel.create({
            email : email,
            password : hashedPassword,
            firstname : firstname,
            lastname: lastname 
           })
           res.json({
               message: "you are signed up "
           })}
       catch(error){
           console.log(error)
           res.json({
               message :"Something went wrong, Data does not got stored in Database"
           })
       } 
})

userRouter.post("/signin" , async (req,res)=>{
    const {email , password}  = req.body;

    const user = await userModel.findOne({
        email:email
    })
    const passwordMatched = await bcrypt.compare(password , user.password);
       if (passwordMatched) {
            const token = jwt.sign({
                id : user._id.toString()
            },JWT_USER_SECRET)
            res.json({
                token : token,
                message : "Successful Signin"
            })
        }else {
            res.status(403).json({
                message: "Wrong Credentials......"
            })
        }
})

userRouter.get("/purchases" , (req,res)=>{
    
    res.json({
        "message": "Your purchased endpoint is Ready"
    })
})


module.exports = {
    userRouter : userRouter
}