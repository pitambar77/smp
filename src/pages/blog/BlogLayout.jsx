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
    <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Main Post */}
      <div className="lg:col-span-2  rounded hover:shadow-2xl transform ease-in-out">
        <div className="bg-gray-100 p-6 ">
       
           <h2 className="text-2xl font-bold text-[#3467d8] mb-2">
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
          <div>
            <div>
             <div className="w-full h-96">
        <img
          src="https://www.kabiraugandasafaris.com/wp-content/uploads/2021/06/Travel-to-Kenya-for-a-Luxury-Safari-with-Kabira-Safaris-Africa.jpg"
          alt="Blog Post"
          className="w-full h-full object-cover p-4"
        />
      </div>

      {/* Blog Content */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-[#3467d8]">
          1 Day Safari Tanzania: Is it Possible Way to Experience the Real Wildlife?
        </h2>
        <p className=" mt-2 font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px] pb-[17px] m-0">
          Discover the beauty of Tanzania’s wildlife in just one day! 
          A thrilling adventure awaits with breathtaking landscapes and exotic animals.Discover the beauty of Tanzania’s wildlife in just one day! 
          A thrilling adventure awaits with breathtaking landscapes and exotic animals.Discover the beauty of Tanzania’s wildlife in just one day! 

        </p>

        {/* Post Info */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
            Trekking
          </span>
          <span>23/11/2020</span>
        </div>
      </div>
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
