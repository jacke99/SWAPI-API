import { Link } from "react-router-dom";

const StarshipsTemplate = (props) => {
  props = props.data;
  let id = 0;
  return (
    <div>
      <h1 className="template-title">Starwars Wars Starships</h1>
      <div className="template-container">
        <h2 className="template-header">Starships</h2>
        {props.results.map((item) => {
          id++;
          return (
            <Link className="links" to={`/StarshipsInfo/${id}`}>
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

export default StarshipsTemplate;
