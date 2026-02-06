import { useQuery, QueryClient } from "@tanstack/react-query";
import { useSearchAdress } from "@/hooks/useSearchAdress";

import CardResult from "./card";

// // import "../../styles/list/style.css";

type ListProps = {
  searchInput: string;
};

const queryClient = new QueryClient();

function List({ searchInput }: ListProps) {
  // const { isPending, isLoading, isError, data, error } = useQuery({
  //   queryKey: ["adresses", searchInput],
  //   queryFn: () => searchAdress(searchInput),
  //   enabled: searchInput !== "",
  // });
  const { isPending, isLoading, isError, data, error } =
    useSearchAdress(searchInput);

  if (data === undefined && isLoading === false) return;

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
    <ul className="list-results flex w-[65%] flex-col items-center gap-7">
      {resultats?.map((adresse, index) => {
        return <CardResult data={adresse} key={index} />;
      })}
    </ul>
  );
}

export default List;
