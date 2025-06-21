import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import SectionLayout from "../../components/SectionLayout";
import TitleBlock from "../../components/TitleBlock";
import Button from "../../components/Button";
import ImageBlock from "../../components/ImageBlock";
import TextImageSection from "../../components/TextImageSection";
import CardCarousel from "../taituTour/CardCarousel";
import Common from "../../components/Common";

import wowTravel1 from "../../assets/images/wowtravel-case-study1.png";
import { BASE_URL } from "../../api/config";
import axios from "axios";
import Content9 from "../home/Content9";

const WowTravelCaseStudy = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/all-banners/wowTravelCaseStudy`
        );
        setBannerData(res.data);
      } catch (err) {
        console.error("Failed to fetch banner", err);
      }
    };
    fetchBanner();
  }, []);

  if (!bannerData) return <div></div>;

  return (
    <>
      <Banner
        title={bannerData.title}
        description={bannerData.description}
        imageUrl={`${BASE_URL}/${bannerData.imageUrl}`}
      />
      <SectionLayout>
        <div className="max-w-[60%] mx-auto text-center">
          <TitleBlock
            title="Enhancing Website Design"
            description="Wow Travel & Tours, previously known as Wow Cape Town Tours, is a family-owned Destination Management Company (DMC) tour operator founded in 2007. Led by Rushdi Harper, the company specializes in providing exceptional safari experiences in South Africa. In 2021, Wow Travel & Tours recognized the need to elevate their online presence and partnered with Safari Marketing Pro, a renowned digital marketing agency specializing in the travel and tourism industry, to redesign their website."
            center
          />
          <div className="mt-[50px] text-white">
            <Button link="https://wowtraveltours.com/" label="Launch Project" />
          </div>
        </div>

        <ImageBlock src={wowTravel1} alt="laptop" />

        <TextImageSection
          title="Objective"
          image={{
            src: "https://safarimarketingpro.com/images/wowtravel-case-study2.png",
            alt: "objective image",
          }}
          content={
            <>
              <p className=" tracking-wide text-[17px] font-[300] leading-[1.5]">
                The primary objective of the website redesign was to create a
                visually appealing and user-friendly platform that effectively
                showcased Wow Travel & Tours' unique safari experiences in South
                Africa. Additionally, the website needed to enhance user
                engagement, improve search engine visibility, and ultimately
                increase conversion rates.
              </p>
            </>
          }
        />

        <TextImageSection
          title="Challenges"
          image={{
            src: "https://safarimarketingpro.com/images/wowtravel-case-study3.png",
            alt: "solutions image",
          }}
          imageFirst
          content={
            <>
              <p>
                <strong>Outdated Design:</strong> The existing website had an
                outdated design that did not effectively convey the company's
                unique appeal and expertise in safari experiences.
              </p>

              <p>&nbsp;</p>
              <p>
                <strong>Limited User Engagement: </strong> The old website
                lacked interactive elements and engaging content, resulting in
                limited user interaction and reduced time spent on the site.
              </p>

              <p>&nbsp;</p>
              <p>
                <strong>SEO Optimization: </strong> The website's search engine
                optimization (SEO) was suboptimal, affecting its visibility in
                search engine results pages (SERPs).
              </p>
            </>
          }
        />

        <TextImageSection
          title="Strategy"
          image={{
            src: "https://safarimarketingpro.com/images/wowtravel-case-study4.png",
            alt: "results image",
          }}
          content={
            <>
              <p>
                <strong>Collaborative Ideation: </strong> Safari Marketing Pro
                collaborated closely with Wow Travel & Tours to understand their
                brand identity, target audience, and unique selling points. This
                collaborative ideation laid the foundation for the website's
                redesign.
              </p>

              <p>&nbsp;</p>
              <p>
                <strong>User-Centric Design: </strong> The new design focused on
                creating a seamless user experience. Intuitive navigation,
                high-quality visuals, and clear calls-to-action were
                incorporated to guide users through the site.
              </p>

              <p>&nbsp;</p>
              <p>
                <strong>Engaging Content: </strong> Compelling storytelling,
                vivid imagery, and immersive videos were integrated to captivate
                visitors and convey the excitement and beauty of Wow Travel &
                Tours' safari experiences.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>Mobile Optimization: </strong>The website was optimized
                for mobile devices to ensure a consistent and user-friendly
                experience across all platforms.
              </p>

              <p>&nbsp;</p>
              <p>
                <strong>SEO Integration: </strong> Safari Marketing Pro
                conducted extensive keyword research and implemented on-page SEO
                best practices to improve the website's visibility in search
                engine rankings.
              </p>
            </>
          }
        />
        <div className="max-w-[60%] mx-auto text-center text-white">
          <TitleBlock
            title="Implementation"
            description=""
            center
            content={
              <>
                <p>
                  {" "}
                  <strong>Redesigned Homepage: </strong> The homepage featured
                  stunning imagery of South Africa's wildlife and landscapes,
                  accompanied by concise, compelling copy that highlighted the
                  company's unique offerings.
                </p>
                <p>&nbsp;</p>
                <p>
                  <strong>Interactive Safari Selection Tool: </strong> A
                  user-friendly tool was developed to help visitors filter and
                  select safari experiences based on their preferences, such as
                  location, duration, and wildlife interests.
                </p>
                <p>&nbsp;</p>
                <p>
                  <strong>Inspiring Blog Section: </strong> A dedicated blog
                  section was added to share insightful articles, travel tips,
                  and captivating stories about South Africa's rich
                  biodiversity.
                </p>
                <p>&nbsp;</p>
                <p>
                  <strong>Customer Testimonials and Reviews:</strong> Authentic
                  testimonials from previous customers were prominently
                  displayed to build trust and credibility.
                </p>
              </>
            }
          />
        </div>
        <div className="max-w-[60%] mx-auto text-center text-white">
          <TitleBlock
            title="Results"
            description=""
            center
            content={
              <>
                <p>
                  {" "}
                  <strong>Increased User Engagement: </strong> The new website
                  saw a significant increase in user engagement, with visitors
                  spending more time exploring the various safari offerings.
                </p>
                <p>&nbsp;</p>
                <p>
                  <strong>Improved Conversion Rates: </strong> The user-centric
                  design and intuitive navigation led to a notable increase in
                  conversion rates, with more visitors inquiring about and
                  booking safari experiences.
                </p>
                <p>&nbsp;</p>
                <p>
                  <strong>Enhanced SEO Visibility: </strong> The website's
                  search engine rankings improved, resulting in higher organic
                  traffic and increased visibility in SERPs.
                </p>
              </>
            }
          />
        </div>

        <div className="max-w-[60%] mx-auto text-center text-white">
          <TitleBlock
            title="Conclusion"
            description="The collaboration between Wow Travel & Tours and Safari Marketing Pro resulted in a highly successful website redesign that effectively elevated the company's online presence. The visually appealing and user-friendly platform, coupled with engaging content and effective SEO strategies, led to improved user engagement, increased conversion rates, and enhanced search engine visibility. Wow Travel & Tours is now better positioned to showcase their exceptional safari experiences in South Africa to a global audience."
            center
          />
        </div>

        <div className="max-w-[75%] mx-auto">
          {[
            "wowtravel1.png",
            "wowtravel2.png",
            "wowtravel3.png",
            "wowtravel4.png",
            "wowtravel5.png",
            "wowtravel6.png",
            "wowtravel7.png",
          ].map((img, idx) => (
            <img
              key={idx}
              src={`https://safarimarketingpro.com/images/${img}`}
              alt={`taitutour${idx + 1}`}
              className="py-[40px]"
            />
          ))}
        </div>
      </SectionLayout>
      <div className=" w-full py-[100px]">
        <div className=" max-w-[1140px] mx-auto text-center">
          <h1 className="text-[#3467d8] text-[40px] font-[700] leading-[1.3] px-[15%]">
            Explore Success Stories
          </h1>
          <p className=" text-[18px] font-[400] py-[15px] px-[30px] text-[#787878]">
            Team Up With Safari Marketing Pro – The Next Amazing Case Study
            Could Be Yours!
          </p>
          <CardCarousel />
        </div>
      </div>
      <Common />
      <Content9/>
    </>
  );
};

export default WowTravelCaseStudy;
