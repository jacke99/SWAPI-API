const PeopleTemplate = (props) => {
  props = props.data
  return (
    <div>
      <h2>Characters!</h2>
      {props.results.map((item) => {
        return (
        <div>
          <p>{item.name}</p>
          <p>{item.hair_color}</p>
          <p>{item.height}</p>
          <p>{item.mass}</p>
        </div>
        )
      })}
    </div>
  )
};


export default PeopleTemplate;
