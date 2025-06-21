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
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1160px] mx-auto px-6 py-20 gap-10">
      {/* Left: Scrollable Content */}
      {/* Left: Your Content */}
      <div className="space-y-8 ">
        <div>
          <h3 className="font-[Montserrat] text-left font-bold text-[48px]  capitalize text-[#3467d8] leading-[1.4] m-0 pb-[15px]">
            Drive Customers with Search & Display Ads
          </h3>

          <p className="font-[Montserrat] font-normal text-[18px] text-left text-[#787878] leading-[1.5] pt-[15px] pb-[17px] m-0">
            With a detailed analysis of where your safari brand is positioned in
            the market, we curate paid ads that appear in front of your
            potential customers. After thoroughly testing to find the best
            conditions for your ads to succeed, we separate them as{" "}
            <strong className="font-[600]">Search And Display</strong>
            Ads to get the most efficient results.
          </p>

          <p className="font-[Montserrat] font-normal text-[18px] text-left text-[#787878] leading-[1.5] pt-[15px] pb-[17px] m-0">
            We apply deep{" "}
            <strong className="font-[600]">
              African Safari Keyword Research Technique
            </strong>
            s, and continuous A/B testing for what your safari customers are
            looking for. Then we take out the most valuable time of the entire
            day to showcase it to your qualified audience.
          </p>
          <h4 className="font-[Montserrat] font-normal text-[18px] text-left text-[#787878] leading-[1.5] m-0 py-[15px] pb-[17px]">
            Our key to Paid Ad management includes:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
            {items.map((text, index) => (
              <div key={index} className="flex items-start space-x-8">
                {/* <span className="text-green-500 text-xl mt-[18px]">✔</span> */}
                <span className=' mt-[18px] mr-[12px] text-[#0dc091] text-[14px] font-[600]'><PiCheckFatFill  /></span>
                <p className="font-[Montserrat] font-normal text-[18px] text-left text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Sticky Image */}
      <div className="relative">
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
