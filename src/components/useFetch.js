import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((receivedData) => {
        setData(receivedData);
      });
  }, [url]);

  return { data };
};

export default useFetch;
