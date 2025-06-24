import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";

import TaituTourContent from "./TaituTourContent";
import CardCarousel from "./CardCarousel";
import Common from "../../components/Common";
import axios from "axios";
import { BASE_URL } from "../../api/config";
import Content9 from "../home/Content9";

const TaituTourCaseStudy = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/all-banners/taituTour`);
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
      <TaituTourContent />
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
    </div>
  );
};

export default TaituTourCaseStudy;
