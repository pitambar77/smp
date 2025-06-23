import React, { useEffect, useState } from "react";
import GoogleHome from "./GoogleHome";
import WebsitesGoogleads from "./WebsitesGoogleads";
import Displayads from "./Displayads";
import Highlytailored from "./Highlytailored";
import Adstrategies from "./Adstrategies";
import ComplimentaryAnalysis from "./ComplimentaryAnalysis";
import Fundamentalgoogleads from "./Fundamentalgoogleads";
import Craftgoogleads from "./Craftgoogleads";
import Workgoogleads from "./Workgoogleads";
import Strategiesgoogleads from "./Strategiesgoogleads";
import Demoaccount from "./Demoaccount";
import Faqgoogleads from "./Faqgoogleads";
import SuccessStories from "./Successstorigoogleads";
import Faqbtn from "./Faqbtn";
import Common from "../../../components/Common";
import CaroselSection from "../../pricing/CaroselSection";
import Content9 from "../../home/Content9";
import Banner from "../../../components/Banner";
import axios from "axios";
import { BASE_URL } from "../../../api/config";

function Googleads() {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/all-banners/googleads`);
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
      <>
        <div className="relative">
          <Banner
            title={bannerData.title}
            description={bannerData.description}
            imageUrl={`${BASE_URL}/${bannerData.imageUrl}`}
          />
          <GoogleHome />
        </div>

        
        <WebsitesGoogleads />
        <Displayads />
        <Highlytailored />
        <Adstrategies />
        <ComplimentaryAnalysis />
        <Fundamentalgoogleads />
        <Craftgoogleads />
        <Workgoogleads />
        <Strategiesgoogleads />
        <Demoaccount />
        <Faqgoogleads />
        <CaroselSection />
        <Common />
        <Content9 />
      </>
    </div>
  );
}

export default Googleads;
