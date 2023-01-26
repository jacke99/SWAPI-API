import StarshipsTemplate from "../Templates/StarshipsTemplate";
import useFetch from "../useFetch";

const Starships = () => {
  const { data } = useFetch("https://swapi.dev/api/starships");

  return (
    <div className="card">{data && <StarshipsTemplate data={data} />}</div>
  );
};

export default Starships;
