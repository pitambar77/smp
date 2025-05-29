import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import FooterReviewcard from './FooterReviewcard';
 
export default function Footer() {
  return (
    <footer className="bg-[#2767c7] text-white pt-20 font-montserrat">
      <div className="max-w-7xl mx-auto mt-[10px] mb-0  p-[15px] flex flex-col lg:flex-row justify-between gap-14">
       
        {/* Useful Links */}
        <div className="flex-1 pl-18">
          <h3 className="font-semibold text-[23px] mb-6 tracking-wide ">USEFUL LINKS</h3>
          <ul className="space-y-3 text-gray-100 text-[19px] tracking-wider font-normal">
            <li>Website Designing</li>
            <li>Organic Marketing</li>
            <li>Google Advertising</li>
            <li>Content Marketing</li>
            <li>Social Media Marketing</li>
            <li>Pricing</li>
            <li>Ebooks</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>
 
        {/* Contacts */}
        <div className="flex-1">
          <h3 className="font-semibold text-[23px] mb-6 tracking-wide ">CONTACTS</h3>
          <div className="space-y-4 text-[16px] tracking-wide ">
            <div>
              <p className="font-bold text-[19px] tracking-wide ">SAFARI MARKETING PRO</p>
              <p className='text-gray-100'>Plot No- 26.1996/2231, Arundhati Resident,<br />B2, Patrapada, 751019</p>
            </div>
            <div>
              <p className="font-bold text-[18px] tracking-wide ">CALL</p>
              <p className='text-gray-100'>+91-6371-223-581</p>
            </div>
            <div>
              <p className="font-bold text-[18px] tracking-wide ">EMAIL</p>
              <p className='text-gray-100'>sales@manoramaseoservice.com</p>
            </div>
          </div>
 
          <h3 className="font-semibold text-[24px] mt-8 mb-4 tracking-wide  ">LOVE US AS WE LOVE YOU!</h3>
          <div className="flex items-center gap-5 tracking-wide">
  <span className="bg-blue-300 text-white rounded-full p-3 text-3xl">
    <FaFacebookF />
  </span>
  <span className="bg-blue-300 text-white rounded-full p-3 text-3xl">
    <FaInstagram />
  </span>
  <span className="bg-blue-300 text-white rounded-full p-3 text-3xl">
    <FaYoutube />
  </span>
</div>
 
        </div>
 
        {/* Reviews */}
        <div className="flex-1 max-w-sm tracking-wide ">
          <h3 className="font-semibold text-[23px] mb-6 tracking-wide ">
            REVIEWS FROM ONE OF MOST TRUSTED PARTNERS
          </h3>
          <FooterReviewcard />
        </div>
      </div>
 
      {/* Bottom bar */}
      <div className="bg-[#0A4ABF] className='text-gray-100' mt-10 py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm">
<p className="mb-2 md:mb-0 ml-40 tracking-wider text-[16px]">
  © 2025 Safari Marketing Pro
</p>
      <div className="flex items-center gap-3 flex-wrap mr-35 pl-[60px]">
  <a href="#" className="underline text-[14px] tracking-widest p-2 ml-[-130px] font-semibold  mr-20">Privacy Policy</a>
  <img src="https://safarimarketingpro.com/images/new-part-1.png" alt="Google Partner" className="h-auto w-28 px-[10px] py-0" />
  <img src="https://safarimarketingpro.com/images/new-part-2.png" alt="UpCity" className="h-auto w-29 px-[10px] py-0" />
  <img src="https://safarimarketingpro.com/images/new-part-3.png" alt="Clutch" className="h-auto w-29 px-[10px] py-0" />
  <img src="https://safarimarketingpro.com/images/new-part-4.png" alt="Bing" className="h-auto w-29 px-[10px] py-0" />
</div>
 
 
      </div>
    </footer>
  );
}