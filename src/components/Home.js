import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
    //Using Custom Hook to fetch data and other parameters
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs/');

    return (
        <div className="home">

            {/* Conditional Templating */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}

export default Home;
