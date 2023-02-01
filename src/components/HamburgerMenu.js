import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  return (
    <Menu right width={"13em"}>
      <a className="menu-item" href="/SWAPI-API">
        Home
      </a>
      <a className="menu-item" href="/SWAPI-API/Characters">
        Characters
      </a>
      <a className="menu-item" href="/SWAPI-API/Planets">
        Planets
      </a>
      <a className="menu-item" href="/SWAPI-API/Films">
        Films
      </a>
      <a className="menu-item" href="/SWAPI-API/Species">
        Species
      </a>
      <a className="menu-item" href="/SWAPI-API/Vehicles">
        Vehicles
      </a>
      <a className="menu-item" href="/SWAPI-API/Starships">
        Starships
      </a>
    </Menu>
  );
};

export default HamburgerMenu;
