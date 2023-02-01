import useFetch from "../useFetch";
import { useLocation } from "react-router-dom";
import filmsBackground from "../../assets/michael-marais-JLHyIwix46c-unsplash.jpg";
import { Link } from "react-router-dom";

const FilmInfo = () => {
  // Using location to
  const location = useLocation();
  const { data, isPending } = useFetch(location.state.item.url);

  console.log(data);
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
            background: `url(${filmsBackground}) no-repeat center center/ cover`,
          }}>
          <div className="info-container">
            <h1 className="info-header">{data.title}</h1>
            <p>Release date: {data.release_date}</p>
            <p>Episodes: {data.episode_id}</p>
            <p>Director: {data.director}</p>
            <p>Producers: {data.producer}</p>
            <Link to={"/films"} className="close-btn">
              Close
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmInfo;
