// import React from "react";
// import { FaTags } from "react-icons/fa6";
// import { SlCalender } from "react-icons/sl";

// const blogPosts = [
//   {
//     id: 1,
//     title: "Climbing Mount Kilimanjaro? Explore The Fascinating Parts Of Kilimanjaro Glaciers",
//     category: "Trekking",
//     date: "23/11/2020",
//     image: "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
//   },
//   {
//     id: 2,
//     title: "5 Things You Need To Do The Night Before You Climb Kilimanjaro",
//     category: "Trekking",
//     date: "23/11/2020",
//     image: "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
//   },
//   {
//     id: 3,
//     title: "WHERE TO STAY ON TANZANIA FAMILY SAFARI – COMPARISON BETWEEN A LODGE AND A TENTED CAMP",
//     category: "Safari",
//     date: "23/11/2020",
//     image: "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
//   },
//   {
//     id: 4,
//     title: "Why Tanzania Safari Is Africa’s Best Kept Secret?",
//     category: "Safari",
//     date: "23/11/2020",
//     image: "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
//   },
//   {
//     id: 5,
//     title: "WHY NOW IS THE GREAT TIME TO START TANZANIA SAFARI?",
//     category: "Safari",
//     date: "23/11/2020",
//     image: "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
//   },
// ];

// const BlogCard = ({ post }) => (
//   <div className="bg-gray-100 rounded-md overflow-hidden shadow hover:shadow-lg transition">
//     <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
//     <div className="p-4">
//       <h3 className="text-lg font-semibold mb-2 text-gray-800">{post.title}</h3>
//       <div className="text-sm text-gray-500 flex items-center gap-4">
// <span className="flex items-center gap-1">
//   <FaTags /> {post.category}
// </span>
// <span className="flex items-center gap-1">
//   <SlCalender /> {post.date}
// </span>
// </div>

//     </div>
//   </div>
// );

// const SubscribeCard = () => (
// <div className="bg-gradient-to-r from-[rgb(63,122,212)] from-35% to-[rgb(255,82,84)] to-[116%] text-white p-6 rounded-md shadow-md flex flex-col justify-center items-center">
//   <h4 className="text-[30px] text-white mb-0 uppercase font-medium leading-[1.2] text-center">SUBSCRIBE TO OUR BLOG</h4>
//   <p className="text-white text-[18px] font-normal py-5 px-0 text-center">
//     Stay up to date with the latest marketing, sales, and service tips and news.
//   </p>
//   <input
//     type="email"
//     placeholder="Email"
//     className="w-full px-3 py-2 border border-white text-center bg-white rounded text-gray-800 mb-3"
//   />
//   <button className="bg-white w-full text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100">
//     Subscribe
//   </button>
// </div>
// );

// const ExploreReport = () => (
// <div className="bg-gradient-to-r from-[rgb(63,122,212)] from-35% to-[rgb(255,82,84)] to-[116%] text-white flex justify-center items-center rounded-md p-6 cursor-pointer shadow-md hover:shadow-lg">
//   <span className="font-semibold">Explore the Report</span>
// </div>
// );

// const Categories = () => (
//   <div className="mt-10 text-center">
//     <h2 className="text-xl font-bold mb-2 text-teal-800">EXPLORE MORE CATEGORIES</h2>
//     <p className="text-gray-600 mb-6">
//       Ready to brush up on something new? We’ve got more to read right this way.
//     </p>
//     <div className="flex justify-center gap-4">
//       <button className="border-b-2 border-orange-500 pb-1 text-orange-500">Safari</button>
//       <button className="border-b-2 border-teal-500 pb-1 text-teal-500">Trekking</button>
//     </div>
//   </div>
// );

// const BlogSection = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       {/* First Row */}
//       <div className="grid md:grid-cols-3 gap-6">
//         <BlogCard post={blogPosts[0]} />
//         <BlogCard post={blogPosts[1]} />
//         <SubscribeCard />
//       </div>

//       {/* Second Row */}
//       <div className="grid md:grid-cols-3 gap-6 mt-6">

//         <div className="md:col-span-2">
//           <BlogCard post={blogPosts[2]} />
//         </div>
//         <ExploreReport />
//       </div>

//       {/* Third Row */}
//       <div className="grid md:grid-cols-2 gap-6 mt-6">
//         <BlogCard post={blogPosts[3]} />
//         <BlogCard post={blogPosts[4]} />
//       </div>

