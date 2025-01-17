import { CosmicObject, CreateObjectPayload } from "@/types/cosmic";
import axiosInstance from "./axios";

export const createItem = async (item: CreateObjectPayload): Promise<CosmicObject> => {
  const response = await axiosInstance.post('/objects', {
    title: item.title,
    type: item.type,
    content: item.content,
  });
  return response.data.object;
};