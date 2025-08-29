import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaTags } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { blogPosts } from "./BlogData";

const BlogCard = ({ post }) => (
  <Link to={`/blog/${post.slug}`}>
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          {post.title}
        </h3>
        <div className="flex items-center mt-2 text-sm text-gray-500 gap-5">
          <span className="flex items-center gap-1">
            <FaTags /> {post.category}
          </span>
          <span className="flex items-center gap-1">
            <SlCalender /> {post.date}
          </span>
        </div>
      </div>
    </div>
  </Link>
);

const SubscribeBox = () => (
  <div className="sticky top-24">
    <div className="bg-gradient-to-r from-[rgb(63,122,212)] from-35% to-[rgb(255,82,84)] to-[116%] text-white p-6 rounded-md shadow-md flex flex-col justify-center items-center">
      <h4 className="text-[30px] mb-0 uppercase font-medium leading-[1.2] text-center">
        SUBSCRIBE TO OUR BLOG
      </h4>
      <p className="text-[18px] font-normal py-5 px-0 text-center">
        Stay up to date with the latest marketing, sales, and service tips and
        news.
      </p>
      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border border-white text-center bg-white rounded text-gray-800 mb-3"
      />
      <button className="bg-white w-full text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100">
        Subscribe
      </button>
    </div>
    <div className="mt-5 bg-gradient-to-r from-[rgb(63,122,212)] from-35% to-[rgb(255,82,84)] to-[116%] h-[290px] text-white flex justify-center items-center rounded-md p-6 shadow-md hover:shadow-lg">
      <button className="bg-white text-blue-500 px-4 py-2 rounded font-semibold cursor-pointer">
        Explore the Report
      </button>
    </div>
  </div>
);

const BlogSection = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const blogTopRef = useRef(null); // ✅ reference to blog grid top

  const scrollToTop = () => {
    if (blogTopRef.current) {
      blogTopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 2);
    // scrollToTop();
  };

  const showLess = () => {
    setVisibleCount(4);
    scrollToTop();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left / Middle Section */}
      <div className="md:col-span-2">
        {/* Top Section */}
        <div ref={blogTopRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.slice(0, visibleCount).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          {visibleCount < blogPosts.length && (
            <button
              onClick={loadMore}
              className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold cursor-pointer"
            >
              LOAD MORE
            </button>
          )}
          {visibleCount > 4 && (
            <button
              onClick={showLess}
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full font-semibold cursor-pointer"
            >
              SHOW LESS
            </button>
          )}
        </div>
      </div>

      {/* Right Sidebar (Sticky Report Box) */}
      <div>
        <SubscribeBox />
      </div>
    </div>
  );
};

export default BlogSection;


// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { FaTags } from "react-icons/fa6";
// import { SlCalender } from "react-icons/sl";
// import { BASE_URL } from "../../api/config"; // adjust path if needed

// const BlogCard = ({ post }) => (
//   <Link to={`/blog/${post._id}`}>
//     <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer">
//       {post.image && (
//         <img
//           src={`${BASE_URL}/uploads/${post.image}`}
//           alt={post.title}
//           className="w-full h-48 object-cover"
//         />
//       )}
      
//       <div className="p-4">
//         <h3 className="text-base font-semibold leading-6 text-gray-900">
//           {post.title}
//         </h3>
//         <div className="flex items-center mt-2 text-sm text-gray-500 gap-5">
//           <span className="flex items-center gap-1">
//             <FaTags /> {post.category || "Uncategorized"}
//           </span>
//           <span className="flex items-center gap-1">
//             <SlCalender /> {new Date(post.date).toLocaleDateString()}
//           </span>
//         </div>
//       </div>
//     </div>
//   </Link>
// );


// const SubscribeBox = () => (
//   <div className="sticky top-24">
//     <div className="bg-gradient-to-r from-[rgb(63,122,212)] from-35% to-[rgb(255,82,84)] to-[116%] text-white p-6 rounded-md shadow-md flex flex-col justify-center items-center">
//       <h4 className="text-[30px] mb-0 uppercase font-medium leading-[1.2] text-center">
//         SUBSCRIBE TO OUR BLOG
//       </h4>
//       <p className="text-[18px] font-normal py-5 px-0 text-center">
//         Stay up to date with the latest marketing, sales, and service tips and
//         news.
//       </p>
//       <input
//         type="email"
//         placeholder="Email"
//         className="w-full px-3 py-2 border border-white text-center bg-white rounded text-gray-800 mb-3"
//       />
//       <button className="bg-white w-full text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100">
//         Subscribe
//       </button>
//     </div>
//     <div className="mt-5 bg-gradient-to-r from-[rgb(63,122,212)] from-35% to-[rgb(255,82,84)] to-[116%] h-[290px] text-white flex justify-center items-center rounded-md p-6 shadow-md hover:shadow-lg">
//       <button className="bg-white text-blue-500 px-4 py-2 rounded font-semibold cursor-pointer">
//         Explore the Report
//       </button>
//     </div>
//   </div>
// );

// const BlogSection = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(4);
//   const blogTopRef = useRef(null);

//   useEffect(() => {
//     axios
//       .get(`${BASE_URL}/api/blogs`)
//       .then((res) => setBlogs(res.data))
//       .catch((err) => console.error("Error fetching blogs:", err));
//   }, []);

//   const scrollToTop = () => {
//     if (blogTopRef.current) {
//       blogTopRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const loadMore = () => {
//     setVisibleCount((prev) => prev + 2);
//     // scrollToTop(); // optional
//   };

//   const showLess = () => {
//     setVisibleCount(4);
//     scrollToTop();
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
//       {/* Left / Middle Section */}
//       <div className="md:col-span-2">
//         {/* Blog Cards */}
//         <div ref={blogTopRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {blogs.slice(0, visibleCount).map((post) => (
//             <BlogCard key={post._id} post={post} />
//           ))}
//         </div>

//         {/* Load More / Show Less Buttons */}
//         <div className="flex justify-center gap-4 mt-12">
//           {visibleCount < blogs.length && (
//             <button
//               onClick={loadMore}
//               className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold cursor-pointer"
//             >
//               LOAD MORE
//             </button>
//           )}
//           {visibleCount > 4 && (
//             <button
//               onClick={showLess}
//               className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full font-semibold cursor-pointer"
//             >
//               SHOW LESS
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Right Sidebar */}
//       <div>
//         <SubscribeBox />
//       </div>
//     </div>
//   );
// };

// export default BlogSection;

