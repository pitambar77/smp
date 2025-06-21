import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import { PiCheckFatFill } from "react-icons/pi";
import NumberCounter from "../AfricanScenicCaseStudy/NumberCounter";
import LifetimeContentCard from "./LifetimeContentCard";
import axios from "axios";
import { BASE_URL } from "../../api/config";
import Common from "../../components/Common";
import Content9 from "../home/Content9";
import CaseStudySection from "../../components/CaseStudySection";

const LifetimeSafari = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/all-banners/lifetimeSafaris`
        );
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
        <div className=" max-w-[1140px] mx-auto mt-[60px] py-[29.45px]">
          <div>
            <h1 className="text-4xl text-[#3467d8] text-center font-[700] md:text-[50px]  pb-[15px] leading-[1.4] px-[8%]">
              Safari Marketing Pro Services <br /> Used
            </h1>
          </div>
          <div className=" grid grid-cols-3 p-[2%] items-center">
            <div className="px-[15px] ">
              <div className=" flex justify-center items-center">
                <img
                  src="https://safarimarketingpro.com/images/serach.png"
                  alt="search"
                  className="bg-[#F0F0F0] p-[9%] mb-[10px] rounded-[5px] w-[110px] items-center"
                />
              </div>

              <p className="text-center text-[#787878] font-[400] text-[17px] pb-[15px]">
                Search Engine Optimization (SEO)
              </p>
            </div>

            <div className="px-[15px] text-center">
              <div className=" flex justify-center items-center">
                <img
                  src="https://safarimarketingpro.com/images/cursor.png"
                  alt="search"
                  className="bg-[#F0F0F0] p-[9%] mb-[10px] rounded-[5px] w-[110px] items-center"
                />
              </div>

              <p className="text-center text-[#787878] font-[400] text-[17px] pb-[15px]">
                Website Upgradation
              </p>
            </div>
            <div className="px-[15px] text-center">
              <div className=" flex justify-center items-center">
                <img
                  src="https://safarimarketingpro.com/images/heart.png"
                  alt="search"
                  className="bg-[#F0F0F0] p-[9%] mb-[10px] rounded-[5px] w-[110px] items-center"
                />
              </div>

              <p className="text-center text-[#787878] font-[400] text-[17px] pb-[15px]">
                Organic Social Media Marketing
              </p>
            </div>
          </div>

          <div className=" max-w-[1050px] mx-auto px-[15px]">
            <div>
              <p className=" pb-[15px] text-[17px] text-[#787878] font-[400]">
                Lifetime Safaris is a leading Tour Operator based in Moshi,
                Tanzania. Established in 2009 as a family business, the company
                is owned and operated entirely by locals who share the same
                passion for showcasing the amazing country of Tanzania and
                providing fantastic personalized service.
              </p>
            </div>
            <p className=" pb-[15px] text-[17px] text-[#787878] font-[400]">
              This company provides world-class Tanzania Safari Packages and
              Kilimanjaro Climbing packages, ideal for groups, organizations,
              families, backpackers, and individuals alike, for both leisure and
              business travel. Their sole focus and expertise are on the unique
              and top-rated Tanzania National Parks.
            </p>
            <p className=" pb-[15px] text-[17px] text-[#787878] font-[400]">
              The company partnered with Safari Marketing Pro in March 2021 to
              increase website traffic. Having seen no progress with other web
              marketing agencies in the past, they turned to Safari Marketing
              Pro for a more hands-on campaign management approach that delivers
              measurable results.
            </p>
            <p className=" pb-[15px] text-[17px] text-[#787878] font-[400]">
              Since taking over the company's digital marketing campaign, SMP
              has helped African Scenic Safaris generate a 360 percent increase
              in organic traffic year-over-year and an 88.24 percent increase in
              social media engagement.
            </p>
            <p className=" pb-[15px] text-[17px] text-[#787878] font-[400]">
              Lifetime Safaris continues to partner with Safari Marketing Pro to
              strengthen its digital presence and achieve steady business
              growth.
            </p>
          </div>
        </div>
      </div>
      <NumberCounter />
      <div className=" max-w-[1050px] mx-auto mt-[60px] px-[15px] pt-[90px]">
        <p className=" pb-[15px] text-[17px] text-[#787878] font-[400]">
          Before partnering with Safari Marketing Pro, African Scenic Safaris
          did not prioritize digital marketing as a significant focus. However,
          due to the competitive marketplace, the client recognized the need to
          enhance its online marketing efforts to establish its brand in the
          industry and generate more targeted leads.
        </p>

        <p className=" pb-[15px] text-[17px] text-[#787878] font-[400]">
          Safari Marketing Pro's digital marketing specialists conducted a
          comprehensive brand audit to identify the most effective approach to
          achieve the client's goals.
        </p>
        <p className=" pb-[15px] text-[17px] text-[#787878] font-[400]">
          Safari Marketing Pro implemented a complete overhaul of African Scenic
          Safaris' website, focusing on the following:
        </p>

        <div className=" grid grid-cols-2 gap-[20px]  text-[#787878]  text-[17px]  p-[30px]">
          <div className=" flex">
            <span className=" mt-1 mr-[10px] text-[#011833] text-[18px] font-[600]">
              <PiCheckFatFill />
            </span>
            <p className="text-[#787878]  text-[17px]">
              <span className="text-[#787878] font-[600] text-[17px]">
                Responsive Design:
              </span>
              Ensured that the website was accessible and user-friendly across
              all devices.
            </p>
          </div>
          <div className=" flex">
            <span className=" mt-1 mr-[10px] text-[#011833] text-[18px] font-[600]">
              <PiCheckFatFill />
            </span>
            <p>
              <span className="font-[600] ">Optimized Content: </span>
              Incorporated relevant keywords and engaging content to improve
              search engine rankings.
            </p>
          </div>
          <div className=" flex">
            <span className=" mt-1 mr-[10px] text-[#011833] text-[18px] font-[600]">
              <PiCheckFatFill />
            </span>
            <p>
              <span className="font-[600] ">Booking System Enhancement: </span>
              Streamlined the booking process for a smoother user experience.
            </p>
          </div>

          <div className=" flex">
            <span className=" mt-1 mr-[10px] text-[#011833] text-[18px] font-[600]">
              <PiCheckFatFill />
            </span>
            <p>
              <span className="font-[600] ">SEO-Friendly Website: </span>The
              team prioritized website optimization to improve rankings for
              relevant regional keywords in the industry.
            </p>
          </div>
        </div>
      </div>
     
        <LifetimeContentCard />
      <CaseStudySection
        title={
          <>
            BRISTOL FARMS <br /> FACEBOOK ADS
          </>
        }
        image="https://safarimarketingpro.com/images/lifetimesafari.png"
        stats={[
          { value: "40%", label: "In New Sessions" },
          { value: "304%", label: "In Sales" },
          { value: "23%", label: "In Average Order Value" },
        ]}
        galleryImages={[
          "https://safarimarketingpro.com/images/lifetimesafari1.jpg",
          "https://safarimarketingpro.com/images/lifetimesafari2.jpg",
          "https://safarimarketingpro.com/images/lifetimesafari3.jpg",
          "https://safarimarketingpro.com/images/lifetimesafari4.jpg",
        ]}
      />
      <Common />
      <Content9 />
    </div>
  );
};

export default LifetimeSafari;
