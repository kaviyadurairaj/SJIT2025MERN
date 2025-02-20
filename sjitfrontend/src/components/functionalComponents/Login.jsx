import "../../css/Login.css"
import {useState} from "react";
function Login() {
  const[data,setdata]=useState({
    name:"",
    email:"",
    password:"",

  });
  const handleinput=(h)=>{
    setdata({...data,[h.target.name]:h.target.value});
  };
  const handlesubmit=(h)=>{
    console.log("form submitted:",data);
    alert("form submitted successfully");
  };
    return (
      <div class="container">
        <h2>Enter the required details:</h2><br/>
      <form onSubmit={handlesubmit}>
        <label>Name: </label>
        <input type="text" name="name" value={data.name} onChange={handleinput} required/><br/><br/>
        <label>Email: </label>
        <input type="text" name="email" value={data.email} onChange={handleinput} required/><br/><br/>
        <label>password: </label>
        <input type="text" name="password" value={data.password} onChange={handleinput} required/><br/><br/>
        <button type="submit">Submit</button>

      </form>
      <p>Have an account<a href="/SignUp">Login</a></p>
      </div>

    )
    }
  
  export default Login;
