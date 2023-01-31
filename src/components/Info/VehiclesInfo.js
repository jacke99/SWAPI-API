import useFetch from "../useFetch";
import { useLocation } from "react-router-dom";
import vehiclesBackground from "../../assets/chuck-givens-02AQdLh4gP4-unsplash.jpg";

const VehiclesInfo = () => {
  const location = useLocation();
  // const { item } = location.state.item;

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
            background: `url(${vehiclesBackground}) no-repeat center center/ cover`,
          }}>
          <div className="info-container">
            <h1 className="info-header">{data.name}</h1>
            <p>Model: {data.model}</p>
            <p>Manufacturer: {data.manufacturer}</p>
            <p>Cost in credits: {data.cost_in_credits}</p>
            <p>Length: {data.length}</p>
            <p>Max atmosphering speed:{data.max_atmosphering_speed}</p>
            <p>Crew: {data.crew}</p>
            <p>Passengers: {data.passengers}</p>
            <p>Cargo capacity: {data.cargo_capacity}</p>
            <p>Vehicle class: {data.vehicle_class}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehiclesInfo;
