import React, { useState } from "react";

const ToggleSection = () => {
  const [isBeforeSEO, setIsBeforeSEO] = useState(true);

  return (
    <>
      <div className=" w-full sm:py-[80px] py-[60px] ">
        <div className=" max-w-[1140px] mx-auto ">
          <div className=" max-w-[912px] mx-auto sm:py-[20px] sm:px-0 px-4">
            <h1 className=" text-[#3467d8] sm:text-[48px] text-[24px] font-[700] text-center pb-[15px]">
              Providing Marketing Solutions to Solve Your Problems
            </h1>
            <h2 className=" text-center text-[#787878] sm:text-[22px] text-[18px] font-[400] leading-[1.4]">
              Our Passion Is Growing Your Online Business
            </h2>
          </div>
        </div>

        <div className=" max-w-[1140px] mx-auto ">
          <div>
            <div className=" flex flex-col items-center justify-center  bg-white text-center ">
              {/* Heading */}

              <p className="max-w-md text-[#787878] font-[400] z-10 sm:text-[17px] text-[14px] sm:mt-10 mt-4 sm:text-start text-justify px-4 sm:px-0 ">
                See to believe how doing end-to-end SEO can drive consistent
                traffic to your safari website in a long run. It has been proved
                that 70% of the leads that come from organic searches have
                potential to convert.
              </p>

              {/* Main content */}
              <div className="flex flex-col md:flex-row items-center relative sm:-mt-24 mt-4 ">
                {/* Left image */}
                <div
                  className={`transition-transform duration-300 transform-gpu origin-center ${
                    isBeforeSEO ? "scale-105" : "scale-100"
                  }`}
                >
                  <img
                    src="https://safarimarketingpro.com/images/toggle-left.jpg"
                    alt="Before SEO"
                    className=" w-full object-cover mt-10 sm:mt-0 p-5 sm:p-0 "
                  />
                </div>

                {/* Center toggle button */}
                <div className="absolute md:static z-10 sm:-mx-32 ">
                  <div className="flex items-center sm:gap-20 gap-8 md:mt-0 ">
                    <span className="text-sm md:text-base font-semibold text-gray-700 ">
                      BEFORE SEO
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={!isBeforeSEO}
                        onChange={() => setIsBeforeSEO(!isBeforeSEO)}
                      />
                      <div className="w-14 h-8 bg-yellow-400 rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
                    </label>
                    <span className="text-sm md:text-base font-semibold text-gray-700">
                      AFTER SEO
                    </span>
                  </div>
                </div>

                {/* Right image */}
                <div
                  className={`transition-opacity duration-300 ${
                    isBeforeSEO ? "opacity-0 invisible" : "opacity-120 visible"
                  }`}
                >
                  <img
                    src="https://safarimarketingpro.com/images/toggle-right.png"
                    alt="After SEO"
                    className="rounded-full w-full object-cover p-5 sm:p-0  "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className=" flex justify-between px-24">
            <div className=" flex flex-col items-center">
              <h3
                className={`text-[25px] font-bold transition-colors duration-300 ${
                  isBeforeSEO ? " text-[#8ac7c7]  " : "text-[#ffbd00]"
                }`}
              >
                104,457
              </h3>
              <p className="text-gray-500">Annual Organic Traffic</p>
            </div>
            <div className=" flex flex-col items-center">
              <h3
                className={`text-[25px] font-bold transition-colors duration-300 ${
                  isBeforeSEO ? "text-[#8ac7c7]   " : "text-[#ffbd00]"
                }`}
              >
                104,457
              </h3>
              <p className="text-gray-500">Annual Organic Traffic</p>
            </div>
            <div className=" flex flex-col items-center">
              <h3
                className={`text-[25px] font-bold transition-colors duration-300 ${
                  isBeforeSEO ? "text-[#8ac7c7]   " : "text-[#ffbd00]"
                }`}
              >
                104,457
              </h3>
              <p className="text-gray-500">Annual Organic Traffic</p>
            </div>
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-10 gap-5  px-4 md:px-24 ">
  {[1, 2, 3].map((_, index) => (
    <div key={index} className="flex flex-col items-center text-center">
      <h3
        className={`text-[25px] font-bold transition-colors duration-300 ${
          isBeforeSEO ? "text-[#8ac7c7]" : "text-[#ffbd00]"
        }`}
      >
        104,457
      </h3>
      <p className="text-gray-500">Annual Organic Traffic</p>
    </div>
  ))}
</div>

        </div>
      </div>
    </>
  );
};

export default ToggleSection;
