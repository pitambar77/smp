// import React, { useEffect } from "react";

// import { LiaPlayCircle } from "react-icons/lia";

// import { useState } from "react";
// import RequestForm from "../../components/RequestForm";

// function AfricaHome() {
//   const [playVideo, setPlayVideo] = useState(false);
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
//         className="absolute inset-0 z-0 "
//         style={{
//           backgroundImage:
//             "url('https://safarimarketingpro.com/images/socs-bg.jpg')",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />

//       {/* Red Overlay */}
//       <div className="absolute  w-full h-full bg-[linear-gradient(rgba(255,82,84,0.9),rgba(255,82,84,0.9))] z-10" />

//       {/* Main Content */}
//       <div className="relative z-20 py-[120px]  flex justify-center">
//         <div className="max-w-[1140px] mx-auto ">
//           <h1 className=" font-bold text-[48px] text-center  text-white leading-[1.3] mb-[20px] capitalize ">
//             Africa is our second home.
//           </h1>
//           <p className=" text-[22px] font-[400] text-center text-white leading-[inherit] pb-[15px] ">
//             Chin is very well name in Africa as a Safari Mentor.
//           </p>

//           {/* Two Column Layout */}
//           <div className="flex flex-col lg:flex-row  justify-between mt-[40px]">
//             {/* Left: Fixed Width Content */}
//             <div className=" px-[15px]">
//               <p className="text-[17px] text-[#fff] font-[400] mb-[15px] leading-[inherit]">
//                 As Africa is our second home, we don’t take clients to do only
//                 marketing, we understand the whole eco-system of the safari to
//                 serve the clients amazingly from their operations to their
//                 sales.
//               </p>
              
//                 <p className="text-[17px] text-[#fff] font-[600] mb-[15px] leading-[inherit]">
//                   If you don’t know where Serengeti is, how will you bring
//                   customers to Serengeti?
//                 </p>
             
            
//                 <p className="text-[17px] text-[#fff] font-[400] mb-[15px] leading-[inherit]">
//                   So, we make sure to sit down with the clients and thoroughly
//                   check them from the ground label up until they connect to a
//                   customer. It’s not just about marketing, where we bring
//                   customers to them; we are also part of the process where they
//                   convert the customers or checking whether they are following
//                   up or not.
//                 </p>
              
              
//                 <p className="text-[17px] text-[#fff] font-[400] mb-[15px] leading-[inherit]">
//                   That’s why Chin is committed to giving them face-to-face
//                   meetings to bring value from every angle.
//                 </p>
            

//               <div className="mt-6">
//                 <button
//                   onClick={() => setShowForm(true)}
//                   className="bg-[#011833] font-semibold border border-[#011833] text-[#fff] text-[16px] px-8 py-3 rounded hover:bg-[rgba(255,82,84,0.9)] hover:border-white transition ease-in duration-500"
//                 >
//                   SCHEDULE CALL WITH AN EXPERT
//                 </button>
//               </div>

//               {showForm && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat] ">
//                   <div
//                     className=" mt-[80px] relative w-[90%] max-w-[600px] bg-gradient-to-b from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg
//                  animate-slide-down-fade  "
//                   >
//                     {/* Close Button */}
//                     <button
//                       onClick={() => setShowForm(false)}
//                       className="absolute cursor-pointer -top-6 -right-5 bg-red-400 hover:bg-[#396bb1] text-white hover:text-red-400 font-bold text-[32px] w-10 h-10 flex items-center justify-center shadow-md"
//                     >
//                       ×
//                     </button>
//                     <div className="text-white text-center py-8 -mt-5 rounded-t-lg">
//                       <h3 className="text-[24px] font-medium leading-snug uppercase">
//                         Schedule Call with an Expert
//                       </h3>
//                       <div className="border-t border-white w-full mx-auto mt-4 -mb-4" />
//                     </div>
//                     <RequestForm />
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Right: Video Embed */}
//             <div className="px-[15px]  ">
//               <div className="max-w-[540px] h-[422px] aspect-video shadow-lg overflow-hidden relative cursor-pointer ">
//                 {!playVideo && (
//                   <>
//                     <img
//                       src="https://safarimarketingpro.com/images/maxresdefault.jpg"
//                       alt="Video preview"
//                       className="w-full h-full object-cover"
//                       onClick={() => setPlayVideo(true)}
//                     />
//                     {/* YouTube play button overlay */}
//                     <div className="absolute inset-0 bg-[#04040429] bg-opacity-30"></div>

//                     <div
//                       onClick={() => setPlayVideo(true)}
//                       className="absolute inset-0 flex justify-center items-center"
//                     >
//                       <div className=" rounded-full flex justify-center items-center   transition">
//                         <span className="text-[60px] mt-4">
                        
