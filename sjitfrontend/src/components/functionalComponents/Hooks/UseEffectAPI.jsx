import { useEffect, useState } from "react";
import axios from 'axios';

const UseEffectAPI = () => {
    const [posts, setPosts] = useState([]); 

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res.data);
                setPosts(res.data); 
            })
            .catch((err) => console.log("Couldn't fetch the API", err));
    }, []); 

    return (
        <div>
            <h1>This is a useEffect example with an API call</h1>
            <h2>We are fetching data from JSONPlaceholder and displaying it.</h2>
            
            <ol class="api-list">  
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ol>

            <button onClick={() => { console.log("clicked successfully") }}>Hello</button>
        </div>
    );
};

export default UseEffectAPI;
