const express = require("express")

const { userRouter } = require("./8.1_routes/8.1_user_routes.js")
const { courseRouter } = require("./8.1_routes/8.1_courses_routes.js")
const { adminRouter } = require("./8.1_routes/8.1_admin_route.js")
const app = express()
app.use(express.json())
app.use(express.urlencoded())

app.use("/user", userRouter)
app.use("/courses", courseRouter)
app.use("/admin", adminRouter)

app.listen(3000, () => {
    console.log("Server Running..")
})