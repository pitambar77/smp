import React from 'react';
import { CheckCircle } from 'lucide-react';
 
const contentLeft = [
  {
    // heading: "Getting our expert team to work –",
    content:
      "Create a strong and consistent safari brand identity.",
  },
  {
    // heading: " Content planning to drive measurable results",
    content:
      "Generate inquiries & bookings..",
  },
  {
    // heading: "SEO-friendly writing for increased search rankings – ",
    content:
      "Target and retarget potential customers.",
  },
];
 
const contentRight = [
  {
    // heading: "Customized approach for each client –",
    content: " Drive traffic to your safari & tour website.",
  },
  {
    // heading: "Assuring each content is of the highest standard –",
    content: `Promote your safari packages & itinerary. `,
  },
 
  {
    // heading: "Increase traffic. More inquiries",
    content: "Help them deal with inquiries.",
  },
];
 
 
const Takepridesocial = () => {
  return (
    <>
 
      <div className="relative w-full">
        {/* Background image */}
        {/* <div className="absolute inset-0 bg-[url('https://safarimarketingpro.com/images/google-ads-bg-wsmtdmyc.jpg')] bg-cover bg-center z-0" /> */}
        <div className="absolute inset-0 bg-[url('https://safarimarketingpro.com/images/bg-wsmtdmyc.png')] bg-cover bg-center z-0" />
 
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[rgba(52,103,216,0.9)] z-10" />
 
        {/* Main content */}
        <div className="relative z-20 text-white py-20 px-6">
          <div className="max-w-[1140px] mx-auto text-center  mb-20 ">
            <h2 className="font-[Montserrat] text-center font-bold text-[36px] md:text-[48px] capitalize leading-[1.4] pt-0 pb-[15px] px-[8%]">
 
              Accelerate your conversion opportunities with social media strategies tailored to African Safari Business.
            </h2>
 
            <p className="font-[Montserrat] font-medium text-[18px] text-center text-white leading-[1.7] px-[6%] pb-[15px] m-0">
              Is your social media strategy falling short of expectations? In today's digital landscape, social media serves as the ornament of your website. More than ever, it's essential to recognize that social media has become a 'pay-to-play' environment, demanding cohesive planning, full commitment, and a well-defined budget.
            </p>
 
 
            <p className="font-[Montserrat] font-medium text-[18px] text-center text-white leading-[1.7] px-[6%] pb-[15px] m-0">
              At Safari Marketing Pro, we seamlessly integrate social media management services into your overall marketing strategy. A strategic approach to Facebook or Instagram management can effectively attract, nurture, and convert followers into loyal customers.
            </p>
 
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 w-full max-w-[1140px] mx-auto">
                                   {/* <div className="w-[87%] pt-5 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mx-auto text-left"> */}
 
              {/* Left Column */}
              <div className="space-y-4 gap-3 px-4 ml-15">
                {contentLeft.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 pl-2 font-[Montserrat] text-white"
                  >
                    <i className="fa-solid fa-check text-red-500 text-[20px] mt-1"></i>
                    <p className="text-[18px] font-normal text-start leading-[1.7]">{item.content}</p>
                  </div>
                ))}
              </div>
 
              {/* Right Column */}
              <div className="space-y-6 px-4 mr-30">
                {contentRight.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 pl-2 font-[Montserrat] text-white"
                  >
                    <i className="fa-solid fa-check text-red-500 text-[20px] mt-1"></i>
                    <p className="text-[18px] font-normal text-start leading-[1.7]">{item.content}</p>
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
 
export default Takepridesocial;