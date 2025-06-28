import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../api/config";

const API = `${BASE_URL}/api/contentCraft`;

const Craftcontent = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to fetch craft content", err));
  }, []);

  if (!data) return null;
  console.log(data);

  return (
    <div
      className="text-white  "
      style={{
        background: "linear-gradient(0deg, #427fdf 0%, #396bb1 100%)",
      }}
    >
      <div className=" max-w-[1140px] mx-auto flex flex-col sm:flex-row  ">
        {/* Left Text Section */}
        <div className=" sm:w-[60%] sm:pr-[30px] sm:py-[80px] py-10">
          <h1 className="mb-4 sm:text-[37px] text-[24px] leading-[1.2] tracking-[0.45px] font-bold capitalize sm:text-start text-center">
            {data.heading}{" "}
          </h1>
          {data.paragraphs?.map((para, idx) => (
            <p
              key={idx}
              className="pb-[15px] sm:text-[17px] text-[14px] leading-[inherit] sm:text-left text-justify font-[400] sm:px-0 px-4  "
            >
              {para}
            </p>
          ))}
          <div className=" sm:text-start text-center">
            <button
              onClick={() => {
                navigate("/contact-us");
                window.scrollTo(0, 0);
              }}
              className="uppercase cursor-pointer mt-1 w-[280px] text-[14px] tracking-[1.5px] shadow-[0_12px_18px_0_rgba(0,0,0,0.15)] py-3 bg-[#ff5254] text-white border border-[#ff5254] font-[6s00] hover:bg-black hover:text-red-500 transition-colors duration-300 rounded"
            >
              REQUEST A FREE Proposal
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className=" sm:w-[40%] flex justify-center overflow-hidden">
          <img
            src={`${BASE_URL}/${data.image}`}
            alt="Craft Section"
            className=" object-cover sm:ml-20 -mb-6 "
          />
        </div>
      </div>
    </div>
  );
};

export default Craftcontent;
