import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import TrainingPkg from "./TrainingPkg";
import SubGallery from "./SubGallery";
import Video from "./Video";
import BgSticky from "./BgSticky";
import Common from "../../components/Common";
import Banner from "../../components/Banner";
import caseStudies from "../../data/BannerData";
import teamChinpal from "../../assets/images/team-chinpal.png";
import Content9 from "../home/Content9";

const Training = () => {
  const data = caseStudies.training;
  return (
    <div className="">
      <Banner {...data} />
      <div className=" pt-23">
        <div className="max-w-[1140px]  mx-auto  ">
          <div className=" flex lg:flex-row flex-col   ">
            <div className=" basis-[40%] ">
              <img src={teamChinpal} alt="team" className=" " />
            </div>
            <div className=" basis-[60%] pl-[30px]">
              <div className=" ">
                <p className="pb-[15px] text-[#787878] font-[600] text-[17px]  ">
                  Why should you listen to Safari Marketing Pro when it comes to
                  growing a consulting your Safari Business or having trouble
                  converting leads into Bookings?
                </p>
                <p className="pb-[15px] text-[#787878] font-[500] text-[17px] ">
                  Safari Marketing Pro delivers daily new customers to your
                  safari business through automated marketing systems. Our
                  Growth Formula focuses on actionable steps and results. We
                  support you at every step, from destination ideas to itinerary
                  creation, email and phone handling, and comprehensive
                  follow-ups. Trust us for end-to-end solutions in growing your
                  safari business.
                </p>

                <p className="pb-[15px] text-[#787878] font-[500] text-[17px]  ">
                  Our focused session revolves around the 4 keys to a successful
                  marketing strategy:
                </p>

                <div className=" grid grid-cols-2 gap-[20px] pt-[30px] text-[#787878]  text-[17px] ">
                  <div className="  flex ">
                    <span className=" mt-1 mr-[10px] ">
                      <FaCheckCircle className=" text-[#25abea] text-[16px] font-[400]" />
                    </span>
                    <p className="text-[#787878]  text-[17px]">
                      <span className="text-[#787878] font-[600] text-[17px]">
                        Audience Building:
                      </span>
                      Establish authority through content marketing and email
                      outreach.
                    </p>
                  </div>

                  <div className="  flex ">
                    <span className=" mt-1 mr-[10px] ">
                      <FaCheckCircle className=" text-[#25abea] text-[16px] font-[400]" />
                    </span>
                    <p>
                      {" "}
                      <span className="font-[600] ">Audience Building:</span>
                      Establish authority through content marketing and email
                      outreach.
                    </p>
                  </div>

                  <div className="  flex ">
                    <span className=" mt-1 mr-[10px] ">
                      <FaCheckCircle className=" text-[#25abea] text-[16px] font-[400]" />
                    </span>
                    <p>
                      <span className="font-[600] ">Audience Building:</span>
                      Establish authority through content marketing and email
                      outreach.
                    </p>
                  </div>

                  <div className="  flex ">
                    <span className=" mt-1 mr-[10px] ">
                      <FaCheckCircle className=" text-[#25abea] text-[16px] font-[400]" />
                    </span>
                    <p>
                      <span className="font-[600] ">Audience Building:</span>
                      Establish authority through content marketing and email
                      outreach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrainingPkg />
      <SubGallery />
      <Video />
      <BgSticky />
      <Common />
      <Content9/>
    </div>
  );
};

export default Training;
