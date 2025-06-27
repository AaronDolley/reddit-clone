import React, { useState } from "react";
import './create.css';


const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Created Post', {title, body});
    };

    return (
        <div className='create-post'>
            <h2>Create a post</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required/>
                <textarea
                placeholder="Body text (optional)"
                value={body}
                onChange={(e) => setBody(e.target.value)}/>
                <button type="submit">Post</button>
            </form>
        </div>
    )
};

export default Create;