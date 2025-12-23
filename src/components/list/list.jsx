import { useEffect, useState } from "react";
import Card from "../card/card";

import "../../styles/list/style.css";

function List({ searchInput }) {
  const [adresses, setAdresses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Appel API après l'input
  useEffect(() => {
    if (searchInput === "") return;
    const init = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${searchInput.toLowerCase()}`
        );
        if (res.ok) {
          const data = await res.json();
          setAdresses(data.features);
          console.log("done", data.features);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [searchInput]);

  return (
    <>
      {isLoading ? (
        <p>Chargement des résultats</p>
      ) : (
        <div className="list-results">
          {adresses?.map((adresse, index) => {
            return <Card data={adresse} key={index} />;
          })}
        </div>
      )}
    </>
  );
}

export default List;
