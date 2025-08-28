import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../api/config";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/blogs`)
      .then(res => setBlogs(res.data))
      .catch(err => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Blogs</h1>
      {blogs.map(blog => (
        <div key={blog._id} className="mb-6 p-4 border rounded">
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p className="text-gray-600">By {blog.author}</p>
          <Link
            to={`/blogs/${blog._id}`}
            className="text-blue-600 hover:underline"
          >
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
}
