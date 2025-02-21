import { useState, useCallback } from "react";

const UseCallbackExample = () => {
    const [number, setNumber] = useState(0);

   
    var numList = useCallback((mul) => {
        return [number*mul*2,number*mul*4,number*mul*8]
    }, [number]);

    return (
        <div>
            <h1>This is UseCallback Example</h1>
            Number Box:{" "}
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <h2>the number list is </h2>
            {numList(10).map((num, index) => (
                    <h2 key={index}>{num}</h2> 
                ))}
        </div>
    );
};

export default UseCallbackExample;