//       {/* Load More */}
//       <div className="flex justify-center mt-6">
//         <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
//           LOAD MORE
//         </button>
//       </div>

//       {/* Categories */}
//       <Categories />
//     </div>
//   );
// };

// export default BlogSection;

// import React, { useState } from "react";

// const blogPosts = [
//   {
//     id: 1,
//     title: "Climbing Mount Kilimanjaro? Explore The Fascinating Parts Of Kilimanjaro Glaciers",
//     category: "Trekking",
//     date: "23/11/2020",
//     image: "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
//   },
//   {
//     id: 2,
//     title: "5 Things You Need To Do The Night Before You Climb Kilimanjaro",
//     category: "Trekking",
//     date: "23/11/2020",
//     image: "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
//   },
//   {
//     id: 3,
//     title: "Where to stay on Tanzania Family Safari – Comparison Between a Lodge and a Tented Camp",
//     category: "Safari",
//     date: "23/11/2020",
//     image: "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
//   },
//   {
//     id: 4,
//     title: "Why Tanzania Safari is Africa’s Best Kept Secret?",
//     category: "Safari",
//     date: "23/11/2020",
//     image: "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
//   },
//   {
//     id: 5,
//     title: "Why Now is the Great Time to Start Tanzania Safari?",
//     category: "Safari",
//     date: "23/11/2020",
//     image: "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
//   },
//   {
//     id: 6,
//     title: "10 Tips for a Safe Trekking Experience in Africa",
//     category: "Trekking",
//     date: "25/11/2020",
//     image: "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
//   },
//   {
//     id: 7,
//     title: "The Ultimate Safari Packing Guide",
//     category: "Safari",
//     date: "28/11/2020",
//     image: "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
//   },
// ];

// const BlogCard = ({ post }) => (
//   <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
//     {post.image && (
//       <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
//     )}
//     <div className="p-4">
//       <h3 className="text-base font-semibold leading-6 text-gray-900">{post.title}</h3>
//       <div className="flex items-center mt-2 text-sm text-gray-500">
//         <span className="mr-2">🏷 {post.category}</span>
//         <span>📅 {post.date}</span>
//       </div>
//     </div>
//   </div>
// );

// const SubscribeBox = () => (
// <div className="bg-gradient-to-r from-blue-500 to-pink-500 text-white p-6 rounded-lg shadow-lg text-center">
//   <h4 className="font-semibold text-lg">SUBSCRIBE TO OUR BLOG</h4>
//   <p className="text-sm mt-2">Stay up to date with the latest marketing, sales, and service tips and news.</p>
//   <input
//     type="email"
//     placeholder="Email"
//     className="w-full mt-4 p-2 rounded text-gray-900"
//   />
//   <button className="mt-3 w-full bg-white text-blue-500 font-semibold py-2 rounded">
//     Subscribe
//   </button>
// </div>
// );

// const ReportBox = () => (
// <div className="bg-gradient-to-r from-blue-500 to-pink-500 text-white p-6 rounded-lg shadow-lg flex items-center justify-center">
//   <button className="bg-white text-blue-500 px-4 py-2 rounded font-semibold">
//     Explore the Report
//   </button>
// </div>
// );

// const BlogSection = () => {
//   const [visiblePosts, setVisiblePosts] = useState(3);

//   const loadMore = () => {
//     setVisiblePosts((prev) => prev + 2); // Show 2 more
//   };

