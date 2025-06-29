import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";

import SectionLayout from "../../components/SectionLayout";
import TitleBlock from "../../components/TitleBlock";
import Button from "../../components/Button";
import ImageBlock from "../../components/ImageBlock";
import TextImageSection from "../../components/TextImageSection";
import CardCarousel from "../taituTour/CardCarousel";
import Common from "../../components/Common";

import outdooradventures1 from "../../assets/images/outdooradventures-case-study1.png";
import { BASE_URL } from "../../api/config";
import axios from "axios";
import Content9 from "../home/Content9";

const OutDoorAdventure = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/all-banners/outdoorAdventure`
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
        <div className="sm:max-w-[60%] mx-auto text-center sm:px-0 px-4">
          <TitleBlock
            title="Ahead of the game"
            description="Tanzania Outdoor Adventures is a team of safari travel experts specializing in providing exceptional safari experiences in Tanzania, Kenya, and Uganda. With extensive experience and knowledge in East Africa, they sought to redesign their website to better showcase their unique appeal and expertise. To achieve this, they partnered with Safari Marketing Pro, a digital marketing agency specializing in the travel and tourism industry, for website design services."
            center
          />
          <div className="mt-[50px] text-white">
            <Button
              link="https://tanzaniaoutdooradventures.com/"
              label="Launch Project"
            />
          </div>
        </div>

        <ImageBlock src={outdooradventures1} alt="laptop" />

        <TextImageSection
          title="Objective"
          image={{
            src: "https://safarimarketingpro.com/images/outdooradventures-case-study2.png",
            alt: "Objective image",
          }}
          content={
            <>
              <p className="  text-[17px] font-[300] leading-[1.5] sm:pb-0 pb-[30px]">
                The primary objective of the website redesign was to create an
                engaging and informative online platform that effectively
                conveyed Tanzania Outdoor Adventures' deep expertise in East
                African safaris. The website needed to provide valuable insights
                to potential customers, enhance user engagement, improve search
                engine visibility, and ultimately increase conversion rates.
              </p>
            </>
          }
        />

        <TextImageSection
          title="Challenges"
          image={{
            src: "https://safarimarketingpro.com/images/outdooradventures-case-study3.png",
            alt: "Challenges image",
          }}
          className="mx-auto"
          imageFirst
          content={
            <>
              <p>
                <strong>Outdated Design: </strong> The existing website had an
                outdated design that did not reflect the company's deep
                knowledge and passion for East African safaris.
              </p>

              <p>&nbsp;</p>
              <p>
                <strong>User Engagement: </strong> The old website lacked
                interactive features and engaging content, which led to limited
                user interaction and reduced time spent on the site.
              </p>

              <p>&nbsp;</p>
              <p>
                <strong>SEO Optimization: </strong> The website's search engine
                optimization (SEO) was suboptimal, impacting its visibility in
                search engine results.
              </p>
            </>
          }
        />

        <TextImageSection
          title="Strategy"
          image={{
            src: "https://safarimarketingpro.com/images/outdooradventures-case-study4.png",
            alt: "Solutions image",
          }}
          content={
            <>
              <p>
                <strong>In-Depth Consultation: </strong> Safari Marketing Pro
                conducted a comprehensive consultation with Tanzania Outdoor
                Adventures to understand their unique selling points, target
                audience, and brand identity.
              </p>

              <p>&nbsp;</p>
              <p>
                <strong>User-Centric Design: </strong> The new website design
                prioritized an engaging user experience, with an intuitive
                layout, high-quality visuals, and clear calls-to-action.
              </p>

              <p>&nbsp;</p>
              <p>
                <strong>Educational Content: </strong> The website was enriched
                with informative content, such as detailed safari itineraries,
                wildlife profiles, and travel tips, to provide valuable insights
                to visitors.
              </p>

              <p>&nbsp;</p>
              <p>
                <strong>Mobile Responsiveness: </strong> The website was
                optimized for mobile devices to ensure a seamless user
                experience across all platforms.
              </p>

              <p>&nbsp;</p>
              <p>
                <strong>SEO Enhancement:</strong> Safari Marketing Pro conducted
                thorough keyword research and implemented on-page SEO techniques
                to improve the website's search engine visibility.
              </p>
              <p>&nbsp;</p>
            </>
          }
        />
        <div className="sm:max-w-[60%] mx-auto text-center text-white sm:px-0 px-4">
          <TitleBlock
            title="Implementation"
            description=""
            center
            content={
              <>
                <p className=" sm:text-center text-left">
                  {" "}
                  <strong>Redesigned Homepage: </strong> The homepage featured
                  captivating images of East African landscapes and wildlife,
                  complemented by informative and enticing text that highlighted
                  the company's deep knowledge of the region.
                </p>
                <p>&nbsp;</p>
                <p className=" sm:text-center text-left">
                  <strong>Interactive Safari Planning Tool: </strong> A
                  user-friendly tool was developed to assist visitors in
                  planning their ideal safari experiences, allowing them to
                  choose destinations, wildlife interests, and trip duration.
                </p>
                <p>&nbsp;</p>
                <p className=" sm:text-center text-left">
                  <strong>Client Testimonials: </strong> Authentic client
                  testimonials and reviews were prominently displayed to
                  establish trust and credibility.
                </p>
              </>
            }
          />
        </div>

        <div className="sm:max-w-[60%] mx-auto text-center text-white sm:px-0 px-4 sm:pt-0 pt-[30px]">
          <TitleBlock
            title="Results"
            description=""
            center
            content={
              <>
                <p className=" sm:text-center text-left">
                  {" "}
                  <strong>Increased User Engagement: </strong> The new website
                  experienced a substantial boost in user engagement, with
                  visitors spending more time exploring the diverse safari
                  offerings and educational content.
                </p>
                <p>&nbsp;</p>
                <p className=" sm:text-center text-left">
                  <strong>Improved Conversion Rates: </strong>The user-friendly
                  design, informative content, and intuitive navigation
                  contributed to higher conversion rates, with more visitors
                  inquiring about and booking safari experiences.
                </p>
                <p>&nbsp;</p>
                <p className=" sm:text-center text-left">
                  <strong>Enhanced SEO Visibility: </strong> The website's
                  search engine rankings improved, leading to increased organic
                  traffic and greater visibility in search engine results.
                </p>
              </>
            }
          />
        </div>

        <div className="sm:max-w-[60%] mx-auto text-center text-white sm:px-0 px-4 sm:pt-0 pt-[30px]">
          <TitleBlock
            title="Conclusion"
            description="The collaboration between Tanzania Outdoor Adventures and Safari Marketing Pro resulted in a highly successful website redesign that effectively elevated the company's online presence. The visually engaging and informative platform, coupled with interactive features and robust SEO strategies, led to improved user engagement, increased conversion rates, and enhanced search engine visibility. Tanzania Outdoor Adventures is now better equipped to showcase their expertise and unique appeal in East African safaris to a global audience."
            center
          />
        </div>

        <div className="sm:max-w-[75%] mx-auto sm:px-0 px-4">
          {[
            "outdooradventures1.png",
            "outdooradventures2.jpg",
            "outdooradventures3.jpg",
            "outdooradventures4.jpg",
            "outdooradventures5.png",
          ].map((img, idx) => (
            <img
              key={idx}
              src={`https://safarimarketingpro.com/images/${img}`}
              alt={`taitutour${idx + 1}`}
              className="sm:py-[40px] py-5"
            />
          ))}
        </div>
      </SectionLayout>
      <div className=" w-full sm:py-[100px] py-[50px]">
        <div className=" max-w-[1140px] mx-auto text-center">
          <h1 className="text-[#3467d8] sm:text-[40px] text-[24px] font-[700] leading-[1.3] sm:px-[15%] px-4">
            Explore Success Stories
          </h1>
          <p className=" sm:text-[18px] text-[14px] font-[400] py-[15px] px-[30px] text-[#787878]">
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

export default OutDoorAdventure;
