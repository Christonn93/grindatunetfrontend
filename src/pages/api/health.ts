import type { NextApiRequest, NextApiResponse } from "next";
import axiosInstance from "@/services/axios/axios";

interface HealthResponse {
 status: "healthy" | "unhealthy";
 message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<HealthResponse>) {
 try {
  const response = await axiosInstance.get("/");
  if (response.status === 200) {
   res.status(200).json({
    status: "healthy",
    message: "Cosmic bucket is accessible.",
   });
  } else {
   res.status(500).json({
    status: "unhealthy",
    message: "Cosmic bucket is not accessible. Check the API keys or bucket slug.",
   });
  }
 }  catch (error) {
  console.error("EdgeDB Connection Error:", error);
  res.status(500).json({
      message: "Cosmic bucket is not accessible. Check the API keys or bucket slug.",
      status: "unhealthy"
  });
 }
}
