// import React from "react";
// import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
// import FooterReviewcard from "./FooterReviewcard";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-[#3467d8] text-white pt-22 font-montserrat">
//       <div className="max-w-[1150px] mx-auto mt-[18px]   flex flex-col lg:flex-row justify-between ">
//         {/* Useful Links */}
//         <div className="flex-1">
//           <h3 className="font-semibold text-[22px] mb-3 tracking-wide ">
//             USEFUL LINKS
//           </h3>
//           <ul className="space-y-4 text-[#fff] text-[17px] font-[400] tracking-wide leading-0.2">
//   <li>
//     <Link to="/web-designing" className="hover:text-[#ff5254]">
//       Website Designing
//     </Link>
//   </li>
//   <li>
//     <Link to="/organic-marketing" className="hover:text-[#ff5254]">
//       Organic Marketing
//     </Link>
//   </li>
//   <li>
//     <Link to="/google-ads" className="hover:text-[#ff5254]">
//       Google Advertising
//     </Link>
//   </li>
//   <li>
//     <Link to="/content-marketing" className="hover:text-[#ff5254]">
//       Content Marketing
//     </Link>
//   </li>
//   <li>
//     <Link to="/social-media-marketing" className="hover:text-[#ff5254]">
//       Social Media Marketing
//     </Link>
//   </li>
//   <li>
//     <Link to="/pricing" className="hover:text-[#ff5254]">
//       Pricing
//     </Link>
//   </li>
//   <li>
//     <Link to="/ebook" className="hover:text-[#ff5254]">
//       Ebooks
//     </Link>
//   </li>
//   <li>
//     <Link to="/contact-us" className="hover:text-[#ff5254]">
//       Contact Us
//     </Link>
//   </li>
//   <li>
//     <Link to="/blog" className="hover:text-[#ff5254]">
//       Blog
//     </Link>
//   </li>
// </ul>

//         </div>

//         {/* Contacts */}
//         <div className="flex-1">
//           <h3 className="font-semibold text-[22px] mb-3.5 tracking-wide ">
//             CONTACTS
//           </h3>
//           <div className="space-y-7 text-[16px] tracking-tight font-normal  ">
//             <div>
//               <p className="font-semibold mb-1.5 text-[18px] tracking-wide text-left leading-1.2  ">
//                 SAFARI MARKETING PRO
//               </p>
//               <p className="text-[#fff] font-[400] text[17px] text-left">
//                 Plot No- 26.1996/2231, Arundhati Resident,
//                 <br />
//                 B2, Patrapada, 751019
//               </p>
//             </div>
//             <div>
//               <p className="font-semibold text-[18px] tracking-wide leading-1.2 mb-1.5 text-[#fff]  ">CALL</p>
//               <p className="text-[#fff] font-[400] hover:text-[#ff5254] text-[17px]"> <Link to="tel: +91-6371-223-581">+91-6371-223-581</Link></p>
//             </div>
//             <div>
//               <p className="font-semibold mb-1.5 text-[18px] tracking-wide leading-1.2 text-[#fff]  ">EMAIL</p>
//               <p className="text-[#fff] font-[400] hover:text-[#ff5254] text-[17px]" > <Link to="mailto: sales@manoramaseoservice.com">sales@manoramaseoservice.com</Link> </p>
//             </div>
//           </div>

//           <h3 className="font-semibold text-[22px] mt-2.5 mb-4 tracking-wide text-left  ">
//             LOVE US AS WE LOVE YOU!
//           </h3>
//           <div className="flex items-center gap-5 tracking-wider">
//   <a
//     href="https://www.facebook.com/safarimarketingpro"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="bg-[#75b6ff] text-white rounded-full p-4.5 text-2xl border border-[#75b6ff] hover:text-[#ff5254] hover:border-[#ff5254]"
//   >
//     <FaFacebookF />
//   </a>
//   <a
//     href="https://www.instagram.com/safari_marketing_pro"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="bg-[#75b6ff] text-white rounded-full p-4.5 text-2xl border border-[#75b6ff] hover:text-[#ff5254] hover:border-[#ff5254]"
//   >
//     <FaInstagram />
//   </a>
//   <a
//     href="https://www.youtube.com/channel/UCUZXWTAJQ-xl6KcuOCli2Jw?view_as=subscriber"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="bg-[#75b6ff] text-white rounded-full p-4.5 text-2xl border border-[#75b6ff] hover:text-[#ff5254] hover:border-[#ff5254]"
//   >
//     <FaYoutube />
//   </a>
// </div>

