import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  return (
    <Menu right width={"13em"}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/people">
        Characters
      </a>
      <a className="menu-item" href="/planets">
        Planets
      </a>
      <a className="menu-item" href="/films">
        Films
      </a>
      <a className="menu-item" href="/species">
        Species
      </a>
      <a className="menu-item" href="/vehicles">
        Vehicles
      </a>
      <a className="menu-item" href="/starships">
        Starships
      </a>
    </Menu>
  );
};

export default HamburgerMenu;
