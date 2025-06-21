import React from "react";
import {
  lifetimeSafariData,
  organicMarketingData,
  socialMediaData,
} from "../../data/CaseStudyData";
import CaseStudyCard from "../../components/CaseStudyCard";

const LifetimeContentCard = () => {
  return (
    <div className=" ">
      <div className="max-w-[1050px] mx-auto px-[15px]  mt-[120px]">
        <h1 className="text-4xl text-[#3467d8] text-center font-[700] md:text-[50px]  pb-[30px] leading-[1.4] px-[8%]">
          {lifetimeSafariData.heading}
        </h1>
        <p className="text-[#787878]  text-[17px]">
          {lifetimeSafariData.subheading}
        </p>
      
      {lifetimeSafariData.sections.map((section, idx) => (
        <CaseStudyCard key={idx} title={section.title} items={section.items} />
      ))}
      
      <div className="max-w-[1050px] mx-auto px-[15px]">
        <p className="text-[#787878]  text-[17px] mb-10">
          By combining a well-structured content calendar, visually compelling
          content, and active community engagement, Safari Marketing Pro aimed
          to not only increase brand visibility but also cultivate a loyal and
          engaged online community for African Scenic Safaris. This strategy
          focused on creating a positive brand image and encouraging social
          sharing, ultimately driving increased awareness and interest in the
          safari company's offerings.
        </p>
        <img
          src="https://safarimarketingpro.com/images/lifetimesafari-casestudy.png"
          alt="screenshort"
        />
      </div>

      <div className="max-w-[1050px] mx-auto px-[15px] mt-[120px]">
        <h1 className="text-4xl text-[#3467d8] text-center font-[700] md:text-[50px]  pb-[30px] leading-[1.4] px-[8%]">
          {organicMarketingData.heading}
        </h1>
        <p className="text-[#787878]  text-[17px]">
          {organicMarketingData.subheading}
        </p>
      </div>
      {organicMarketingData.sections.map((section, idx) => (
        <CaseStudyCard key={idx} title={section.title} items={section.items} />
      ))}
      <div className="max-w-[1050px] mx-auto px-[15px]">
        <p className="text-[#787878]  text-[17px] mb-10">
          The comprehensive organic marketing strategies implemented by Safari
          Marketing Pro have contributed to the significant improvement in
          Lifetime Safaris' search engine visibility, driving organic traffic
          and enhancing the overall online presence.
        </p>
      </div>

      <div className=" max-w-[1050px] mx-auto ">
        <h1 className=" text-[#011833] font-[600] text-[22px] text-center">
          Key Metric 1: Organic Traffic
        </h1>
        <img
          src="https://safarimarketingpro.com/images/lifetimesafari-casestudy2.png"
          alt="screen-short1"
          className="py-[29.45px] "
        />
      </div>
      <div className=" max-w-[1050px] mx-auto ">
        <h1 className=" text-[#011833] font-[600] text-[22px] text-center">
          Key Metric 2: Organic Research
        </h1>
        <img
          src="https://safarimarketingpro.com/images/lifetimesafari-casestudy3.png"
          alt="screen-short1"
          className="py-[29.45px] "
        />
      </div>
      <div className=" max-w-[1050px] mx-auto ">
        <h1 className=" text-[#011833] font-[600] text-[22px] text-center">
          Key Metric 3: Ranking Keywords
        </h1>
        <img
          src="https://safarimarketingpro.com/images/lifetimesafari-casestudy4.png"
          alt="screen-short1"
          className="py-[29.45px] "
        />
      </div>
      <div className=" max-w-[1050px] mx-auto ">
        <h1 className=" text-[#011833] font-[600] text-[22px] text-center">
          Key Metric 4: Top Ranking Keywords
        </h1>
        <img
          src="https://safarimarketingpro.com/images/lifetimesafari-casestudy6.png"
          alt="screen-short1"
          className="py-[29.45px] "
        />
      </div>

      <div className="max-w-[1050px] mx-auto px-[15px] mt-[120px]">
        <h1 className="text-4xl text-[#3467d8] text-center font-[700] md:text-[50px]  pb-[30px] leading-[1.4] px-[8%]">
          {socialMediaData.heading}
        </h1>
        <p className="text-[#787878]  text-[17px]">
          {socialMediaData.subheading}
        </p>
      </div>
      {socialMediaData.sections.map((section, idx) => (
        <CaseStudyCard key={idx} title={section.title} items={section.items} />
      ))}
      <div className="max-w-[1050px] mx-auto px-[15px]">
        <p className="text-[#787878]  text-[17px] mb-10">
          The effective implementation of these social media strategies by
          Safari Marketing Pro has not only resulted in substantial growth in
          followers and engagement but has also significantly elevated brand
          awareness, fostering a community of engaged followers and driving
          higher conversion rates for Lifetime Safaris.
        </p>
      </div>
      </div>
    </div>
  );
};

export default LifetimeContentCard;
