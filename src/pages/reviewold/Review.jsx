import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";

import Testimonial from "./Testimonial";
import Work from "./Work";
import Common from "../../components/Common";

import axios from "axios";
import { BASE_URL } from "../../api/config";
import ClientReview from "./ClientReview";
import VideoAdd from "./VideoAdd";
import Content9 from "../home/Content9";

const Review = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/all-banners/review`);
        setBannerData(res.data);
      } catch (err) {
        console.error("Failed to fetch banner", err);
      }
    };
    fetchBanner();
  }, []);

  if (!bannerData) return <div></div>;

  return (
    <div>
      <Banner
        title={bannerData.title}
        description={bannerData.description}
        imageUrl={`${BASE_URL}/${bannerData.imageUrl}`}
      />

      <VideoAdd />

      <ClientReview />

      {/* Review  section */}
      <Testimonial />
      <Work />
      <div className=" mt-[20px]">
        <Common />
      </div>
      <div className=" mt-[20px]">
        <Content9 />
      </div>
    </div>
  );
};

export default Review;