//         </div>

//         {/* Reviews */}
//         <div className="flex-1 max-w-md tracking-tighter  ">
//           <h3 className="font-semibold text-[22px] mb-6 text-[#fff] text-left tracking-wide ">
//             REVIEWS FROM ONE OF MOST TRUSTED PARTNERS
//           </h3>
//           <FooterReviewcard />
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="bg-[#0A4ABF] className='text-gray-100' mt-15 py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm">
//         <p className="mb-2 md:mb-0 ml-40 tracking-tighterr font-[400] text-[15px]">
//           © 2025 Safari Marketing Pro
//         </p>
//         <div className="flex items-center gap-2 flex-wrap mr-25 pl-[60px]">
//           <Link
//             to="/privacy-policy"
//             className="underline hover:text-[#ff5254] text-[14px] tracking-tighterst p-2 ml-[-130px] font-[500]  mr-20"
//           >
//             Privacy Policy
//           </Link>
//           <img
//             src="https://safarimarketingpro.com/images/new-part-1.png"
//             alt="Google Partner"
//             className="h-auto w-32 px-[10px] py-0"
//           />
//           <img
//             src="https://safarimarketingpro.com/images/new-part-2.png"
//             alt="UpCity"
//             className="h-auto w-32 px-[10px] py-0"
//           />
//           <img
//             src="https://safarimarketingpro.com/images/new-part-3.png"
//             alt="Clutch"
//             className="h-auto w-32 px-[10px] py-0"
//           />
//           <img
//             src="https://safarimarketingpro.com/images/new-part-4.png"
//             alt="Bing"
//             className="h-auto w-32 px-[10px] py-0"
//           />
//         </div>
//       </div>
//     </footer>
//   );
// }

//-------------------------responsive------------------------

