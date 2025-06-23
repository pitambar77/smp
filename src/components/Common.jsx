// import React from 'react'
// import { FaWhatsapp } from "react-icons/fa";
// import { FaMailBulk } from "react-icons/fa";

// const Common = () => {
//   return (
//     <div className='w-full p-20'>
//       <div className='max-w-[1140px] mx-auto'>
//         <div className='flex gap-5 justify-center items-center px-30 cursor-pointer'>

//           <div className='group flex gap-4 p-4 items-center border rounded-[10px] pr-24 hover:bg-[#011833] text-[#011833] hover:text-white transition-transform w-[440px] duration-300'>
//             <FaWhatsapp className='text-[#3467d8] text-[45px]' />
//             <div>
//               <h1 className='text-[#011833] text-[22px] font-[600] group-hover:text-white'>Whatsapp Directly</h1>
//               <h2 className='p-1 text-[#ff5254] text-[18px] font-[600]'>+91-6371-223-581</h2>
//             </div>
//           </div>

//           <div className='group flex gap-4 p-4 items-center border rounded-[10px] hover:bg-[#011833] hover:text-white w-[440px] duration-300'>
//             <FaMailBulk className='text-[#3467d8] text-[45px]' />
//             <div>
//               <h1 className='text-[#011833] text-[22px] font-[600] group-hover:text-white'>Email Us Questions Here</h1>
//               <h2 className='p-1 text-[#ff5254] text-[18px] font-[600]'>sales@manoramaseoservice.com</h2>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Common

//<------------------------------------------> Responsive------------------------>

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const Common = () => {
  return (
    <div className="w-full py-10 md:py-20 px-4 md:px-20">
      {" "}
      {/* ✅ Added px-4 for small screens */}
      <div className="max-w-[1140px] mx-auto">
        {/* Responsive layout */}
        <div className="flex flex-col md:gap-5 gap-3 justify-center items-center md:flex-row">
          {/* WhatsApp Card */}
          <div
            className="group flex gap-4 md:p-4  p-2 items-center border rounded-[10px] hover:bg-[#011833] text-[#011833] hover:text-white transition-transform duration-300
            w-full md:w-[440px]"
          >
            <FaWhatsapp className="text-[#3467d8] md:text-[45px] text-[25px]" />
            <div>
              <h1 className="text-[#011833] md:text-[22px] text-[16px] font-[600] group-hover:text-white">
                Whatsapp Directly
              </h1>
              <h2 className="p-1 text-[#ff5254] md:text-[18px] text-[14px] font-[600] whitespace-nowrap">
                +91-6371-223-581
              </h2>
            </div>
          </div>

          {/* Email Card */}
          <div
            className="group flex gap-8 md:gap-4 md:p-4 p-2 items-center border rounded-[10px] hover:bg-[#011833] hover:text-white transition-transform duration-300
            w-full md:w-[440px]"
          >
            <FaMailBulk className="text-[#3467d8] md:text-[45px] text-[25px]" />
            <div>
              <h1 className="text-[#011833] md:text-[22px] text-[16px] font-[600] group-hover:text-white">
                Email Us Questions Here
              </h1>
              <h2 className="p-1 text-[#ff5254] md:text-[18px] text-[14px] font-[600]">
                sales@manoramaseoservice.com
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Common;
