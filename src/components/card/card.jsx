import "../../styles/card/style.css";

function Card({ data }) {
  function handleClick() {
    const { street, city, postcode } = data.properties;
    const fullAddress = `${street}, ${postcode} ${city}`;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      fullAddress
    )}`;
    window.open(googleMapsUrl, "_blank");
  }
  return (
    <div className="card" onClick={handleClick}>
      {data.properties.street && (
        <h3 className="card_street">{data.properties.street}</h3>
      )}
      <h3 className="card_city">{data.properties.city}</h3>
      <h3 className="card_postcode"> {data.properties.postcode}</h3>
    </div>
  );
}

export default Card;
