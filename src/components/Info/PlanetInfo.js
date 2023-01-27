import useFetch from "../useFetch";
import { useLocation } from "react-router-dom";

const PlanetInfo = () => {
  const location = useLocation();
  const { data } = useFetch(location.state.item.url);

  return (
    <div>
      {data && (
        <div>
          <h1>{data.name}</h1>
          <p>Population: {data.population}</p>
          <p>Climate: {data.climate}</p>
          <p>Terrain: {data.terrain}</p>
          <p>Gravity: {data.gravity}</p>
          <p>Diameter: {data.diameter}</p>
          <p>Orbital Period: {data.orbital_period}</p>
          <p>Rotation Period: {data.rotation_period}</p>
        </div>
      )}
    </div>
  );
};

export default PlanetInfo;
