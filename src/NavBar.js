import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Shreyanshi's interview scheduler</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/schedule" class="red-btn">
          Schedule New Interview
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;  
