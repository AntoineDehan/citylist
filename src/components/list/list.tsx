import { searchAdress } from "../../api";
import { useQuery, QueryClient } from "@tanstack/react-query";

import Card from "../card/card";

import "../../styles/list/style.css";

type ListProps = {
  searchInput: string;
};

const queryClient = new QueryClient();

function List({ searchInput }: ListProps) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["adresses", searchInput],
    queryFn: () => searchAdress(searchInput),
    enabled: searchInput !== "",
  });

  // Affichage chargement
  if (isPending) {
    return <h3>Chargement des résultats...</h3>;
  }

  // Affichage erreur
  if (isError) {
    return <h3>{error.message}</h3>;
  }

  // Affichage data reçu mais vide
  if (!data.features || data.features.length === 0) {
    return <h3>Aucune adresse trouvée pour "${searchInput}"</h3>;
  }

  const resultats = data.features;

  return (
    <ul className="list-results">
      {resultats?.map((adresse, index) => {
        return <Card data={adresse} key={index} />;
      })}
    </ul>
  );
}

export default List;
