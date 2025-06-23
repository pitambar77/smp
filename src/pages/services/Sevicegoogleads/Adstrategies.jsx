import React from "react";
import { PiCheckFatFill } from "react-icons/pi";

const items = [
  "Analysing the cost for each Ad run",
  "Cross-channel marketing data for better insights",
  "Multi-attribution reporting to see which Ad has performed better",
  "Designing flexible ads that work for your business",
];

const Adstrategies = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1160px] mx-auto sm:px-6 px-4 sm:py-20 py-[50px] gap-10 mb-10">
      {/* Left: Scrollable Content */}
      {/* Left: Your Content */}
      <div className="sm:space-y-8 sm:order-1 order-2 ">
        <div>
          <h3 className="sm:text-left text-center font-bold sm:text-[48px] text-[24px]  capitalize text-[#3467d8] leading-[1.4] m-0 pb-[15px]">
            Ad Strategies That Grow Your Profit{" "}
          </h3>

          <p className="font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] pt-[15px] pb-[17px] m-0 ">
            We don’t just design ads to reach the number of ad impression goals
            or reach a certain target, we focus on how we can directly bring
            changes to your African Safari Business’ revenue model. After doing
            extensive research on keywords and phrases that would work, we
            curate the <span className=" font-semibold"> Display And Search Ads For African Safari </span> for maximized
            results.
          </p>

          <p className="font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px] pb-[17px] m-0 ">
            We regularly monitor the display bids to ensure they are delivering
            the expected return in full impact with a proven strategy for
            business growth.
          </p>
          <h4 className=" font-semibold sm:text-[18px] text-[14px] text-left text-[#787878] leading-[1.5] m-0 sm:py-[15px] pb-[17px]">
            Some Factors Of Our Profit-Driven Strategy Include:
          </h4>
          <div className="space-y-4">
            {items.map((text, index) => (
              <div key={index} className="flex items-start space-x-3 sm:pl-0 pl-4">
                <span className="sm:mt-[12px] mt-1 mr-[12px] text-[#0dc091] text-[14px] font-[600]">
                  <PiCheckFatFill />
                </span>
                <p className="font-[Montserrat] font-normal sm:text-[18px] text-[14px] text-left text-[#787878] leading-[1.5] sm:p-2">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Sticky Image */}
      <div className="relative sm:order-2 order-1 ">
        <div className="sticky top-20">
          <img
            src="https://safarimarketingpro.com/images/google-adv-sub-img3.png"
            alt="Sticky"
            className="rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Adstrategies;
