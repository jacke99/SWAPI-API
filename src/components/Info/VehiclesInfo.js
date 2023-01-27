import useFetch from "../useFetch";
import { useLocation } from "react-router-dom";

const VehiclesInfo = () => {
  const location = useLocation();
  // const { item } = location.state.item;

  const { data } = useFetch(location.state.item.url);

  return (
    <div>
      {data && (
        <div>
          <h1>{data.name}</h1>
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
      )}
    </div>
  );
};

export default VehiclesInfo;
