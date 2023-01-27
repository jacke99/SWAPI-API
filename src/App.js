import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PeopleInfo from "./components/Info/PeopleInfo";
import PlanetInfo from "./components/Info/PlanetInfo";
import FilmInfo from "./components/Info/FilmInfo";
import SpeciesInfo from "./components/Info/SpeciesInfo";
import VehiclesInfo from "./components/Info/VehiclesInfo";
import StarshipsInfo from "./components/Info/StarshipsInfo";
import Menu from "./components/Menu";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style.css";

function App() {
  // const [active, setActive] = useState(false);

  // const handleClick = () => {
  //   setActive(true);
  // };

  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/People"
            element={
              <Menu
                category={"people"}
                linkTo={"PeopleInfo"}
                title={"Star Wars Character"}
                header={"Characters"}
              />
            }
          />
          <Route path="/PeopleInfo/:id" element={<PeopleInfo />} />

          <Route
            path="/Planets"
            element={
              <Menu
                category={"planets"}
                linkTo={"PlanetInfo"}
                title={"Star Wars Planets"}
                header={"Planets"}
              />
            }
          />
          <Route path="/PlanetInfo/:id" element={<PlanetInfo />} />

          <Route
            path="/Films"
            element={
              <Menu
                category={"films"}
                linkTo={"FilmInfo"}
                title={"Star Wars Movies"}
                header={"Movies"}
              />
            }
          />
          <Route path="/FilmInfo/:id" element={<FilmInfo />} />

          <Route
            path="/Species"
            element={
              <Menu
                category={"species"}
                linkTo={"SpeciesInfo"}
                title={"Star Wars Species"}
                header={"Species"}
              />
            }
          />
          <Route path="/SpeciesInfo/:id" element={<SpeciesInfo />} />

          <Route
            path="/Vehicles"
            element={
              <Menu
                category={"vehicles"}
                linkTo={"VehiclesInfo"}
                title={"Star Wars Vehicles"}
                header={"Vehicles"}
              />
            }
          />
          <Route path="/VehiclesInfo/:id" element={<VehiclesInfo />} />

          <Route
            path="/Starships"
            element={
              <Menu
                category={"starships"}
                linkTo={"StarshipsInfo"}
                title={"Star Wars Starships"}
                header={"Starships"}
              />
            }
          />
          <Route path="/StarshipsInfo/:id" element={<StarshipsInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
