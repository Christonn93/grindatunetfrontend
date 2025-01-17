import { CosmicObject } from "@/types/cosmic";
import axiosInstance from "./axios";

export const fetchItems = async (): Promise<CosmicObject[]> => {
  const response = await axiosInstance.get('/objects');
  return response.data.objects || [];
};