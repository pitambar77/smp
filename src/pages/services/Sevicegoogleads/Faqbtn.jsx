import React from 'react';
import { FaWhatsapp, FaMailBulk } from 'react-icons/fa';

function Faqbtn() {
  return (
    <div className="w-full py-20">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center px-4">
          {/* WhatsApp Box */}
          <div className="flex gap-4 p-4 items-center border rounded-[10px] w-[340px] sm:w-[440px] hover:bg-[#011833] transition duration-300">
            <FaWhatsapp className="text-[#3467d8] text-[45px]" />
            <div className="text-[#011833] hover:text-white transition">
              <h1 className="text-[22px] font-semibold">Whatsapp Directly</h1>
              <h2 className="pt-1 text-[#ff5254] text-[18px] font-semibold">+91-6371-223-581</h2>
            </div>
          </div>

          {/* Email Box */}
          <div className="flex gap-4 p-4 items-center border rounded-[10px] w-[340px] sm:w-[440px] hover:bg-[#011833] transition duration-300">
            <FaMailBulk className="text-[#3467d8] text-[45px]" />
            <div className="text-[#011833] hover:text-white transition">
              <h1 className="text-[22px] font-semibold">Email Us Questions Here</h1>
              <h2 className="pt-1 text-[#ff5254] text-[18px] font-semibold">sales@manoramaseoservice.com</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqbtn;
