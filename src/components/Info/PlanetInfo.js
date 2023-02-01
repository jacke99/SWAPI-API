import useFetch from "../useFetch";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import planetsBackground from "../../assets/nasa-Q1p7bh3SHj8-unsplash.jpg";

const PlanetInfo = () => {
  const location = useLocation();
  const { data, isPending } = useFetch(location.state.item.url);

  return (
    <div>
      {isPending && (
        <div className="pending">
          Loading
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      {data && (
        <div
          className="info-background-img"
          style={{
            background: `url(${planetsBackground}) no-repeat center center/ cover`,
          }}>
          <div className="info-container">
            <h1 className="info-header">{data.name}</h1>
            <p>Population: {data.population}</p>
            <p>Climate: {data.climate}</p>
            <p>Terrain: {data.terrain}</p>
            <p>Gravity: {data.gravity}</p>
            <p>Diameter: {data.diameter}</p>
            <p>Orbital Period: {data.orbital_period}</p>
            <p>Rotation Period: {data.rotation_period}</p>
            <Link to={"/planets"} className="close-btn">
              Close
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanetInfo;
