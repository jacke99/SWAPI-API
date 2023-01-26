import FilmsTemplate from "../Templates/FilmsTemplate";
import useFetch from "../useFetch";

const Films = () => {
  const { data } = useFetch("https://swapi.dev/api/films");

  return <div className="card">{data && <FilmsTemplate data={data} />}</div>;
};

export default Films;
