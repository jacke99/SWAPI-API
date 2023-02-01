import { Link } from "react-router-dom";

const Template = (props) => {
  let id = 0;

  if (props.pageNumber === 1) {
    id = 0;
  } else {
    id = props.pageNumber * 10 - 10;
  }

  return (
    <div className="template-container">
      {props.data.results.map((item) => {
        id++;
        return (
          <Link
            className="links"
            to={`/${props.linkTo}/${id}`}
            state={{ item: item }}>
            <div key={id} className="template-item-container">
              {item.name && (
                <h3 className="template-title-name">{item.name}</h3>
              )}
              {item.title && (
                <h3 className="template-title-name">{item.title}</h3>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Template;
