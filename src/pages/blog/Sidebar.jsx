import React, { useState } from 'react'
import { ChevronUp, ChevronDown } from "lucide-react";

const Sidebar = () => {
       const [open, setOpen] = useState(true);
  return (

    <>
     <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-[#3467d8] font-semibold text-2xl">Inside this article</h2>
        {open ? (
          <ChevronUp className="w-8 h-8 text-gray-600 font-bold" />
        ) : (
          <ChevronDown className="w-8 h-8 text-gray-600 font-bold" />
        )}
      </div>

      {/* Content (links) */}
      {open && (
        <ul className=" font-[400] text-[14px] sm:text-left text-[#787878]  text-justify sm:pt-[15px]  m-0">
          <li className="pb-4"><a href="#1" className="hover:text-[#1378f3]">1. What is Google AI Overview?</a></li>
          <li className="pl-4 pb-3"><a href="#1-1">1.1 Where does Google AI Overview get its information from?</a></li>
          <li className="pl-4 pb-3"><a href="#1-2">1.2 What types of websites does Google AI Overview prioritise?</a></li>
          <li className="pb-4"><a href="#2">2. Should your business aim to appear in Google AI Overview?</a></li>
          <li className="pb-4"><a href="#3">3. What search intent triggers Google AI Overview?</a></li>
          <li className="pb-4"><a href="#4">4. When can your site realistically appear in Google AI Overview?</a></li>
          <li className="pb-4"><a href="#5">5. How to optimise for Google AI Overview</a></li>
           <li className="pb-4"><a href="#1" className="hover:text-[#1a63d0]">1. What is Google AI Overview?</a></li>
          <li className="pl-4 pb-3"><a href="#1-1">1.1 Where does Google AI Overview get its information from?</a></li>
          <li className="pl-4 pb-3"><a href="#1-2">1.2 What types of websites does Google AI Overview prioritise?</a></li>
          <li className="pb-4"><a href="#2">2. Should your business aim to appear in Google AI Overview?</a></li>
          <li className="pb-4"><a href="#3">3. What search intent triggers Google AI Overview?</a></li>
          <li className="pb-4"><a href="#4">4. When can your site realistically appear in Google AI Overview?</a></li>
          <li className="pb-4"><a href="#5">5. How to optimise for Google AI Overview</a></li>
          {/* ➝ Add the rest of your links here */}
        </ul>
      )}

      {/* Bottom button */}
      <div className="mt-4">
        <button className=" bg-[#ff5254] text-white text-xl cursor-pointer duration-300 font-medium py-5 px-8 rounded-full flex items-center justify-center hover:bg-[#011833] transition">
          Get Proposal →
        </button>
      </div>
    </>
   
  )
}

export default Sidebar