//   const showLess = () => {
//     setVisiblePosts(3); // Reset to default
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       {/* Blog Posts */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {blogPosts.slice(0, visiblePosts).map((post) => (
//           <BlogCard key={post.id} post={post} />
//         ))}
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-center gap-4 mt-6">
//         {visiblePosts < blogPosts.length && (
//           <button
//             onClick={loadMore}
//             className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold"
//           >
//             LOAD MORE
//           </button>
//         )}
//         {visiblePosts > 3 && (
//           <button
//             onClick={showLess}
//             className="bg-gray-500 text-white px-6 py-2 rounded-full font-semibold"
//           >
//             SHOW LESS
//           </button>
//         )}
//       </div>

//       {/* Categories */}
//       <div className="text-center mt-12">
//         <h2 className="text-xl font-semibold text-teal-800">EXPLORE MORE CATEGORIES</h2>
//         <p className="text-gray-500 text-sm mt-2">
//           Ready to brush up on something new? We’ve got more to read right this way.
//         </p>
//         <div className="flex justify-center gap-4 mt-6">
//           <button className="border-b-2 border-orange-500 pb-1 text-orange-500">Safari →</button>
//           <button className="border-b-2 border-teal-500 pb-1 text-teal-500">Trekking →</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogSection;

import React, { useState } from "react";

import { FaTags } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const blogPosts = [
  {
    id: 1,
    title:
      "Climbing Mount Kilimanjaro? Explore The Fascinating Parts Of Kilimanjaro Glaciers",
    category: "Trekking",
    date: "23/11/2020",
    image:
      "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
  },
  {
    id: 2,
    title: "5 Things You Need To Do The Night Before You Climb Kilimanjaro",
    category: "Trekking",
    date: "23/11/2020",
    image:
      "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
  },
  {
    id: 3,
    title:
      "Where to stay on Tanzania Family Safari – Comparison Between a Lodge and a Tented Camp",
    category: "Safari",
    date: "23/11/2020",
    image:
      "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
  },
  {
    id: 4,
    title: "Why Tanzania Safari is Africa’s Best Kept Secret?",
    category: "Safari",
    date: "23/11/2020",
    image:
      "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
  },
  {
    id: 5,
    title: "Why Now is the Great Time to Start Tanzania Safari?",
    category: "Safari",
    date: "23/11/2020",
    image:
      "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
  },
  {
    id: 5,
    title: "Why Now is the Great Time to Start Tanzania Safari?",
    category: "Safari",
    date: "23/11/2020",
    image:
      "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
  },
  {
    id: 5,
    title: "Why Now is the Great Time to Start Tanzania Safari?",
    category: "Safari",
    date: "23/11/2020",
    image:
      "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR.jpg",
  },
];

const BlogCard = ({ post }) => (
  <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
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
);

const SubscribeBox = () => (
  <div className=" sticky top-24">
    <div className="bg-gradient-to-r from-[rgb(63,122,212)] from-35% to-[rgb(255,82,84)] to-[116%] text-white p-6 rounded-md shadow-md flex flex-col justify-center items-center">
      <h4 className="text-[30px] text-white mb-0 uppercase font-medium leading-[1.2] text-center">
        SUBSCRIBE TO OUR BLOG
      </h4>
      <p className="text-white text-[18px] font-normal py-5 px-0 text-center">
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
    <div className=" mt-5 bg-gradient-to-r from-[rgb(63,122,212)] from-35% to-[rgb(255,82,84)] to-[116%] h-[290px] text-white flex justify-center items-center rounded-md p-6  shadow-md hover:shadow-lg">
      <button className="bg-white text-blue-500 px-4 py-2 rounded font-semibold cursor-pointer">
      Explore the Report
    </button>
    </div>
  </div>
);

const ReportBox = () => (
  <div className="  bg-gradient-to-r from-blue-500 to-pink-500 text-white p-6 rounded-lg shadow-lg flex items-center justify-center">
    <button className="bg-white text-blue-500 px-4 py-2 rounded font-semibold">
      Explore the Report
    </button>
  </div>
);

const BlogSection = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => setVisibleCount((prev) => prev + 2);
  const showLess = () => setVisibleCount(4);

  return (
    <div className="max-w-[1080px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left / Middle Section */}
      <div className="md:col-span-2">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.slice(0, visibleCount).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          {visibleCount < blogPosts.length && (
            <button
              onClick={loadMore}
              className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold"
            >
              LOAD MORE
            </button>
          )}
          {visibleCount > 4 && (
            <button
              onClick={showLess}
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full font-semibold"
            >
              SHOW LESS
            </button>
          )}
        </div>

        {/* Categories */}
        {/* <div className="text-center mt-12">
          <h2 className="text-xl font-semibold text-teal-800">
            EXPLORE MORE CATEGORIES
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Ready to brush up on something new? We’ve got more to read right
            this way.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <button className="border-b-2 border-orange-500 pb-1 text-orange-500">
              Safari →
            </button>
            <button className="border-b-2 border-teal-500 pb-1 text-teal-500">
              Trekking →
            </button>
          </div>
        </div> */}
      </div>

      {/* Right Sidebar (Sticky Report Box) */}
      <div>
        <SubscribeBox />
        {/* <ReportBox /> */}
      </div>
    </div>
  );
};

export default BlogSection;
