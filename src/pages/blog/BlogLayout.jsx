import React from "react";

const BlogLayout = () => {
  const recentPosts = [
    {
      title:
        "1 Day Safari Tanzania: Is it Possible Way to Experience the Real Wildlife?",
      category: "Trekking",
      date: "23/11/2020",
    },
    {
      title:
        "Climbing Mount Kilimanjaro? Explore The Fascinating Parts Of Kilimanjaro Glaciers",
      category: "Trekking",
      date: "23/11/2020",
    },
    {
      title: "5 Things You Need To Do The Night Before You Climb Kilimanjaro",
      category: "Trekking",
      date: "23/11/2020",
    },
  ];

  const popularPosts = [
    {
      title:
        "1 Day Safari Tanzania: Is it Possible Way to Experience the Real Wildlife?",
      category: "Trekking",
      date: "23/11/2020",
    },
    {
      title:
        "Climbing Mount Kilimanjaro? Explore The Fascinating Parts Of Kilimanjaro Glaciers",
      category: "Trekking",
      date: "23/11/2020",
    },
    {
      title: "5 Things You Need To Do The Night Before You Climb Kilimanjaro",
      category: "Trekking",
      date: "23/11/2020",
    },
  ];

  return (
    <div className="max-w-[1080px] mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Main Post */}
      <div className="lg:col-span-2  rounded hover:shadow-2xl transform ease-in-out">
        <div className="bg-gray-100 p-6 ">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            1 Day Safari Tanzania: Is It Possible Way To Experience The Real
            Wildlife?
          </h2>
          <div className="text-gray-500 text-sm flex items-center gap-3">
            <span className="flex items-center gap-1">
              <i className="fas fa-tag"></i> Trekking
            </span>
            <span className="flex items-center gap-1">
              <i className="fas fa-calendar"></i> 23/11/2020
            </span>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Recent Posts */}
        <div>
          <h3 className="bg-[#4679c5] text-white text-[18px] block tracking-[0.025rem] font-semibold px-4 py-2 m-0 mb-4 w-full float-left text-center">
            Recent Posts
          </h3>
          <div className="space-y-4 mt-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded">
                <h4 className="text-gray-800 font-medium">{post.title}</h4>
                <div className="text-gray-500 text-sm flex items-center gap-3 mt-2">
                  <span className="flex items-center gap-1">
                    <i className="fas fa-tag"></i> {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-calendar"></i> {post.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Popular */}
        <div>
          <h3 className="bg-[#4679c5] font-semibold text-white text-[18px] block tracking-[0.025rem] px-4 py-2 m-0 mb-4 w-full float-left text-center">
            Most Popular
          </h3>
          <div className="space-y-4 mt-4">
            {popularPosts.map((post, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded">
                <h4 className="text-gray-800 font-medium">{post.title}</h4>
                <div className="text-gray-500 text-sm flex items-center gap-3 mt-2">
                  <span className="flex items-center gap-1">
                    <i className="fas fa-tag"></i> {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-calendar"></i> {post.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
