import React from "react";
import CaseStudyCard from "../../components/CaseStudyCard";
import { falconSafariData, falconSafariData1 } from "../../data/CaseStudyData";
import { FaCheck } from "react-icons/fa";
import { PiCheckFatFill } from "react-icons/pi";

const FalconSafariContentCard = () => {
  return (
    <div>
      <div className="sm:max-w-[1050px] mx-auto px-[15px]  sm:mt-[120px] mt-2">
        <h1 className="text-[20px] text-[#3467d8] text-center font-[700] sm:text-[50px]  sm:pb-[30px] pb-[15px] leading-[1.4] sm:px-[8%]">
          {falconSafariData1.heading}
        </h1>
        <p className="text-[#787878]  sm:text-[17px] text-[14px] sm:text-left text-justify">
          {falconSafariData1.subheading}
        </p>

        {falconSafariData1.sections.map((section, idx) => (
          <CaseStudyCard
            key={idx}
            title={section.title}
            items={section.items}
          />
        ))}
        <div className="max-w-[1050px] mx-auto ">
          <p className="text-[#787878]  sm:text-[17px] text-[14px] sm:text-left text-justify mb-10">
            These key strategies collectively contributed to the success of
            Falcon Safaris' PPC optimization, resulting in increased
            click-through rates, reduced cost per click, higher conversion
            rates, and a positive return on investment.
          </p>

          <div className=" grid sm:grid-cols-2 grid-cols-1 justify-between sm:p-[30px]">
            <div className="text-[#787878]  ">
              <p className="pb-[15px] sm:text-[17px] text-[14px] flex items-center">
                {" "}
                <PiCheckFatFill className=" text-[#011833] font-[400] sm:text-[17px] text-[14px] mr-[10px] leading-[inherit] " />{" "}
                <strong>Mobile Bounce Rate: </strong> 10%
              </p>
              <p className="pb-[15px] sm:text-[17px] text-[14px] flex items-center">
                {" "}
                <PiCheckFatFill className=" text-[#011833] font-[400] sm:text-[17px] text-[14px] mr-[10px] leading-[inherit] " />
                <strong>Average Session Duration: </strong> 25%
              </p>
            </div>
            <div>
              <p className="text-[#787878]  sm:text-[17px] text-[14px] pb-[15px] flex items-center">
                {" "}
                <PiCheckFatFill className=" text-[#011833] font-[400] sm:text-[17px] text-[14px] mr-[10px] leading-[inherit] " />
                <strong>Landing page Bounce Rate: </strong> 3%
              </p>
              <p className="text-[#787878]  pb-[15px] flex items-center">
                {" "}
                <PiCheckFatFill className=" text-[#011833] font-[400] sm:text-[17px] text-[14px] mr-[10px] leading-[inherit] " />
                <strong>Itinerary Page Bounce Rate: </strong> 17%
              </p>
            </div>
          </div>
        </div>

        <div className="sm:max-w-[1050px] mx-auto">
          <h1 className=" text-[#011833] font-[600] sm:text-[22px] text-[18px] text-center">
            Key Metric 1: Organic Keywords
          </h1>
          <img
            src="https://safarimarketingpro.com/images/falconsafaris-casestudy2.png"
            alt="screen-short1"
            className="py-[29.45px] "
          />

          <h1 className=" text-[#011833] font-[600] sm:text-[22px] text-[18px] text-center">
            Key Metric 2: Top Ranking Keywords
          </h1>
          <img
            src="https://safarimarketingpro.com/images/falconsafaris-casestudy3.png"
            alt="screen-short2"
            className="py-[29.45px] "
          />
          <h1 className=" text-[#011833] font-[600] sm:text-[22px] text-[18px] text-center">
            Key Metric 3: Search Trend
          </h1>
          <img
            src="https://safarimarketingpro.com/images/falconsafaris-casestudy4.png"
            alt="screen-short3"
            className="py-[29.45px] "
          />

          <h1 className=" text-[#011833] font-[600] sm:text-[22px] text-[18px] text-center p-[3%] ">
            Key Metric 4: Top Ranking Keywords
          </h1>
          <img
            src="https://safarimarketingpro.com/images/falconsafaris-casestudy6.png"
            alt="screen-short4"
            className="py-[29.45px] "
          />
        </div>

        <div className="sm:max-w-[1050px] mx-auto  sm:mt-[120px] mt-[60px]">
          <h1 className="text-[22px] text-[#3467d8] text-center font-[700] sm:text-[50px]  pb-[30px] leading-[1.4] sm:px-[8%] ">
            {falconSafariData.heading}
          </h1>
          <p className="text-[#787878]   sm:text-[17px] text-[14px] sm:text-left text-justify">
            {falconSafariData.subheading}
          </p>
        </div>
        {falconSafariData.sections.map((section, idx) => (
          <CaseStudyCard
            key={idx}
            title={section.title}
            items={section.items}
          />
        ))}
        <div className="sm:max-w-[1050px] mx-auto ">
          <p className="text-[#787878]  sm:text-[17px] text-[14px] sm:text-left text-justify mb-10">
            By focusing on engaging content, a consistent posting schedule,
            follower engagement initiatives, and targeted advertising campaigns,
            Falcon Safaris not only doubled their social media followers but
            also experienced substantial growth in engagement metrics. This
            social media triumph not only expanded Falcon Safaris' digital
            community but also contributed to enhanced brand visibility and a
            positive perception in the competitive safari industry. This case
            underscores the importance of a well-executed social media strategy
            in building and nurturing a vibrant online community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FalconSafariContentCard;
