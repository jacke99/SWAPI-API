import { Link } from "react-router-dom";

const PlanetsTemplate = (props) => {
  props = props.data;
  let id = 0;
  return (
    <div>
      <h1 className="template-title">Starwars Wars Planets</h1>
      <div className="template-container">
        <h2 className="template-header">Planets</h2>
        {props.results.map((item) => {
          id++;
          return (
            <Link className="links" to={`/PlanetInfo/${id}`}>
              <div key={id} className="template-item-container">
                <h3 className="template-title-name">{item.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PlanetsTemplate;
