import useFetch from "../useFetch";
import { useParams } from "react-router-dom";

const StarshipsInfo = () => {
  const { id } = useParams();
  const { data } = useFetch(`https://swapi.dev/api/starships/${id}`);

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

export default StarshipsInfo;
