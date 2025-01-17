import { PageContainer } from "@/components/container/PageContainer";
import { cosmicClient } from "@/services/cosmic/cosmicClient";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { CreateNewButton } from "../button/CreateNewButton";

export const Home = () => {
 const [blogPosts, setBlogPosts] = useState<unknown[]>([]);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await cosmicClient.objects.find({ type: "blog-posts" }).limit(10).props("slug,title,metadata,type").depth(1);

    console.log("Blog return: ", response);

    setBlogPosts(response.objects || []);
   } catch (error) {
    console.error("Error fetching blog posts:", error);
   }
  };

  fetchData();
 }, []);

 return (
  <PageContainer header={"Velkommen"}>
   <Box>
    <CreateNewButton />
    <div>
     {blogPosts.length > 0 ? (
      <ul>
       {blogPosts.map((post: any) => (
        <li key={post.slug}>
         <h3>{post.title}</h3>
        </li>
       ))}
      </ul>
     ) : (
      <p>No blog posts available</p>
     )}
    </div>
   </Box>
  </PageContainer>
 );
};
