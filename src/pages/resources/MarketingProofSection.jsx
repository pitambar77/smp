// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { BASE_URL } from "../../api/config";

// import GetFreeQuoteForm from "../../components/GetFreeQuoteForm";

// const API_URL = `${BASE_URL}/api/marketing-proof`;

// const MarketingProofSection = () => {
//   const [data, setData] = useState({
//     heading: "",
//     subheading: "",
//     images: [],
//   });
//   const [selectedImage, setSelectedImage] = useState(null);

//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(API_URL);
//         setData(res.data);
//       } catch (error) {
//         console.error("Failed to fetch marketing proof data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(data);

//   return (
//     <div className="pt-[90px] pb-[45px] px-6 bg-white">
//       {/* Header */}
//       <div className="text-center  mb-12 max-w-[1140px] mx-auto">
//         <h2 className=" font-bold text-[40px] text-center capitalize text-[#3467d8] leading-[1.3] m-0 px-[15%]">
//           {data.heading}
//         </h2>
//         <p className=" font-normal text-[18px] text-center text-[#787878] leading-normal -mb-5 px-[30px] py-[15px]">
//           {data.subheading}
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 max-w-[1140px] mx-auto pr-8">
//         {Array.isArray(data.images) &&
//           data.images.map((image, index) => (
//             <div
//               key={index}
//               onClick={() => {
//                 setSelectedImage(image);
//                 setShowForm(true);
//               }}
//               className="cursor-pointer transition transform hover:scale-105"
//             >
//               <img
// src={`${BASE_URL}${image.url}`}
// alt={image.title || `Image ${index + 1}`}
//                 className="rounded w-full h-auto object-contain"
//               />
//             </div>
//           ))}
//       </div>

//       {/* Form Modal */}
//       {showForm && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat] ">
//           <div
//             className=" mt-[80px] relative w-[90%] max-w-[600px] bg-[#3467d8] bg-gradient-to-t from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg
//                  animate-slide-down-fade  "
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setShowForm(false)}
//               className="absolute cursor-pointer -top-6 -right-5 bg-red-400 hover:bg-[#396bb1] text-white hover:text-red-400 font-bold text-[32px] w-10 h-10 flex items-center justify-center shadow-md"
//             >
//               ×
//             </button>

//             {/* Heading */}
//              <div className="text-white text-center  -mt-5 rounded-t-lg">
//           <h3 className="text-[22px] font-medium leading-snug uppercase px-4 pt-8">
//                 {selectedImage?.title || "Get Your Free Quote"}
//               </h3>
//                <div className="border-t border-white w-full mx-auto mt-4 -mb-2 " />
//             </div>

//             {/* Form */}
//             <GetFreeQuoteForm />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MarketingProofSection;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/config";

import GetFreeQuoteForm from "../../components/GetFreeQuoteForm";

const API_URL = `${BASE_URL}/api/marketing-proof`;

const MarketingProofSection = () => {
  const [data, setData] = useState({
    heading: "",
    subheading: "",
    images: [],
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URL);
        setData(res.data);
      } catch (error) {
        console.error("Failed to fetch marketing proof data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="md:pt-[90px] pt-[40px] pb-[45px]  md:px-[25px] lg:px-[30px] bg-white">
      {/* Header */}
      <div className="text-center md:pb-8  pb-5 max-w-[1140px] mx-auto">
        <h2 className=" font-bold text-[24px] md:text-[40px] text-center capitalize text-[#3467d8] leading-[1.3] m-0 md:px-[15%]">
          {data.heading}
        </h2>
        <p className=" font-normal text-[15px] md:text-[18px] text-center text-[#787878] leading-normal py-[10px] md:px-[30px] md:py-[12px]">
          {data.subheading}
        </p>
      </div>

      {/* Cards */}
      <div className="grid  md:px-0 px-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-[12px] space-y-2 md:gap-7 max-w-[1140px] mx-auto lg:pr-8 ">
        {Array.isArray(data.images) &&
          data.images.map((image, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedImage(image);
                setShowForm(true);
              }}
              className="cursor-pointer transition transform hover:scale-105"
            >
              <img
                src={`${BASE_URL}${image.url}`}
                alt={image.title || `Image ${index + 1}`}
                className=" w-full h-auto object-contain"
              />
            </div>
          ))}
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat] ">
          <div
            className=" mt-[80px] relative w-[90%] px-2 sm:px-0 max-w-[600px] bg-[#3467d8] bg-gradient-to-t from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg
                 animate-slide-down-fade  "
          >
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute cursor-pointer -top-6 -right-5 bg-red-400 hover:bg-[#396bb1] text-white hover:text-red-400 font-bold text-[32px] w-10 h-10 flex items-center justify-center shadow-md"
            >
              ×
            </button>

            {/* Heading */}
            <div className="text-white text-center  md:-mt-5 rounded-t-lg">
              <h3 className="  text-[18px]  md:text-[22px] font-medium leading-snug uppercase px-4 pt-8">
                {selectedImage?.title || "Get Your Free Quote"}
              </h3>
              <div className="border-t border-white w-full mx-auto mt-4 -mb-2 " />
            </div>

            {/* Form */}
            <GetFreeQuoteForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketingProofSection;
