import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import FooterReviewcard from "./FooterReviewcard";
 
export default function Footer() {
  return (
    <footer className="bg-[#3467d8] text-white pt-22 font-montserrat">
      <div className="max-w-[1150px] mx-auto mt-[18px]   flex flex-col lg:flex-row justify-between ">
        {/* Useful Links */}
        <div className="flex-1">
          <h3 className="font-semibold text-[22px] mb-3 tracking-wide ">
            USEFUL LINKS
          </h3>
          <ul className="space-y-4  text-[#fff] text-[17px] font-[400] tracking-wide leading-0.2">
            <li  className="hover:text-[#ff5254]">Website Designing</li>
            <li className="hover:text-[#ff5254]">Organic Marketing</li>
            <li className="hover:text-[#ff5254]">Google Advertising</li>
            <li className="hover:text-[#ff5254]">Content Marketing</li>
            <li className="hover:text-[#ff5254]">Social Media Marketing</li>
            <li className="hover:text-[#ff5254]">Pricing</li>
            <li className="hover:text-[#ff5254]">Ebooks</li>
            <li className="hover:text-[#ff5254]">Contact Us</li>
            <li className="hover:text-[#ff5254]">Blog</li>
          </ul>
        </div>
 
        {/* Contacts */}
        <div className="flex-1">
          <h3 className="font-semibold text-[22px] mb-3.5 tracking-wide ">
            CONTACTS
          </h3>
          <div className="space-y-7 text-[16px] tracking-tight font-normal  ">
            <div>
              <p className="font-semibold mb-1.5 text-[18px] tracking-wide text-left leading-1.2  ">
                SAFARI MARKETING PRO
              </p>
              <p className="text-[#fff] font-[400] text[17px] text-left">
                Plot No- 26.1996/2231, Arundhati Resident,
                <br />
                B2, Patrapada, 751019
              </p>
            </div>
            <div>
              <p className="font-semibold text-[18px] tracking-wide leading-1.2 mb-1.5 text-[#fff]  ">CALL</p>
              <p className="text-gray-100">+91-6371-223-581</p>
            </div>
            <div>
              <p className="font-semibold mb-1.5 text-[18px] tracking-wide leading-1.2 text-[#fff]  ">EMAIL</p>
              <p className="text-[#fff] font-[400] hover:text-[#ff5254]" >sales@manoramaseoservice.com</p>
            </div>
          </div>
 
          <h3 className="font-semibold text-[22px] mt-2.5 mb-4 tracking-wide text-left  ">
            LOVE US AS WE LOVE YOU!
          </h3>
          <div className="flex items-center gap-5 tracking-wider ">
            <span className="bg-[#75b6ff] text-white rounded-full p-4.5 text-2xl border border-[#75b6ff] hover:text-[#ff5254] hover:border-[#ff5254]">
              <FaFacebookF />
            </span>
            <span className="bg-[#75b6ff] text-white rounded-full p-4.5 text-2xl border border-[#75b6ff] hover:text-[#ff5254] hover:border-[#ff5254]">
              <FaInstagram />
            </span>
            <span className="bg-[#75b6ff] text-white rounded-full p-4.5 text-2xl border border-[#75b6ff] hover:text-[#ff5254] hover:border-[#ff5254]">
              <FaYoutube />
            </span>
          </div>
        </div>
 
        {/* Reviews */}
        <div className="flex-1 max-w-md tracking-tighter  ">
          <h3 className="font-semibold text-[22px] mb-6 text-[#fff] text-left tracking-wide ">
            REVIEWS FROM ONE OF MOST TRUSTED PARTNERS
          </h3>
          <FooterReviewcard />
        </div>
      </div>
 
      {/* Bottom bar */}
      <div className="bg-[#0A4ABF] className='text-gray-100' mt-15 py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-2 md:mb-0 ml-40 tracking-tighterr font-[400] text-[15px]">
          © 2025 Safari Marketing Pro
        </p>
        <div className="flex items-center gap-2 flex-wrap mr-25 pl-[60px]">
          <a
            href="#"
            className="underline hover:text-[#ff5254] text-[14px] tracking-tighterst p-2 ml-[-130px] font-[500]  mr-20"
          >
            Privacy Policy
          </a>
          <img
            src="https://safarimarketingpro.com/images/new-part-1.png"
            alt="Google Partner"
            className="h-auto w-32 px-[10px] py-0"
          />
          <img
            src="https://safarimarketingpro.com/images/new-part-2.png"
            alt="UpCity"
            className="h-auto w-32 px-[10px] py-0"
          />
          <img
            src="https://safarimarketingpro.com/images/new-part-3.png"
            alt="Clutch"
            className="h-auto w-32 px-[10px] py-0"
          />
          <img
            src="https://safarimarketingpro.com/images/new-part-4.png"
            alt="Bing"
            className="h-auto w-32 px-[10px] py-0"
          />
        </div>
      </div>
    </footer>
  );
}
 