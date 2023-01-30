import Template from "./Template";
import useFetch from "./useFetch";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Menu = (props) => {
  const location = useLocation();

  const [pageNumber, setPageNumber] = useState(1);
  const [input, setInput] = useState(false);
  // const [inputData, setInputData] = useState("");
  const [api, setApi] = useState("");

  const { data, isPending, error } = useFetch(api);

  const handleInput = (e) => {
    if (e.key === "Enter") {
      setInput(e.target.value);
      e.target.value = "";
    }
  };

  useEffect(() => {
    setPageNumber(1);
    setInput(false);
  }, [location]);

  useEffect(() => {
    if (!input) {
      setApi(`https://swapi.dev/api${props.category}/?page=${pageNumber}`);
    } else {
      setApi(
        `https://swapi.dev/api${props.category}/?search=${input}&page=${pageNumber}`
      );
    }
  }, [input, pageNumber, props.category]);

  return (
    <div>
      {error && <div className="error-msg">{error}</div>}
      {isPending && <div className="pending">Loading...</div>}

      {data && (
        <div className="card">
          <h1 className="template-title">{props.title}</h1>

          <input
            onKeyDown={(e) => handleInput(e)}
            className=""
            placeholder={`Search for ${props.header}`}
          />

          <div className="template-container">
            <h2 className="template-header">{props.header}</h2>
          </div>

          {data && (
            <Template
              data={data}
              linkTo={props.linkTo}
              title={props.title}
              header={props.header}
              pageNumber={pageNumber}
              category={props.category}
            />
          )}

          {data && (
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
              <p>{`Page ${pageNumber}`}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
