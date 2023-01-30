import useFetch from "../useFetch";
import { useLocation } from "react-router-dom";

const SpeciesInfo = () => {
  const location = useLocation();
  const { data, isPending } = useFetch(location.state.item.url);

  return (
    <div>
      {isPending && <div className="pending">Loading...</div>}
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
