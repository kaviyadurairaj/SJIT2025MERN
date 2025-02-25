const express = require('express');
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 
dotenv.config(); 
const Signup=require('./models/signupSchema')
const app = express();
app.use(express.json())
const PORT = 3001;

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log(" MongoDB connection successful"))
.catch((err) => console.log(" Check your connection string:", err));


app.get("/", (req, res) => {
    res.send("<h1>Welcome to backend....</h1>"); 
});
app.post("/signup",(req,res)=>{
    try{
        console.log(req.body)
        const{firstName,lastName,email,password,phoneNumber}=req.body
    const newSignup=new Signup({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password,
        phoneNumber:phoneNumber,
    });
    newSignup.save()
    console.log("Signup Successfully")
    res.status(201).json({message:"Signup Successully..",isSignup:true})

    }
    catch(error){
        res.status(201).json({message:"Signup unSuccessully..",isSignup:false})

    }
});

app.listen(PORT, () => console.log(` Server started successfully on port ${PORT}`)); 

