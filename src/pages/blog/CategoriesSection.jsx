// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";

// const categories = [
//   { name: "Safari", color: "border-orange-400", path: "/safari" },
//   { name: "Trekking", color: "border-teal-500", path: "/trekking" },
// ];

// export default function CategoriesSection() {
//   const navigate = useNavigate();

//   return (
//     <section className="py-8 mt-5 -mb-5">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         {/* Heading */}
//         <h2 className="text-[#094a50] uppercase font-semibold leading-[42px] mb-[10px] text-[30px]">
//           Explore More Categories
//         </h2>
//         <p className="font-poppins text-[15px] font-medium text-[#848484] mt-2">
//           Ready to brush up on something new? We've got more to read right this way.
//         </p>

//         {/* Categories */}
//         <div className=" max-w-[800px] mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center ">
//           {categories.map((cat, index) => (
//             <button
//               key={index}
//               onClick={() => navigate(cat.path)}
//               className={`flex items-center justify-between cursor-pointer w-full bg-gray-50 p-6 rounded-md shadow-sm border-l-4 ${cat.color} hover:bg-white transition`}
//             >
//               <span className="font-semibold text-lg text-gray-800">
//                 {cat.name}
//               </span>
//               <span className="text-teal-600 font-bold text-2xl  ">< IoIosArrowForward /></span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { blogPosts } from "./BlogData"; // import your posts

export default function CategoriesSection() {
  const navigate = useNavigate();

  // Extract unique categories from blogPosts
  const uniqueCategories = [...new Set(blogPosts.map((post) => post.category))];

  return (
    <section className="py-8 mt-5 -mb-5">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-[#094a50] uppercase font-semibold leading-[42px] mb-[10px] text-[30px]">
          Explore More Categories
        </h2>
        <p className="font-poppins text-[15px] font-medium text-[#848484] mt-2">
          Ready to brush up on something new? We've got more to read right this way.
        </p>

        {/* Categories */}
        <div className="max-w-[800px] mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
          {uniqueCategories.map((cat, index) => (
            <button
              key={index}
              onClick={() => navigate(`/category/${cat.toLowerCase()}`)} // dynamic path
              className={`flex items-center justify-between cursor-pointer w-full bg-gray-50 p-6 rounded-md shadow-sm border-l-4 
                ${cat === "Safari" ? "border-orange-400" : "border-teal-500"} 
                hover:bg-white transition`}
            >
              <span className="font-semibold text-lg text-gray-800">
                {cat}
              </span>
              <span className="text-teal-600 font-bold text-2xl">
                <IoIosArrowForward />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
