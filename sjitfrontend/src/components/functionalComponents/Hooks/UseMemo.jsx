import { useState, useMemo } from "react";

const UseMemoExample = () => {
    const [number, setNumber] = useState("");
    const [theme, setTheme] = useState(false);

    const db = useMemo(() => {
        return number * 2;
    }, [number]);

    const styling = {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",

    };

    return (
        <> 
            <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
            
            <div style={styling}>
                <h1>This is a useMemo example.</h1>
                Type your number:{" "}
                <input 
                    type="number" 
                    value={number} 
                    onChange={(e) => setNumber(parseInt(e.target.value) )}
                />
                <h2>The number typed is: {number}</h2>
                <h2>The doubled number is: {db}</h2>
            </div>
        </>
    );
};

export default UseMemoExample;
