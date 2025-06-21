import React from "react";
import {
  jerryTanzaniaData,
  jerryTanzaniaData1,
  jerryTanzaniaData2,
} from "../../data/CaseStudyData";
import CaseStudyCard from "../../components/CaseStudyCard";
import { PiCheckFatFill } from "react-icons/pi";

const JerryContentCard = () => {
  return (
    <div>
      <div className="max-w-[1050px] mx-auto px-[15px] mt-[120px]">
        <h1 className="text-4xl text-[#3467d8] text-center font-[700] md:text-[50px]  pb-[30px] leading-[1.4] px-[8%]">
          {jerryTanzaniaData.heading}
        </h1>
        <p className="text-[#787878]  text-[17px]">
          {jerryTanzaniaData.subheading}
        </p>

        {jerryTanzaniaData.sections.map((section, idx) => (
          <CaseStudyCard
            key={idx}
            title={section.title}
            items={section.items}
          />
        ))}
        <div className="max-w-[1050px] mx-auto ">
          <p className="text-[#787878]  text-[17px] mb-10">
            Safari Marketing Pro's website overhaul for Jerry Tanzania Tours
            successfully achieved the set objectives. The new design prioritizes
            user experience, mobile responsiveness, and SEO best practices,
            resulting in improved online visibility, increased engagement, and a
            positive impact on the overall digital presence of Jerry Tanzania
            Tours. This transformation positions the company for sustained
            growth in the competitive online travel market.
          </p>
          <img
            src="https://safarimarketingpro.com/images/jerrytanzaniatours-casestudy.jpg"
            alt="screenshort"
          />
        </div>

        <div className="max-w-[1050px] mx-auto  mt-[120px]">
          <h1 className="text-4xl text-[#3467d8] text-center font-[700] md:text-[50px]  pb-[30px] leading-[1.4] px-[8%]">
            {jerryTanzaniaData1.heading}
          </h1>
          <p className="text-[#787878]  text-[17px]">
            {jerryTanzaniaData1.subheading}
          </p>
        </div>
        {jerryTanzaniaData1.sections.map((section, idx) => (
          <CaseStudyCard
            key={idx}
            title={section.title}
            items={section.items}
          />
        ))}
        <div className="max-w-[1050px] mx-auto ">
          <p className="text-[#787878]  text-[17px] mb-10">
            Safari Marketing Pro's organic marketing strategies for Jerry
            Tanzania Tours have proven successful in improving search engine
            rankings, increasing organic traffic, and enhancing user engagement.
            By consistently delivering valuable content and implementing
            effective SEO techniques, Jerry Tanzania Tours has strengthened its
            position as a prominent player in the competitive safari and travel
            industry. These results demonstrate the effectiveness of a holistic
            organic marketing approach in driving online visibility and business
            growth.
          </p>

          <div className=" grid grid-cols-2 gap-[20px]  text-[#787878]  text-[17px]  p-[30px]">
            <div className=" flex">
              <span className=" mt-1 mr-[10px] text-[#011833] text-[18px] font-[600]">
                <PiCheckFatFill />
              </span>
              <p className="text-[#787878]  text-[17px]">
                <span className="text-[#787878] font-[600] text-[17px]">
                  Organic Traffic:
                </span>
                +360%
              </p>
            </div>
            <div className=" flex">
              <span className=" mt-1 mr-[10px] text-[#011833] text-[18px] font-[600]">
                <PiCheckFatFill />
              </span>
              <p>
                <span className="font-[600] ">Overall Sessions (MoM): </span>
                +88%
              </p>
            </div>
            <div className=" flex">
              <span className=" mt-1 mr-[10px] text-[#011833] text-[18px] font-[600]">
                <PiCheckFatFill />
              </span>
              <p>
                <span className="font-[600] ">New Users: </span>
                +78%
              </p>
            </div>

            <div className=" flex">
              <span className=" mt-1 mr-[10px] text-[#011833] text-[18px] font-[600]">
                <PiCheckFatFill />
              </span>
              <p>
                <span className="font-[600] ">
                  “Travel Industries” Page Sessions:{" "}
                </span>
                +2,000%
              </p>
            </div>
            <div className=" flex">
              <span className=" mt-1 mr-[10px] text-[#011833] text-[18px] font-[600]">
                <PiCheckFatFill />
              </span>
              <p>
                <span className="font-[600] ">Onsite Goal Completions: </span>
                +250%
              </p>
            </div>
            <div className=" flex">
              <span className=" mt-1 mr-[10px] text-[#011833] text-[18px] font-[600]">
                <PiCheckFatFill />
              </span>
              <p>
                <span className="font-[600] ">
                  “Contact Us” Page Sessions:{" "}
                </span>
                +320%
              </p>
            </div>
          </div>

          <div className="max-w-[1050px] mx-auto">
            <h1 className=" text-[#011833] font-[600] text-[22px] text-center">
              Key Metric 1: Organic Traffic
            </h1>
            <img
              src="https://safarimarketingpro.com/images/jerrytanzaniatours-casestudy2.png"
              alt="screen-short1"
              className="py-[29.45px] "
            />

            <h1 className=" text-[#011833] font-[600] text-[22px] text-center">
              Key Metric 2: Organic Research
            </h1>
            <img
              src="https://safarimarketingpro.com/images/jerrytanzaniatours-casestudy3.png"
              alt="screen-short2"
              className="py-[29.45px] "
            />
            <h1 className=" text-[#011833] font-[600] text-[22px] text-center">
              Key Metric 3: Top Ranking Keywords
            </h1>
            <img
              src="https://safarimarketingpro.com/images/jerrytanzaniatours-casestudy4.png"
              alt="screen-short3"
              className="py-[29.45px] "
            />

            <h1 className=" text-[#011833] font-[600] text-[22px] text-center p-[3%] ">
              Key Metric 3: Top Ranking Keywords
            </h1>
            <img
              src="https://safarimarketingpro.com/images/jerrytanzaniatours-casestudy6.png"
              alt="screen-short4"
              className="py-[29.45px] "
            />
          </div>
        </div>

        <div className="max-w-[1050px] mx-auto  mt-[120px]">
          <h1 className="text-4xl text-[#3467d8] text-center font-[700] md:text-[50px]  pb-[30px] leading-[1.4] px-[8%]">
            {jerryTanzaniaData2.heading}
          </h1>
          <p className="text-[#787878]  text-[17px]">
            {jerryTanzaniaData2.subheading}
          </p>
        </div>
        {jerryTanzaniaData2.sections.map((section, idx) => (
          <CaseStudyCard
            key={idx}
            title={section.title}
            items={section.items}
          />
        ))}
        <div className="max-w-[1050px] mx-auto ">
          <p className="text-[#787878]  text-[17px] mb-10">
            Safari Marketing Pro's social media management strategies have
            propelled Jerry Tanzania Tours into a prominent position in the
            digital landscape. The substantial growth in followers, increased
            engagement, and the establishment of the brand as a source of
            inspiration and information collectively contribute to a successful
            social media presence. This outcome demonstrates the effectiveness
            of a tailored and interactive approach in creating a vibrant and
            influential online community for a travel brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JerryContentCard;
