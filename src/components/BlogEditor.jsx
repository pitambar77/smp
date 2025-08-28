import React, { useState } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("content", content);
    if (image) formData.append("image", image);

    await axios.post("http://localhost:8000/api/blogs", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("Blog saved!");
  };

  const config = {
    uploader: {
      url: "http://localhost:8000/api/blogs/upload-image",
      format: "json",
      method: "POST",
      fieldName: "image",
      filesVariableName: () => "image",
      isSuccess: (resp) => resp.success,
      getMsg: (resp) => resp.message,
      process: (resp) => ({
        files: [resp.url], // insert uploaded image URL into editor
        path: resp.url,
        baseurl: resp.url,
      }),
    },
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        className="border p-2 w-full"
      />
      <input 
        type="text" 
        placeholder="Author" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
        className="border p-2 w-full"
      />
      <input 
        type="file" 
        onChange={(e) => setImage(e.target.files[0])} 
        className="border p-2 w-full"
      />
      <JoditEditor 
        value={content}
        onChange={(newContent) => setContent(newContent)}
        config={config}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Save Blog
      </button>
    </form>
  );
};

export default BlogEditor;
