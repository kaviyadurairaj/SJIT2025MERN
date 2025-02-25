import CoE from "./CoE";

const Faculty = ({ sgpa, cgpa }) => {
    return (
        <div>
            <h1>Faculty is correcting papers.</h1>
            <CoE sgpa={sgpa} cgpa={cgpa} />
        </div>
    );
};

export default Faculty;
