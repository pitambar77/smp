import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PiCheckFatFill } from "react-icons/pi";

const contentLeft = [
  {
    heading: "Be Seen Across the Web",
    content:
      "When your African Safari Business is at the top of Google’s results, then you’re also at the top of customers’ minds.",
  },
  {
    heading: "Control Your Costs",
    content: "Set your own budget which can be adjusted whenever you want.",
  },
  {
    heading: "See Results in Under 24 Hours",
    content:
      "Google Ads will get your business on Google’s first page in days, not months.",
  },
];

const contentRight = [
  {
    heading: "Advertise To Your Laser Target Market",
    content:
      "Target your intent prospects by location, age, gender, income, and time of day.",
  },
  {
    heading: "Measure Your Performance",
    content:
      "See how your ads are performing, adapting to push what works for you.",
  },
  {
    heading: "Increase traffic. More inquiries",
    content:
      "People searching for your safari services are very likely to book.",
  },
];

const WebsitesGoogleads = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative w-full">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('https://safarimarketingpro.com/images/google-ads-bg-wsmtdmyc.jpg')] bg-cover bg-center z-0" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[rgba(52,103,216,0.9)] z-10" />

        {/* Main content */}
        <div className="relative z-20 text-white sm:py-20 py-[50px] sm:px-6 px-4">
          <div className="max-w-[1140px] mx-auto text-center  mb-20 ">
            <h2 className="font-[Montserrat] text-center font-bold text-[24px] sm:text-[36px] md:text-[48px] capitalize leading-[1.4] pt-0 pb-[15px] sm:px-[8%]">
              Why Safari Operators Must Consider google ads for 10x Bookings?
            </h2>

            <h3 className="text-[20px] md:text-[22px] font-[Montserrat] font-medium sm:mb-10 mb-[15px]">
              Gain High-Level Brand Exposure and Attract More Leads
            </h3>
            <p className="font-[Montserrat] font-medium sm:text-[18px] text-[14px] sm:text-center text-justify text-white leading-[1.7] sm:px-[6%] pb-[15px] m-0">
              When considering if{" "}
              <span className=" font-semibold">Google Ads</span> are right for
              your{" "}
              <span className=" font-semibold"> African Safari Business </span>,
              there are a lot of variables to think about such as: who is going
              to continuously monitor my{" "}
              <span className=" font-semibold">
                {" "}
                African Safari Google ADs Campaign{" "}
              </span>{" "}
              and make changes on the go if needed. How big market is for the{" "}
              <span className=" font-semibold">
                {" "}
                African Safari Operators,{" "}
              </span>{" "}
              what are the targeted keywords that will give inquiries, and are
              my safari campaigns reaching the people who are really{" "}
              <span className=" font-semibold">
                {" "}
                Searching For African Safaris?{" "}
              </span>
            </p>

            <p className="font-medium sm:text-[18px] text-[14px] sm:text-center text-justify text-white leading-[1.7] sm:px-[6%] pb-[15px] m-0">
              At <span className=" font-semibold">Safari Marketing Pro </span>,
              we’re on a mission to trim the fat and make sure your paid
              strategy gives back more than it takes. Every{" "}
              <span className=" font-semibold">
                African Safari Google ADs Campaign{" "}
              </span>{" "}
              we launch will deliver the best returns on investment, which you
              simply can’t find elsewhere.
            </p>

            <p className="font-medium sm:text-[18px] text-[14px] sm:text-center text-justify text-white leading-[1.7] sm:px-[6%] pb-[15px] m-0">
              We take care of that process for you, so you focus on what you do
              best, growing your safari business.{" "}
            </p>
            <div className="sm:w-[88%] sm:mt-8 mt-3 list-none grid sm:mx-auto sm:gap-y-0 sm:gap-x-2 sm:grid-cols-2 grid-cols-1 ">
              {/* Left Column */}
              <div className="space-y-6 sm:px-4 sm:w-[464px] ">
                {contentLeft.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start w-full relative  sm:pb-[20px] pb-[10px] m-0 list-none  text-white "
                  >
                    <div className="flex sm:items-center gap-2 mb-1">
                      <span>
                        <PiCheckFatFill className=" text-[#ff5255] text-[18px]  sm:-mt-2 mt-1 " />
                      </span>

                      <strong className="text-[18px] font-bold text-left mb-1 sm:pb-[4px]  ">
                        {item.heading}
                      </strong>
                    </div>
                    <p className="sm:text-[18px] text-[14px] font-normal text-left leading-[1.7] sm:pl-[30px] pl-[28px]  ">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-6 sm:px-4 sm:w-[464px]">
                {contentRight.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start w-full relative  sm:pb-[20px] pb-[10px] m-0 list-none font-[Montserrat] text-white"
                  >
                    {/* <i className="fa-solid fa-check text-red-500 mt-1"></i> */}
                    <div className="flex sm:items-center gap-2 mb-1">
                      <span>
                      <PiCheckFatFill className=" text-[#ff5255] text-[18px] sm:-mt-2 mt-1 " /></span>
                      <strong className="text-[18px] font-bold text-left mb-1 pb-[4px] ">
                        {item.heading}
                      </strong>
                    </div>
                    <p className="sm:text-[18px] text-[14px] font-normal text-left leading-[1.7] sm:pl-[30px] pl-[28px]">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        {/* Top Half with Red Background */}
        <div className="absolute top-0 left-0 w-full h-1/2 z-0" />

        {/* Image Section Positioned on Top */}
        <div className="relative z-10 pt-20">
          <div className="flex justify-center ">
            <img
              src="https://safarimarketingpro.com/images/google-ads-hqclrcm-fig-1.png"
              alt="Supporting Visual"
              className="w-full max-w-6xl relative z-10 mt-[-140px]"
            />
          </div>

          <div className="font-[Montserrat] font-medium sm:text-[18px] text-[14px] text-center text-[#787878] leading-[1.8] sm:px-[18%]  pb-[18px] mt-3">
            <p>
              Get Noticed by Clients Who Are Actively Looking to Book a Safari.
            </p>
          </div>
          <div className="mt-3 text-center mb-8">
            <button
              onClick={() => {
                navigate("/lets-grow-business");
                window.scrollTo(0, 0);
              }}
              className="bg-[#ff4d4d] cursor-pointer text-white font-semibold sm:px-8 sm:py-3 rounded shadow-[0_12px_18px_0_rgb(0_0_0_/_15%)]  p-[10px] hover:bg-black hover:text-red-600 transition text-[14px]"
            >
              GET YOUR FREE GOOGLE ADS AUDIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsitesGoogleads;
