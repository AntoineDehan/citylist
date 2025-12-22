function Card({ data }) {
  return (
    <div>
      <h2>
        {data.properties.street} {data.properties.city}{" "}
        {data.properties.postcode}
      </h2>
    </div>
  );
}

export default Card;
