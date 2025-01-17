import { useQuery } from "@tanstack/react-query";
import { createItem } from "@/services/axios/createItem";
import { CreateObjectPayload } from "@/types/cosmic";

export const useCreateItem = (item: CreateObjectPayload) => {
 return useQuery({
  queryKey: ["items", item],
  queryFn: () => createItem(item),
  staleTime: 5 * 60 * 100,
  enabled: !!item,
 });
};
