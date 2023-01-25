import React from "react";
import PeopleTemplate from "./PeopleTemplate";
import { useState } from "react";
import { useEffect } from "react";

const People = () => {
  useEffect(() => {
    loadData();
  }, []);

  const [data, setData] = useState([]);

  const loadData = async () => {
    await fetch("https://swapi.dev/api/people")
      .then((resp) => {
        return resp.json();
      })
      .then((receivedData) => {
        setData(receivedData);
      });
  };

  return (
    <div>
      {Object.values(data.results).map((item) => (
        <div>
          {/* <h3>{item}</h3> */}
          <PeopleTemplate data={item} />
        </div>
      ))}
    </div>
  );
};

export default People;
