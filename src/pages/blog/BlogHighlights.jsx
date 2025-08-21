import React from "react";
import { FaTags } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const BlogHighlights = () => {
  const items = [
    {
      id: 1,
      image: "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/00-trek-k-everestu-550x450.jpg", // replace with your image path
      overlay: "bg-[#ea4335e0]",
      title: "1 Day Safari Tanzania: Is it Possible Way to Experience the Real Wildlife?",
      category: "TREKKING",
      date: "23/11/2020",
    },
    {
      id: 2,
      image: "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Mt-Cook-boardwalks-RTAR-550x450.jpg",
      overlay: "bg-[rgba(251,188,5,0.88)]",
      title: "Climbing Mount Kilimanjaro? Explore The Fascinating Parts Of Kilimanjaro Glaciers",
      category: "TREKKING",
      date: "23/11/2020",
    },
    {
      id: 3,
      image: "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/a73123b-550x450.jpg",
      overlay: "bg-[rgba(52,168,83,0.88)]",
      title: "5 Things You Need To Do The Night Before You Climb Kilimanjaro",
      category: "TREKKING",
      date: "23/11/2020",
    },
    {
      id: 4,
      image: "https://safarimarketingpro.com/blog/wp-content/uploads/2020/11/Kilimanjaro-and-safari-packages-550x450.jpg",
      overlay: "bg-[rgba(66,133,244,0.88)]",
      title: "Where To Stay On Tanzania Family Safari – Comparison Between A Lodge And A Tented Camp",
      category: "SAFARI",
      date: "23/11/2020",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative h-[290px]  p-[30px] flex items-center justify-center text-white  group-hover:opacity-100 transition-all duration-500 ease-in-out "
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0  ${item.overlay}`}
          ></div>

          {/* Content */}
          <div className="relative z-10  flex flex-col h-full justify-between">
            {/* Number */}
            <div className="text-[50px] font-semibold">{item.id}</div>
            <div class="relative after:content-[''] after:block after:h-[3px] after:bg-white after:w-[30px] after:mt-[-20px] after:relative after:left-[6px]">
 
</div>


            {/* Title */}
            <h3 className="text-white text-[18px] font-semibold block m-0 font-poppins leading-[25px]">
              {item.title}
            </h3>

            {/* Meta info */}
            <div className=" text-sm">
              <div className="flex items-center gap-2">
                <span><FaTags /></span>
                <span className="uppercase">{item.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <span><SlCalender /></span>
                <span className="font-bold">{item.date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogHighlights;
