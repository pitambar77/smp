import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../api/config";

const API = `${BASE_URL}/api/craft`;

const Craft = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to fetch craft content", err));
  }, []);

  if (!data) return null;

  return (
    <div
      className="text-white pt-[80px] relative overflow-hidden"
      style={{
        background: "linear-gradient(0deg, #427fdf 0%, #396bb1 100%)",
      }}
    >
      <div className="max-w-[1140px] mx-auto flex sm:flex-row flex-col ">
        {/* Left Text Section */}
        <div className="sm:w-[60%] sm:pr-[30px] sm:pb-[80px] sm:px-0 px-4  ">
          <h1
          
            className="mb-4 sm:text-[38px] font-bold text-[24px] capitalize leading-[1.2] text-white sm:text-start text-center"
          >
            {data.heading}
          </h1>

          <p className=" sm:text-[17px] text-[14px] font-[400] sm:mb-[15px] mb-[10px] sm:text-start text-justify">{data.para1}</p>

          <p className=" sm:text-[17px] text-[14px] font-[400] sm:mb-[15px] mb-[10px] sm:text-start text-justify">{data.para2}</p>
          <div className=" pt-[10px]">
            <button
              onClick={() => {
                navigate("/lets-grow-business");
                window.scrollTo(0, 0);
              }}
              className="uppercase  text-white cursor-pointer font-semibold sm:text-[15px] text-[13px] sm:px-[30px] px-[15px] sm:py-3 py-[10px] bg-[#ff5254] rounded-[4px] hover:bg-black hover:text-[#ff5254] transition-colors duration-300"
            >
              Request a Free Proposal
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className=" sm:w-[40%] sm:-mt-[70px] ">
          <div className=" sm:-mb-[100px] -mb-5  ">
            <img
              src={`${BASE_URL}/${data.image}`}
              alt="Safari Marketing Pro Representative"
              className=" "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craft;
