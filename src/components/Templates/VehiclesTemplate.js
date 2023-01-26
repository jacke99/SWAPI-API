import { Link } from "react-router-dom";

const VehiclesTemplate = (props) => {
  props = props.data;
  let id = 0;
  return (
    <div>
      <h1 className="template-title">Starwars Wars Vehicles</h1>
      <div className="template-container">
        <h2 className="template-header">Vehicles</h2>
        {props.results.map((item) => {
          id++;
          return (
            <Link className="links" to={`/VehiclesInfo/${id}`}>
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

export default VehiclesTemplate;
