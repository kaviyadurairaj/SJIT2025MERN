import { createContext } from "react";
import StudentResults from "./StudentResults";

// Create a context
export const ResultPublish = createContext();

const CoE = () => {
    return (
        <ResultPublish.Provider value={{ sgpa: "10 SGPA", cgpa: "9.5 CGPA" }}>
            <div>
                <h1>Results Published</h1>
                <StudentResults />
            </div>
        </ResultPublish.Provider>
    );
};

export default CoE;
