import Student from "./Student";

const Exam = () => {
    const sgpa = "10 SGPA";
    const cgpa = "9.5 CGPA";

    return (
        <div>
            <h1>Today is the exam.</h1>
            <Student sgpa={sgpa} cgpa={cgpa} />
        </div>
    );
};

export default Exam;
