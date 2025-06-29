// import React, { useEffect, useState } from "react";
// import { PiCheckFatFill } from "react-icons/pi";
// import RequestForm from "../../components/RequestForm";

// function Content2() {
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
//     <div className="relative w-full overflow-hidden">
//       {/* Background Image Layer */}
//       <div
//         className="absolute inset-0 z-0 h-[1200px]"
//         style={{
//           backgroundImage: "url('https://safarimarketingpro.com/images/socs-bg.jpg')",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />

//       {/* Red Overlay */}
//       <div className="absolute  w-full h-[1200px] bg-[rgba(255,82,84,0.9)] z-10" />

//       {/* Main Content */}
//       <div className="relative z-20 px-4 sm:px-6 lg:px-8  py-[100px]   flex justify-center">
//         <div className="max-w-[1140px] mx-auto text-center ">
//           <h1 className="font-montserrat font-bold text-[48px]  text-white leading-[1.3] mb-15 ml-1">
//             Highly Converting Safari Websites For African Safari Operators
//           </h1>

//           {/* Two Column Layout */}
//           <div className="flex flex-col lg:flex-row gap-8 items-start justify-between mt-12 ml-3 mr-2">
//             {/* Left: Fixed Width Content */}
//             <div className="w-[58.33%]  text-left ">
//               <p className="text-[24px] font-[600] text-[#fff] mb-6">
//                 Is your website conveying an appealing “HELLO” to your
//                 customers?
//               </p>
//               <p className="text-[19px] text-[#fff] font-[400] mb-5">
//                 Your safari website creates that first impression on your
//                 potential customer’s mind before they talk to you, meet you, or
//                 make an inquiry/bookings with you.
//               </p>
//               <div className="flex mb-[10px] items-center">
//                 <PiCheckFatFill className="text-[#fff] text-[18px] font-[700] mr-[10px]" />
//                 <p className="text-[19px] text-[#fff] font-[400]">
//                   Make your itineraries and booking forms your sales page.
//                 </p>
//               </div>
//               <div className="flex mb-[10px] items-start">
//                 {/* <PiCheckFatFill className="text-[#fff] text-[18px] mt-1" /> */}
//                 <span className="text-[#fff] text-[18px] font-[400] mr-[10px] mt-1">
//                   <PiCheckFatFill />
//                 </span>
//                 <p className="text-[19px] text-[#fff] font-[400]">
//                   We make your potential customers believe that you are a highly
//                   professional and trusted safari company like they are looking
//                   for.
//                 </p>
//               </div>
//               <div className="flex mb-[10px] items-start">
//                 {/* <FaCheck className="text-[#fff] text-[18px] mt-1" /> */}
//                 <span className="text-[#fff] text-[18px] font-[400] mr-[10px] mt-1">
//                   <PiCheckFatFill />
//                 </span>

//                 <p className="text-[19px] text-[#fff] font-[400]">
//                   We convert strangers into paying guests with a well-presented
//                   and informative website.
//                 </p>
//               </div>

//               <div className="mt-6">
//                 <button
//                   onClick={() => setShowForm(true)}
//                   className="bg-[#011833] cursor-pointer font-semibold border border-[#011833] text-[#fff] text-[16px] px-8 py-3 rounded hover:bg-[rgba(255,82,84,0.9)] hover:border-white transition"
//                 >
//                   SCHEDULE CALL WITH AN EXPERT
//                 </button>
//               </div>
//             </div>

//             {showForm && (
//               <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat] ">
//                 <div
//                   className=" mt-[80px] relative w-[90%] max-w-[600px] bg-[#3467d8] bg-gradient-to-t from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg
//                  animate-slide-down-fade  "
//                 >
//                   {/* Close Button */}
//                   <button
//                     onClick={() => setShowForm(false)}
//                     className="absolute cursor-pointer -top-6 -right-5 bg-red-400 hover:bg-[#396bb1] text-white hover:text-red-400 font-bold text-[32px] w-10 h-10 flex items-center justify-center shadow-md"
//                   >
//                     ×
//                   </button>
//                   <div className="text-white text-center py-8 -mt-5 rounded-t-lg">
//                     <h3 className="text-[24px] font-medium leading-snug uppercase">
//                       Schedule Call with an Expert
//                     </h3>
//                     <div className="border-t border-white w-full mx-auto mt-4 -mb-4" />
//                   </div>

//                   <RequestForm />

//                 </div>
//               </div>
//             )}

//             {/* Right: Video Embed */}
//             <div className=" flex justify-center items-center   ">
//               <div className=" max-w-[440px] h-[430px]  aspect-video  shadow-lg overflow-hidden ">
//                 <iframe
//                  width="100%"
//                  height='100%'
//                   src="https://www.youtube.com/embed/M3j3TDH1r8g"
//                   title="Safari Marketing Video"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Image Section */}
//       <div className=" z-20 -mt-6 ">
//         <div className="flex justify-center mb-28 relative">
//           <img
//             src="https://safarimarketingpro.com/images/soowrk-fig-1.png"
//             alt="Supporting Visual"
//             className="w-full max-w-6xl relative z-10"
//           />
//           <div className="absolute bottom-0 left-0 w-full  bg-white z-0" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Content2;

