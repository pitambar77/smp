// import React from "react";
// import { FaRegStar, FaStar } from "react-icons/fa";
// import { LuCircleCheckBig } from "react-icons/lu";
// const reviews = [
//   {
//     id: 1,
//     name: "Founder, Samton Safaris",
//     rating: 4.0,
//     comment: "Fantastic experience! Highly recommend.",
//     description: '"Everyhings is perfects"',
//      verifylogo:" "
//   },
//   {
//     id: 2,
//     name: "Managing Director, Bora Trekking Tours and Safari",
//     rating: 5.0,
//     comment: "Great service, will use again.",
//     description:
//       "“Their teamwork was amazing, and they listened to what their clients wished.”",
//       verify:"Verified Review",
//       verifylogo:<LuCircleCheckBig className=" w-[15px] text-[#104f79]" />
//   },
//   {
//     id: 3,
//     name: "CIO, White Plains Safaris",
//     rating: 5.0,
//     comment: "Good, but room for improvement.",
//     description:
//       "“The price was very good considering the amount of work done.”",
//       verify:"Verified Review",
//        verifylogo:<LuCircleCheckBig className=" w-[15px] text-[#104f79]" />
//   },
//   {
//     id: 4,
//     name: "Marketing Director, Dove Adventure Tanzania",
//     rating: 5.0,
//     comment: "Fantastic experience! Highly recommend.",
//     description: "“They truly stand out as a top-notch company.”",
//     verify:"Verified Review",
//      verifylogo:<LuCircleCheckBig className=" w-[15px] text-[#104f79]" />
//   },
//   {
//     id: 5,
//     name: "Managing Director, EURAY ESCAPADES LIMITED",
//     rating: 4,
//     comment: "Great service, will use again.",
//     description:
//       "“They were swift in responding to questions and working on corrections.”",
//       verify:"Verified Review",
//        verifylogo:<LuCircleCheckBig className=" w-[15px] text-[#104f79]" />
//   },
//   {
//     id: 6,
//     name: "Owner, Safari World Tours",
//     rating: 5.0,
//     comment: "Good, but room for improvement.",
//     description:
//       "“Their work ethic and dedication to satisfying our needs stood out.”",
//       verify:"Verified Review",
//        verifylogo:<LuCircleCheckBig className=" w-[15px] text-[#104f79]" />
//   },
// ];

// const Review = () => {
//   return (
//     <div className="max-w-[915px] mx-auto px-8 pb-8 py-[20px]  bg-gray-50/80">
//       <h2 className="text-[24px] font-[400] text-[#17313b]  mb-[17px] hover:underline">
//         Manorama Web Solutions Private Limited Reviews
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//         {reviews.map((review) => (
//           <div
//             key={review.id}
//             className="bg-white px-6 pt-4 rounded-[3px] shadow-[0_3px_8px_rgba(0,0,0,0.08)] hover:shadow-gray-300 cursor-pointer"
//           >
//             <div className=" flex items-center gap-2">
//               <p>{review.rating}.0</p>
//               <div className="flex justify-center ">
//                 {[...Array(5)].map((_, i) =>
//                   i < review.rating ? (
//                     <FaStar key={i} className=" text-[#e62415]" />
//                   ) : (
//                     <FaRegStar key={i} className="text-gray-300" />
//                   )
//                 )}
//               </div>
//             </div>

//             <p className="text-[#17313b] pt-4 pb-[10px] font-[500] text-[14px] leading-[18px]   ">
//               {review.description}
//             </p>
//             <p className="text-[#6a7a7e] py-4 font-[500] text-[12px] ">
//               {review.name}
//             </p>
//             <div className=" flex items-center gap-[5px] ">
//               {review.verifylogo}
//               <p className="text-[#757c80] py-4 text-[14px] inline-block align-bottom  items-center">
//                 {review.verify}{" "}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Review;



//------------------------------Responsive -----------------------

import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { LuCircleCheckBig } from "react-icons/lu";
const reviews = [
  {
    id: 1,
    name: "Founder, Samton Safaris",
    rating: 4.0,
    comment: "Fantastic experience! Highly recommend.",
    description: '"Everyhings is perfects"',
     verifylogo:" "
  },
  {
    id: 2,
    name: "Managing Director, Bora Trekking Tours and Safari",
    rating: 5.0,
    comment: "Great service, will use again.",
    description:
      "“Their teamwork was amazing, and they listened to what their clients wished.”",
      verify:"Verified Review",
      verifylogo:<LuCircleCheckBig className=" w-[15px] text-[#104f79]" />
  },
  {
    id: 3,
    name: "CIO, White Plains Safaris",
    rating: 5.0,
    comment: "Good, but room for improvement.",
    description:
      "“The price was very good considering the amount of work done.”",
      verify:"Verified Review",
       verifylogo:<LuCircleCheckBig className=" w-[15px] text-[#104f79]" />
  },
  {
    id: 4,
    name: "Marketing Director, Dove Adventure Tanzania",
    rating: 5.0,
    comment: "Fantastic experience! Highly recommend.",
    description: "“They truly stand out as a top-notch company.”",
    verify:"Verified Review",
     verifylogo:<LuCircleCheckBig className=" w-[15px] text-[#104f79]" />
  },
  {
    id: 5,
    name: "Owner, Safari World Tours",
    rating: 4,
    comment: "Great service, will use again.",
    description:
      "“They were swift in responding to questions and working on corrections.”",
      verify:"Verified Review",
       verifylogo:<LuCircleCheckBig className=" w-[15px] text-[#104f79]" />
  },
  {
    id: 6,
    name: "Carol Williams",
    rating: 5.0,
    comment: "Good, but room for improvement.",
    description:
      "“Their work ethic and dedication to satisfying our needs stood out.”",
      verify:"Verified Review",
       verifylogo:<LuCircleCheckBig className=" w-[15px] text-[#104f79]" />
  },
];
 
const Review = () => {
  return (
    <div className="max-w-[915px] mx-auto px-8 pb-8 py-[20px]  bg-gray-50/80">
      <h2 className="text-[24px] font-[400] text-[#17313b]  mb-[17px] hover:underline">
        Manorama Web Solutions Private Limited Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white px-6 pt-4 rounded-[3px] shadow-[0_3px_8px_rgba(0,0,0,0.08)] hover:shadow-gray-300 cursor-pointer"
          >
            <div className=" flex items-center gap-2">
              <p>{review.rating}.0</p>
              <div className="flex justify-center ">
                {[...Array(5)].map((_, i) =>
                  i < review.rating ? (
                    <FaStar key={i} className=" text-[#e62415]" />
                  ) : (
                    <FaRegStar key={i} className="text-gray-300" />
                  )
                )}
              </div>
            </div>
 
            <p className="text-[#17313b] pt-4 pb-[10px] font-[500] text-[14px] leading-[18px] ">
              {review.description}
            </p>
            <p className="text-[#6a7a7e] py-4 font-[500] text-[12px] ">
              {review.name}
            </p>
            <div className=" flex items-center gap-[5px] ">
              {review.verifylogo}
              <p className="text-[#757c80] py-4 text-[14px] inline-block align-bottom  items-center">
                {review.verify}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Review;
 
 