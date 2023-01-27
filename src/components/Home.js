import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav>
      <ul className="nav-list">
        <Link to={"People"} className="home-nav">
          <li className="nav-list-item">People</li>
        </Link>
        <Link to={"Planets"} className="home-nav">
          <li className="nav-list-item">Planets</li>
        </Link>

        <Link to={"Films"} className="home-nav">
          <li className="nav-list-item">Films</li>
        </Link>

        <Link to={"Species"} className="home-nav">
          <li className="nav-list-item">Species</li>
        </Link>
        <Link to={"Vehicles"} className="home-nav">
          <li className="nav-list-item">Vehicles</li>
        </Link>
        <Link to={"Starships"} className="home-nav">
          <li className="nav-list-item">Starships</li>
        </Link>
      </ul>
    </nav>

    // <div className="home-page">
    //   <h1 className="home-page-title">Starwars Database</h1>
    //   <h2>People</h2>
    //   <h2>Planets</h2>
    //   <h2>Films</h2>
    //   <h2>Species</h2>
    //   <h2>Vehicles</h2>
    //   <h2>Starships</h2>
    // </div>
  );
};

export default Home;
