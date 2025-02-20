 import { useState } from "react";
 function About() {
    var styling={
        textAlign:"center",
        backgroundColor:"pink",
        color:"black"
    }
    var a=10;
    const [count,setcount]=useState(a);
    function increment(){
        setcount(count+1);
    }
    function decrement(){
        setcount(count-1);
    }
    function reset(){
        setcount(a)
    }
    return (
        <div>
            <h1 style={styling}>About Page</h1><br/>
            <h3>INCREMENT AND DECREMENT</h3>
            <h3>Initial Value:{count}</h3>
            <button onClick={increment}> +</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
            <br/>
        </div>
    )
  }
  
  export default About;
  