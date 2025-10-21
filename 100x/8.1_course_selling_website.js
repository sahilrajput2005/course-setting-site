const express = require("express")
const {CreateUserRoutes} = require("./8.1_routes")
const {CreateCoursesRoutes} = require("./8.1_routes")
const { userRouter } = require("./8.1_routes/8.1_user_routes")
const { courseRouter } = require("./8.1_routes/8.1_courses_routes")
const app = express()

app.use("/user", userRouter)
app.use("/courses", courseRouter)

app.listen(3000,()=>
{
    console.log("Server Running..")
})