//---------------------------------Responsive--------------------------

import React, { useEffect, useState } from "react";
import { PiCheckFatFill } from 'react-icons/pi';
import RequestForm from "../../components/RequestForm";

function Content2() {
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
    // <div className="relative w-full overflow-hidden">
    <div className="relative w-full overflow-visible md:overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 sm:h-[1200px] h-[1000px]"
        style={{
          backgroundImage:
            "url('https://safarimarketingpro.com/images/socs-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Red Overlay */}
      <div className="absolute w-full sm:h-[1200px] h-[1000px] bg-[rgba(255,82,84,0.9)] z-10" />

      {/* Main Content */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 md:py-[100px] py-[40px] flex justify-center">
        <div className="md:max-w-[1140px] mx-auto ">
          <h1 className="font-montserrat font-bold md:text-[48px] text-center text-[24px] text-white leading-[1.3] md:mb-15 md:ml-1">
            Highly Converting Safari Websites For African Safari Operators
          </h1>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 items-start  justify-between md:mt-12 py-[30px] md:py-0 md:mx-3">
            {/* Left: Fixed Width Content */}
            <div className="w-full lg:w-[58.33%] ">
              <p className="md:text-[24px] text-[16px] sm:text-left text-center font-[600] text-[#fff] mb-6">
                Is your website conveying an appealing “HELLO” to your
                customers?
              </p>
              <p className="md:text-[19px] text-[14px] md:text-left text-justify text-[#fff] font-[400] mb-5">
                Your safari website creates that first impression on your
                potential customer’s mind before they talk to you, meet you, or
                make an inquiry/bookings with you.
              </p>
              <div className="flex mb-[10px] sm:items-center">
                <span className="text-[#fff] sm:text-[18px] text-[14px] font-[400] mt-1 mr-[10px] ">
                  <PiCheckFatFill />
                </span>
                <p className="md:text-[19px] text-justify md:text-left text-[14px] text-[#fff] font-[400]">
                  Make your itineraries and booking forms your sales page.
                </p>
              </div>
              <div className="flex mb-[10px] items-start">
                <span className="text-[#fff] sm:text-[18px] text-[14px] font-[400] mr-[10px] mt-1">
                  <PiCheckFatFill />
                </span>
                <p className="sm:text-[19px] text-justify sm:text-left text-[14px] text-[#fff] font-[400]">
                  We make your potential customers believe that you are a highly
                  professional and trusted safari company like they are looking
                  for.
                </p>
              </div>
              <div className="flex mb-[10px] items-start">
                <span className="text-[#fff] sm:text-[18px] text-[14px] font-[400] mr-[10px] mt-1">
                  <PiCheckFatFill />
                </span>

                <p className="md:text-[19px] text-justify md:text-left text-[14px] text-[#fff] sm:font-[400]">
                  We convert strangers into paying guests with a well-presented and informative website.
                </p>
              </div>

              <div className="mt-6 text-center ">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-[#011833] font-semibold border border-[#011833] text-[#fff] md:text-[16px] text-[14px] px-2 py-3 md:px-8 md:py-3 rounded hover:bg-[rgba(255,82,84,0.9)] hover:border-white transition"
                >
                  SCHEDULE CALL WITH AN EXPERT
                </button>
              </div>
            </div>

            {showForm && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat]">
                <div className="sm:mt-[80px] mt-[180px] relative w-[95%] sm:px-0 px-2 max-w-[600px] bg-[#3467d8] bg-gradient-to-t from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg animate-slide-down-fade">
                  {/* Close Button */}
                  <button
                    onClick={() => setShowForm(false)}
                    className="absolute cursor-pointer -top-6 -right-5 bg-red-400 hover:bg-[#396bb1] text-white hover:text-red-400 font-bold text-[32px] w-10 h-10 flex items-center justify-center shadow-md"
                  >
                    ×
                  </button>
                  <div className="text-white text-center py-8 md:-mt-5 rounded-t-lg">
                    <h3 className="text-[24px] font-medium leading-snug uppercase">
                      Schedule Call with an Expert
                    </h3>
                    <div className="border-t border-white w-full mx-auto mt-4 -mb-4" />
                  </div>

                  <RequestForm />
                </div>
              </div>
            )}

            {/* Right: Video Embed */}
            <div className="w-full lg:w-[40%] flex justify-center items-center">
              <div className="md:max-w-[440px] w-full md:h-[430px] aspect-video shadow-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/M3j3TDH1r8g"
                  title="Safari Marketing Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Image Section */}
      <div className="z-20 -mt-6">
        <div className="flex justify-center sm:mb-28 mb-10 relative">
          <img
            src="https://safarimarketingpro.com/images/soowrk-fig-1.png"
            alt="Supporting Visual"
            className="w-full max-w-6xl relative z-10"
          />
          <div className="absolute bottom-0 left-0 w-full bg-white z-0" />
        </div>
      </div>
    </div>
  );
}

export default Content2;
