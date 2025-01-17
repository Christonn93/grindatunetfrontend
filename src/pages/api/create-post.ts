// pages/api/create-post.ts
import { NextApiRequest, NextApiResponse } from "next";
import { cosmicClient } from "@/services/cosmic/cosmicClient";

const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
 if (req.method === "POST") {
  try {
   const { title, slug, content, metadata } = req.body;

   const response = await cosmicClient.objects.insertOne({
    type: "blog-posts",
    title,
    slug,
    content,
    metadata,
   });

   console.log(response)

   res.status(200).json({ success: true, post: response });
  } catch (error) {
   res.status(500).json({ success: false, message: "Error creating post", error });
  }
 } else {
  res.status(405).json({ success: false, message: "Method Not Allowed" });
 }
};

export default createPost;
