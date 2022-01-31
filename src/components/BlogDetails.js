import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
    //Using useParams to lead to a specific blog with certain 'id' 
    const { id } = useParams();
    //Fetching a particular blog from db.json
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    //Using useHistory for programmatic redirections
    const history = useHistory();

    const handleClick = () => {
        //Deletes blog with specific id --- a refersh doesn't bring it back
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            //Redirect to homepage
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;

