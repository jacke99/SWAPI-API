import SpeciesTemplate from "../Templates/SpeciesTemplate";
import useFetch from "../useFetch";

const Species = () => {
  const { data } = useFetch("https://swapi.dev/api/species");

  return <div className="card">{data && <SpeciesTemplate data={data} />}</div>;
};

export default Species;