import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import FooterReviewcard from "./FooterReviewcard";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#3467d8] text-white md:pt-22 pt-10  font-montserrat">
      <div className="max-w-[1150px] mb-7 mx-auto md:mt-[18px] flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between gap-8 md:gap-5 px-4 xl:px-0">
        {/* Useful Links */}
        <div className="flex-1">
          <h3 className="font-semibold md:text-[22px] text-[18px] mb-3 tracking-wide">
            USEFUL LINKS
          </h3>
          <ul className="md:space-y-4  space-y-2 text-[#fff] md:text-[17px] text-[15px] font-[400] tracking-wide leading-0.2">
            <li>
              <Link to="/web-designing" className="hover:text-[#ff5254]">
                Website Designing
              </Link>
            </li>
            <li>
              <Link to="/organic-marketing" className="hover:text-[#ff5254]">
                Organic Marketing
              </Link>
            </li>
            <li>
              <Link to="/google-ads" className="hover:text-[#ff5254]">
                Google Advertising
              </Link>
            </li>
            <li>
              <Link to="/content-marketing" className="hover:text-[#ff5254]">
                Content Marketing
              </Link>
            </li>
            <li>
              <Link
                to="/social-media-marketing"
                className="hover:text-[#ff5254]"
              >
                Social Media Marketing
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-[#ff5254]">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/ebook" className="hover:text-[#ff5254]">
                Ebooks
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-[#ff5254]">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-[#ff5254]">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacts */}
        <div className="flex-1">
          <h3 className="font-semibold md:text-[22px] text-[18px] md:mb-3.5  mb-2 tracking-wide">
            CONTACTS
          </h3>
          <div className="md:space-y-7  space-y-4 text-[16px] tracking-tight font-normal">
            <div>
              <p className="font-semibold mb-1.5 md:text-[18px] text-[14px] tracking-wide text-left leading-1.2">
                SAFARI MARKETING PRO
              </p>
              <p className="text-[#fff] font-[400] md:text-[17px] text-[14px] text-left">
                Plot No- 26.1996/2231, Arundhati Resident,
                <br />
                B2, Patrapada, 751019
              </p>
            </div>
            <div>
              <p className="font-semibold md:text-[18px] text-[14px] tracking-wide leading-1.2 mb-1.5 text-[#fff]">
                CALL
              </p>
              <p className="text-gray-100 text-[14px]">+91-6371-223-581</p>
            </div>
            <div>
              <p className="font-semibold mb-1.5 md:text-[18px] text-[14px] tracking-wide leading-1.2 text-[#fff]">
                EMAIL
              </p>
              <p className="text-[#fff] font-[400] text-[14px] hover:text-[#ff5254]">
                sales@manoramaseoservice.com
              </p>
            </div>
          </div>

          <h3 className="font-semibold md:text-[22px] text-[18px] md:mt-2.5 pt-[25px] md:mb-4 mb-3 tracking-wide text-left">
            LOVE US AS WE LOVE YOU!
          </h3>
          <div className="flex items-center md:gap-5 gap-3 tracking-wider ">
            <a
              href="https://www.facebook.com/safarimarketingpro"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#75b6ff] text-white rounded-full md:p-4.5 p-2.5 md:text-2xl text-[20px] border border-[#75b6ff] hover:text-[#ff5254] hover:border-[#ff5254]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/safari_marketing_pro"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#75b6ff] text-white rounded-full md:p-4.5 p-2.5 md:text-2xl  text-lg  border border-[#75b6ff] hover:text-[#ff5254] hover:border-[#ff5254]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCUZXWTAJQ-xl6KcuOCli2Jw?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#75b6ff] text-white rounded-full md:p-4.5 p-2.5 md:text-2xl text-lg  border border-[#75b6ff] hover:text-[#ff5254] hover:border-[#ff5254]"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Reviews */}
        <div className="flex-1 max-w-md tracking-tighter mb-8">
          <h3 className="font-semibold md:text-[22px] text-[18px] mb-6 text-[#fff] text-left tracking-wide">
            REVIEWS FROM ONE OF MOST TRUSTED PARTNERS
          </h3>
          <FooterReviewcard />
        </div>
      </div>

      <div className="bg-[#0A4ABF] hidden sm-block  md:flex flex-row justify-between items-center text-sm text-gray-100 mt-[60px] xl:py-4 md:py-2 px-6  xl:px-[120px]">
        <p className="mb-2 md:mb-0 tracking-tight font-[400] text-[15px]">
          © 2025 Safari Marketing Pro
        </p>

        <div className="flex items-center gap-2 flex-wrap pl-4">
          <Link
            to="/privacy-policy"
            className="underline hover:text-[#ff5254] text-[14px] tracking-tight p-2 font-[500] mr-6"
          >
            Privacy Policy
          </Link>

          <img
            src="https://safarimarketingpro.com/images/new-part-1.png"
            alt="Google Partner"
            className="h-auto  md:w-20 xl:w-28  px-2"
          />
          <img
            src="https://safarimarketingpro.com/images/new-part-2.png"
            alt="UpCity"
            className="h-auto  md:w-20  xl:w-28  px-2"
          />
          <img
            src="https://safarimarketingpro.com/images/new-part-3.png"
            alt="Clutch"
            className="h-auto md:w-20  xl:w-28  px-2"
          />
          <img
            src="https://safarimarketingpro.com/images/new-part-4.png"
            alt="Bing"
            className="h-auto  md:w-20  xl:w-28  px-2"
          />
        </div>
      </div>
      {/* Bottom bar for mobile only */}
      <div className="bg-[#0A4ABF] md:hidden  text-gray-100 py-4 px-4 flex flex-col items-center text-sm space-y-4 ">
        {/* Logos - 4 in a row */}
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <img
            src="https://safarimarketingpro.com/images/new-part-1.png"
            alt="Google Partner"
            className="h-auto w-15 px-[4px]"
          />
          <img
            src="https://safarimarketingpro.com/images/new-part-2.png"
            alt="UpCity"
            className="h-auto w-15 px-[4px]"
          />
          <img
            src="https://safarimarketingpro.com/images/new-part-3.png"
            alt="Clutch"
            className="h-auto w-15 px-[4px]"
          />
          <img
            src="https://safarimarketingpro.com/images/new-part-4.png"
            alt="Bing"
            className="h-auto w-15 px-[4px]"
          />
        </div>

        {/* Privacy Policy */}
        <Link
          to="/privacy-policy"
          className="underline hover:text-[#ff5254] text-[14px] tracking-tight font-[500] text-center"
        >
          Privacy Policy
        </Link>

        {/* Copyright */}
        <p className="text-center tracking-tight font-[400] text-[14px]">
          © 2025 Safari Marketing Pro
        </p>
      </div>
    </div>
  );
}
