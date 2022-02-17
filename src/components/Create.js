import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    //Using states to store title, body and author of newly added blogs
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const history = useHistory();

    //Handles the submit functionality
    const handleSubmit = (e) => {
        //Avoids auto-refresh of the page 
        e.preventDefault();
        const blog = { title, body, author };

        //Posting the blog in the JSON
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
            .then(() => {
                //Redirect to 'Home'
                history.push('/');
            })
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            {/* Using forms to input the info from the user */}
            <form onSubmit={handleSubmit}>
                {/* Blog title */}
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {/* Blog Body */}
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                {/* Blog Author */}
                <label>Blog author:</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button>Add Blog</button>
            </form>
        </div>
    );
}

export default Create;

