import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {/* Applying Inline styling --- passing as JS objects */}
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: '#00356B',
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;