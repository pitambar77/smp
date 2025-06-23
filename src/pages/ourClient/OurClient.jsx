import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";

import Card from "../../components/Card";
import Common from "../../components/Common";
import cardData from "../../data/CardData";
import { BASE_URL } from "../../api/config";
import axios from "axios";
import Content9 from "../home/Content9";

const OurClient = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/all-banners/ourclient`);
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
      {/* <div className=" w-full bg-[#f9f9f9]">
        <div className=" max-w-[1050px] mx-auto py-[50px] mb-[10px]">
          <div className=" flex items-center">
            <div className=" text-center">
              <h1 className=" text-[#011833] uppercase text-[30px] font-[600] ">
                Featured in
              </h1>
            </div>
            <div className="max-w-[75%] mx-auto pl-[30px]">
              <img
                src="https://safarimarketingpro.com/images/featured-in-fig.png"
                alt=" featured image"
              />
            </div>
          </div>
        </div>
      </div> */}
<div className="w-full md:px-6 xl:px-0 px-0  bg-[#f9f9f9]">
  <div className="max-w-[1050px] mx-auto py-[50px]  md:mb-[10px]">
    {/* Mobile: stack items; Desktop: row layout stays the same */}
    <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
      
      <div className="mb-4 sm:mb-0">
        <h1 className="text-[#011833] uppercase md:text-[30px] text-[24px] font-[600]">
          Featured in
        </h1>
      </div>
      
      {/* <div className="max-w-[75%]  pl-[30px] ">
        <img
          src="https://safarimarketingpro.com/images/featured-in-fig.png"
          alt="featured image"
          className="mx-auto sm:mx-0"
        />
      </div> */}
       <div className="md:max-w-[75%] mx-auto md:pl-[30px] px-4 md:px-0">
              <img
                src="https://safarimarketingpro.com/images/featured-in-fig.png"
                alt=" featured image"
              />
            </div>
      
    </div>
  </div>
</div>

      
      <div>
        <div className=" w-full md:pt-[80px] pt-[50px] ">
          <div className=" max-w-[1140px] mx-auto mb-[15px]">
            <h1 className="text-[#3467d8] md:text-[40px] text-[24px] font-[700] leading-[1.3] md:px-[15%]  text-center">
              Let Us <span className=" text-[#ff5254]">PROVE</span> It To You
            </h1>
            <p className=" md:text-[18px] text-[15px] font-[400] py-[15px] px-4 md:px-[30px]  text-[#787878]  text-center">
              Find our work what we have done, we are here to take yoir safari
              buisness to the next level!
            </p>
          </div>
          <div className=" max-w-[1140px] mx-auto my-[30px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:px-8 xl:px-0 px-4   ">
              {cardData.map((data, index) => (
                <Card key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
        <div className=" py-[30px]">
          <Common />
        </div>
        <Content9 />
      </div>
    </div>
  );
};

export default OurClient;
