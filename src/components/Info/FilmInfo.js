import useFetch from "../useFetch";
import { useLocation } from "react-router-dom";

const FilmInfo = () => {
  const location = useLocation();
  const { data } = useFetch(location.state.item.url);

  console.log(data);
  return (
    <div>
      {data && (
        <div>
          <h1>{data.title}</h1>
          <p>Release date: {data.release_date}</p>
          <p>Episodes: {data.episode_id}</p>
          <p>Director: {data.director}</p>
          <p>Producers: {data.producer}</p>
        </div>
      )}
    </div>
  );
};

export default FilmInfo;
