import { Link } from "react-router-dom";

const SpeciesTemplate = (props) => {
  props = props.data;
  let id = 0;
  return (
    <div>
      <h1 className="template-title">Starwars Wars Species</h1>
      <div className="template-container">
        <h2 className="template-header">Species</h2>
        {props.results.map((item) => {
          id++;
          return (
            <Link className="links" to={`/SpeciesInfo/${id}`}>
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

export default SpeciesTemplate;
