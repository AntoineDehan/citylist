import { useEffect, useState } from "react";
import Card from "../card/card";

import "../../styles/list/style.css";

function List({ searchInput }) {
  const [adresses, setAdresses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //Appel API après l'input
  useEffect(() => {
    if (searchInput === "") return;
    const init = async () => {
      setIsLoading(true);
      setError(null);
      setAdresses([]);
      try {
        const res = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${searchInput}`
        );

        if (!res.ok)
          return setError("Erreur lors de la récupération de l'API.");

        const data = await res.json();

        if (!data.features || data.features.length === 0) {
          setError(`Aucune adresse trouvée pour "${searchInput}".`);
          setAdresses([]);
          setIsLoading(false);
          return;
        }

        setAdresses(data.features);
        setIsLoading(false);
      } catch (err) {
        setError("API non disponible. Veuillez réessayer plus tard.");
        setIsLoading(false);
        console.log(err);
      }
    };
    init();
  }, [searchInput]);

  // Affichage chargement
  if (isLoading) {
    return <h3>Chargement des résultats...</h3>;
  }

  // Affichage erreur
  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <ul className="list-results">
      {adresses?.map((adresse, index) => {
        return <Card data={adresse} key={index} />;
      })}
    </ul>
  );
}

export default List;
