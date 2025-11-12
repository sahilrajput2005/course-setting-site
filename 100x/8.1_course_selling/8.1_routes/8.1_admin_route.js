const { Router } = require("express")
const adminRouter = Router()
const {adminModel} = require("../db")
const {courseModel}  = require("../db")
const z = require("zod")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const JWT_ADMIN_SECRET = "Admin123"
const adminMiddleware = require("./8.1_middleware/admin")

// bcrypt , zod , jsonwebtoken

adminRouter.post("/signup", async (req, res) => {
    const {email , password ,firstname , lastname } = req.body;

      // Adding zod validation , Hashing the password 
    try{
        const hashedPassword = await bcrypt.hash(password , 3)
        await adminModel.create({
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

adminRouter.post("/signin",async (req, res) => {
    const {email , password}  = req.body;
    const admin = await adminModel.findOne({
        email:email
    })
    const passwordMatched = await bcrypt.compare(password , admin.password);
       if (passwordMatched) {
            const token = jwt.sign({
                id : admin._id.toString()
            },JWT_ADMIN_SECRET)
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

adminRouter.get("/courses/bulk",async (req, res) => {
    const createrId = req.userid;
    const courses = await courseModel.find({createrId:createrId})
    res.json({
        message:"Courses....", 
        courses
    })
})

adminRouter.post("/courses" , async (req, res) => {
    const createrId = req.userid;
    const {title , description , imageurl , price} = req.body;
    const course = await courseModel.create(
        {
            title:title,
            description: description,
            imageurl:imageurl,
            price:price,
            createrId:createrId
        }
    )
    res.json({
        message:"Course Created", 
        createrId : course._id
    })

})

adminRouter.put("/courses" , async (req, res) => {
    const createrId = req.userid;
    const {title , description , imageurl , price , courseid} = req.body;

    const course = await adminModel.updateOne({_id:courseid , createrId:createrId},
        {
            title:title,
            description: description,
            imageurl:imageurl,
            price:price,
            createrId:createrId
        }
    )
    res.json({
        message:"Course Updated....", 
        createrId : course._id
    })

})

module.exports = { adminRouter: adminRouter }