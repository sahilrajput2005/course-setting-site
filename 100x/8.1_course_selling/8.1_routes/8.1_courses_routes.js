const { Router } = require("express")
const { purchaseModel , courseModel } = require("../db")
const courseRouter = Router()

courseRouter.get("/purchase",async (req, res) => {
    const userId = req.userId
    const courseId = req.body.courseId

    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        "message" : "You have successfully purchased this course....."
    })
})

courseRouter.get("/preview",async (req, res) => {
    const courses = await courseModel.find({})
    res.json({
        "Message" : "All Courses",
        courses 
                                                                              
    })
})

module.exports = { courseRouter: courseRouter }

