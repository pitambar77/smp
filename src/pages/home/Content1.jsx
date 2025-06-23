// import React from 'react';
// import axios from 'axios';
// import { useEffect } from "react";
// import { useState } from "react";
// import { BASE_URL } from '../../api/config';

// const Content1 = () => {

// const [overview, setOverview] = useState(null);

//   useEffect(() => {
//     axios.get(`${BASE_URL}/api/home-overview`)
//       .then((res) => {
//         setOverview(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching overview:", err);
//       });
//   }, []);

//   if (!overview) return <div className="text-center mt-10">Loading...</div>;

//   return (
//     <div className="w-full relative flex justify-center bg-white pb-14 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto text-center">
//         <h1 className="font-montserrat font-bold text-[40px] text-center capitalize text-[#3467d8] leading-[1.3] mb-5 px-0 pb-5">
//          {overview.heading}
//         </h1>

//         <p className="text-[20px] font-medium leading-[32px] mt-5 text-gray-600 mb-6 text-center  font-montserrat">
//         {overview.subheading}
//         </p>

//         <p className="text-[19px] font-normal leading-[1.8] text-center text-[#787878] mb-4 font-montserrat">
//          {overview.content1}
//         </p>

//         <p className="text-[19px] font-normal leading-[1.8] text-center text-[#787878] mb-4 font-montserrat">
//        {overview.content2}
//         </p>

//         <p className="text-[19px] font-normal leading-[1.8] text-center text-[#787878] mb-4 font-montserrat">
// That’s why we at <strong>Safari Marketing Pro</strong> designed a proven process that helps thousands of safari operators to <strong>10x their revenue.</strong> It’s not
//  about the marketing only where we bring customers to your business, we understand <strong>how to create a world-class website, what marketing strategy work and which content will engage your traveller to attract and convince them to book.</strong>
//  So from <strong> Managing and planning, to executing,</strong> we refine
//   the way that works dedicately to have the winning relationship with your customers.        </p>

//         <div className="mt-8">
//           <h2 className="text-[19px] font-normal text-center text-[#787878] leading-[1.8] mb-4">
//             Let’s Get More Qualified Inquiries and Bookings, and Make More Money...
//           </h2>
//         </div>

//         {/* Image after content */}
//         <div className="mt-10">
//           <img
//             src={`${BASE_URL}/uploads/${overview.image}`}// Replace with your image URL
//             alt="Safari Marketing"
//             className="mx-auto rounded-5xl w-full max-w-6xl"
//           />
//         </div>

//       <div className="mt-10">
//   <button
//     className="bg-gray-900 text-white text-l px-[40px] py-[15px] rounded-[5px] hover:bg-red-400"
//     onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//   >
//     <strong>GET MY FREE PROPOSAL</strong>
//   </button>
// </div>

//       </div>
//     </div>
//   );
// };

// export default Content1;

//-------------------------------------------responsive---------------------------

import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/config";

const Content1 = () => {
  const [overview, setOverview] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/home-overview`)
      .then((res) => setOverview(res.data))
      .catch((err) => console.error("Error fetching overview:", err));
  }, []);

  if (!overview) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="w-full relative flex justify-center bg-white pb-10 sm:pb-12 md:pb-14 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl mx-auto text-center ">
        <h1 className="font-montserrat font-bold text-[24px]  md:text-[36px] lg:text-[40px] text-center  capitalize text-[#3467d8] leading-snug lg:leading-[1.3] mb-8   lg:pb-5">
          {overview.heading}
        </h1>

        <p className="text-[20px] md:text-[19px] lg:text-[20px] font-medium leading-relaxed lg:leading-[32px] mt-4 sm:mt-5 text-[#787878] mb-4 sm:mb-6 text-center font-montserrat">
          {overview.subheading}
        </p>

        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] font-normal leading-relaxed lg:leading-[1.8] sm:text-center text-justify text-[#787878] mb-4 font-montserrat">
          {overview.content1}
        </p>

        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] font-normal leading-relaxed lg:leading-[1.8] sm:text-center text-justify text-[#787878] mb-4 font-montserrat">
          {overview.content2}
        </p>

        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] font-normal leading-relaxed lg:leading-[1.8] sm:text-center text-justify text-[#787878] mb-4 font-montserrat">
          That’s why we at <strong>Safari Marketing Pro</strong> designed a
          proven process that helps thousands of safari operators to{" "}
          <strong>10x their revenue.</strong> It’s not about the marketing only
          where we bring customers to your business, we understand{" "}
          <strong>
            how to create a world-class website, what marketing strategy works
            and which content will engage your traveller to attract and convince
            them to book.
          </strong>
          So from <strong>Managing and planning, to executing,</strong> we
          refine the way that works dedicatedly to have the winning relationship
          with your customers.
        </p>

        <div className="mt-6 sm:mt-8">
          <h2 className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] font-normal text-center text-[#787878] leading-relaxed lg:leading-[1.8] mb-4">
            Let’s Get More Qualified Inquiries and Bookings, and Make More
            Money...
          </h2>
        </div>

        {/* Image Section */}
        <div className="mt-6 sm:mt-10">
          <img
            src={`${BASE_URL}/uploads/${overview.image}`}
            alt="Safari Marketing"
            className="mx-auto rounded-2xl w-full max-w-6xl"
          />
        </div>

        {/* Button */}
        <div className="mt-8 sm:mt-10">
          <button
            className="bg-gray-900 text-white text-sm sm:text-base px-6 sm:px-10 py-[10px] sm:py-3 rounded-md hover:bg-red-400 transition-all"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <strong>GET MY FREE PROPOSAL</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content1;
