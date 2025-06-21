import React, { useEffect } from "react";

import Banner from "../../components/Banner";
import caseStudies from "../../data/BannerData";
import Softbanner from "./Softbanner";
import WhyWorkinSmp from "./WhyWorkinSmp";

import Ourhistory from "./Ourhistory";
import Wonaward from "./Wonaward";
import PartnerSection from "./PartnerSection";
import CharitySection from "./CharitySection";
import Africancontinent from "./Africancontinent";
import Meeting from "./Meeting";
import AfricaHome from "./AfricaHome";
import Review from "../../components/Review";
import Content9 from "../home/Content9";

function Ourcompany() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = caseStudies.oueCompany;
  return (
    <>
      <div className="">
        <Banner {...data} />
        <Softbanner />
        <WhyWorkinSmp />

        <Ourhistory />
        <Wonaward />
        <PartnerSection />
        <CharitySection />
        <Africancontinent />
        <Meeting />
        <AfricaHome />
        <div className=" max-w-[1140px] mx-auto pt-[100px] pb-[80px]   ">
          <h1 className=" capitalize   md:text-[48px] text-2xl text-[#3467d8] text-center font-[700] md:px-20 px-4 leading-[1.3] ">
            See What Our Clients Are Saying About Our Services
          </h1>
          <Review />
        </div>
        
        <Content9 />
      </div>
    </>
  );
}

export default Ourcompany;
