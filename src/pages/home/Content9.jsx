// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../../api/config';

// export default function Content9() {
//   const [heading, setHeading] = useState('');
//   const [subheading, setSubheading] = useState('');
//   const [backgroundImage, setBackgroundImage] = useState('');

//   useEffect(() => {
//     axios
//       .get(`${ BASE_URL }/api/educator`)
//       .then((res) => {
//         if (res.data) {
//           setHeading(res.data.heading || '');
//           setSubheading(res.data.subheading || '');
//           setBackgroundImage(res.data.backgroundImage || '');
//         }
//       })
//       .catch((err) => {
//         console.error('Error fetching educator data:', err);
//       });
//   }, []);

//   return (
//     <>
//       <div className="bg-[#011833] py-[25px]">
//         <div
//           className="bg-no-repeat bg-left bg-contain my-1"
//           style={{
//             backgroundImage: `url('${backgroundImage || "https://safarimarketingpro.com/images/lets-talk-img.png"}')`,
//           }}
//         >
//           <div className="max-w-[1140px] mx-auto rounded-3xl  overflow-hidden md:flex ">
//             {/* Left Spacer (Image is in background) */}
//             <div className="hidden md:block md:w-1/2 h-[850px]" />

//             {/* Right Side (Text & Form) */}
//             <div className=" w-1/2 py-[70px]">
//               {/* Heading and Description */}
//               <div className="">
//                 <h2 className="text-[40px]  font-bold text-white pb-[15px]  pr-[10%] tracking-[0.45px] leading-[1.2]">
//                   {heading || 'We Don’t Charge To Educate Our Customers'}
//                 </h2>
//                 <p className="text-[#fff8f8]  font-[300] text-[17px] pb-[10px]">
//                   {subheading ||
//                     'Customer Education accelerates growth throughout the customer journey. We are a friendly bunch and would love to hear from you. Fill out the form below and we will be in touch.'}
//                 </p>
//               </div>

//               {/* Contact Form (Unchanged) */}
//               <div className="max-w-4xl mx-auto bg-white rounded-t-md p-8 mt-[25px] font-montserrat text-[#333]">
//                 <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-[16px] font-[500] -mb-2  text-[#787878]">Full Name</label>
//                     <input
//                       type="text"
//                       className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500  text-sm"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-[16px] font-[500] -mb-2  text-[#787878] ">Email</label>
//                     <input
//                       type="email"
//                       className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500  text-sm"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-[16px] font-[500] -mb-2  text-[#787878] ">Company Name</label>
//                     <input
//                       type="text"
//                       className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500  text-sm"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-[16px] font-[500] -mb-2   text-[#787878]">Further Comments</label>
//                     <textarea
//                       rows="1"
//                       className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500  text-sm resize-none"
//                     />
//                   </div>

//                   <div className="col-span-1 md:col-span-2 flex gap-6">
//                     <div className="w-1/3">
//                       <label className="block text-[16px] font-[500]  text-[#787878] -mb-5  ">Country</label>
//                       <select className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1.5 text-sm bg-transparent">
//                         {/* Country code options */}
//                       </select>
//                     </div>
//                     <div className="flex-1">
//                       <label className="block text-[16px] font-[500]  text-[#787878] -mb-4  ">Phone No.</label>
//                       <input
//                         type="text"
//                         className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1.5 text-sm"
//                       />
//                     </div>
//                   </div>

//                   <div className="col-span-1 md:col-span-2">
//                     <div className="flex items-center border -mb-4  border-[#d3d3d3] rounded-md px-4 py-3 w-fit bg-[#f9f9f9] shadow-sm">
//                       <input
//                         type="checkbox"
//                         className="w-5 h-5 mr-4 accent-blue-600"
//                         id="robotCheck"
//                       />
//                       <label htmlFor="robotCheck" className="text-sm text-gray-800 mr-6">
//                         I'm not a robot
//                       </label>
//                       <img
//                         src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
//                         alt="reCAPTCHA"
//                         className="w-10 h-10 object-contain mr-2"
//                       />
//                       <div className="text-[10px] text-gray-500 leading-tight">
//                         <p>reCAPTCHA</p>
//                         <a
//                           href="https://policies.google.com/privacy"
//                           className="underline text-[10px]"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           Privacy
//                         </a>{" "}
//                         ·{" "}
//                         <a
//                           href="https://policies.google.com/terms"
//                           className="underline text-[10px]"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           Terms
//                         </a>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 ml-3 md:col-span-2 text-[15px] text-[#787878] leading-[24px] font-[400]">
//                     By submitting this form, you agree to us for your business marketing requirements.
//                     We will use your data to send you free marketing tips, news and our latest services.
//                     You can get everything 24/7. We are available….
//                   </div>
//                 </form>
//               </div>

