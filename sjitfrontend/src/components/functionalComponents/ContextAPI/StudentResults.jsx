const StudentResults = ({ sgpa, cgpa }) => {
    return (
        <div>
            <h1>Result:</h1>
            <h2>SGPA: {sgpa}</h2>
            <h3>CGPA: {cgpa}</h3>
        </div>
    );
};

export default StudentResults;
