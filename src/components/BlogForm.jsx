// import React, { useState, useEffect } from "react";
// import JoditEditor from "jodit-react";
// import axios from "axios";
// import { BASE_URL } from "../api/config";

// export default function BlogForm({  editingBlog, setEditingBlog }) {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState(null);

//   // Pre-fill form when editing
//   useEffect(() => {
//     if (editingBlog) {
//       setTitle(editingBlog.title);
//       setAuthor(editingBlog.author);
//       setContent(editingBlog.content);
//     }
//   }, [editingBlog]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage(null);

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("author", author);
//     formData.append("content", content);
//     if (image) formData.append("image", image);

//     try {
//       if (editingBlog) {
//         await axios.put(`${BASE_URL}/api/blogs/${editingBlog._id}`, formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         setMessage("✅ Blog updated successfully!");
//         setEditingBlog(null);
//       } else {
//         await axios.post(`${BASE_URL}/api/blogs`, formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         setMessage("✅ Blog created successfully!");
//       }

//     //   fetchBlogs(); // refresh blog list
//       setTitle("");
//       setAuthor("");
//       setContent("");
//       setImage(null);
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-gray-100 rounded">
//       {message && (
//         <p
//           className={`p-2 text-center rounded ${
//             message.includes("✅") ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
//           }`}
//         >
//           {message}
//         </p>
//       )}

//       <input
//         type="text"
//         placeholder="Title"
//         className="w-full p-2 border rounded"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Author"
//         className="w-full p-2 border rounded"
//         value={author}
//         onChange={(e) => setAuthor(e.target.value)}
//         required
//       />

//       {/* Jodit Editor */}
//       <JoditEditor value={content} onChange={(newContent) => setContent(newContent)} />

//       {/* Image Upload */}
//       <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />

//       <button
//         type="submit"
//         className="px-4 py-2 text-white bg-blue-500 rounded disabled:opacity-50"
//         disabled={loading}
//       >
//         {loading ? "Saving..." : editingBlog ? "Update Blog" : "Create Blog"}
//       </button>
//     </form>
//   );
// }


import React, { useState, useEffect } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";   // 👈 import
import { BASE_URL } from "../api/config";

export default function BlogForm({ editingBlog, setEditingBlog }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();   // 👈 useNavigate hook

  // Pre-fill form when editing
  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setAuthor(editingBlog.author);
      setContent(editingBlog.content);
    }
  }, [editingBlog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      if (editingBlog) {
        await axios.put(`${BASE_URL}/api/blogs/${editingBlog._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setMessage("✅ Blog updated successfully!");
        setEditingBlog(null);
      } else {
        await axios.post(`${BASE_URL}/api/blogs`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setMessage("✅ Blog created successfully!");

        // 👇 Redirect to blog list after creating
        navigate("/blogs");
      }

      // reset form
      setTitle("");
      setAuthor("");
      setContent("");
      setImage(null);
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-gray-100 rounded">
      {message && (
        <p
          className={`p-2 text-center rounded ${
            message.includes("✅") ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
          }`}
        >
          {message}
        </p>
      )}

      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        className="w-full p-2 border rounded"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <JoditEditor value={content} onChange={(newContent) => setContent(newContent)} />

      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />

      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Saving..." : editingBlog ? "Update Blog" : "Create Blog"}
      </button>
    </form>
  );
}






