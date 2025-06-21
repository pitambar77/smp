import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../../api/config";

const Softbanner = () => {
  const [director, setdirector] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/about-director`)
      .then((res) => {
        if (res.data.length > 0) {
          setdirector(res.data[0]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (!director) return <div className="text-center">Loading...</div>;
  console.log(director);
  return (
    <div className="bg-[#f0f0f0]">
      <div className=" pt-[50px]  max-w-[1140px] mx-auto  ">
        <div className=" flex justify-between items-center">
          {/* Left - Image */}
          <div className=" w-1/2 px-[15px]">
            <img
              src={`${BASE_URL}/uploads/${director.image}`}
              alt="Director"
              className=" w-[100%] transform scale-x-[-1]"
            />
          </div>

          {/* Right - Content */}
          <div className=" w-1/2  mt-[50px] ">
            <h3 className=" px-[15px] text-[36px] font-[600] text-[#3467d8] capitalize leading-[1.3] ">{director.heading}</h3>

            <p className=" px-[15px] text-[20px] font-[500] text-[#787878]  leading-[32px] mt-[20px] pt-[15px] pb-[17px]">{director.content1}</p>

            <p className=" px-[15px] text-[18px] font-[400] text-[#787878]  leading-[1.5]  pt-[15px] pb-[17px]">{director.content2}</p>

            <div className=" py-[15px]">
              <img
                src="https://safarimarketingpro.com/images/md-sign.svg.png"
                alt="Signature"
                style={{
                  width: "180px",
                }}
              />
            </div>

            <h5 className=" px-[15px] text-[24px] font-[500] text-[#3467d8] capitalize leading-[inherit] ">
              Manorama Pallai - <span className=" italic "> Managing Director </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Softbanner;
