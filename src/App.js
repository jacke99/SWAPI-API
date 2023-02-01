import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PeopleInfo from "./components/Info/PeopleInfo";
import PlanetInfo from "./components/Info/PlanetInfo";
import FilmInfo from "./components/Info/FilmInfo";
import SpeciesInfo from "./components/Info/SpeciesInfo";
import VehiclesInfo from "./components/Info/VehiclesInfo";
import StarshipsInfo from "./components/Info/StarshipsInfo";
import Menu from "./components/Menu";
import HamburgerMenu from "./components/HamburgerMenu";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style.css";

function App() {
  return (
    <Router>
      <HamburgerMenu />
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/SWAPI-API" element={<Home />} />

          <Route
            path="/SWAPI-API/Characters"
            element={
              <Menu
                category={"/people"}
                linkTo={"CharacterInfo"}
                title={"Star Wars Characters"}
                header={"Characters"}
              />
            }
          />
          <Route
            path="/SWAPI-API/Characters/Characterinfo/:id"
            element={<PeopleInfo />}
          />

          <Route
            path="/SWAPI-API/Planets"
            element={
              <Menu
                category={"/planets"}
                linkTo={"PlanetInfo"}
                title={"Star Wars Planets"}
                header={"Planets"}
              />
            }
          />
          <Route
            path="/SWAPI-API/Planets/PlanetInfo/:id"
            element={<PlanetInfo />}
          />

          <Route
            path="/SWAPI-API/Films"
            element={
              <Menu
                category={"/films"}
                linkTo={"FilmInfo"}
                title={"Star Wars Films"}
                header={"Films"}
              />
            }
          />
          <Route path="/SWAPI-API/Films/FilmInfo/:id" element={<FilmInfo />} />

          <Route
            path="/SWAPI-API/Species"
            element={
              <Menu
                category={"/species"}
                linkTo={"SpeciesInfo"}
                title={"Star Wars Species"}
                header={"Species"}
              />
            }
          />
          <Route
            path="/SWAPI-API/Species/SpeciesInfo/:id"
            element={<SpeciesInfo />}
          />

          <Route
            path="/SWAPI-API/Vehicles"
            element={
              <Menu
                category={"/vehicles"}
                linkTo={"VehiclesInfo"}
                title={"Star Wars Vehicles"}
                header={"Vehicles"}
              />
            }
          />
          <Route
            path="/SWAPI-API/Vehicles/VehiclesInfo/:id"
            element={<VehiclesInfo />}
          />

          <Route
            path="/SWAPI-API/Starships"
            element={
              <Menu
                category={"/starships"}
                linkTo={"StarshipsInfo"}
                title={"Star Wars Starships"}
                header={"Starships"}
              />
            }
          />
          <Route
            path="/SWAPI-API/Starships/StarshipsInfo/:id"
            element={<StarshipsInfo />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
