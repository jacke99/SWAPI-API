import useFetch from "../useFetch";
import { useLocation } from "react-router-dom";
import peopleBackground from "../../assets/venti-views-35uZM_4wjYg-unsplash.jpg";
import { Link } from "react-router-dom";

const CharInfo = () => {
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
            background: `url(${peopleBackground}) no-repeat center center/ cover`,
          }}>
          <div className="info-container">
            <h1 className="info-header">{data.name}</h1>
            <p>Birth year: {data.birth_year}</p>
            <p>Gender: {data.gender}</p>
            <p>Hair color: {data.hair_color}</p>
            <p>Eye color: {data.eye_color}</p>
            <p>Skin color: {data.skin_color}</p>
            <p>Height: {data.height}</p>
            <p>Weight: {data.mass}</p>
            <Link to={"/SWAPI-API/Characters"} className="close-btn">
              Close
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharInfo;
