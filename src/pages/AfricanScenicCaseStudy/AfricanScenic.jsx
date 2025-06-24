import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import { PiCheckFatFill } from "react-icons/pi";
import NumberCounter from "./NumberCounter";
import ContentCard from "./ContentCard";
import Content9 from "../../pages/home/Content9";
import { IoMdArrowRoundUp } from "react-icons/io";
import Common from "../../components/Common";
import axios from "axios";
import { BASE_URL } from "../../api/config";
import CaseStudySection from "../../components/CaseStudySection";

const AfricanScenic = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/all-banners/africanScenic`
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
      {/* Other African Scenic sections */}
      <div className="w-full">
        <div className="max-w-[1140px] mx-auto sm:mt-[60px] mt-[30px] py-[29.45px]">
          <div>
            <h1 className="text-[22px] text-[#3467d8]  text-center font-[700] sm:text-[50px]  sm:pb-[30px] pb-[15px] leading-[1.4] sm:px-[8%]">
              African Scenic services used
            </h1>
          </div>
          <div className=" grid sm:grid-cols-4 grid-cols-1 p-[2%] sm:py-0 py-5">
            <div className="px-[15px] ">
              <div className=" flex justify-center items-center">
                <img
                  src="https://safarimarketingpro.com/images/serach.png"
                  alt="search"
                  className="bg-[#F0F0F0] sm:p-[9%] p-[12%] mb-[10px] rounded-[5px] w-[110px]  items-center"
                />
              </div>

              <p className="text-center text-[#787878] font-[400] sm:text-[17px] text-[14px] pb-[15px]">
                Search Engine <br /> Optimization (SEO)
              </p>
            </div>
            <div className="px-[15px] text-center">
              <div className=" flex justify-center items-center">
                <img
                  src="https://safarimarketingpro.com/images/donate.png"
                  alt="search"
                  className="bg-[#F0F0F0] sm:p-[9%] p-[12%] mb-[10px] rounded-[5px] w-[110px]  items-center"
                />
              </div>

              <p className="text-center text-[#787878] font-[400] sm:text-[17px] text-[14px] pb-[15px]">
                Paid Social Media <br /> Advertising
              </p>
            </div>
            <div className="px-[15px] text-center">
              <div className=" flex justify-center items-center">
                <img
                  src="https://safarimarketingpro.com/images/cursor.png"
                  alt="search"
                  className="bg-[#F0F0F0] sm:p-[9%] p-[12%] mb-[10px] rounded-[5px] w-[110px]  items-center"
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
                  className="bg-[#F0F0F0] sm:p-[9%] p-[12%] mb-[10px] rounded-[5px] w-[110px]  items-center"
                />
              </div>

              <p className="text-center text-[#787878] font-[400] sm:text-[17px] text-[14px] pb-[15px]">
                Organic Social Media <br /> Marketing
              </p>
            </div>
          </div>

          <div className=" max-w-[1050px] mx-auto px-[15px] sm:text-left text-justify">
            <div>
              <p className=" pb-[15px] sm:text-[17px] text-[14px] text-[#787878] font-[400]">
                African Scenic Safaris is a leading Tour Operator based in
                Moshi, Tanzania. Established in 2009 as a family business, the
                company is owned and operated entirely by locals who share the
                same passion for showcasing the amazing country of Tanzania and
                providing fantastic personalized service.
              </p>
            </div>
            <p className=" pb-[15px] sm:text-[17px] text-[14px] text-[#787878] font-[400]">
              This company provides world-class Tanzania Safari Packages and
              Kilimanjaro Climbing packages, ideal for groups, organizations,
              families, backpackers, and individuals alike, for both leisure and
              business travel. Their sole focus and expertise are on the unique
              and top-rated Tanzania National Parks.
            </p>
            <p className=" pb-[15px] sm:text-[17px] text-[14px] text-[#787878] font-[400]">
              The company partnered with Safari Marketing Pro in March 2021 to
              increase website traffic. Having seen no progress with other web
              marketing agencies in the past, they turned to Safari Marketing
              Pro for a more hands-on campaign management approach that delivers
              measurable results.
            </p>
            <p className=" pb-[15px] sm:text-[17px] text-[14px] text-[#787878] font-[400]">
              Since taking over the company's digital marketing campaign, SMP
              has helped African Scenic Safaris generate a 360 percent increase
              in organic traffic year-over-year and an 88.24 percent increase in
              social media engagement.
            </p>
            <p className=" pb-[15px] sm:text-[17px] text-[14px] text-[#787878] font-[400]">
              African Scenic Safaris continues to partner with Safari Marketing
              Pro to strengthen its digital presence and achieve steady business
              growth.
            </p>
          </div>
        </div>

        {/* Number counter sections */}
        <NumberCounter />

        <div className=" max-w-[1050px] mx-auto sm:mt-[60px] sm:text-left text-justify px-[15px] pt-[29.45px]">
          <p className=" pb-[15px] sm:text-[17px] text-[14px] text-[#787878] font-[400]">
            Before partnering with Safari Marketing Pro, African Scenic Safaris
            did not prioritize digital marketing as a significant focus.
            However, due to the competitive marketplace, the client recognized
            the need to enhance its online marketing efforts to establish its
            brand in the industry and generate more targeted leads.
          </p>

          <p className=" pb-[15px] sm:text-[17px] text-[14px] text-[#787878] font-[400]">
            Safari Marketing Pro's digital marketing specialists conducted a
            comprehensive brand audit to identify the most effective approach to
            achieve the client's goals.
          </p>
          <p className=" pb-[15px] sm:text-[17px] text-[14px] text-[#787878] font-[400]">
            Safari Marketing Pro implemented a complete overhaul of African
            Scenic Safaris' website, focusing on the following:
          </p>

          <div className=" grid grid-cols-2 sm:gap-[20px] gap-2  text-[#787878]  sm:text-[17px] text-[14px]  sm:p-[30px] p-2">
            <div className=" flex">
              <span className=" mt-1 mr-[10px] text-[#011833]  font-[600]">
                <PiCheckFatFill />
              </span>
              <p className="text-[#787878]  ">
                <span className="text-[#787878] font-[600] ">
                  Responsive Design:
                </span>
                Ensured that the website was accessible and user-friendly across
                all devices.
              </p>
            </div>
            <div className=" flex">
              <span className=" mt-1 mr-[10px] text-[#011833]  font-[600]">
                <PiCheckFatFill />
              </span>
              <p>
                <span className="font-[600] ">Optimized Content: </span>
                Incorporated relevant keywords and engaging content to improve
                search engine rankings.
              </p>
            </div>
            <div className=" flex">
              <span className=" mt-1 mr-[10px] text-[#011833]  font-[600]">
                <PiCheckFatFill />
              </span>
              <p>
                <span className="font-[600] ">
                  Booking System Enhancement:{" "}
                </span>
                Streamlined the booking process for a smoother user experience.
              </p>
            </div>

            <div className=" flex">
              <span className=" mt-1 mr-[10px] text-[#011833]  font-[600]">
                <PiCheckFatFill />
              </span>
              <p>
                <span className="font-[600] ">SEO-Friendly Website: </span>The
                team prioritized website optimization to improve rankings for
                relevant regional keywords in the industry.
              </p>
            </div>
          </div>
          <img
            src="https://safarimarketingpro.com/images/africanscenic-casestudy1.png"
            alt=""
          />
        </div>

        <div className=" max-w-[1050px] mx-auto sm:mt-[60px] pt-[60px] px-[15px] ">
          <h1 className="text-[22px] text-[#3467d8]  text-center font-[700] sm:text-[50px]  sm:pb-[30px] pb-[15px] leading-[1.4] sm:px-[8%]">
            Organic Marketing Strategy Implementation
          </h1>
          <p className=" pb-[15px] sm:text-[17px] text-[14px] sm:text-left text-justify text-[#787878] font-[400]">
            African Scenic Safaris is a leading Tour Operator based in Moshi,
            Tanzania. Established in 2009 as a family business, the company is
            owned and operated entirely by locals who share the same passion for
            showcasing the amazing country of Tanzania and providing fantastic
            personalized service.
          </p>
          <h1 className="sm:text-[30px] text-[24px] text-[#3467d8] py-[15px] font-[700] ">
            Thorough Keyword Optimization
          </h1>
          <div className=" grid grid-cols-2 gap-[20px]  text-[#787878]  sm:text-[17px] text-[14px]  sm:p-[30px] p-2">
            <div className=" flex">
              <span className=" mt-1 mr-[10px] text-[#011833]  font-[600]">
                <PiCheckFatFill />
              </span>
              <p className="text-[#787878]  ">
                Conducted comprehensive keyword research to identify relevant
                terms and phrases related to African Scenic Safaris' services,
                destinations, and target audience.
              </p>
            </div>
            <div className=" flex">
              <span className=" mt-1 mr-[10px] text-[#011833]  font-[600]">
                <PiCheckFatFill />
              </span>
              <p>
                Strategically integrated these keywords into the website's
                content, including landing pages, blog posts, and metadata.
              </p>
            </div>
            <div className=" flex">
              <span className=" mt-1 mr-[10px] text-[#011833]  font-[600]">
                <PiCheckFatFill />
              </span>
              <p>
                Ensured a balance between optimizing for search engines and
                maintaining natural, reader-friendly content.
              </p>
            </div>
          </div>
        </div>

        <div className=" max-w-[1050px] mx-auto sm:px-0 px-4 ">
          <h1 className=" text-[#011833] font-[600] sm:text-[22px] text-[18px] text-center">
            Key Metric 1: Domain Authority
          </h1>
          <img
            src="https://safarimarketingpro.com/images/africanscenic-casestudy2.png"
            alt="screen-short1"
            className="py-[29.45px] "
          />
        </div>
        <div className=" max-w-[1050px] mx-auto sm:px-0 px-4 ">
          <h1 className=" text-[#011833] font-[600] sm:text-[22px] text-[18px] text-center">
            Key Metric 2: Organic Keywords
          </h1>
          <img
            src="https://safarimarketingpro.com/images/africanscenic-casestudy3.png"
            alt="screen-short2"
            className="py-[29.45px] "
          />
        </div>
        <div className=" max-w-[1050px] mx-auto sm:px-0 px-4 ">
          <h1 className=" text-[#011833] font-[600] sm:text-[22px] text-[18px] text-center">
            Key Metric 3: Top Ranking Keywords
          </h1>
          <img
            src="https://safarimarketingpro.com/images/africanscenic-casestudy4.png"
            alt="screen-short3"
            className="py-[29.45px] "
          />
        </div>
        <div className=" max-w-[1050px] mx-auto sm:px-0 px-4 ">
          <h1 className=" text-[#011833] font-[600] sm:text-[22px] text-[18px] text-center p-[3%] ">
            Key Metric 3: Top Ranking Keywords
          </h1>
          <img
            src="https://safarimarketingpro.com/images/africanscenic-casestudy8.png"
            alt="screen-short4"
            className="py-[29.45px] "
          />
        </div>
      </div>
      <ContentCard />
      {/* <div className=" w-full bg-[#ff5254] pt-[10px] pb-[50px]">
        <div className=" flex pt-[5%]">
          <div className=" basis-[66%]">
            <img
              src="https://safarimarketingpro.com/images/africanscenic-casestudy5.png"
              alt=""
            />
          </div>
          <div className="">
            <div className=" px-[60px]">
              <h3 className=" text-[35px] font-[700] text-white pb-[40px]">
                BRISTOL FARMS <br />
                FACEBOOK ADS
              </h3>
              <div className=" flex ">
                <h3 className="text-[90px] font-[700] text-white ">40%</h3>
                <span className="text-[90px] font-[1200] mt-5 text-white pl-5 ">
                  <IoMdArrowRoundUp />
                </span>
              </div>

              <h3 className="text-[35px] font-[700] text-white leading-10 -mt-6 ">
                {" "}
                INCREASE
              </h3>
              <p className="text-white font-[600]">
                <strong>In New Sessions</strong>
              </p>
              <div>
                <div className=" flex">
                  <h3 className="text-[90px] font-[700] text-white ">304%</h3>
                  <span className="text-[90px] font-[700] mt-5 text-white pl-5 ">
                    <IoMdArrowRoundUp />
                  </span>
                </div>
                <h3 className="text-[35px] font-[700] text-white leading-10 -mt-6">
                  {" "}
                  INCREASE
                </h3>
                <p className="text-white font-[600]">
                  <strong>In Sales</strong>
                </p>
              </div>
              <div>
                <div className=" flex">
                  <h3 className="text-[90px] font-[700] text-white ">23%</h3>
                  <span className="text-[90px] font-[700] mt-5 text-white pl-5 ">
                    <IoMdArrowRoundUp />
                  </span>
                </div>

                <h3 className="text-[35px] font-[700] text-white leading-10 -mt-6">
                  {" "}
                  INCREASE
                </h3>
                <p className="text-white font-[600]">
                  <strong>In Average Order Value</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[1050px] mx-auto pt-[50px]">
          <div>
            <div className=" grid grid-cols-4 gap-[30px] py-[51px]">
              <img
                src="https://safarimarketingpro.com/images/africanscenic1.jpg"
                alt=""
              />
              <img
                src="https://safarimarketingpro.com/images/africanscenic2.jpg"
                alt=""
              />

              <img
                src="https://safarimarketingpro.com/images/africanscenic3.jpg"
                alt=""
              />
              <img
                src="https://safarimarketingpro.com/images/africanscenic4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div> */}
      <CaseStudySection
        title={
          <>
            BRISTOL FARMS <br /> FACEBOOK ADS
          </>
        }
        image="https://safarimarketingpro.com/images/africanscenic-casestudy5.png"
        stats={[
          { value: "40%", label: "In New Sessions" },
          { value: "304%", label: "In Sales" },
          { value: "23%", label: "In Average Order Value" },
        ]}
        galleryImages={[
          "https://safarimarketingpro.com/images/africanscenic1.jpg",
          "https://safarimarketingpro.com/images/africanscenic2.jpg",
          "https://safarimarketingpro.com/images/africanscenic3.jpg",
          "https://safarimarketingpro.com/images/africanscenic4.jpg",
        ]}
      />
      <Common />
      <Content9 />
    </div>
  );
};

export default AfricanScenic;
