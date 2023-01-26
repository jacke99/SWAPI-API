import People from "./components/Categories/People";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PeopleInfo from "./components/Info/PeopleInfo";
import Planets from "./components/Categories/Planets";
import PlanetInfo from "./components/Info/PlanetInfo";
import Films from "./components/Categories/Films";
import FilmInfo from "./components/Info/FilmInfo";
import Species from "./components/Categories/Species";
import SpeciesInfo from "./components/Info/SpeciesInfo";
import Vehicles from "./components/Categories/Vehicles";
import VehiclesInfo from "./components/Info/VehiclesInfo";
import Starships from "./components/Categories/Starships";
import StarshipsInfo from "./components/Info/StarshipsInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/People" element={<People />} />
          <Route path="/PeopleInfo/:id" element={<PeopleInfo />} />

          <Route path="/Planets" element={<Planets />} />
          <Route path="/PlanetInfo/:id" element={<PlanetInfo />} />

          <Route path="/Films" element={<Films />} />
          <Route path="/FilmInfo/:id" element={<FilmInfo />} />

          <Route path="/Species" element={<Species />} />
          <Route path="/SpeciesInfo/:id" element={<SpeciesInfo />} />

          <Route path="/Vehicles" element={<Vehicles />} />
          <Route path="/VehiclesInfo/:id" element={<VehiclesInfo />} />

          <Route path="/Starships" element={<Starships />} />
          <Route path="/StarshipsInfo/:id" element={<StarshipsInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
