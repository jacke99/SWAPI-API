import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [navBarClassName, setNavBarClassName] = useState("home-navbar");
  const [navListClassName, setNavListClassName] = useState("home-nav-list");
  const [listItemClassName, setListItemClassName] =
    useState("home-nav-list-item");
  const [toggleHomeBtn, setToggleHomeBtn] = useState("home-btn");
  const [toggleContainer, setToggleContainer] = useState("");

  const showNav = () => {
    setNavBarClassName("navbar");
    setNavListClassName("nav-list");
    setListItemClassName("nav-list-item");
    setToggleHomeBtn("nav-title");
    setToggleContainer("navbar-container");
  };

  const showHomeNav = () => {
    setNavBarClassName("home-navbar");
    setNavListClassName("home-nav-list");
    setListItemClassName("home-nav-list-item");
    setToggleHomeBtn("home-btn");
    setToggleContainer("");
  };

  //Renders correct nav if page is refreshed
  useEffect(() => {
    if (location.pathname === "/SWAPI-API") {
      showHomeNav();
    } else if (location.pathname === "/SWAPI-API/") {
      showHomeNav();
    } else {
      showNav();
    }
  }, [location.pathname]);

  return (
    <div className={toggleContainer}>
      <nav className={navBarClassName}>
        <Link to={"/SWAPI-API"} className="links" onClick={() => showHomeNav()}>
          <h3 className={toggleHomeBtn}>Home</h3>
        </Link>

        <ul className={navListClassName}>
          <Link
            to={"/SWAPI-API/Characters"}
            className="links"
            onClick={() => showNav()}>
            <li className={listItemClassName}>Characters </li>
          </Link>

          <Link
            to={"/SWAPI-API/Planets"}
            className="links"
            onClick={() => showNav()}>
            <li className={listItemClassName}>Planets</li>
          </Link>

          <Link
            to={"/SWAPI-API/Films"}
            className="links"
            onClick={() => showNav()}>
            <li className={listItemClassName}>Films</li>
          </Link>

          <Link
            to={"/SWAPI-API/Species"}
            className="links"
            onClick={() => showNav()}>
            <li className={listItemClassName}>Species</li>
          </Link>

          <Link
            to={"/SWAPI-API/Vehicles"}
            className="links"
            onClick={() => showNav()}>
            <li className={listItemClassName}>Vehicles</li>
          </Link>

          <Link
            to={"/SWAPI-API/Starships"}
            className="links"
            onClick={() => showNav()}>
            <li className={listItemClassName}>Starships</li>
          </Link>
        </ul>
        <div className="empty-div"></div>
      </nav>
    </div>
  );
};

export default NavBar;
