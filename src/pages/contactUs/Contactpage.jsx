// import { FaFacebookF } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa6";
// import ContactusForm from "./ContactusForm";

// export default function Contactpage() {
//   return (
//     <div className="max-w-[1140px] mx-auto py-[80px]">
//       {/* Contact Information Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-16">
//         {/* Location Card */}
//         <div className="bg-white rounded shadow-[0px_8px_40px_-5px_rgb(9_31_67_/_10%)] p-[28px] flex items-start space-x-6">
//           <div className="flex-shrink-0">
//             <div className="w-18 h-14 rounded-full flex text-start ">
//               <img
//                 src="https://safarimarketingpro.com/images/olpnea-icn-1.png"
//                 alt="Map Pin"
//                 className="w-32 h-18 "
//               />
//             </div>
//           </div>

//           <div>
//             <h3 className="text-[20px] text-left font-semibold capitalize text-[#011833] leading-[inherit]   pb-[10px] font-montserrat">
//               Our Location
//             </h3>
//             <p className="text-[17px] font-medium leading-[inherit] font-montserrat text-[#787878] text-left">
//               Plot No- 26.1996/2231,
//               <br />
//               Arundhati Resident, B2,
//               <br />
//               Patrapada, 751019
//             </p>
//           </div>
//         </div>

//         {/* Phone Card */}
//         <div className="bg-white rounded-lg shadow-[0px_8px_40px_-5px_rgb(9_31_67_/_10%)] p-6 flex items-center space-x-4">
//           <div className="flex-shrink-0">
//             <div className="w-18 h-14 rounded-full flex items-center justify-center">
//               <img
//                 src="https://safarimarketingpro.com/images/olpnea-icn-2.png"
//                 alt="Map Pin"
//                 className="w-32 h-18 "
//               />{" "}
//             </div>
//           </div>
//           <div>
//             <h3 className="text-[20px] text-left font-semibold capitalize text-[#011833] leading-[inherit]   pb-[10px] font-montserrat">
//               Phone Number
//             </h3>
//             <p className="text-[17px] font-medium leading-[inherit] font-montserrat text-[#787878] text-left p-0 m-0">
//               +91-6371-223-581
//             </p>
//           </div>
//         </div>

//         {/* Email Card */}
//         <div className="bg-white rounded shadow-[0px_8px_40px_-5px_rgb(9_31_67_/_10%)] p-6 flex justify-center flex-col">
//           <h3 className="text-[20px] text-left font-semibold capitalize text-[#011833] leading-[inherit]   pb-[10px] font-montserrat">
//             Email Address
//           </h3>
//           <p className="text-[17px] font-medium leading-[inherit] font-montserrat text-[#787878] text-left p-0 m-0">
//             sales@manoramaseoservice.com
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 ">
//         {/* Left Column - Form */}
//         <div className="mt-6 px-[15px]">
//           <h2 className="text-[30px] font-semibold text-[#011833] capitalize leading-[inherit]  pb-[50px] font-montserrat">
//             Find Out How We Can Accelerate Your Booking Flow Online
//           </h2>

//           <ContactusForm />
//         </div>

//         {/* Right Column - Social and Image */}
//         <div className=" mt-6 px-[15px]">
//           <h2 className="text-[30px] font-semibold text-[#011833] capitalize leading-[inherit]   pb-[10px] font-montserrat">
//             Connect With Us
//           </h2>

