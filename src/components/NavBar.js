import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to={"/"} className="links">
        <h3 className="nav-title">Home</h3>
      </Link>
      <ul className="nav-list">
        <Link to={"People"} className="links">
          <li className="nav-list-item">People</li>
        </Link>
        <Link to={"Planets"} className="links">
          <li className="nav-list-item">Planets</li>
        </Link>

        <Link to={"Films"} className="links">
          <li className="nav-list-item">Films</li>
        </Link>

        <Link to={"Species"} className="links">
          <li className="nav-list-item">Species</li>
        </Link>
        <Link to={"Vehicles"} className="links">
          <li className="nav-list-item">Vehicles</li>
        </Link>
        <Link to={"Starships"} className="links">
          <li className="nav-list-item">Starships</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
