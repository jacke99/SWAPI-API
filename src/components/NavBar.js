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

  const showNav = () => {
    setNavBarClassName("navbar");
    setNavListClassName("nav-list");
    setListItemClassName("nav-list-item");
    setToggleHomeBtn("nav-title");
  };
  const showHomeNav = () => {
    setNavBarClassName("home-navbar");
    setNavListClassName("home-nav-list");
    setListItemClassName("home-nav-list-item");
    setToggleHomeBtn("home-btn");
  };

  useEffect(() => {
    if (location.pathname === "/") {
      showHomeNav();
    } else {
      showNav();
    }
  }, [location.pathname]);

  //navbar
  //nav-list
  //nav-list-item
  return (
    <div>
      <nav className={navBarClassName}>
        <Link to={"/"} className="links" onClick={() => showHomeNav()}>
          <h3 className={toggleHomeBtn}>Home</h3>
        </Link>

        <ul className={navListClassName}>
          <Link to={"People"} className="links" onClick={() => showNav()}>
            <li className={listItemClassName}>People</li>
          </Link>

          <Link to={"Planets"} className="links" onClick={() => showNav()}>
            <li className={listItemClassName}>Planets</li>
          </Link>

          <Link to={"Films"} className="links" onClick={() => showNav()}>
            <li className={listItemClassName}>Films</li>
          </Link>

          <Link to={"Species"} className="links" onClick={() => showNav()}>
            <li className={listItemClassName}>Species</li>
          </Link>

          <Link to={"Vehicles"} className="links" onClick={() => showNav()}>
            <li className={listItemClassName}>Vehicles</li>
          </Link>

          <Link to={"Starships"} className="links" onClick={() => showNav()}>
            <li className={listItemClassName}>Starships</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
