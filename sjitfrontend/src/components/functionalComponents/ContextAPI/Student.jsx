import Faculty from "./Faculty";

const Student = ({ sgpa, cgpa }) => {
    return (
        <div>
            <h1>Students are writing exams.</h1>
            <Faculty sgpa={sgpa} cgpa={cgpa} />
        </div>
    );
};

export default Student;
