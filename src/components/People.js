import PeopleTemplate from "./PeopleTemplate";
import { useEffect } from "react";
import { useState } from "react";



const People = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
   

    fetch("https://swapi.dev/api/people")
      .then((resp) => {
        return resp.json();
      })
      .then((receivedData) => {
        // PeopleTemplate(receivedData)
        // return receivedData
        console.log(receivedData)
        setData(receivedData)
        
      })
  }, []);

  
  console.log(data)
  return (
    <div>
      {data && <PeopleTemplate data={data}/> }
    </div>
  )
}


export default People;
