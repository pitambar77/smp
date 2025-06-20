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

// const reviews = [
//   {
//     id: 1,
//     name: "Founder, Samton Safaris",
//     rating: 4.0,
//     comment: "Fantastic experience! Highly recommend.",
//     description: '"Everyhings is perfects"',
//   },
//   {
//     id: 2,
//     name: "Managing Director, Bora Trekking Tours and Safari",
//     rating: 5.0,
//     comment: "Great service, will use again.",
//     description:
//       "“Their teamwork was amazing, and they listened to what their clients wished.”",
//   },
//   {
//     id: 3,
//     name: "CIO, White Plains Safaris",
//     rating: 5.0,
//     comment: "Good, but room for improvement.",
//     description:
//       "“The price was very good considering the amount of work done.”",
//   },
//   {
//     id: 4,
//     name: "Marketing Director, Dove Adventure Tanzania",
//     rating: 5.0,
//     comment: "Fantastic experience! Highly recommend.",
//     description: "“They truly stand out as a top-notch company.”",
//   },
//   {
//     id: 5,
//     name: "Owner, Safari World Tours",
//     rating: 4,
//     comment: "Great service, will use again.",
//     description:
//       "“They were swift in responding to questions and working on corrections.”",
//   },
//   {
//     id: 6,
//     name: "Carol Williams",
//     rating: 5.0,
//     comment: "Good, but room for improvement.",
//     description:
//       "“Their work ethic and dedication to satisfying our needs stood out.”",
//   },
// ];

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
      <div className=" w-full pt-[40px] pb-[100px]">
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
