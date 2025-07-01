// import React from "react";
// import { FaCheck, FaTimes } from "react-icons/fa";

// const Table = () => {
//   return (
//     <div className="bg-[#f0f0f0] py-10 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="relative z-30 text-center px-7">
//           <h2 className="font-montserrat font-bold md:text-[48px] text-[24px] text-center text-blue-600 leading-[1.3] capitalize m-0 px-[10%] pb-[15px] mt-10">
//             SMP In Comparison To Other Marketing Agencies
//           </h2>

//           <p
//             className="mb-10"
//             style={{
//               fontFamily: "Montserrat, sans-serif",
//               fontWeight: 400,
//               fontSize: "22px",
//               textAlign: "center",
//               textTransform: "capitalize",
//               color: "#787878",
//               lineHeight: 1.4,
//               padding: 0,
//             }}
//           >
//             Educate your customers to learn more
//           </p>
//         </div>

//         {/* ✅ Responsive scroll container added here */}
//         <div className="mb-16 ml-2 mr-2 overflow-x-auto">
//           <div className="min-w-[840px]">
//             {/* Header */}
//             <div className="grid grid-cols-3 text-white text-center font-montserrat text-[20px] font-semibold uppercase border">
//               <div className="bg-[#001634]  h-[100px] flex items-center justify-center border">
//                 SPECIFICATIONS
//               </div>
//               <div className="bg-[#0057FF]  h-[100px] flex items-center justify-center border">
//                 SAFARI MARKETING PRO
//               </div>
//               <div className="bg-[#FF4D4D]  h-[100px] flex items-center justify-center border">
//                 OTHER AGENCIES
//               </div>
//             </div>

//             {/* Rows */}
//             {[
//               {
//                 title: "The Niche",
//                 smp: "We are the industry leaders in understanding the African safari eco-system.",
//                 other:
//                   "No ground level understanding of how the entire safari eco-system works.",
//               },
//               {
//                 title: "Strategy",
//                 smp: "Data-backed marketing strategies focused on results in the safari industry.",
//                 other:
//                   "Generic marketing playbooks used for all industries with no specialization.",
//               },
//               {
//                 title: "Team Expertise",
//                 smp: "Team of experts with deep knowledge of safari travel and customer behavior.",
//                 other:
//                   "Junior marketers with no direct experience in safari travel or tourism.",
//               },
//               {
//                 title: "Creative Direction",
//                 smp: "Visual storytelling tailored to wildlife tourism audiences.",
//                 other:
//                   "Recycled creatives with no understanding of wildlife appeal or impact.",
//               },
//               {
//                 title: "Support & Guidance",
//                 smp: "Personalised account management and long-term success strategy.",
//                 other:
//                   "One-size-fits-all approach with limited post-campaign support.",
//               },
//             ].map((row, index) => (
//               <div
//                 key={index}
//                 className="grid grid-cols-3 text-sm md:text-base text-[#333] border border-white"
//               >
//                 <div className="bg-[#001634] text-white text-center font-montserrat text-[18px] font-semibold h-[160px] flex items-center justify-center border">
//                   {row.title}
//                 </div>
//                 <div className="bg-[#d2e1ff] text-left font-montserrat text-[17px] text-[#626262] leading-[1.5] px-5 py-2.5 flex items-start border">
//                   <span className="text-green-600 mr-2 text-[18px]">
//                     <FaCheck />
//                   </span>
//                   {row.smp}
//                 </div>
//                 <div className="bg-[#d2e1ff] text-center font-montserrat text-[17px] text-[#626262] leading-[1.5] px-5 py-2.5 flex items-start justify-center border">
//                   <span className="text-red-500 mr-2 text-[18px]">
//                     <FaTimes />
//                   </span>
//                   {row.other}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Table;

import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
 
