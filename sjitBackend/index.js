const express= require('express')
const app=express()
app.get("/",(req,res)=>{
res.send("<h1>wlecome to backend server</h1>")
})
const PORT=3001
app.listen(PORT,()=>console.log("server satrted succesfully"))