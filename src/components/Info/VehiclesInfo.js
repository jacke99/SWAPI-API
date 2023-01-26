import useFetch from "../useFetch";
import { useParams } from "react-router-dom";

const VehiclesInfo = () => {
  const { id } = useParams();
  const { data } = useFetch(`https://swapi.dev/api/vehicles/${id}`);

  return (
    <div>
      {data && (
        <div>
          <h1>{data.name}</h1>
        </div>
      )}
    </div>
  );
};

export default VehiclesInfo;
