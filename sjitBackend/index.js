const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt"); // Import bcrypt
dotenv.config();

const Signup = require("./models/signupSchema");

const app = express();
app.use(express.json());

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

    // **Hash the password before saving**
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newSignup = new Signup({
      firstName,
      lastName,
      email,
      password: hashedPassword, // Store the hashed password
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

app.listen(PORT, () =>
  console.log(`Server started successfully on port ${PORT}`)
);
