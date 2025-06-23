import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../api/config";

const API = `${BASE_URL}/api/googleCraft`;

const Craftgoogleads = () => {
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
    <section
      className=" w-full sm:py-[80px] py-[50px]  text-white overflow-hidden bg-cover bg-center"
      style={{
        background: `linear-gradient(rgba(52, 103, 216, 0.95), rgba(52, 103, 216, 0.95)), url('https://safarimarketingpro.com/images/wsmtdmyc-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" flex sm:flex-row flex-col sm:px-[5%] px-4 sm:items-start    ">
        {/* Content */}
        <div className="  sm:w-[60%]  sm:pl-[60px] flex flex-col lg:flex-row items-start lg:items-center justify-between ">
          <div className="w-full lg:w-[750px] text-left">
            <h2 className="font-bold sm:text-[40px] sm:text-start text-center text-[24px] leading-[1.3]  mb-5 capitalize">
              {data.heading}
            </h2>
            {data.paragraphs?.map((para, idx) => (
              <p
                key={idx}
                className="sm:text-[17px] text-[14px] sm:text-start text-justify font-medium leading-[1.6] mt-[15px]"
              >
                {para}
              </p>
            ))}

            <div className=" sm:pt-[40px] pt-8 sm:text-left text-center">
              <button
                onClick={() => {
                  navigate("/lets-grow-business");
                  window.scrollTo(0, 0);
                }}
                className="uppercase  text-white cursor-pointer font-semibold sm:text-[15px] text-[14px] sm:px-[30px] sm:py-3 px-[10px] py-[10px] bg-[#ff5254] rounded-[4px] hover:bg-black hover:text-[#ff5254] transition-colors duration-300"
              >
                GET INSTANT ROI NOW
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Image */}
        <div className=" sm:w-[40%] sm:-mt-[45px]">
          <div className=" sm:w-[85%] -mb-[100px] sm:ml-[20px]">
            <img
              src={`${BASE_URL}/${data.image}`}
              alt="Craft Section"
              className="  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftgoogleads;
