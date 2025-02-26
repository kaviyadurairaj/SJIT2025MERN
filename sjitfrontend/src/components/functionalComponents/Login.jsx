import "../../css/Login.css";
import { useState } from "react";
import axios from "axios"; // Import Axios

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (h) => {
    setData({ ...data, [h.target.name]: h.target.value });
  };

  const handleSubmit = async (h) => {
    h.preventDefault(); // Prevent page reload

    console.log("Form submitted:", data);

    try {
      const response = await axios.post("http://localhost:3001/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert(response.data.message); // Show success or error message

      if (response.data.isLogin) {
        console.log("Login successful:", response.data);
        // Optionally store authentication token in localStorage
        // localStorage.setItem("token", response.data.token);

        // Redirect user to dashboard after login (example)
        // window.location.href = "/dashboard";
      }
    } catch (error) {
      if (error.response) {
        // Handle server errors
        alert(error.response.data.message);
      } else {
        console.error("Login failed:", error);
        alert("Login failed! Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <h2>Enter Login Details:</h2>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type="text" name="email" value={data.email} onChange={handleInput} required />
        <br />
        <br />
        <label>Password: </label>
        <input type="password" name="password" value={data.password} onChange={handleInput} required />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}

export default Login;
