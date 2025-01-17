import { useMutation } from "@tanstack/react-query";
import { queryClient } from "./QueryProvider";
import { createItem } from "@/services/axios/createItem";
import { CosmicObject, CreateObjectPayload } from "@/types/cosmic";

export const useCreateItem = () => {

  return useMutation<CosmicObject, Error, CreateObjectPayload>(createItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(['items']);
    },
  });
};