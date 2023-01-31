import useFetch from "../useFetch";
import { useLocation } from "react-router-dom";
import starshipsBackground from "../../assets/josue-as-_nprTIIwSk4-unsplash.jpg";

const StarshipsInfo = () => {
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
            background: `url(${starshipsBackground}) no-repeat center center/ cover`,
          }}>
          <div className="info-container">
            <h1 className="info-header">{data.name}</h1>
            <p>Model: {data.model}</p>
            <p>Manufacturer: {data.manufacturer}</p>
            <p>Cost in credits: {data.cost_in_credits}</p>
            <p>Length: {data.length}</p>
            <p>Max atmosphering speed: {data.max_atmosphering_speed}</p>
            <p>Crew: {data.crew}</p>
            <p>Passengers: {data.passengers}</p>
            <p>Cargo capacity: {data.cargo_capacity}</p>
            <p>Hyperdrive rating: {data.hyperdrive_rating}</p>
            <p>MGLT: {data.MGLT}</p>
            <p>Starship class: {data.starship_class}</p>
            <p>{}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StarshipsInfo;
