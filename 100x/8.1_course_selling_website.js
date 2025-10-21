const express = require("express")
const app = express()

app.post("/user/signup", (req,res)=>{

    res.json({
        "message": "Your Signup endpoint is Ready"
    })
})

app.post("user/signin" , (req,res)=>{
    
    res.json({
        "message": "Your Signin endpoint is Ready"
    })
})

app.get("user/purchases" , (req,res)=>{
    
    res.json({
        "message": "Your purchased endpoint is Ready"
    })
})

app.get("courses/purchase" , (req,res)=>{

    // You would expect the user to pay you money.
    res.json({
        "message": "Your purchasing endpoint is Ready"
    })
})
app.get(("courses" , (req,res)=>{

    res.json({
        "message": "All Courses endpoint is Ready"
    })
}))



app.listen(3000,()=>
{
    console.log("Server Running..")
})