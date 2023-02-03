import Template from "./Template";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import peopleBackground from "../assets/venti-views-35uZM_4wjYg-unsplash.jpg";
import planetsBackground from "../assets/nasa-Q1p7bh3SHj8-unsplash.jpg";
import filmsBackground from "../assets/michael-marais-JLHyIwix46c-unsplash.jpg";
import speciesBackground from "../assets/lukas-denier-YiXsjwJKXmo-unsplash.jpg";
import vehiclesBackground from "../assets/chuck-givens-02AQdLh4gP4-unsplash.jpg";
import starshipsBackground from "../assets/josue-as-_nprTIIwSk4-unsplash.jpg";

const Menu = (props) => {
  const location = useLocation();

  const [pageNumber, setPageNumber] = useState(1);
  const [input, setInput] = useState(false);
  const [api, setApi] = useState("");
  const [backgroundImg, setBackgroundImg] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const { data, isPending, error } = useFetch(api);

  //Handles enter klick on searchbar
  const handleInput = (e) => {
    if (e.key === "Enter") {
      setInput(e.target.value);
      e.target.value = "";
    }
  };

  //Resets page number/input and set background img
  useEffect(() => {
    setPageNumber(1);
    setInput(false);
    if (props.category === "/people") {
      setBackgroundImg(peopleBackground);
    } else if (props.category === "/planets") {
      setBackgroundImg(planetsBackground);
    } else if (props.category === "/films") {
      setBackgroundImg(filmsBackground);
    } else if (props.category === "/species") {
      setBackgroundImg(speciesBackground);
    } else if (props.category === "/vehicles") {
      setBackgroundImg(vehiclesBackground);
    } else if (props.category === "/starships") {
      setBackgroundImg(starshipsBackground);
    }
  }, [location, props.category]);

  //Fetches API data/fetch search API data if input = true
  useEffect(() => {
    if (!input) {
      setApi(`https://swapi.dev/api${props.category}/?page=${pageNumber}`);
    } else {
      setApi(`https://swapi.dev/api${props.category}/?search=${input}&page=1`);
      setPageNumber(1);
    }
  }, [input, pageNumber, props.category]);

  //Calculates what page the user is on
  useEffect(() => {
    if (data) {
      let number = data.count / 10;
      if (number < 1) {
        number = 1;
      } else {
        number = Math.ceil(number);
      }
      setNumberOfPages(number);
    }
  }, [data]);

  //Disables previous page btn if on page 1
  useEffect(() => {
    if (pageNumber === 1) {
      setIsDisabled(true);
    } else if (pageNumber > 1) {
      setIsDisabled(false);
    }
  }, [pageNumber]);

  //Disables next page btn if on last page
  useEffect(() => {
    if (pageNumber === numberOfPages) {
      setIsNextDisabled(true);
    } else if (pageNumber < numberOfPages) {
      setIsNextDisabled(false);
    }
  }, [pageNumber, numberOfPages]);

  return (
    <div className="menu-container">
      {error && <div className="error-msg">{error}</div>}
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
          className="card"
          style={{
            background: `url(${backgroundImg}) no-repeat center center/ cover`,
          }}>
          <h1 className="template-title">{props.title}</h1>

          <input
            onKeyDown={(e) => handleInput(e)}
            className="search"
            placeholder={`Search for ${props.header}`}
          />

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
              {data && (
                <button
                  disabled={isDisabled}
                  className="navigation-btn"
                  onClick={() => setPageNumber(pageNumber - 1)}>
                  {<i className="fa-solid fa-arrow-left"></i>}
                </button>
              )}
              <p className="nav-number">{`${pageNumber}/${numberOfPages}`}</p>
              {data && (
                <button
                  disabled={isNextDisabled}
                  className="navigation-btn"
                  onClick={() => setPageNumber(pageNumber + 1)}>
                  {<i className="fa-solid fa-arrow-right"></i>}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
