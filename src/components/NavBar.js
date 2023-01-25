import React from "react";

const NavBar = () => {
  return (
    <nav>
      <h3 className="nav-title">Ewoks</h3>
      <ul className="nav-list">
        <li className="nav-list-item">People</li>
        <li className="nav-list-item">Planets</li>
        <li className="nav-list-item">Films</li>
        <li className="nav-list-item">Species</li>
        <li className="nav-list-item">Vehicles</li>
        <li className="nav-list-item">Starships</li>
      </ul>
    </nav>
  );
};

export default NavBar;
