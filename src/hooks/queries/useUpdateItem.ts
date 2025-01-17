import { updateItem } from "@/services/axios/updateItem";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "./QueryProvider";
import { CosmicObject, UpdateObjectPayload } from "@/types/cosmic";

export const useUpdateItem = () => {
  return useMutation<CosmicObject, Error, UpdateObjectPayload>(updateItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(['items']);
    },
  });
};