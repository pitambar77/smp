import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";

import SectionLayout from "../../components/SectionLayout";
import TitleBlock from "../../components/TitleBlock";
import Button from "../../components/Button";
import ImageBlock from "../../components/ImageBlock";
import TextImageSection from "../../components/TextImageSection";
import CardCarousel from "../taituTour/CardCarousel";
import Common from "../../components/Common";

import wildernessfirsttravel1 from "../../assets/images/wildernessfirsttravel-case-study1.png";
import { BASE_URL } from "../../api/config";
import axios from "axios";
import Content9 from "../home/Content9";

const WildernessFirstTravel = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/all-banners/wildernessFirtTravel`
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
            title="Enhancing Website Design"
            description="Immerse yourself in the heart-pounding energy of the arena! Our design is a thrilling journey into the world of the 'Tanzania Safari Experience,' capturing the raw adrenaline and excitement that awaits. Elevating the game and season ticket booking experience, we've seamlessly transformed curious visitors into avid customers. Your adventure begins now – where every moment is a ticket to unforgettable memories!"
            center
          />
          <div className="mt-[50px] text-white">
            <Button
              link="https://wildernessfirsttravel.com/"
              label="Launch Project"
            />
          </div>
        </div>

        <ImageBlock src={wildernessfirsttravel1} alt="laptop" />

        <TextImageSection
          title="Transforming Digital Presence"
          image={{
            src: "https://safarimarketingpro.com/images/wildernessfirsttravel-case-study2.png",
            alt: "Transforming image",
          }}
          content={
            <>
              <p className="  text-[17px] font-[300] leading-[1.5] sm:pb-0 pb-[30px]">
                Wilderness First Travel, a specialized Tanzanian tour operator,
                enlisted the expertise of Safari Marketing Pro to revamp its
                online presence. Dedicated to crafting tailor-made experiences,
                Wilderness First Travel aimed to convey the allure of their
                offerings, ranging from conquering Kilimanjaro to witnessing the
                Great Migration in the Serengeti and indulging in the exotic
                beaches of Zanzibar.
              </p>
            </>
          }
        />

        <TextImageSection
          title="Challenges"
          image={{
            src: "https://safarimarketingpro.com/images/wildernessfirsttravel-case-study3.png",
            alt: "Challenges image",
          }}
          className="mx-auto"
          imageFirst
          content={
            <>
              <p>
                <strong>Showcasing Diversity: </strong> Wilderness First
                Travel's unique selling point lay in the diversity of
                experiences it offered, from mountain adventures to beach
                getaways. The challenge was to capture this range effectively on
                the website.
              </p>

              <p>&nbsp;</p>
              <p>
                <strong>User Engagement: </strong> Creating an immersive online
                experience was crucial to engage users and evoke the essence of
                Tanzania's landscapes and adventures.
              </p>

              <p>&nbsp;</p>
              <p>
                <strong>Mobile Responsiveness:</strong> Ensuring that the
                website was optimized for mobile devices was paramount,
                considering the increasing trend of users accessing travel
                information on smartphones.
              </p>

              <p>&nbsp;</p>
              <p>
                <strong>Conversion Optimization: </strong> The website needed to
                not only inform visitors but also convert them into potential
                customers by encouraging inquiries and bookings.
              </p>
            </>
          }
        />

        <TextImageSection
          title="Solutions"
          image={{
            src: "https://safarimarketingpro.com/images/wildernessfirsttravel-case-study4.png",
            alt: "Solutions image",
          }}
          content={
            <>
              <p>
                <strong>Strategic Storytelling</strong>{" "}
              </p>

             
              <p>
                Safari Marketing Pro employed strategic storytelling techniques
                to highlight Wilderness First Travel's offerings. This involved
                creating compelling narratives for each adventure, from climbing
                Kilimanjaro to experiencing the vibrant culture of Zanzibar.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>Visual Immersion</strong>{" "}
              </p>

              
              <p>
                The website was designed with a focus on visual immersion.
                High-quality images and videos showcased the breathtaking
                landscapes and activities offered by Wilderness First Travel,
                providing visitors with a virtual tour of their potential
                experiences.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>Mobile Optimization</strong>{" "}
              </p>

              
              <p>
                Recognizing the importance of mobile accessibility, Safari
                Marketing Pro ensured that the website was fully optimized for
                various devices, offering a seamless and visually pleasing
                experience on both desktop and mobile platforms.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>User-Friendly Interface</strong>{" "}
              </p>

              
              <p>
                A user-friendly interface was implemented, allowing visitors to
                easily navigate through the different offerings, understand the
                unique selling points, and initiate inquiries or bookings
                effortlessly.
              </p>
              <p>&nbsp;</p>
            </>
          }
        />
        <div className="sm:max-w-[60%] mx-auto text-center text-white sm:px-0 px-4">
          <TitleBlock
            title="Results and Impact"
            description="The redesigned website became a dynamic portal, effectively communicating the diverse offerings of Wilderness First Travel. Engaging content and visually appealing elements enhanced user experience, capturing the essence of Tanzanian adventures."
            center
            content={
              <>
                <p>&nbsp;</p>
                <p className=" sm:pb-0 pb-10">
                  {" "}
                  With increased mobile optimization, the website saw a notable
                  rise in mobile users, tapping into a broader audience. The
                  user-friendly interface and strategically placed
                  calls-to-action contributed to a significant boost in
                  inquiries and bookings.
                </p>
              </>
            }
          />
        </div>

        <div className="sm:max-w-[60%] mx-auto text-center text-white sm:px-0 px-4">
          <TitleBlock
            title="Conclusion"
            description="Safari Marketing Pro's collaboration with Wilderness First Travel led to the successful transformation of their digital presence. The website not only showcased the beauty and adventure of Tanzanian landscapes but also served as a powerful tool for customer engagement and conversion. By blending storytelling with visual appeal and user-centric design, Safari Marketing Pro delivered a website that not only met but exceeded the expectations of a specialized tour operator in the competitive travel industry."
            center
          />
        </div>

        <div className="sm:max-w-[75%] mx-auto sm:px-0 px-4">
          {[
            "wildernessfirsttravel1.png",
            "wildernessfirsttravel2.png",
            "wildernessfirsttravel3.png",
            "wildernessfirsttravel4.png",
          ].map((img, idx) => (
            <img
              key={idx}
              src={`https://safarimarketingpro.com/images/${img}`}
              alt={`taitutour${idx + 1}`}
              className="sm:py-[40px] py-[20px]"
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

export default WildernessFirstTravel;
