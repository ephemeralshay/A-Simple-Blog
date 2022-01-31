import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
    return (
        <div className="blog-list">
            {/* Map Method --- Iterate through all the items in the array */}
            {blogs.map(blog => (
                // Each Blog Preview has a key
                <div className="blog-preview" key={blog.id}>
                    {/* Clicking on blog preview leads to particular blog --- usage of useParams hook */}
                    <Link to={`/blogs/${blogs.id}`}>
                        <h2>{blog.title}</h2>
                        <p> Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
