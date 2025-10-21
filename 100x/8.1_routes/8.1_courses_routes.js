const Router = require("express")
const courseRouter = Router()

    courseRouter.get("courses/purchase" , (req,res)=>{
    // You would expect the user to pay you money.
        res.json({
            "message": "Your purchasing endpoint is Ready"
        })
    })

    courseRouter.get("courses/preview" , (req,res)=>{

        res.json({
            "message": "All Courses endpoint is Ready"
        })
    })

module.exports = {
    courseRouter : courseRouter
}