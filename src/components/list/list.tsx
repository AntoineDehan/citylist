import { useEffect, useState } from "react";
import Card from "../card/card";
import { searchAdress } from "../../api";
import type { Feature } from "../../api";

import "../../styles/list/style.css";

type ListProps = {
  searchInput: string;
};

function List({ searchInput }: ListProps) {
  const [adresses, setAdresses] = useState<Feature[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  //Appel API après l'input
  useEffect(() => {
    if (searchInput === "") return;
    const init = async () => {
      setIsLoading(true);
      setError("");
      setAdresses([]);

      const { error, data } = await searchAdress(searchInput);

      if (!data) {
        setError("Aucune réponse de l'API");
        setIsLoading(false);
        return;
      }

      if (!data.features || data.features.length === 0) {
        setError(`Aucune adresse trouvée pour "${searchInput}".`);
        return;
      }

      if (error) {
        setError(error);
        setIsLoading(false);
        return;
      }

      setAdresses(data.features);
      setIsLoading(false);
    };
    init();
  }, [searchInput]);

  // Affichage chargement
  if (isLoading) {
    return <h3>Chargement des résultats...</h3>;
  }

  // Affichage erreur
  if (error.length >= 2) {
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
