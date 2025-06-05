
import React from "react";

const ComplimentaryAnalysis = () => {
  return (
    <div className="bg-[#ff4f4f] py-16 relative overflow-hidden">
      <div className="max-w-[1110px]  mt-4  mx-auto    items-center relative">
        {/* Left Column: Heading + Boxes */}
        <div className="w-[75%]">
          <h2 className="font-[Montserrat] font-bold text-[40px] text-left text-white leading-[1.3] capitalize">
  Begin With A Complimentary Analysis
  Of Your Google Advertising Campaign.
</h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 h-[280px] mt-25 mb-10 mr-5 ">
            {/* Box 1 */}
            <div className="bg-white p-8  text-center shadow-sm">
              <h3 className="text-[#3467d8] font-semibold text-[22px]  font-[Montserrat] mb-2 mt-5">
                I Am New To Google Advertising
              </h3>
              <p className="text-[#787878] ml-5 mr-5 text-center text-[18px] font-[Montserrat] leading-relaxed">
                How can Google advertising help grow your safari and tour business? Let’s run the numbers.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-6  text-center shadow-sm">
              <h3 className="text-[#3467d8] text-[22px] font-semibold font-[Montserrat] mt-5 mb-2">
                I Am Running A Google Ads Campaign
              </h3>
              <p className="text-[#787878] ml-5 mr-5 text-center text-[18px] font-[Montserrat] leading-relaxed">
                Get a complimentary audit to see how much money we can save for your safari and tour business.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Phone Image */}
        <div className=" ">
          <img
            src="https://safarimarketingpro.com/images/smp_mobile_png.png"
            alt="Phone Ad Preview"
            className="absolute -mb-26 bottom-0 right-[-20rem]  w-[627px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ComplimentaryAnalysis;
