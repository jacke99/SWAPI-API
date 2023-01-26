import VehiclesTemplate from "../Templates/VehiclesTemplate";
import useFetch from "../useFetch";

const Vehicles = () => {
  const { data } = useFetch("https://swapi.dev/api/vehicles");

  return <div className="card">{data && <VehiclesTemplate data={data} />}</div>;
};

export default Vehicles;
