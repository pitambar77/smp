import React from "react";
import BodySection from "./BodySection";
import CardSection from "./CardSection";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";

import BgSticky from "../training/BgSticky";
import Content6 from "./Content6";
import Review from "../../components/Review";
import { FaRegStar, FaStar } from "react-icons/fa";
import { LuCircleCheckBig } from "react-icons/lu";
import VideoAdd from "../review/VideoAdd";
import Content9 from "./Content9";
import Common from "../../components/Common";
import FAQ from "./FAQ";



const Home = () => {
  return (
    <div className=" ">
      <BodySection />
      <CardSection />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <BgSticky />
      <Content6 />
      <VideoAdd />
      <div className=" w-full pt-[100px] pb-[100px] hidden md:block ">
        <div className=" max-w-[1172px] mx-auto  items-center justify-center text-center pb-[15px]">
          <h1 className=" capitalize   md:text-[48px] text-2xl text-[#3467d8] font-[700] px-[10%] pb-[10px]  leading-[1.3] ">
            See What Our Clients Are Saying About Our Services
          </h1>
        </div>
       <Review/>
      </div>
      <Content9 />
      <FAQ />
      <Common />
    </div>
  );
};

export default Home;
