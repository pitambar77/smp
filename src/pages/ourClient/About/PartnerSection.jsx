import React from "react";
import { useNavigate } from "react-router-dom";

function PartnerSection() {
  let navigate = useNavigate();
  return (
    <div className="bg-white pt-[80px] pb-[10px]">
      <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row  lg:items-start justify-between items-center">
        {/* Left - Logos */}
        <div className="w-full lg:w-1/2 flex justify-center px-[15px]">
          <img
            src="https://safarimarketingpro.com/images/social-logos.png"
            alt="Partner Logos"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right - Text */}
        <div className=" w-1/2  px-[15px]">
          <div className=" pl-[50px]">
            <h2 className="text-3xl md:text-[34px] font-bold text-[#011833] mb-[15px]  leading-[1.3]">
              Safari Marketing Pro Named Google AdWords™ Premier Partner
            </h2>
            <p className="text-[#787878] text-[17px] font-[400] mb-[15px] leading-[inherit] ">
              SMP is excited to announce that we have been awarded Premier
              Partner Status by Google AdWords™!
            </p>
            <p className="text-[#787878] text-[17px] font-[400] mb-[15px] leading-[inherit] ">
              Which means we have exceeded the expectations of the African
              countries for our outstanding work in the safari industry.
              Client’s success is where our happiness lies and we have only
              followed our aim to solve their problems & came out with flying
              colours.
            </p>
            <p className="text-[#787878] text-[17px] font-[400] mb-[15px] leading-[inherit] ">
              This elite Premier Partner status is something we are truly proud
              of and grateful for. It is a testament to the profitable results
              we deliver to our clients every day.
            </p>
            <div className=" pt-[15px]">
              <button
                onClick={() => {
                  navigate("/contact-us");
                  window.scrollTo(0, 0);
                }}
                className="uppercase cursor-pointer text-[18px] tracking-[0.8px] shadow-[0_12px_18px_0_rgba(0,0,0,0.15)] px-[40px] py-[12px] bg-[#ff5254] text-white   font-semibold hover:bg-[#011833]  hover:text-red-500 duration-500 ease-in rounded-[4px]"
              >
                WORK WITH US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerSection;
