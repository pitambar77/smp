import React from "react";

import chinSign from "../../assets/images/chin-sign.png";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../../api/config";
import ReadMore from "../../components/ReadMore";



const API = `${ BASE_URL }/api/soft-team-banner`;


const SubBanner = () => {

const [data, setData] = useState(null);
  
 
  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.error('Failed to fetch craft content', err));

     

  }, []);
 
  if (!data) return null;


  // const [softbanner, setSoftbanner] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}/api/team-soft-banner`)
  //     .then((res) => {
  //       setSoftbanner(res.data);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching overview:", err);
  //     });
  // }, []);

  // if (!softbanner) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="  bg-[#F0F0F0] pt-[50px]">
      <div className="max-w-[1140px]  mx-auto  ">
        <div className=" flex lg:flex-row flex-col items-center   ">
          <div className=" basis-[41.667%] px-[15px] mt-[30px] ">
            <img
               src={`${ BASE_URL }/${data.image}`}
              alt="team"
              className="sticky "
            />
          </div>
          <div className=" basis-[58.333%]">
            <div className="px-[15px] mt-[40px] ">
              <h1 className=" font-[600] text-4xl  text-[#3467d8] leading-[1.3] capitalize ">
                 {data.heading}
              </h1>
              {/* <p className='py-4 text-[#787878] font-[400] text-[18px] leading-snug '>{softbanner.content}</p> */}
             
              <ReadMore paragraphs={data.paragraphs} />
 
              {/* <button className='bg-[#FF5254] text-white py-[10px] px-5 rounded-md '>READ MORE</button> */}
              <img src={chinSign} alt="sign" className=" py-[15px] ml-[-22px] w-[180px] " />
              <h2 className="text-[#3467d8] font-[600] text-2xl leading-[1.3]  ">
                Mr Chinu Pal |{" "}
                <span className=" italic font-[500]">
                  Founder of the Safari Marketing Pro
                </span>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
