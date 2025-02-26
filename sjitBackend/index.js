const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require('bcryptjs');
const cors = require("cors"); 

dotenv.config();

const Signup = require("./models/signupSchema");

const app = express();
app.use(express.json());
app.use(cors()); 

const PORT = 3001;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.log("Check your connection string:", err));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to backend....</h1>");
});

app.post("/signup", async (req, res) => {
  try {
    console.log("Received Data:", req.body);
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newSignup = new Signup({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    await newSignup.save();
    console.log("Signup Successfully");

    res.status(201).json({ message: "Signup Successfully..", isSignup: true });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: "Signup Unsuccessful..", isSignup: false });
  }
});

app.post("/login", async (req, res) => {
  try {
    console.log("Login Request Data:", req.body);
    const { email, password } = req.body;

    const user = await Signup.findOne({ email });
    console.log("User Found:", user);

    if (!user) {
      return res.status(400).json({ message: "User not found", isLogin: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password Match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password", isLogin: false });
    }

    console.log("Login Successful");
    res.status(200).json({ message: "Login Successful", isLogin: true });

  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ message: "Login Unsuccessful", isLogin: false });
  }
});


app.listen(PORT, () =>
  console.log(`Server started successfully on port ${PORT}`)
);


