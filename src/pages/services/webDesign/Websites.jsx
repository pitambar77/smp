import React from "react";

import { FaCheck } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import { PiCheckFatFill } from "react-icons/pi";

const contentLeft = [
  {
    text: `<span class="font-semibold">Quality Content</span> – In today’s world, where content is the main focus, it’s vital to provide your <span class="font-semibold">African Safari</span> & tour audience the information that solves their problem in real-time.`,
  },

  {
    text: `<span class="font-semibold">Highlight your unique selling points</span> – Displaying the safari services you offer and how different you are from the competitors can easily broaden the trust factor among your customers.`,
  },
  {
    text: `<span class="font-semibold">Device compatibility</span> – In this busy world where everyone is on the go, having a website that is compatible with all devices can be a game changer. Increase your online discovery to score quality leads.`,
  },
  {
    text: `<span class="font-semibold">Long-term growth</span> – A well-optimized <span class="font-semibold"> African Safari Operators Website </span> with growth-oriented content can bring traffic and inquiries that convert into customers for a long duration of time.`,
  },
];

const contentRight = [
  {
    text: `<span class="font-semibold">Boost in search ranking</span> – Building a search engine-optimized African Safari Website can increase your chances of being discovered by your target audience which results in more leads.`,
  },

  {
    text: `<span class="font-semibold">Increase in conversion rate</span> – An impactful  <span class="font-semibold">Website Design For African Safari Operators </span> can highly benefit you in turning your leads into customers. As the first thing someone searches for is your website, an amazing one gets the job done!`,
  },
  {
    text: `<span class="font-semibold">An online shop</span> – Your website is a platform where you can display all the safari & tour services with all the packages you provide. This gives your customers an idea about you firsthand before contacting you.`,
  },

  {
    text: `<span class="font-semibold">Strong Brand Presence</span> – Recognizing your brand can bring awareness that leads to more customer trust which results in how successful your brand will be. So, presenting your brand goal in the right way is a must do!`,
  },
];



const Websites = () => {
  return (
    <>
      <div className="relative sm:mt-[95px] mt-[80px]  ">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('https://safarimarketingpro.com/images/bg-wsmtdmyc.png')] bg-cover bg-no-repeat bg-center " />

        {/* Gradient overlay */}
        <div className="  absolute inset-0 bg-[rgba(52,103,216,0.9)] z-10" />

        {/* Main content */}
        {/* <div className="relative z-20 text-white py-20 ">
          <div className="max-w-[1140px] mx-auto px-[15px]   mb-20 ">
            <h2 className=" text-center font-bold text-[36px] md:text-[48px] capitalize leading-[1.4]  pb-[15px] px-[8%]">
              We Don't Just Build Websites, We Build Websites That Bring
              Inquiries
            </h2>

            <h3 className="text-[20px] md:text-[22px] text-center font-medium not-first:">
              Stand Out In This Saturated Digital Landscape With A Custom Fit
              Website
            </h3>
            <p className=" font-medium text-[18px] text-center text-white leading-[1.7] pt-[30px]  px-[6%] pb-[15px] ">
              From design & and development of a thoughtfully curated Website
              For African Safari Operator to doing search engine optimization
              and site maintenance, we’ve got you covered! We create these in
              such a way that builds trust among your target audience of African
              Tour Operators, camp owners, and beach holiday providers. Which in
              turn encourages bookings so you don’t miss a single opportunity.
            </p>

            <div className="w-[87%]  pt-5  grid grid-cols-1 md:grid-cols-2 gap-y-0 gap-x-10 ">
     
              <div className="space-y-6 px-4   ">
                {contentLeft.map((item, i) => (
                  <div key={i} className="flex items-start ">
                    <PiCheckFatFill className=" text-[#ff5255] w-36 font-bold text-lg mt-1 " />
                    <p
                      className="text-white text-[18px]  leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                ))}
              </div>

       
              <div className="space-y-6 px-4 ">
                {contentRight.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <PiCheckFatFill className=" text-[#ff5255] w-36 font-bold text-lg mt-1 " />
                    <p
                      className="text-white text-[18px]  leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        <div className=" max-w-[1140px] mx-auto sm:pt-20 pt-10 sm:pb-[180px] pb-[100px] z-20 relative">
          <h1 className=" text-center font-bold text-[24px] md:text-[48px] capitalize leading-[1.4] text-white  pb-[15px] px-[8%]">
            We Don't Just Build Websites, We Build Websites That Bring Inquiries
          </h1>
          <h6 className=" text-[22px] font-[500] sm:px-0 px-4 text-center text-white leading-[inherit]">
            Stand Out In This Saturated Digital Landscape With A Custom Fit
            Website
          </h6>
          <p className=" sm:text-[18px] text-[14px] sm:font-[500]  text-white leading-[1.7] sm:text-center text-justify px-4 md:px-[6%] pb-[15px] sm:pt-[30px] pt-4">
            From design & and development of a thoughtfully curated Website For
            African Safari Operator to doing search engine optimization and site
            maintenance, we’ve got you covered! We create these in such a way
            that builds trust among your target audience of African Tour
            Operators, camp owners, and beach holiday providers. Which in turn
            encourages bookings so you don’t miss a single opportunity.
          </p>

          <div className="sm:w-[86%] sm:px-0 px-3 mx-auto  pt-5  grid grid-cols-1 md:grid-cols-2 sm:gap-x-[40px]   ">
            <div className="">
              {contentLeft.map((item, i) => (
                <div key={i} className=" flex items-start sm:pb-[20px] pb-[10px]   ">
                  <PiCheckFatFill className=" text-[#ff5255] w-32  sm:text-lg text-[14px] mt-1 mr-1 " />
                  <p
                    className="text-white sm:text-[18px] text-[14px] "
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              ))}
            </div>

            <div className=" ">
              {contentRight.map((item, i) => (
                <div key={i} className=" flex items-start  sm:pb-[20px] pb-[10px]  ">
                  <PiCheckFatFill className=" text-[#ff5255] w-32  sm:text-lg text-[14px] mt-1 mr-1 " />
                  <p
                    className="text-white sm:text-[18px] text-[14px]  "
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              ))}
            </div>
        
          </div>
        </div>
      </div>
      <div className="relative">
        {/* Top Half with Red Background */}
        <div className="absolute top-0 left-0 w-full h-1/2 z-0" />

        {/* Image Section Positioned on Top */}
        <div className="relative z-10 pt-20 sm:px-0 px-4">
          <div className="flex justify-center ">
            <img
              src="https://safarimarketingpro.com/images/soowrk-fig-1.png"
              alt="Supporting Visual"
              className="w-full max-w-6xl relative z-10 mt-[-140px]"
            />
          </div>

          <div className=" font-medium sm:text-[18px] text-center text-[#787878] leading-[1.8] sm:px-[18%] pb-[30px] pt-[20px]">
            <p>You never get a second chance to make a first impression.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Websites;
