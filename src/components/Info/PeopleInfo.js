import useFetch from "../useFetch";
import { useParams } from "react-router-dom";

const CharInfo = () => {
  const { id } = useParams();
  const { data } = useFetch(`https://swapi.dev/api/people/${id}`);

  return (
    <div>
      {data && (
        <div>
          <h1>{data.name}</h1>
          <p>Birth year: {data.birth_year}</p>
          <p>Gender: {data.gender}</p>
          <p>Hair color: {data.hair_color}</p>
          <p>Eye color: {data.eye_color}</p>
          <p>Skin color: {data.skin_color}</p>
          <p>Height: {data.height}</p>
          <p>Weight: {data.mass}</p>
        </div>
      )}
    </div>
  );
};

export default CharInfo;
