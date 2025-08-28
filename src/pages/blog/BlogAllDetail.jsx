import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../api/config";

export default function BlogAllDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  console.log(blog)

  useEffect(() => {
    axios.get(`${BASE_URL}/api/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error("Error fetching blog:", err));
  }, [id]);

  if (!blog) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/blogs" className="text-blue-600 hover:underline">← Back to Blogs</Link>


      <h1 className="text-4xl font-bold mt-4">{blog.title}</h1>
      <p className="text-gray-600">By {blog.author} • {new Date(blog.createdAt).toDateString()}</p>

      {blog.image && (
        <img
         src={`${BASE_URL}/uploads/${blog.image}`}
          alt={blog.title}
          className="w-full h-72 object-cover rounded-lg mt-6"
        />
        
      )}

      <div
        className="prose max-w-none mt-6"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
