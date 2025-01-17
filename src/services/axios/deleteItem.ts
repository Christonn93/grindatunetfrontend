import { DeleteObjectPayload } from "@/types/cosmic";
import axiosInstance from "./axios";

export const deleteItem = async (id: DeleteObjectPayload): Promise<void> => {
  await axiosInstance.delete(`/objects/${id}`);
};