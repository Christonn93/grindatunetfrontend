import { useState } from "react";
import { Alert } from "@mui/material";

export const CreateNew = () => {
 const [title, setTitle] = useState("");
 const [slug, setSlug] = useState("");
 const [content, setContent] = useState("");
 const [metadata, setMetadata] = useState("");
 const [error, setError] = useState<string | null>(null);
 const [success, setSuccess] = useState<string | null>(null);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
   const response = await fetch("/api/create-post", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, slug, content, metadata }),
   });

   const data = await response.json();
   if (data.success) {
    setSuccess("Post created successfully!");
    setTitle("");
    setSlug("");
    setContent("");
    setMetadata("");
   } else {
    setError(data.message || "An error occurred while creating the post");
   }
  } catch {
   setError("Failed to create post");
  }
 };

 return (
  <div>
   <h1>Create New Blog Post</h1>
   {error && <Alert severity="error">{error}</Alert>}
   {success && <Alert severity="success">{success}</Alert>}
   <form onSubmit={handleSubmit}>
    <div>
     <label>Title</label>
     <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
    </div>
    <div>
     <label>Slug</label>
     <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} required />
    </div>
    <div>
     <label>Content</label>
     <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
    </div>
    <div>
     <label>Metadata (Optional)</label>
     <textarea value={metadata} onChange={(e) => setMetadata(e.target.value)} />
    </div>
    <button type="submit">Create Post</button>
   </form>
  </div>
 );
};
