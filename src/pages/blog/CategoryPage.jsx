import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./BlogData"; // import your posts
import CategoriesSection from "./CategoriesSection";
import Common from "../../components/Common";

export default function CategoryPage() {
  const { slug } = useParams(); // category slug from URL
  const category = slug.charAt(0).toUpperCase() + slug.slice(1); // make it "Safari" or "Trekking"

  // Filter posts by category
  const filteredPosts = blogPosts.filter(
    (post) => post.category.toLowerCase() === slug.toLowerCase()
  );

  if (filteredPosts.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-700">
          No posts found in "{category}"
        </h2>
        <Link to="/blog" className="text-teal-600 underline mt-4 inline-block">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <>
    <div className=" bg-gradient-to-b from-[#3d72c2f2] to-white py-20">

    </div>
    <div className="max-w-6xl mx-auto px-4 py-12 ">
      <h1 className="text-[44px] font-bold text-[#26a3d4] mb-16 text-center">
        <span className="text-[#094a50]">Posts for</span> {category} 
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="block bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
    <CategoriesSection/>
    <Common/>
    </>
  );
}
