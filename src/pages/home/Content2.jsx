import React from 'react';
import { FaCheck } from "react-icons/fa";
 
function Content2() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 h-[1200px]"
        style={{
          backgroundImage: "url('content2images/socs-bg.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
 
      {/* Red Overlay */}
      <div className="absolute  w-full h-[1200px] bg-[rgba(255,82,84,0.9)] z-10" />
 
      {/* Main Content */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 mt-[50px] py-[60px]  flex justify-center">
        <div className="max-w-[1140px] text-center ">
          <h1 className="font-montserrat font-bold text-[48px]  text-white leading-[1.3] mb-15 ml-1">
            Highly Converting Safari Websites For African Safari Operators
          </h1>
 
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between mt-12 ml-3 mr-2">
            {/* Left: Fixed Width Content */}
            <div className="w-[690px] h-[485px] text-left">
              <p className="text-[24px] font-[600] text-[#fff] mb-6">
                Is your website conveying an appealing “HELLO” to your customers?
              </p>
              <p className="text-[19px] text-[#fff] font-[400] mb-5">
                Your safari website creates that first impression on your potential customer’s mind before they talk to you, meet you, or make an inquiry/bookings with you.
              </p>
              <div className="flex items-start gap-3 mb-3">
  <FaCheck className="text-[#fff] text-[18px] mt-1" />
  <p className="text-[19px] text-[#fff] font-[400]">
    Make your itineraries and booking forms your sales page.
  </p>
</div>
            <div className="flex items-start gap-3 mb-3">
  {/* <FaCheck className="text-[#fff] text-[18px] mt-1" /> */}
  <span className="text-[#fff] text-[18px] mt-1"  ><FaCheck/></span>
  <p className="text-[19px] text-[#fff] font-[400]">
    We make your potential customers believe that you are a highly professional and trusted safari company like they are looking for.
  </p>
</div>
            <div className="flex items-start gap-3 mb-3">
  {/* <FaCheck className="text-[#fff] text-[18px] mt-1" /> */}
    <span className="text-[#fff] text-[18px] mt-1"  ><FaCheck/></span>
 
  <p className="text-[19px] text-[#fff] font-[400]">
    We convert strangers into paying guests with a well-presented and informative website.
  </p>
</div>
 
              <div className="mt-6">
                <button className="bg-[#011833] font-semibold border border-[#011833] text-[#fff] text-[16px] px-8 py-3 rounded hover:bg-[rgba(255,82,84,0.9)] hover:border-white transition">
                  SCHEDULE CALL WITH AN EXPERT
                </button>
              </div>
            </div>
 
            {/* Right: Video Embed */}
            <div className="flex-1 flex justify-center items-center  ">
  <div className="max-w-[465px] h-[430px] aspect-video  shadow-lg overflow-hidden">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/M3j3TDH1r8g"
      title="Safari Marketing Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</div>
 
          </div>
        </div>
      </div>
 
      {/* Bottom Image Section */}
      <div className="relative z-20 pt-5">
        <div className="flex justify-center mb-28 relative">
          <img
            src="https://safarimarketingpro.com/images/soowrk-fig-1.png"
            alt="Supporting Visual"
            className="w-full max-w-6xl relative z-10"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white z-0" />
        </div>
      </div>
    </div>
  );
}
 
export default Content2;
 
