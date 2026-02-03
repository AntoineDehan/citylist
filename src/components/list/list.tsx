import { useEffect, useState } from "react";
import Card from "../card/card";

import "../../styles/list/style.css";

interface ListProps {
  searchInput: string;
}

interface FeatureProperties {
  label: string;
  score: number;
  id: string;
  name: string;
  postcode: string;
  citycode: string;
  x: number;
  y: number;
  city: string;
  context: string;
  type: string;
  importance: number;
  street?: string;
  _type: string;
  banId?: string;
  locality?: string;
}

interface FeatureGeometry {
  type: "Point";
  coordinates: [number, number];
}

interface Feature {
  type: "Feature";
  geometry: FeatureGeometry;
  properties: FeatureProperties;
}

interface FeatureCollection {
  type: "FeatureCollection";
  features: Feature[];
  query: string;
}

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
      try {
        const res = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${searchInput}`,
        );

        if (!res.ok)
          return setError("Erreur lors de la récupération de l'API.");

        const data: FeatureCollection = await res.json();
        console.log("data here:", data);

        if (!data.features || data.features.length === 0) {
          setError(`Aucune adresse trouvée pour "${searchInput}".`);
          setAdresses([]);
          setIsLoading(false);
          return;
        }

        setAdresses(data.features);
        setIsLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError("API non disponible. Veuillez réessayer plus tard.");
          setIsLoading(false);
          console.log(err);
        }
      }
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
