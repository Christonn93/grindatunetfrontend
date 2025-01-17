import axiosInstance from "./axios";

export const deleteItem = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/objects/${id}`);
};