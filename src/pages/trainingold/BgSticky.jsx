// import React, { useEffect, useState } from "react";
// import RequestForm from "../../components/RequestForm";
// import { IoIosClose } from "react-icons/io";

// const BgSticky = () => {
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     if (showForm) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }

//     return () => document.body.classList.remove("overflow-hidden");
//   }, [showForm]);
//   return (
//     <div
//       className="relative py-[80px] bg-fixed bg-cover bg-center flex items-center justify-center"
//       style={{
//         backgroundImage:
//           "url('https://safarimarketingpro.com/images/gfsedmv-bg.jpg')",
//       }}
//     >
//       {/* Dark Overlay with opacity */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(1, 24, 51, 0.75), rgba(1, 24, 51, 0.75))",
//         }}
//       ></div>

//       {/* Text Content */}
//       <div className="relative z-30 text-center  max-w-[1140px] mx-auto">
//         <h2 className="  font-bold text-[48px] text-center capitalize text-white leading-[1.3] px-[10%] pb-[20px] ">
//           Let's Make Sure Your Safari Business Is Online 24/7.
//         </h2>

//         <p className="text-[19px]  text-white  font-[400] capitalize tracking-[1px]">
//           All good things start with a chat…
//         </p>
//         <button
//           onClick={() => setShowForm(true)}
//           className=" cursor-pointer font-[600] mt-[50px] uppercase text-[16px] tracking-[1.5px] shadow-[0_12px_18px_0_rgba(0,0,0,0.15)] py-[12px] px-[40px] bg-[#ff5254] text-white hover:text-[#ff5254] rounded-[4px] border border-[#ff5254] hover:border-[#011833] transition duration-300 ease-in hover:bg-[#011833]"
//         >
//           Get my free 30 minute strategy session
//         </button>

//         {showForm && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat] ">
//             <div
//               className=" mt-[80px] relative w-[90%] max-w-[600px] bg-gradient-to-b from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg
//                  animate-slide-down-fade"
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setShowForm(false)}
//                 className="absolute cursor-pointer -top-6 -right-5 bg-red-400 hover:bg-[#396bb1] text-white hover:text-red-400 font-bold text-[32px] w-10 h-10 flex items-center justify-center shadow-md"
//               >
//                 ×
//               </button>
//               <div className="text-white text-center py-8 -mt-5 rounded-t-lg">
//                 <h3 className="text-[24px] font-medium leading-snug uppercase">
//                   Get my free 30 minute strategy session
//                 </h3>
//                 <div className="border-t border-white w-full mx-auto mt-4 -mb-4" />
//               </div>

//               <RequestForm />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BgSticky;

//<----------------------------------responsive-------------------------------->

import React, { useEffect, useState } from "react";
import RequestForm from "../../components/RequestForm";
import { IoIosClose } from "react-icons/io";

const BgSticky = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (showForm) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [showForm]);
  return (
    <div
      className="relative md:py-[80px] py-[50px] bg-fixed bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://safarimarketingpro.com/images/gfsedmv-bg.jpg')",
      }}
    >
      {/* Dark Overlay with opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(1, 24, 51, 0.75), rgba(1, 24, 51, 0.75))",
        }}
      ></div>

      {/* Text Content */}
      <div className="relative z-30 text-center  max-w-[1140px] mx-auto">
        {/* <h2 className="  font-bold text-[48px] text-center capitalize text-white leading-[1.3] px-[10%] pb-[20px] "> */}
        <h2 className="font-bold  text-[24px] md:text-[48px] text-center capitalize text-white leading-[1.3] px-4 sm:px-[10%] pb-[20px]">
          Let's Make Sure Your Safari Business Is Online 24/7.
        </h2>

        {/* <p className="text-[19px]  text-white  font-[400] capitalize tracking-[1px]"> */}
        <div className="px-[20px] md:px-0">
          <p className="text-[15px] md:text-[19px] text-white font-[400] capitalize tracking-[1px]  ">
            All good things start with a chat…
          </p>
          <button
            onClick={() => setShowForm(true)}
            // className=" cursor-pointer font-[600] mt-[50px] uppercase text-[16px] tracking-[1.5px] shadow-[0_12px_18px_0_rgba(0,0,0,0.15)] py-[12px] px-[40px] bg-[#ff5254] text-white hover:text-[#ff5254] rounded-[4px] border border-[#ff5254] hover:border-[#011833] transition duration-300 ease-in hover:bg-[#011833]"
            className="cursor-pointer font-[600] mt-[30px] md:mt-[50px] uppercase text-[14px]  md:text-[16px] tracking-[1.2px] shadow-[0_12px_18px_0_rgba(0,0,0,0.15)] md:py-[12px] py-[10px] md:px-[40px] px-[30px]  bg-[#ff5254]  text-white hover:text-[#ff5254] rounded-[4px] border border-[#ff5254] hover:border-[#011833] transition duration-300 ease-in hover:bg-[#011833]"
          >
            Get my free 30 minute strategy session
          </button>
        </div>
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat] ">
            <div
              className=" mt-[80px] relative w-[90%] max-w-[600px] bg-gradient-to-b from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg
                 animate-slide-down-fade"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute cursor-pointer -top-6 -right-5 bg-red-400 hover:bg-[#396bb1] text-white hover:text-red-400 font-bold text-[32px] w-10 h-10 flex items-center justify-center shadow-md"
              >
                ×
              </button>
              <div className="text-white text-center py-8 -mt-5 rounded-t-lg">
                <h3 className="text-[24px] font-medium leading-snug uppercase">
                  Get my free 30 minute strategy session
                </h3>
                <div className="border-t border-white w-full mx-auto mt-4 -mb-4" />
              </div>

              <RequestForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BgSticky;
