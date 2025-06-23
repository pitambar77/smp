import React from "react";
import { PiCheckFatFill } from "react-icons/pi";

const items = [
  "Testing what works for your safari customers",
  "Selecting the right time for running your Ad",
  "Optimizing Ads for Re-targeting",
  "Designed for different devices",
  "Targeting specific product or services",
  "Implementing dynamic search ads",
];

const Displauads = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1160px] mx-auto sm:px-6 sm:py-20 py-[50px] gap-10">
      {/* Left: Scrollable Content */}
      {/* Left: Your Content */}
      <div className="space-y-8 sm:order-1 order-2 ">
        <div>
          <h3 className=" sm:text-left text-center font-bold sm:text-[48px] text-[24px]  capitalize text-[#3467d8] leading-[1.4] m-0 pb-[15px]">
            Drive Customers with Search & Display Ads
          </h3>

          <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] pt-[15px] pb-[17px] m-0 sm:px-0 px-4">
            With a detailed analysis of where your safari brand is positioned in
            the market, we curate paid ads that appear in front of your
            potential customers. After thoroughly testing to find the best
            conditions for your ads to succeed, we separate them as{" "}
            <strong className="font-[600]">Search And Display</strong>
            Ads to get the most efficient results.
          </p>

          <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px] pb-[17px] m-0 sm:px-0 px-4">
            We apply deep{" "}
            <strong className="font-[600]">
              African Safari Keyword Research Technique
            </strong>
            s, and continuous A/B testing for what your safari customers are
            looking for. Then we take out the most valuable time of the entire
            day to showcase it to your qualified audience.
          </p>
          <h4 className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] m-0 py-[15px] pb-[17px] sm:px-0 px-4">
            Our key to Paid Ad management includes:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left sm:px-0 px-4">
            {items.map((text, index) => (
              <div key={index} className="flex items-start space-x-8">
                {/* <span className="text-green-500 text-xl mt-[18px]">✔</span> */}
                <span className=' sm:mt-[18px] mt-1 mr-[12px] text-[#0dc091] text-[14px] font-[600]'><PiCheckFatFill  /></span>
                <p className=" font-normal sm:text-[18px] text-[14px] text-left text-[#787878] leading-[1.5] m-0 sm:pt-[15px] sm:pb-[17px]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Sticky Image */}
      <div className="relative sm:order-2 order-1">
        <div className="sticky top-20">
          <img
            src="https://safarimarketingpro.com/images/google-adv-sub-img.png"
            alt="Sticky"
            className="rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Displauads;