//           <div className="flex space-x-4 mb-8 ">
//             <a
//               href="https://www.facebook.com/safarimarketingpro"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-15 h-15 bg-[#75b6ff] rounded-full flex items-center justify-center border hover:text-[#ff5254] hover:border-[#ff5254] text-white hover:bg-blue-600 transition duration-300"
//             >
//               <FaFacebookF className="w-6 h-6  " />
//             </a>
//             <a
//               href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsafari-marketing-pro%2Fabout%2F"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-15 h-15 bg-[#75b6ff] rounded-full flex items-center justify-center hover:text-[#ff5254] border hover:border-[#ff5254] text-white hover:bg-blue-600 transition duration-300"
//             >
//               <FaLinkedinIn className="w-6 h-6 " />
//             </a>
//             <a
//               href="https://www.instagram.com/safari_marketing_pro"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-15 h-15 bg-[#75b6ff] rounded-full flex items-center justify-center hover:text-[#ff5254] border hover:border-[#ff5254] text-white hover:bg-blue-600 transition duration-300"
//             >
//               <FaInstagram className="w-6 h-6 " />
//             </a>
//             <a
//               href="https://www.youtube.com/channel/UCUZXWTAJQ-xl6KcuOCli2Jw?view_as=subscriber"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-15 h-15 bg-[#75b6ff] rounded-full flex items-center justify-center hover:text-[#ff5254] border hover:border-[#ff5254] text-white hover:bg-blue-600 transition duration-300"
//             >
//               <FaYoutube className="w-6 h-6 " />
//             </a>
//           </div>

//           <div className="mt-12">
//             <img
//               src="https://safarimarketingpro.com/images/contact-us-fig-1.jpg"
//               alt="Customer service representative on phone"
//               className="rounded shadow-lg w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//-----------------------------------------------------responsive--------------------------------------------

import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import ContactusForm from "./ContactusForm";
 
