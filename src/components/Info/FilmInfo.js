import useFetch from "../useFetch";
import { useParams } from "react-router-dom";

const FilmInfo = () => {
  const { id } = useParams();
  const { data } = useFetch(`https://swapi.dev/api/films/${id}`);

  console.log(data);
  return (
    <div>
      {data && (
        <div>
          <h1>{data.title}</h1>
        </div>
      )}
    </div>
  );
};

export default FilmInfo;
