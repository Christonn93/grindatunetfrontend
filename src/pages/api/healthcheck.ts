import { NextApiRequest, NextApiResponse } from "next";
import client from "@/services/edgeDb/dbClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 try {
  const result = await client.query(`
 SELECT count(User);
    `);

  if (result) {
   res.status(200).json({ message: "EdgeDB connection is active" });
  } else {
   res.status(500).json({ message: "EdgeDB query failed" });
  }
 } catch (error) {
  console.error("EdgeDB Connection Error:", error);
  res.status(500).json({ message: "Failed to connect to EdgeDB" });
 }
}
