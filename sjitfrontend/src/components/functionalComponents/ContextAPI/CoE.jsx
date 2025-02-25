import StudentResults from "./StudentResults";

const CoE = ({ sgpa, cgpa }) => {
    return (
        <div>
            <h1>Results Published</h1>
            <StudentResults sgpa={sgpa} cgpa={cgpa} />
        </div>
    );
};

export default CoE;