//               <div className="col-span-1 md:col-span-2">
//                 <button
//                   type="submit"
//                   className="w-full bg-[#ff5254] hover:bg-[#3467d8] text-[#fff] font-semibold py-5 text-center rounded-b-sm text-[18px] tracking-wider"
//                 >
//                   CONTACT US TODAY
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// ------------------------------- Responsive ---------------------------

import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/config";

export default function Content9() {
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/educator`)
      .then((res) => {
        if (res.data) {
          setHeading(res.data.heading || "");
          setSubheading(res.data.subheading || "");
          setBackgroundImage(res.data.backgroundImage || "");
        }
      })
      .catch((err) => {
        console.error("Error fetching educator data:", err);
      });
  }, []);

  return (
    <>
      <div className="bg-[#011833] py-[40px]">
        <div
          className="bg-no-repeat md:bg-left md:bg-contain my-1"
          style={{
            backgroundImage: `url(${
              backgroundImage ||
              "https://safarimarketingpro.com/images/lets-talk-img.png"
            })`,
          }}
        >
          <div className="max-w-[1140px] mx-auto rounded-3xl overflow-hidden md:flex flex items-center justify-center">
            {/* Left Spacer */}
            <div className="hidden md:block md:w-1/2 h-[850px] mx-auto" />

            {/* Right Side (Text & Form) */}
            <div className="w-[95%] md:w-1/2 md:py-[70px]">
              {/* Heading and Description */}
              <div className="flex items-center justify-center flex-col text-center">
                <h2 className="text-[23px] md:text-[40px] font-bold text-white pb-[15px] md:pr-[10%] tracking-[0.45px] leading-[1.2] md:text-start">
                  {heading || "We Don’t Charge To Educate Our Customers"}
                </h2>
                <p className="text-[#fff8f8] font-[300] text-[15px] md:text-[17px] pb-[10px] text-justify">
                  {subheading ||
                    "Customer Education accelerates growth throughout the customer journey. We are a friendly bunch and would love to hear from you. Fill out the form below and we will be in touch."}
                </p>
              </div>

              {/* Contact Form */}
              <div className="max-w-4xl mx-auto bg-white md:rounded-t-md p-6 md:p-8 mt-[25px] font-montserrat text-[#333]">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[16px] font-[500] -mb-2 text-[#787878]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[16px] font-[500] -mb-2 text-[#787878]">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[16px] font-[500] -mb-2 text-[#787878]">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[16px] font-[500] -mb-2 text-[#787878]">
                      Further Comments
                    </label>
                    <textarea
                      rows="1"
                      className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 text-sm resize-none"
                    />
                  </div>

                  <div className="col-span-1 md:col-span-2 flex gap-6">
                    <div className="w-1/3">
                      <label className="block text-[16px] font-[500] text-[#787878] -mb-5">
                        Country
                      </label>
                      <select className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1.5 text-sm bg-transparent">
                        {/* Country code options */}
                      </select>
                    </div>
                    <div className="flex-1">
                      <label className="block text-[16px] font-[500] text-[#787878] -mb-4">
                        Phone No.
                      </label>
                      <input
                        type="text"
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1.5 text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center border -mb-4 border-[#d3d3d3] rounded-md px-4 py-3 w-fit bg-[#f9f9f9] shadow-sm">
                      <input
                        type="checkbox"
                        className="w-5 h-5 mr-4 accent-blue-600"
                        id="robotCheck"
                      />
                      <label
                        htmlFor="robotCheck"
                        className="text-sm text-gray-800 mr-6"
                      >
                        I'm not a robot
                      </label>
                      <div>
                        <img
                          src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                          alt="reCAPTCHA"
                          className="md:w-10 md:h-10 w-6 h-6 object-contain md:mr-2"
                        />
                        <div className="text-[10px] text-gray-500 leading-tight">
                          <p>reCAPTCHA</p>
                          {/* Optional: Privacy / Terms links */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 md:ml-3 md:col-span-2 text-[14px] md:text-[15px] text-[#787878] leading-[24px] font-[400] text-justify pt-4">
                    By submitting this form, you agree to us for your business
                    marketing requirements. We will use your data to send you
                    free marketing tips, news and our latest services. You can
                    get everything 24/7. We are available….
                  </div>
                </form>
              </div>

              <div className="col-span-1 md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#ff5254] hover:bg-[#3467d8] text-white font-semibold py-5 text-center md:rounded-b-sm text-[12px] md:text-[18px] tracking-wider"
                >
                  CONTACT US TODAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
