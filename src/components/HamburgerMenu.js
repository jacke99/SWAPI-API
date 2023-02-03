import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  return (
    <Menu right width={"13em"}>
      <Link to={"/SWAPI-API"} className="menu-item">
        Home
      </Link>
      <Link to={"/SWAPI-API/Characters"} className="menu-item">
        Characters
      </Link>
      <Link to={"/SWAPI-API/Planets"} className="menu-item">
        Planets
      </Link>
      <Link to={"/SWAPI-API/Films"} className="menu-item">
        Films
      </Link>
      <Link to={"/SWAPI-API/Species"} className="menu-item">
        Species
      </Link>
      <Link to={"/SWAPI-API/Vehicles"} className="menu-item">
        Vehicles
      </Link>
      <Link to={"/SWAPI-API/Starships"} className="menu-item">
        Starships
      </Link>
    </Menu>
  );
};

export default HamburgerMenu;
