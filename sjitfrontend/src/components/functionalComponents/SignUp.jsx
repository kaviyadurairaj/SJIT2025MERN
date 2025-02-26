import "../../css/Signup.css";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/signup", data);

      if (response.data.isSignup) {
        alert("Signup successful!");
        window.location.href = "/login";
      } else {
        alert(response.data.message || "Signup failed! Please try again.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Network error! Please check your backend server.");
    }
  };

  return (
    <div className="container">
      <h2>Enter the Details</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleInput}
          required
        />
        <br />
        <br />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={handleInput}
          required
        />
        <br />
        <br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleInput}
          required
        />
        <br />
        <br />

        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={data.phoneNumber}
          onChange={handleInput}
          required
        />
        <br />
        <br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleInput}
          required
        />
        <br />
        <br />

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account?{" "}
        <a href="/login" style={{ color: "white", backgroundColor: "gray" }}>
          Login
        </a>
      </p>
    </div>
  );
}

export default SignUp;
