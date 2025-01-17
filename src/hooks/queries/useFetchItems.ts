import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "@/services/axios/fetchItems";

export const useFetchItems = (enabled: boolean) => {
 return useQuery({
  queryKey: ["items"],
  queryFn: () => fetchItems(),
  staleTime: 5 * 60 * 100,
  enabled,
 });
};