const Table = () => {
  return (
    <div className="bg-[#f0f0f0] sm:py-10 py-2 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative z-30 text-center md:px-7">
          <h2 className="font-montserrat font-bold md:text-[48px] text-[24px] text-center text-blue-600 leading-[1.3] capitalize m-0 md:px-[10%] sm:px-7 pb-[15px] md:mt-10">
            SMP In Comparison To Other Marketing Agencies
          </h2>
 
          <p
            className="mb-10 text-[22px]"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              // fontSize: "22px",
              textAlign: "center",
              textTransform: "capitalize",
              color: "#787878",
              lineHeight: 1.4,
              padding: 0,
            }}
          >
            Educate Your Customers To Learn More
          </p>
        </div>
 
        {/* ✅ Responsive scroll container added here */}
        <div className="mb-16 ml-2 mr-2 overflow-x-auto">
          <div className="min-w-[840px]">
            {/* Header */}
            <div className="grid grid-cols-3 text-white text-center font-montserrat text-[20px] font-semibold uppercase border">
              <div className="bg-[#001634]  h-[100px] flex items-center justify-center border">
                SPECIFICATIONS
              </div>
              <div className="bg-[#0057FF]  h-[100px] flex items-center justify-center border">
                SAFARI MARKETING PRO
              </div>
              <div className="bg-[#FF4D4D]  h-[100px] flex items-center justify-center border">
                OTHER AGENCIES
              </div>
            </div>
 
            {/* Rows */}
            {[
              {
                title: "The Niche",
                smp: "We are the industry leaders in understanding the African safari eco-system.",
                other:
                  "No ground level understanding of how the entire safari eco-system works.",
              },
              {
                title: "Deep Research",
                smp: "We do complete research of our client’s problems & requirements before starting to work with them.",
                other:
                  "One-size-fits-all approach is followed for all the clients.",
              },
              {
                title: "Result Oriented",
                smp: "From our 13 years of experience we have figured out a marketing recipe that address exactly to the African safari operators.",
                other:
                  "JWhereas no proper research or knowledge on what the customer’s needs are.",
              },
              {
                title: "Target Specific",
                smp: "We understand the areas our client focuses on in the safari business and then prepare a tailor-made solution that fits their needs.",
                other:
                  "Having less knowledge on the African destinations & safari market fails them to do what actually works",
              },
              {
                title: "Being There",
                smp: "Right from the beginning we have visited our clients once a year and gained knowledge on the destinations & how the operators work.",
                other:
                  "Zero to no visits for having a deep understand of the industry they serve.",
              },
               {
                title: "Reliability",
                smp: "We welcome our client’s suggestions in the project, so both of our goals are on the same page and make it a great experience for them.",
                other:
                  "Client’s suggestions are barely taken into consideration.",
              }, {
                title: "Educating Customers",
                smp: "We first study what’s the client’s position in the market in terms of website, ranking or social media. Then we educate them on what should we do to get the best results.",
                other:
                  "No time is invested in researching the client’s market position hence, no customization in the services",
              }, {
                title: "Relationship Driven",
                smp: "We try to have a healthy relationship with our clients & give valuable workarounds to them for a long span of time.",
                other:
                  "No services or suggestions are given once the work is handed over.",
              }, {
                title: "Generating Revenue",
                smp: "Our clients have become our number one promotor; so, we don’t spend a penny at marketing for ourselves.",
                other:
                  "Spending tons of money on marketing.",
              }, {
                title: "Zero Promotions",
                smp: "Right from the beginning we have visited our clients once a year and gained knowledge on the destinations & how the operators work.",
                other:
                  "Spending tons of money on marketing.",
              }, {
                title: "The Right Content",
                smp: "We have a dedicated team of writers who present the real & well-researched content on Africa.",
                other:
                  "Whereas, the content here is similar to what everybody presents and taken from google.",
              }, {
                title: "Hello Factor",
                smp: "The websites we design are like it’s only made for the Safari operators; it appeals a “Hello” to our clients.",
                other:
                  "The websites here don’t get through the hearts of safari operators.",
              },
            ].map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-3 text-sm md:text-base text-[#333] border-b-0 border-gray-300"
              >
                <div className="bg-[#001634] text-white text-center font-montserrat text-[18px] font-semibold h-[160px] flex items-center justify-center border-b-1">
                  {row.title}
                </div>
                <div className="bg-[#d2e1ff] text-left font-montserrat lg:text-[17px] text-[#626262] lg:leading-[1.5] px-5 py-2.5 flex items-start border-b-1">
                  <span className="text-green-600 mr-2 mt-1 text-[16px] ">
                    <FaCheck />
                  </span>
                  {row.smp}
                </div>
                <div className="bg-[#d2e1ff]  font-montserrat text-[17px] text-[#626262] leading-[1.5] px-5 py-2.5 flex items-start justify-center border">
                  <span className="text-red-500 mr-2 mt-1 text-[16px]">
                    <FaTimes />
                  </span>
                  {row.other}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Table;
 
 
