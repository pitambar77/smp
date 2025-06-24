import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";

import NumberCounter from "../AfricanScenicCaseStudy/NumberCounter";
import { FaCheck } from "react-icons/fa";
import FalconSafariContentCard from "./FalconSafariContentCard";
import axios from "axios";
import { BASE_URL } from "../../api/config";
import CaseStudySection from "../../components/CaseStudySection";
import Common from "../../components/Common";
import Content9 from "../home/Content9";

const FalconSafari = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/all-banners/falconSafari`);
        setBannerData(res.data);
      } catch (err) {
        console.error("Failed to fetch banner", err);
      }
    };
    fetchBanner();
  }, []);

  if (!bannerData) return <div>Loading...</div>;

  return (
    <div>
      <Banner
        title={bannerData.title}
        description={bannerData.description}
        imageUrl={`${BASE_URL}/${bannerData.imageUrl}`}
      />
      <div className=" w-full">
        <div className=" max-w-[1140px] mx-auto sm:mt-[60px] mt-[30px] py-[29.45px]">
          <div>
            <h1 className="text-[24px] text-[#3467d8] text-center font-[700] sm:text-[50px]  pb-[15px] leading-[1.4] px-[8%]">
              Safari Marketing Pro Services  Used
            </h1>
          </div>
          <div className=" grid sm:grid-cols-3 grid-cols-1 p-[2%] items-center sm:py-0 py-5">
            <div className="px-[15px] ">
              <div className=" flex justify-center items-center">
                <img
                  src="https://safarimarketingpro.com/images/serach.png"
                  alt="search"
                  className="bg-[#F0F0F0] sm:p-[9%] p-[12%] mb-[10px] rounded-[5px] w-[110px]  items-center"
                />
              </div>

              <p className="text-center text-[#787878] font-[400] sm:text-[17px] text-[14px] pb-[15px]">
                Search Engine Optimization (SEO)
              </p>
            </div>

            <div className="px-[15px] text-center">
              <div className=" flex justify-center items-center">
                <img
                  src="https://safarimarketingpro.com/images/cursor.png"
                  alt="search"
                  className="bg-[#F0F0F0] sm:p-[9%] p-[12%]  mb-[10px] rounded-[5px] w-[110px] items-center"
                />
              </div>

              <p className="text-center text-[#787878] font-[400] sm:text-[17px] text-[14px] pb-[15px]">
                Website Upgradation
              </p>
            </div>
            <div className="px-[15px] text-center">
              <div className=" flex justify-center items-center">
                <img
                  src="https://safarimarketingpro.com/images/heart.png"
                  alt="search"
                  className="bg-[#F0F0F0] sm:p-[9%] p-[12%]  mb-[10px] rounded-[5px] w-[110px] items-center"
                />
              </div>

              <p className="text-center text-[#787878] font-[400] sm:text-[17px] text-[14px] pb-[15px]">
                Organic Social Media Marketing
              </p>
            </div>
          </div>

          <div className=" sm:max-w-[1050px] mx-auto sm:px-[15px] px-4">
            <div>
              <p className=" pb-[15px] sm:text-[17px] text-[14px] sm:text-left text-justify text-[#787878] font-[400]">
                The Falcon Safaris Story Began In 2004, On A Piece Of Land In
                Victoria Falls, Zimbabwe, Owned By{" "}
                <strong>Mr. Hamilton Mandizvidza</strong> . They are an Operator
                as well as a premier full-service Destination Management Company
                with over 15 years of combined in-house experience in all over
                Africa. Their vision of sharing the wonders of the African
                continent with those who are eager to explore some of the
                world’s most magnificent areas.
              </p>
            </div>
            <p className=" pb-[15px] sm:text-[17px] text-[14px] sm:text-left text-justify text-[#787878] font-[400]">
              Their provide unique and world-class safari and day tour packages
              to travelers from around the world. Their goal seems to be to
              offer an authentic and unique experience of Africa to travelers
              while also benefiting the local community. As the "Best South
              African tour company," they likely prioritize providing
              high-quality and memorable experiences for their clients.
            </p>
            <p className=" pb-[15px] sm:text-[17px] text-[14px] sm:text-left text-justify text-[#787878] font-[400]">
              In 2021, the company partnered with Safari Marketing Pro to design
              a world-class website and increase website traffic Falcon Safaris
              improved their online presence, attract more visitors to their
              website, and ultimately increased their business.
            </p>
            <p className=" pb-[15px] sm:text-[17px] text-[14px] sm:text-left text-justify text-[#787878] font-[400]">
              Safari Marketing Pro, implemented a comprehensive digital
              marketing campaign to address their problem.
            </p>
            <p className=" pb-[15px] sm:text-[17px] text-[14px] sm:text-left text-justify text-[#787878] font-[400]">
              The campaign likely involved a range of tactics, such as search
              engine optimization (SEO) to improve their website's visibility in
              search engine results, paid advertising to reach potential
              customers through targeted ads, to engage with their existing
              audience, paid social media advertising to reach a wider audience
              on social media platforms, and organic social media marketing to
              build their brand presence and engage with their followers
            </p>
            <p className=" pb-[15px] sm:text-[17px] text-[14px] sm:text-left text-justify text-[#787878] font-[400]">
              Falcon Safaris continues to partner with Safari Marketing Pro from
              2021 to till now to strengthen its digital presence and achieve
              steady business growth.
            </p>
          </div>
        </div>
      </div>
      <NumberCounter />
      <div className=" w-full">
        <div className=" sm:max-w-[1020px] mx-auto sm:mt-[60px] mt-[30px] py-[29.45px] sm:px-0 px-4">
          <h1 className=" text-[#3467d8] font-[700] sm:text-[30px] text-[24px]  sm:py-[15px] ">
            Challenges Faced
          </h1>
          <div className=" grid sm:grid-cols-2 grid-cols-1 gap-7 mt-[30px]">
            <div className="bg-[#F0F0F0] pt-[30px] px-[12.5px] rounded-[20px] ">
              <div className=" p-[1.5rem]">
                <p className=" text-[#787878] sm:text-[17px] text-[14px] font-[400] pb-[10px] ">
                  {" "}
                  <strong>Outdated Website: </strong>Falcon Safaris had an
                  outdated website that did not reflect the quality of their
                  services.
                </p>
                <p className="text-[#787878] sm:text-[17px] text-[14px] font-[400] pb-[10px]">
                  <strong>Limited Online Visibility: </strong>The company
                  struggled with low organic rankings, hindering their reach to
                  potential customers.
                </p>
              </div>
            </div>
            <div className="bg-[#F0F0F0] pt-[30px] px-[12.5px] rounded-[20px] ">
              <div className=" p-[1.5rem]">
                <p className="text-[#787878] sm:text-[17px] text-[14px] font-[400] pb-[10px]">
                  <strong>Ineffective PPC Campaigns: </strong>Previous PPC
                  efforts failed to generate significant leads or provide a
                  positive return on investment.{" "}
                </p>
                <p className="text-[#787878] sm:text-[17px] text-[14px] font-[400] pb-[10px]">
                  <strong>Suboptimal Social Media Presence: </strong>Falcon
                  Safaris' social media profiles lacked engagement and failed to
                  showcase the uniqueness of their safari experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="sm:mt-[40px] mt-5">
            <h1 className=" text-[#3467d8] font-[700] sm:text-[30px] text-[24px] py-[15px] leading-[1.4] ">
              Safari Marketing Pro's Approach:
            </h1>
            <p className=" text-[#787878] font-[400] sm:text-[17px] text-[14px] sm:text-left text-justify pb-[15px]">
              Safari Marketing Pro embarked on a journey to revamp Falcon
              Safaris' digital storefront. The primary objectives were to create
              a visually appealing, user-friendly, and responsive website that
              not only showcased the company's unique offerings but also
              provided an immersive experience for potential customers.
            </p>
            <p className=" text-[#787878] font-[400] sm:text-[17px] text-[14px] sm:text-left text-justify pb-[15px]">
              Safari Marketing Pro’s social media strategies covered:
            </p>

            <h1 className=" text-[#3467d8] font-[700] sm:text-[30px] text-[24px] py-[15px] leading-[1.4] ">
              Visually Appealing Design:
            </h1>
            <p className=" text-[#787878] font-[400] sm:text-[17px] text-[14px] sm:text-left text-justify pb-[15px]">
              A modern and visually captivating design was crafted to reflect
              the adventurous spirit of Falcon Safaris. High-resolution images
              and multimedia elements were strategically integrated to showcase
              the beauty of their safari destinations.
            </p>
            <h1 className=" text-[#3467d8] font-[700] sm:text-[30px] text-[24px] py-[15px]  leading-[1.4]">
              User-Friendly Navigation:
            </h1>
            <p className=" text-[#787878] font-[400] sm:text-[17px] text-[14px] sm:text-left text-justify pb-[15px]">
              The website's navigation was overhauled to ensure a seamless user
              experience. Intuitive menus, clear calls-to-action, and simplified
              pathways were implemented to guide visitors effortlessly through
              the site.
            </p>

            <h1 className=" text-[#3467d8] font-[700] sm:text-[30px] text-[24px] py-[15px] leading-[1.4] ">
              Responsive Design:
            </h1>
            <p className=" text-[#787878] font-[400] sm:text-[17px] text-[14px] sm:text-left text-justify pb-[15px]">
              Recognizing the diverse range of devices used by visitors, the
              website was developed with a responsive design. This ensured
              optimal viewing and functionality across various platforms,
              including desktops, tablets, and mobile devices.
            </p>
            <h1 className=" text-[#3467d8] font-[700] sm:text-[30px] text-[24px] py-[15px] leading-[1.4] ">
              Compelling Content
            </h1>
            <p
              className=" text-[#626060]  font-[400] sm:text-[16px] text-[14px]  text-justify   sm:text-center"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Emphasis was placed on creating compelling and informative content
              that not only highlighted Falcon Safaris' offerings but also
              educated visitors about the unique aspects of each safari
              experience. This included engaging narratives, detailed
              itineraries, and captivating visuals.
            </p>

            <img
              src="https://safarimarketingpro.com/images/falconsafaris-casestudy.png"
              alt="screen-short"
            />
          </div>
        </div>

        <div className="">
          <div className=" sm:max-w-[1020px] mx-auto mt-[60px] py-[29.45px] sm:px-0 px-4">
            <p className=" text-[#787878] font-[400] sm:text-[17px] text-[14px] sm:text-left text-justify pb-[15px]">
              Safari Marketing Pro embarked on a journey to revamp Falcon
              Safaris' digital storefront. The primary objectives were to create
              a visually appealing, user-friendly, and responsive website that
              not only showcased the company's unique offerings but also
              provided an immersive experience for potential customers.
            </p>
            <h1 className=" text-[#3467d8] font-[700] sm:text-[30px] text-[24px] py-[15px] ">
              Challenges{" "}
            </h1>
            <p className=" text-[#787878] font-[400] sm:text-[17px] text-[14px] sm:text-left text-justify pb-[15px]">
              Falcon Safaris faced a significant hurdle in the digital landscape
              with low organic rankings. To address this challenge and increase
              visibility in search engine results, Safari Marketing Pro devised
              a robust organic marketing strategy.
            </p>
            <img
              src="https://safarimarketingpro.com/images/falconsafaris-casestudy1.png"
              alt="casestudy1"
            />
          </div>
        </div>
        <div className="">
          <div className=" sm:max-w-[1020px] mx-auto sm:mt-[60px] mt-[30px] py-[29.45px] sm:px-0 px-4">
            <h1 className=" text-[#3467d8] font-[700] sm:text-[40px] text-[24px] pb-[15px] px-[5%] leading-[1.3] text-center ">
              Key Strategies Implemented{" "}
            </h1>
            <p className=" text-[#787878] font-[400] sm:text-[22px] text-[16px] pb-[15px] text-center">
              Website Upgrade: From Ground Level to Sky High
            </p>
            <h1 className=" text-[#3467d8] font-[700] sm:text-[30px] text-[24px] py-[15px] ">
              Keyword Optimization
            </h1>
            <p className=" text-[#787878] font-[400] sm:text-[17px] text-[14px] sm:text-left text-justify pb-[15px]">
              In-depth keyword research was conducted to identify relevant terms
              and phrases related to Falcon Safaris' offerings. Strategic
              integration of these keywords was implemented across website
              content, meta tags, and other key elements to enhance search
              engine visibility.
            </p>

            <h1 className=" text-[#3467d8] font-[700] sm:text-[30px] text-[24px] py-[15px] ">
              On-Page SEO Enhancements:
            </h1>
            <p className=" text-[#787878] font-[400] sm:text-[17px] text-[14px] sm:text-left text-justify pb-[15px]">
              Comprehensive on-page SEO optimizations were performed, addressing
              factors such as title tags, meta descriptions, header tags, and
              image alt text. The goal was to ensure that each page was
              optimized to align with search engine algorithms and provide a
              clear understanding of the content.
            </p>

            <h1 className=" text-[#3467d8] font-[700] sm:text-[30px] text-[24px] py-[15px] ">
              Link-Building Campaigns
            </h1>
            <p className=" text-[#787878] font-[400] sm:text-[17px] text-[14px] sm:text-left text-justify pb-[15px]">
              A targeted link-building strategy was executed to increase the
              authority and credibility of Falcon Safaris' website. This
              involved acquiring high-quality backlinks from reputable sources
              within the travel and safari industry.
            </p>

            <h1 className=" text-[#3467d8] font-[700] sm:text-[30px] text-[24px] py-[15px] ">
              Content Updates and Blog Posts
            </h1>
            <p className=" text-[#787878] font-[400] sm:text-[17px] text-[14px] sm:text-left text-justify pb-[15px]">
              Regular content updates were implemented to keep the website fresh
              and relevant. This included refreshing existing content and adding
              new pages to address emerging trends or customer queries. A blog
              strategy was established, creating informative and engaging posts
              that not only showcased Falcon Safaris' expertise but also
              addressed the interests and questions of their target audience.
            </p>

            <h1 className=" text-[#3467d8] font-[700] sm:text-[30px] text-[24px] py-[15px] ">
              Social Media Integration
            </h1>
            <p className=" text-[#787878] font-[400] sm:text-[17px] text-[14px] sm:text-left text-justify pb-[15px]">
              Social media platforms were integrated into the organic marketing
              strategy to create a cohesive online presence. Regular sharing of
              blog posts, updates, and visually appealing content on social
              media channels helped drive traffic to the website and enhance
              overall visibility.
            </p>

            <h1 className=" text-[#3467d8] font-[700] sm:text-[30px] text-[24px] py-[15px] ">
              Organic Ranking Progress
            </h1>
            <p className=" text-[#787878] font-[400] sm:text-[17px] text-[14px] sm:text-left text-justify pb-[15px]">
              Targeted keywords related to safari experiences saw a notable
              improvement in rankings. Falcon Safaris achieved top positions for
              key terms, enhancing their visibility to users actively searching
              for safari adventures.
            </p>

            <div className=" grid sm:grid-cols-2 grid-cols-1 justify-between sm:p-[30px] p-4">
              <div className="text-[#787878]  ">
                <p className="pb-[15px] sm:text-[16px] text-[14px] flex items-center">
                  {" "}
                  <span>
                  <FaCheck className=" text-[#011833] font-[400] sm:text-[16px] text-[10px] mr-[10px]" />{" "}</span>
                  <strong>Increase in avg. order value: </strong> 68%
                </p>
                <p className="pb-[15px] sm:text-[16px] text-[14px] flex items-center">
                  {" "}
                   <span>
                  <FaCheck className=" text-[#011833] font-[400]  sm:text-[16px] text-[10px] mr-[10px]" /></span>
                  <strong>Increase in sessions: </strong> 231%
                </p>
                <p className="pb-[15px] sm:text-[16px] text-[14px] flex items-center">
                  {" "}
                  <FaCheck className=" text-[#011833] font-[400] sm:text-[16px] text-[10px] mr-[10px]" />
                  <strong>Increase in page views: </strong> 301%
                </p>
              </div>
              <div>
                <p className="text-[#787878]   pb-[15px] sm:text-[16px] text-[14px] flex items-center">
                  {" "}
                  <FaCheck className=" text-[#011833] font-[400]  sm:text-[16px] text-[10px] mr-[10px]" />
                  <strong>Increase in revenue: </strong> 54%
                </p>
                <p className="text-[#787878] sm:text-[16px] text-[14px]  pb-[15px] flex items-center">
                  {" "}
                  <FaCheck className=" text-[#011833] font-[400] sm:text-[16px] text-[10px] mr-[10px]" />
                  <strong>Increase in new users: </strong> 222%
                </p>

                <p className="text-[#787878] sm:text-[16px] text-[14px]  pb-[15px] flex items-center">
                  {" "}
                  <FaCheck className=" text-[#011833] font-[400] sm:text-[16px] text-[10px] mr-[10px]" />
                  <strong>Increase in avg. session duration: </strong> +55%
                </p>
              </div>
            </div>
            <img
              src="https://safarimarketingpro.com/images/falconsafaris-casestudy1.png"
              alt="screenshort"
            />
          </div>
        </div>
      </div>
      <FalconSafariContentCard />
       <CaseStudySection
        title={
          <>
            BRISTOL FARMS <br /> FACEBOOK ADS
          </>
        }
        image="https://safarimarketingpro.com/images/falconsafaris.png"
        stats={[
          { value: "40%", label: "In New Sessions" },
          { value: "304%", label: "In Sales" },
          { value: "23%", label: "In Average Order Value" },
        ]}
        galleryImages={[
          "https://safarimarketingpro.com/images/falconsafaris1.jpg",
          "https://safarimarketingpro.com/images/falconsafaris2.jpg",
          "https://safarimarketingpro.com/images/falconsafaris3.jpg",
          "https://safarimarketingpro.com/images/falconsafaris4.jpg",
        ]}
      />
      <Common />
      <Content9 />
    </div>
  );
};

export default FalconSafari;
