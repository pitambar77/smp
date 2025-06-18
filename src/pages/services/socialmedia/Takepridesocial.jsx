import React from "react";
import { CheckCircle } from "lucide-react";
import { PiCheckFatFill } from "react-icons/pi";


const points = [
  "Create a strong and consistent safari brand identity.",
  "Drive traffic to your safari & tour website.",
  "Generate inquiries & bookings.",
  "Promote your safari packages & itinerary.",
  "Target and retarget potential customers.",
  "Help them deal with inquiries.",
];

const Takepridesocial = () => {
  return (
    <>
      <div className="relative w-full mt-[95px] pb-[25px]">
        {/* Background image */}
        {/* <div className="absolute inset-0 bg-[url('https://safarimarketingpro.com/images/google-ads-bg-wsmtdmyc.jpg')] bg-cover bg-center z-0" /> */}
        <div className="absolute inset-0 bg-[url('https://safarimarketingpro.com/images/bg-wsmtdmyc.png')] bg-cover bg-center z-0" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[rgba(52,103,216,0.9)] z-10" />

        {/* Main content */}
        <div className="relative z-20 text-white py-20 px-6">
          <div className="max-w-[1140px] mx-auto   mb-20 ">
            <h2 className="font-[Montserrat] text-center font-bold text-[36px] md:text-[48px] capitalize leading-[1.4] pt-0 pb-[15px] px-[8%]">
              Accelerate your conversion opportunities with social media
              strategies tailored to African Safari Business.
            </h2>

            <p className="font-[Montserrat] font-medium text-[18px] text-center text-white leading-[1.7] px-[6%] pb-[15px] mt-[30px]">
              Is your social media strategy falling short of expectations? In
              today's digital landscape, social media serves as the ornament of
              your website. More than ever, it's essential to recognize that
              social media has become a 'pay-to-play' environment, demanding
              cohesive planning, full commitment, and a well-defined budget.
            </p>

            <p className="font-[Montserrat] font-medium text-[18px] text-center text-white leading-[1.7] px-[6%] pb-[15px] m-0">
              At Safari Marketing Pro, we seamlessly integrate social media
              management services into your overall marketing strategy. A
              strategic approach to Facebook or Instagram management can
              effectively attract, nurture, and convert followers into loyal
              customers.
            </p>

         <div className=" bg-opacity-90 text-white pt-[20px]">
      <div className="max-w-[1140px] mx-auto ">
        <div className=" w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-[18px] gap-x-[40px]">
        {points.map((point, index) => (
          <div
            key={index}
            className={`flex items-start gap-[10px] ${
              index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
            }`}
          >
            <PiCheckFatFill className="text-[#ff5255] text-[20px] mt-1 shrink-0" />
            <span className="text-lg leading-[inherit]">{point}</span>
          </div>
        ))}
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Takepridesocial;
