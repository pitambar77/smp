import React from "react";

const items = [
    "Responsive Display Ads to fit everywhere you want your ad to be shown",

    "Multi-platform management for managing your Ads across platforms in one place",
];

const Highlytailored = () => {
    return (
        <>
            <div className="bg-[#ececec]">

                <div className="  grid grid-cols-1 md:grid-cols-2 max-w-[1160px] mx-auto px-6 py-20 gap-10">
                    {/* Left: Sticky Image (moved here) */}
                    <div className="relative">
                        <div className="sticky top-20">
                            <img
                                src="https://safarimarketingpro.com/images/google-adv-sub-img2.png"
                                alt="Sticky"
                                className="rounded-lg "
                            />
                        </div>
                    </div>

                    {/* Right: Content (moved here) */}
                    <div className="space-y-8 ">
                        <div>
                            <h3 className="font-[Montserrat] text-left font-bold text-[48px] text-center capitalize text-[#3467d8] leading-[1.4] m-0 pb-[15px]">
                                Highly-Tailored Audience Targeting
                            </h3>

                            <p className="font-[Montserrat] font-normal text-[18px] text-left text-[#787878] leading-[1.5] pt-[15px] pb-[17px] m-0">
                                We don’t just carry a one-size-fits-all approach to present your ads in front of the safari customers, instead, we take our time to study your targeted customer and your website traffic for high conversion rates.          </p>

                            <p className="font-[Montserrat] font-normal text-[18px] text-left text-[#787878] leading-[1.5] pt-[15px] pb-[17px] m-0">

                                Highly-Tailored Audience Targeting
                                We don’t just carry a one-size-fits-all approach to present your ads in front of the safari customers, instead, we take our time to study your targeted customer and your website traffic for high conversion rates.

                                To make it clear, a customer who has gone through your website only once may hold a different idea about your business than someone who has enquired about your tour packages. We build your Remarketing Audience For African Safari based on the latter and your website traffic to spend the sum of our ad.
                            </p>

                            <h4 className="font-[Montserrat] font-normal text-[18px] text-left text-[#787878] leading-[1.5] m-0 py-[15px] pb-[17px]">
                                Some Of Our Advanced Paid Marketing Techniques For African Safari Operator Include:

                            </h4>

                            <div className="space-y-4">
                {items.map((text, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl ">✔</span>
                    <p className="font-[Montserrat] font-normal text-[18px] text-left text-[#787878] leading-[1.5] p-2 ">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Highlytailored;
