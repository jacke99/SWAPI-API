import PlanetsTemplate from "../Templates/PlanetsTemplate";
import useFetch from "../useFetch";

const Planets = () => {
  const { data } = useFetch("https://swapi.dev/api/planets");

  return <div className="card">{data && <PlanetsTemplate data={data} />}</div>;
};

export default Planets;
