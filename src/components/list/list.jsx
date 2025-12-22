import { useEffect, useState } from "react";

function List({ searchInput }) {
  const [adresses, setAdresses] = useState([]);

  //Appel API après l'input
  useEffect(() => {
    if (searchInput === "") return;
    const init = async () => {
      try {
        const res = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${searchInput.toLowerCase()}`
        );
        if (res.ok) {
          const data = await res.json();
          setAdresses(data.features);
          console.log("done", data.features);
        }
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [searchInput]);

  return (
    <>
      {adresses?.map((adresse, index) => {
        return (
          <div key={index}>
            <h2>
              {adresse.properties.street} {adresse.properties.city}{" "}
              {adresse.properties.postcode}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default List;
