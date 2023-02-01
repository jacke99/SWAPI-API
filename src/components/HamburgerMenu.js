import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  return (
    <Menu right width={"13em"}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/People">
        Characters
      </a>
      <a className="menu-item" href="/Planets">
        Planets
      </a>
      <a className="menu-item" href="/Films">
        Films
      </a>
      <a className="menu-item" href="/Species">
        Species
      </a>
      <a className="menu-item" href="/Vehicles">
        Vehicles
      </a>
      <a className="menu-item" href="/Starships">
        Starships
      </a>
    </Menu>
  );
};

export default HamburgerMenu;
