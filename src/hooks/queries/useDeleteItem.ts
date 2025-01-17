import { deleteItem } from "@/services/axios/deleteItem";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "./QueryProvider";

export const useDeleteItem = () => {

  return useMutation<void, Error, string>(deleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(['items']);
    },
  });
};