/* import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  };

  return { data };
};

export default useFetch; */
