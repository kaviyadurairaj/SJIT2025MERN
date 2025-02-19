 import { useState } from "react";
 function About() {
    var styling={
        textAlign:"center",
        backgroundColor:"pink",
        color:"black"
    }
    var a=10;
    const [count,setcount]=useState(0);
    function increment(){
        setcount(count+1);
    }
    function decrement(){
        setcount(count-1);
    }
    return (
        <div>
            <h1 style={styling}>About Page</h1><br/>
            <h3>INCREMENT AND DECREMENT</h3>
            <h3>Initial Value:{count}</h3>
            <button onClick={increment}> +</button>
            <button onClick={decrement}>-</button>
            <br/>
        </div>
    )
  }
  
  export default About;
  