//                           <LiaPlayCircle />
//                         </span>
//                       </div>
//                     </div>
//                   </>
//                 )}

//                 {playVideo && (
//                   <iframe
//                     width="100%"
//                     height="100%"
//                     src="https://www.youtube.com/embed/V12f3YAttXY?autoplay=1"
//                     title="Safari Marketing Video"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AfricaHome;



//<--------------------responsive---------------

import React, { useEffect } from "react";
 
import { LiaPlayCircle } from "react-icons/lia";
 
import { useState } from "react";
import RequestForm from "../../components/RequestForm";
 
function AfricaHome() {
  const [playVideo, setPlayVideo] = useState(false);
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
    <div className="relative w-full overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 "
        style={{
          backgroundImage:
            "url('https://safarimarketingpro.com/images/socs-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
 
      {/* Red Overlay */}
      <div className="absolute  w-full h-full bg-[linear-gradient(rgba(255,82,84,0.9),rgba(255,82,84,0.9))] z-10" />
 
      {/* Main Content */}
      <div className="relative z-20 md:py-[120px] py-[40px] px-4  sm:flex md:flex sm:justify-center">
        <div className="max-w-[1140px] mx-auto  ">
          <h1 className="  font-bold md:text-[48px]  text-[24px] text-center  text-white leading-[1.3] mb-[20px] capitalize ">
            Africa is our second home.
          </h1>
          <p className=" text-[22px] font-[400] text-center text-white leading-[inherit] md:pb-[15px] ">
            Chin is very well name in Africa as a Safari Mentor.
          </p>
 
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row  text-justify md:text-left justify-between md:mt-[40px] mt-10">
            {/* Left: Fixed Width Content */}
            <div className=" md:px-[15px]">
              <p className="md:text-[17px] text-[15px] text-[#fff] font-[400] mb-[15px] leading-[inherit]">
                As Africa is our second home, we don’t take clients to do only
                marketing, we understand the whole eco-system of the safari to
                serve the clients amazingly from their operations to their
                sales.
              </p>
             
                <p className="md:text-[17px] text-[15px] text-[#fff] font-[600] mb-[15px] leading-[inherit]">
                  If you don’t know where Serengeti is, how will you bring
                  customers to Serengeti?
                </p>
             
           
                <p className="md:text-[17px] text-[15px] text-[#fff] font-[400] mb-[15px] leading-[inherit]">
                  So, we make sure to sit down with the clients and thoroughly
                  check them from the ground label up until they connect to a
                  customer. It’s not just about marketing, where we bring
                  customers to them; we are also part of the process where they
                  convert the customers or checking whether they are following
                  up or not.
                </p>
             
             
                <p className="md:text-[17px] text-[15px] text-[#fff] font-[400] mb-[15px] leading-[inherit]">
                  That’s why Chin is committed to giving them face-to-face
                  meetings to bring value from every angle.
                </p>
           
 
              <div className="mt-6 mb-8 xl:mb-0">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-[#011833] font-semibold border border-[#011833] text-[#fff] md:text-[16px] text-[14px] px-2 py-2 md:px-8 md:py-3 rounded hover:bg-[rgba(255,82,84,0.9)] hover:border-white transition ease-in duration-500"
                >
                  SCHEDULE CALL WITH AN EXPERT
                </button>
              </div>
 
              {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat] ">
                  <div
                    className=" mt-[80px] relative w-[90%] max-w-[600px] bg-gradient-to-b from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg
                 animate-slide-down-fade  "
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
                        Schedule Call with an Expert
                      </h3>
                      <div className="border-t border-white w-full mx-auto mt-4 -mb-4" />
                    </div>
                    <RequestForm />
                  </div>
                </div>
              )}
            </div>
 
            {/* Right: Video Embed */}
            <div className="sm:px-[15px]  ">
              <div className="sm:max-w-[540px] md:max-w-[540px]  sm:h-[422px] md:h-[422px] aspect-video shadow-lg overflow-hidden relative cursor-pointer ">
                {!playVideo && (
                  <>
                    <img
                      src="https://safarimarketingpro.com/images/maxresdefault.jpg"
                      alt="Video preview"
                      className="w-full h-full object-cover"
                      onClick={() => setPlayVideo(true)}
                    />
                    {/* YouTube play button overlay */}
                    <div className="absolute inset-0 bg-[#04040429] bg-opacity-30"></div>
 
                    <div
                      onClick={() => setPlayVideo(true)}
                      className="absolute inset-0 flex justify-center items-center"
                    >
                      <div className=" rounded-full flex justify-center items-center   transition">
                        <span className="text-[60px] mt-4">
                       
                          <LiaPlayCircle />
                        </span>
                      </div>
                    </div>
                  </>
                )}
 
                {playVideo && (
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/V12f3YAttXY?autoplay=1"
                    title="Safari Marketing Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default AfricaHome;
 
 