import { useQuery, QueryClient } from "@tanstack/react-query";
import { searchAdress } from "../lib/api";

export const useSearchAdress = (searchInput: string) => {
  return useQuery({
    queryKey: ["adresses", searchInput],
    queryFn: () => searchAdress(searchInput),
    enabled: searchInput !== "",
  });
};
