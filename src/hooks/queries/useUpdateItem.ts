import { updateItem } from "@/services/axios/updateItem";
import { useQuery } from "@tanstack/react-query";
import { UpdateObjectPayload } from "@/types/cosmic";

export const useUpdateItem = (id: UpdateObjectPayload) => {
 return useQuery({
  queryKey: ["items", id],
  queryFn: () => updateItem(id),
  staleTime: 5 * 60 * 100,
  enabled: !!id,
 });
};
