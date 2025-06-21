import React, { useEffect, useState } from "react";
import SectionLayout from "../../components/SectionLayout";
import TitleBlock from "../../components/TitleBlock";
import Button from "../../components/Button";
import ImageBlock from "../../components/ImageBlock";
import TextImageSection from "../../components/TextImageSection";
import Banner from "../../components/Banner";

import CardCarousel from "../taituTour/CardCarousel";
import Common from "../../components/Common";
import axios from "axios";
import { BASE_URL } from "../../api/config";
import Content9 from "../home/Content9";

const CapeArchiveTours = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/all-banners/capeachiveTour`
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
    <>
      <Banner
        title={bannerData.title}
        description={bannerData.description}
        imageUrl={`${BASE_URL}/${bannerData.imageUrl}`}
      />
      <SectionLayout>
        <div className="max-w-[60%] mx-auto text-center">
          <TitleBlock
            title="Elevating Travel Experiences"
            description="Cape Archives Tours, a prominent player in the realm of travel, sought the expertise of Safari Marketing Pro to redefine its online presence. The mission was crystal clear: to design a website that would not only mirror the lavishness of Cape Archives Tours' tailor-made Cape Town journeys but also significantly boost lead generation."
            center
          />
          <div className="mt-[50px] text-white">
            <Button
              link="https://capearchivestours.com"
              label="Launch Project"
            />
          </div>
        </div>

        <ImageBlock
          src="https://safarimarketingpro.com/images/capearchivestours-case-study1.png"
          alt="laptop"
        />

        <TextImageSection
          title="Challenges Faced"
          image={{
            src: "https://safarimarketingpro.com/images/capearchivestours-case-study2.png",
            alt: "challenge image",
          }}
          content={
            <>
              <p>
                <strong>Competitive Travel Market: </strong> The travel industry
                is fiercely competitive, with travelers seeking exceptional
                experiences. Cape Archives Tours needed to stand out in this
                crowded market.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>Global Audience:</strong>Serving an international,
                high-net-worth clientele added complexity. The website had to
                resonate with a diverse array of cultures and languages.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>Building Trust:</strong> Establishing trust was
                essential, as travelers often invest substantial sums in their
                experiences. Cape Archives Tours needed to showcase its
                expertise and build confidence.
              </p>
            </>
          }
        />

        <TextImageSection
          title="Solutions   Implemented"
          image={{
            src: "https://safarimarketingpro.com/images/capearchivestours-case-study3.png",
            alt: "solutions image",
          }}
          imageFirst
          content={
            <>
              <p>
                <strong>Unveiling Unprecedented Luxury:</strong>
              </p>
              <p>&nbsp;</p>
              <p>
                Immersive Visuals: The new website introduced visitors to the
                unparalleled luxury of Cape Archives Tours with full-screen,
                high-quality imagery and captivating videos, promising an
                unforgettable adventure.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>Personalized Itinerary Building:</strong>
              </p>
              <p>&nbsp;</p>
              <p>
                Itinerary Builder: A key feature, the "itinerary builder,"
                allowed visitors to customize their dream trips, fostering a
                sense of ownership and anticipation.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>Building Trust and Confidence:</strong>
              </p>
              <p>&nbsp;</p>
              <p>
                Trust Signals: Strategically placed client reviews,
                endorsements, and awards instilled trust in Cape Archives Tours’
                expertise."Travel with Confidence" Messaging: Throughout the
                user journey, the website reinforced the brand's commitment to
                excellence with messages like "travel with confidence."
              </p>
            </>
          }
        />

        <TextImageSection
          title="Results and Impact"
          image={{
            src: "https://safarimarketingpro.com/images/capearchivestours-case-study4.png",
            alt: "results image",
          }}
          content={
            <p>
              The final website isn't just a digital presence; it's a gateway to
              a once-in-a-lifetime experience for travelers. It significantly
              contributed to Cape Archives Tours' brand reinforcement, lead
              generation, and sales conversion. The website doesn't just
              showcase luxury; it embodies it, making it a game-changer in the
              industry.
            </p>
          }
        />

        <div className="max-w-[60%] mx-auto text-center text-white">
          <TitleBlock
            title="Conclusion"
            description="The collaboration between Cape Archives Tours and Safari Marketing Pro has elevated its digital presence and redefined luxury travel experiences. The website now not only reflects the essence of Cape Archives Tours but also resonates with and engages a global elite, establishing it as a true industry leader."
            center
          />
        </div>

        <div className="max-w-[75%] mx-auto">
          {[
            "cape1.png",
            "cape2.png",
            "cape3.png",
            "cape4.png",
            "cape5.png",
            "cape6.png",
            "cape7.png",
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
            Let Us <span className="text-[#ff5254]">PROVE</span> It To You
          </h1>
          <p className=" text-[18px] font-[400] py-[15px] px-[30px] text-[#787878]">
            Find our work what we have done, we are here to take yoir safari
            buisness to the next level!
          </p>
          <CardCarousel />
        </div>
      </div>
      <Common />
      <Content9 />
    </>
  );
};

export default CapeArchiveTours;
