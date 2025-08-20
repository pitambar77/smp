
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

import { Link } from "react-router-dom";
 
export default function Subfooter() {
  return (
    
      <>
 
   
<div className="bg-[#0A4ABF] hidden sm-block  md:flex flex-row justify-between items-center text-sm text-gray-100 mt-[20px] xl:py-4 md:py-2 px-6  xl:px-[120px]">
  <p className="mb-2 md:mb-0 tracking-tight font-[400] text-[15px]">
    © 2025 Safari Marketing Pro
  </p>
 
  <div className="flex flex-wrap items-center gap-2 pl-4">
    <Link
      to="/privacy-policy"
      className="underline hover:text-[#ff5254] text-[14px] tracking-tight p-2 font-[500] mr-6"
    >
      Privacy Policy
    </Link>
 
    <img
      src="https://safarimarketingpro.com/images/new-part-1.png"
      alt="Google Partner"
      className="h-auto px-2 md:w-20 xl:w-28"
    />
    <img
      src="https://safarimarketingpro.com/images/new-part-2.png"
      alt="UpCity"
      className="h-auto px-2 md:w-20 xl:w-28"
    />
    <img
      src="https://safarimarketingpro.com/images/new-part-3.png"
      alt="Clutch"
      className="h-auto px-2 md:w-20 xl:w-28"
    />
    <img
      src="https://safarimarketingpro.com/images/new-part-4.png"
      alt="Bing"
      className="h-auto px-2 md:w-20 xl:w-28"
    />
  </div>
 
 
     
</div>
      {/* Bottom bar for mobile only */}
<div className="bg-[#0A4ABF] md:hidden  text-gray-100 py-4 px-4 flex flex-col items-center text-sm space-y-4 ">
 
  {/* Logos - 4 in a row */}
  <div className="flex flex-wrap items-center justify-center gap-2">
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
 
 </>
  
  );
}
 