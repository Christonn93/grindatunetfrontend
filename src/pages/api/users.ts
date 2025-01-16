import { NextApiRequest, NextApiResponse } from "next";
import client from "@/services/dbClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 try {
  const users = await client.query(`
      SELECT User {
        id,
        name,
        email
      };
    `);

  res.status(200).json(users);
 } catch (error) {
  console.error(error);
  res.status(500).json({ message: "Internal Server Error" });
 }
}
