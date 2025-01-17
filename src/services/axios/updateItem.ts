import { CosmicObject, UpdateObjectPayload } from "@/types/cosmic";
import axiosInstance from "./axios";

export const updateItem = async (item: UpdateObjectPayload): Promise<CosmicObject> => {
  const response = await axiosInstance.patch(`/objects/${item.id}`, {
    title: item.title,
    content: item.content,
  });
  return response.data.object;
};