// import React from 'react';
 
// export default function FooterReviewcard() {
//   return (
//     <div className="bg-[#2354cb] p-4  rounded-lg  h-[410px] max-w-[360px] mx-auto">
//       <div className="bg-white border rounded shadow-lg p-5">
//         {/* Header */}
//         <div className="p-3 border">
//         <div className="flex flex-row items-center gap-3">
//           <img src="https://img.shgstatic.com/clutch-static-prod/image/scale/60x60/s3fs-public/logos/3aff45ed89355c1ecf9e7dad6de80877.png" alt="Manorama Logo" className="h-6 w-auto" />
//           <h3 className="text-md font-[Roboto,sans-serif] font-normal text-[19px] text-[#17313b] leading-[21px]">
//             Manorama Web Solutions <br />Private Limited Reviews
//           </h3>
//         </div>
 
//         {/* Star Rating */}
//         <div className="flex items-center justify-start mt-4 mb-3">
//           <div className="flex items-center bg-[#1b2c37] text-white font-bold px-3 py-1 rounded-l-full">
//             4.9
//           </div>
//           <div className="flex items-center bg-white shadow-md px-6 py-3 rounded-r-full">
//             <span className="text-red-600 rounded text-[18px] font-[400] tracking-wider leading-[2px]" >★★★★★</span>
//             <span className="text-red-600 font-[Roboto,sans-serif] tracking-wider font-[500] leading-[2px] text-[10px] ml-2">24 REVIEW ...</span>
//           </div>
//         </div>
 
//         {/* Ratings with segmented red lines */}
//         <div className="space-y-2.5 leading-.2 tracking-normal mt-4 text-[#17313b] font-normal font-[Roboto,sans-serif]">
//           {[
//             { label: 'Scheduling', score: 4.9 },
//             { label: 'Quality', score: 4.9 },
//             { label: 'Cost', score: 4.8 },
//             { label: 'Would Refer', score: 4.9 },
//           ].map((item, i) => {
//             const segments = 4;
//             const filled = Math.round((item.score /5) * segments);
 
//             return (
//               <div key={i}>
//                 <div className="flex justify-between text-[#1b2c37] text-sm  mb-1">
//                   <span>{item.label}</span>
//                   <span className='text-[16px] font-[500]'>{item.score}</span>
//                 </div>
//                 <div className="flex gap-[2px]">
//                   {Array.from({ length: segments }, (_, idx) => (
//                     <div
//                       key={idx}
//                       className={`h-[5px] flex-1 rounded-sm ${
//                         idx < filled ? 'bg-red-500' : 'bg-gray-200'
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
 
//         {/* Footer */}
       
//         </div>
//         <a  
//         href="https://clutch.co/profile/manorama-web-solutions-private?utm_source=widget&utm_medium=3&utm_campaign=widget&utm_content=stars&utm_term=safarimarketingpro.com#logo"
//         target="_blank"
//         rel="noopener noreferrer">
//  <div className="bg-[#16333c] w-[290px] text-[#fff] text-sm text-center font-[400] font-[Roboto,sans-serif] py-2 mt-2 -mb-2.6 text-[12px]">
//           Powered by <span className="font-semibold tracking-wide text-[18px] font-montserrat ">Clutch</span>
//         </div>

//         </a>
        
//       </div>
//     </div>
//   );
// }

import React from "react";
 
export default function FooterReviewcard() {
  return (
   
    <div className="bg-[#2354cb] p-4 rounded-lg w-full  sm:max-w-[360px] md:h-[405px] mx-auto">
      <div className="bg-white border rounded shadow-lg p-4">
        {/* Header */}
        <div className="p-3 border">
          <div className="flex items-center gap-3">
            <img
              src="https://img.shgstatic.com/clutch-static-prod/image/scale/60x60/s3fs-public/logos/3aff45ed89355c1ecf9e7dad6de80877.png"
              alt="Manorama Logo"
              className="h-5 sm:h-6 w-auto"
            />
            <h3 className="font-[Roboto,sans-serif] font-normal text-[#17313b] leading-[21px] text-[16px] sm:text-[19px]">
              Manorama Web Solutions <br />Private Limited Reviews
            </h3>
          </div>
 
          {/* Star Rating
          <div className="flex items-center justify-start mt-4 mb-3">
            <div className="flex items-center bg-[#1b2c37] text-white font-bold px-3 py-1 rounded-l-full text-[14px] sm:text-base">
              4.9
            </div>
            <div className="flex items-center bg-white shadow-md px-4 sm:px-6 py-2 sm:py-3 rounded-r-full">
              <span className="text-red-600 text-[16px] sm:text-[18px] tracking-wider">
                ★★★★★
              </span>
              <span className="text-red-600 font-[Roboto,sans-serif] text-[9px] sm:text-[10px] ml-2">
                24 REVIEW ...
              </span>
            </div>
          </div> */}
 
           {/* Star Rating */}
        <div className="flex items-center justify-start mt-4 mb-3">
          <div className="flex items-center bg-[#1b2c37] text-white font-bold px-3 py-1 rounded-l-full">
            4.9
          </div>
          <div className="flex items-center bg-white shadow-md px-4 py-3 rounded-r-full">
            
            <span className="text-red-600 rounded text-[18px] font-[400] tracking-wider leading-[2px]" >★★★★★</span>
           <span className=" text-red-600 font-[Roboto,sans-serif] tracking-wider font-[500] leading-[2px] text-[10px] ml-2"> 24 </span>
            <span className="text-red-600 font-[Roboto,sans-serif] tracking-wider font-[500] leading-[2px] text-[10px] ml-2">REVIEW ...</span>
             
          </div>
        </div>
 
          {/* Ratings with segmented red lines */}
          <div className="space-y-3  sm:space-y-2.5 mt-4 text-[#17313b] font-normal font-[Roboto,sans-serif]">
            {[
              { label: "Scheduling", score: 4.9 },
              { label: "Quality", score: 4.9 },
              { label: "Cost", score: 4.8 },
              { label: "Would Refer", score: 4.9 },
            ].map((item, i) => {
              const segments = 5;
              const filled = Math.round((item.score / 5) * segments);
 
              return (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.label}</span>
                    <span className="text-[15px] sm:text-[16px] font-[500]">
                      {item.score}
                    </span>
                  </div>
                  <div className="flex gap-[2px]">
                    {Array.from({ length: segments }, (_, idx) => (
                      <div
                        key={idx}
                        className={`h-[5px] flex-1 rounded-sm ${
                          idx < filled ? "bg-red-500" : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
 
        {/* Powered‑by footer */}
        <a
          href="https://clutch.co/profile/manorama-web-solutions-private?utm_source=widget&utm_medium=3&utm_campaign=widget&utm_content=stars&utm_term=safarimarketingpro.com#logo"
          target="_blank"
          rel="noopener noreferrer"
        >
      
          <div className="bg-[#16333c] w-full sm:w-[290px] text-white text-[11px] sm:text-[12px] text-center font-[400] font-[Roboto,sans-serif] py-2 mt-2">
            Powered&nbsp;by&nbsp;
            <span className="font-semibold tracking-wide text-[16px] sm:text-[18px] font-montserrat">
              Clutch
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
 
 
 