export default function Contactpage() {
  return (
    <div className="max-w-[1140px] mx-auto md:py-[80px] py-[50px] px-4 md:px-0">
      {/* Contact Information Cards */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-16">
  {/* Location Card */}
  <div className="bg-white rounded shadow-[0px_8px_40px_-5px_rgb(9_31_67_/_10%)] p-[28px] flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6  sm:space-y-0">
    <div className="flex-shrink-0">
      <div className="  w-18 h-14 rounded-full flex text-center md:text-start">
            {/* <div className="w-18 h-14 rounded-full flex items-center justify-center"> */}
 
        <img
          src="https://safarimarketingpro.com/images/olpnea-icn-1.png"
          alt="Map Pin"
          className="md:w-32 md:h-18 w-[39px] h-[39px]"
        />
      </div>
    </div>
 
    <div>
      <h3 className=" text-[18px] md:text-[20px] text-center md:text-left font-semibold capitalize text-[#011833] leading-[inherit] pb-[10px] font-montserrat">
        Our Location
      </h3>
      <p className="text-[15px] md:text-[17px] font-medium leading-[inherit] font-montserrat text-[#787878] text-center  md:text-left">
        Plot No- 26.1996/2231,
        <br />
        Arundhati Resident, B2,
        <br />
        Patrapada, 751019
      </p>
    </div>
  </div>
 
 
 
 
  {/* Phone Card */}
  <div className="bg-white rounded-lg shadow-[0px_8px_40px_-5px_rgb(9_31_67_/_10%)] p-6 flex flex-col sm:flex-row items-center sm:space-x-4  sm:space-y-0">
    <div className="flex-shrink-0">
      <div className="w-18 h-14 rounded-full flex items-center justify-center">
        <img
          src="https://safarimarketingpro.com/images/olpnea-icn-2.png"
          alt="Map Pin"
          className="md:w-32 md:h-18 w-[39px] h-[39px]"
        />
      </div>
    </div>
    <div>
      <h3 className=" text-[18px] md:text-[20px] text-left font-semibold capitalize text-[#011833] leading-[inherit] pb-[10px] font-montserrat">
        Phone Number
      </h3>
      <p className="text-[15px] md:text-[17px] font-medium leading-[inherit] font-montserrat text-[#787878] text-left p-0 m-0">
        +91-6371-223-581
      </p>
    </div>
  </div>
 
  {/* Email Card */}
    <div className="bg-white rounded shadow-[0px_8px_40px_-5px_rgb(9_31_67_/_10%)] p-6 flex justify-center flex-col">
          <h3 className="text-[18px] md:text-[20px] text-center md:text-left font-semibold capitalize text-[#011833] leading-[inherit]   pb-[10px] font-montserrat">
            Email Address
          </h3>
             {/* <p className=" hidden lg:block text-[15px] md:text-[17px] font-medium leading-[inherit] font-montserrat text-[#787878] text-center md:text-left p-0 m-0">
            sales@manoramaseoservice.com
          </p>
          <p className=" hidden sm-block text-[15px] md:text-[17px] font-medium leading-[inherit] font-montserrat text-[#787878] text-center md:text-left p-0 m-0">
            sales@manorama<br/>seoservice.com
          </p> */}
          {/* Visible on mobile, tablet, laptop, desktop — except md (tablet) */}
<p className="block md:hidden lg:block text-[15px] md:text-[17px] font-medium leading-[inherit] font-montserrat text-[#787878] text-center md:text-left p-0 m-0">
  sales@manoramaseoservice.com
</p>
 
{/* Visible only on tablets (md screens) */}
<p className="hidden md:block lg:hidden text-[15px] md:text-[17px] font-medium leading-[inherit] font-montserrat text-[#787878] text-center md:text-left p-0 m-0">
  sales@manorama<br />seoservice.com
</p>
 
        </div>
</div>
 
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {/* Left Column - Form */}
        <div className="md:mt-6 md:px-[15px]">
          <h2 className="text-[20px] text-center md:text-left md:text-[30px] font-semibold text-[#011833] capitalize leading-[inherit]  md:pb-[50px] pb-5 font-montserrat">
            Find Out How We Can Accelerate Your Booking Flow Online
          </h2>
 
          <ContactusForm />
        </div>
 
        {/* Right Column - Social and Image */}
        <div className=" mt-6 px-[15px] ">
          <h2 className="text-[20px] md:text-[30px] text-center md:text-left font-semibold text-[#011833] capitalize leading-[inherit]   pb-[10px] font-montserrat">
            Connect With Us
          </h2>
 
          <div className="flex space-x-4 mb-8  ">
            <a
              href="https://www.facebook.com/safarimarketingpro"
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-15 md:h-15 w-[40px] h-[40px] bg-[#75b6ff] rounded-full flex items-center justify-center border hover:text-[#ff5254] hover:border-[#ff5254] text-white hover:bg-blue-600 transition duration-300"
            >
              <FaFacebookF className="w-6 h-6  " />
            </a>
            <a
              href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsafari-marketing-pro%2Fabout%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-15 md:h-15 w-[40px] h-[40px] bg-[#75b6ff] rounded-full flex items-center justify-center hover:text-[#ff5254] border hover:border-[#ff5254] text-white hover:bg-blue-600 transition duration-300"
            >
              <FaLinkedinIn className="w-6 h-6 " />
            </a>
            <a
              href="https://www.instagram.com/safari_marketing_pro"
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-15 md:h-15 w-[40px] h-[40px] bg-[#75b6ff] rounded-full flex items-center justify-center hover:text-[#ff5254] border hover:border-[#ff5254] text-white hover:bg-blue-600 transition duration-300"
            >
              <FaInstagram className="w-6 h-6 " />
            </a>
            <a
              href="https://www.youtube.com/channel/UCUZXWTAJQ-xl6KcuOCli2Jw?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-15 md:h-15 w-[40px] h-[40px] bg-[#75b6ff] rounded-full flex items-center justify-center hover:text-[#ff5254] border hover:border-[#ff5254] text-white hover:bg-blue-600 transition duration-300"
            >
              <FaYoutube className="w-6 h-6 " />
            </a>
          </div>
 
          <div className="mt-12">
            <img
              src="https://safarimarketingpro.com/images/contact-us-fig-1.jpg"
              alt="Customer service representative on phone"
              className="rounded shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
