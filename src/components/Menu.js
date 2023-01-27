import Template from "./Template";
import useFetch from "./useFetch";
import { useState } from "react";

const Menu = (props) => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data } = useFetch(
    `https://swapi.dev/api/${props.category}/?page=${pageNumber}`
  );
  return (
    <div>
      <div className="card">
        {data && (
          <Template
            data={data}
            linkTo={props.linkTo}
            title={props.title}
            header={props.header}
            pageNumber={pageNumber}
          />
        )}

        <div className="btn-container">
          {data && data.previous && (
            <button
              className="navigation-btn"
              onClick={() => setPageNumber(pageNumber - 1)}>
              {`<`}
            </button>
          )}

          {data && data.next && (
            <button
              className="navigation-btn"
              onClick={() => setPageNumber(pageNumber + 1)}>
              {`>`}
            </button>
          )}
        </div>

        <p>{`Page ${pageNumber}`}</p>
      </div>
    </div>
  );
};

export default Menu;
