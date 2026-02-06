export type Respone = {
  error?: string;
  data?: FeatureCollection;
};

export type FeatureProperties = {
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
};

export type FeatureGeometry = {
  type: "Point";
  coordinates: [number, number];
};

export type Feature = {
  type: "Feature";
  geometry: FeatureGeometry;
  properties: FeatureProperties;
};

export type FeatureCollection = {
  type: "FeatureCollection";
  features: Feature[];
  query: string;
};

export async function searchAdress(searchInput: string) {
  const res = await fetch(
    `https://api-adresse.data.gouv.fr/search/?q=${searchInput}`,
  );

  if (!res.ok) throw new Error("Erreur lors de la récupération de l'Api.");

  const data: FeatureCollection = await res.json();
  return data;
}

export default searchAdress;
