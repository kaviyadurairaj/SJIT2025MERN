 import { useState } from "react";
 function About() {
    const [count,setcount]=useState(0);
    function increment(){
        setcount(count+1);
    }
    function decrement(){
        setcount(count-1);
    }
    return (
        <div>
            <h2>About Page</h2><br/>
            <h3>INCREMENT AND DECREMENT</h3>
            <h3>Initial Value:{count}</h3>
            <button onClick={increment}> +</button>
            <button onClick={decrement}>-</button>
            <br/>
        </div>
    )
  }
  
  export default About;
  