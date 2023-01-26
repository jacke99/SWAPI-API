import useFetch from "../useFetch";
import { useParams } from "react-router-dom";

const SpeciesInfo = () => {
  const { id } = useParams();
  const { data } = useFetch(`https://swapi.dev/api/species/${id}`);

  return (
    <div>
      {data && (
        <div>
          <h1>{data.name}</h1>
          <p>Language: {data.language}</p>
          <p>Classification: {data.classification}</p>
          <p>Designation: {data.designation}</p>
          <p>Average height: {data.average_height}</p>
          <p>Skin colors: {data.skin_colors}</p>
          <p>Hair colors: {data.hair_colors}</p>
          <p>Eye colors: {data.eye_colors}</p>
          <p>Average lifespan: {data.average_lifespan}</p>
        </div>
      )}
    </div>
  );
};

export default SpeciesInfo;
