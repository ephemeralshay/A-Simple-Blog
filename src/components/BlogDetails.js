import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
    //Using useParams to lead to a specific blog with certain 'id' 
    const { id } = useParams();
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs' + id);
    //Using useHistory for programmatic redirections
    const history = useHistory();

    const handleClick = () => {
        //Deletes blog with specific id --- a refersh doesn't bring it back
        fetch('http://localhost:8000/blogs' + blogs.id, {
            method: 'DELETE'
        })
            .then(() => {
                //Redirect to homepage
                history.push('/');
            })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}
export default BlogDetails;
