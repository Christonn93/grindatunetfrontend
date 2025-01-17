import { deleteItem } from "@/services/axios/deleteItem";
import { useQuery } from "@tanstack/react-query";
import { DeleteObjectPayload } from "@/types/cosmic";

export const useDeleteItem = (id: DeleteObjectPayload) => {
 return useQuery({
  queryKey: ["id"],
  queryFn: () => deleteItem(id),
  staleTime: 5 * 60 * 100,
  enabled: !!id,
 });
};
