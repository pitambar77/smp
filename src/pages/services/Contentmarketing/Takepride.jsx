

import React from "react";


const contentLeft = [
  {
    text: `<span class="font-semibold">Getting our expert team to work –</span>Trust our professionals to understand your brand voice, research your industry, and write content that drives results.`,
  },

  {
    text: `<span class="font-semibold">Content planning to drive measurable results-</span> By clearly defining the objectives, and desired outcomes, we create SEO Content For African Safari Operator that directly supports your goals and drives conversions.`,
  },
  {
    text: `<span class="font-semibold">SEO-friendly writing for increased search rankings – </span>By incorporating SEO-friendly techniques, search engines make your content more discoverable. This leads to increased organic traffic, expanding your reach to more potential customers.`,
  },
  // {
  //     text: `<span class="font-semibold">Long-term growth</span> – A well-optimized <span class="font-semibold"> African Safari Operators Website </span> with growth-oriented content can bring traffic and inquiries that convert into customers for a long duration of time.`,
  // },
];

const contentRight = [
  {
    text: `<span class="font-semibold">Customized approach for each client –</span> We understand each client is unique in terms of requirements, brand identity, and target audience. So, we take a personalized approach to ensure the content aligns with your needs.`,
  },

  {
    text: `<span class="font-semibold">Assuring each content is of the highest standard –</span>High-quality content can increase audience engagement as it grabs their attention and lets them keep coming back to your content.`,
  },

];

const Websites = () => {
  return (
    <>
      <div className="relative   ">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('https://safarimarketingpro.com/images/bg-wsmtdmyc.png')] bg-[length:235%] bg-center bg-no-repeat z-0" />
        {/* Gradient overlay */}
        <div className="  absolute inset-0 bg-[rgba(52,103,216,0.9)] z-10" />

        {/* Main content */}
        <div className="relative z-20 text-white py-20 px-6">
          <div className="max-w-[1140px] mx-auto text-center  mb-20 ">
            <h2 className="font-[Montserrat] text-center font-bold text-[36px] md:text-[48px] capitalize leading-[1.4] pt-0 pb-[15px] px-[8%]">
              We take pride in producing exceptional content that acts as a lead
              magnet.
            </h2>

            {/* <h3 className="text-[20px] md:text-[22px] font-[Montserrat] font-medium mb-8">
                            Stand Out In  This Saturated Digital Landscape With A Custom Fit Website
                        </h3> */}
            <p className="font-[Montserrat] font-medium text-[18px] text-center text-white leading-[1.7] px-[6%] pb-[15px] m-0">
              Our Content Writing For African Safari Operators includes writing
              compelling content that helps scale up your safari & and tour
              brand and captivate more potential customers.
            </p>

            {/* <p className="font-[Montserrat] font-medium text-[18px] text-center text-white leading-[1.7] px-[6%] pb-[15px] m-0">
                            At Safari Marketing Pro, we’re on a mission to trim the fat and make sure your paid strategy gives back more than it takes. Every African Safari Google ADs Campaign we launch will deliver the best returns on investment, which you simply can’t find elsewhere.
                        </p> */}

            {/* <p className="font-[Montserrat] font-medium text-[18px] text-center text-white leading-[1.7] px-[6%] pb-[15px] m-0">
                            We take care of that process for you, so you focus on what you do best, growing your safari business.                        </p> */}
            {/* <div className="grid md:grid-cols-2 gap-6 text-left  max-w-[1140px]   "> */}
            <div className="w-[87%] pt-5 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mx-auto text-left">
              {/* Left Column Items */}
              {contentLeft.map((item, i) => (
                <div key={i} className="flex items-start gap-3 px-4">
                  <i className="fa-solid fa-check text-red-500 mt-1 text-[20px]"></i>
                  <p
                    className="text-white text-[18px] font-[Montserrat] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              ))}

              {/* Right Column Items */}
              {contentRight.map((item, i) => (
                <div key={i} className="flex items-start gap-3 px-4">
                  <i className="fa-solid fa-check text-red-500 mt-1 text-[20px]"></i>
                  <p
                    className="text-white text-[18px] font-[Montserrat] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Websites;
