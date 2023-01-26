import PeopleTemplate from "../Templates/PeopleTemplate";
import useFetch from "../useFetch";

const People = () => {
  const { data } = useFetch("https://swapi.dev/api/people");

  return <div className="card">{data && <PeopleTemplate data={data} />}</div>;
};

export default People;
