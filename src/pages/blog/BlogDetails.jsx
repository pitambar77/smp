import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaTags } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { blogPosts } from "./BlogData"; // Make sure blogPosts is exported from BlogSection
import CategoriesSection from "./CategoriesSection";
import Common from "../../components/Common";

const BlogDetails = () => {
  const { slug } = useParams(); // Get blog id from URL
  const blog = blogPosts.find((post) => post.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!blog) {
    return <h2 className="text-center text-red-500">Blog not found!</h2>;
  }

  // Get related blogs from same category
  const relatedBlogs = blogPosts.filter(
    (post) => post.category === blog.category && post.slug!== blog.slug
  );

  
  return (
    <>
    <div className=" w-full mx-auto">
 {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[700px] object-cover rounded-sm shadow-md"
      />
    
    <div className="max-w-6xl mx-auto px-4 py-12">
     

      {/* Blog Title */}
      <h1 className="mt-6 text-2xl md:text-3xl font-bold">{blog.title}</h1>

      {/* Blog Meta */}
      <div className="flex items-center gap-6 text-gray-500 mt-3 text-sm">
        <span className="flex items-center gap-1">
          <FaTags /> {blog.category}
        </span>
        <span className="flex items-center gap-1">
          <SlCalender /> {blog.date}
        </span>
      </div>

      {/* Blog Content */}
      <p className="mt-6 text-gray-700 leading-relaxed">
        {/* Dummy content — you can add "content" field in blogPosts */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
        facilisis mauris. Suspendisse potenti. Aliquam erat volutpat. Duis
        commodo lorem nec risus commodo, sed convallis lacus malesuada. In hac
        habitasse platea dictumst. Ut sit amet lorem a nibh feugiat tincidunt.
        <br />
        <br />
        More details about this blog can go here. You can add a `content`
        property to each blog object for real text.
      </p>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">Related Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedBlogs.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.slug}>
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center mt-2 text-xs text-gray-500 gap-3">
                      <span className="flex items-center gap-1">
                        <FaTags size={12} /> {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <SlCalender size={12} /> {post.date}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
    <CategoriesSection/>
    <Common/>
    </>
  );
};

export default BlogDetails;
