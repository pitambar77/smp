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
      <div className="max-w-[1140px] mx-auto flex  ">
        {/* Left Text Section */}
        <div className="w-[60%] pr-[30px] pb-[80px]">
          <h1
            style={{
              fontSize: "38px",
              fontFamily: `'Montserrat', sans-serif`,
              textTransform: "capitalize",
              color: "#fff",
              fontWeight: 700,
              letterSpacing: "0.45px",
              lineHeight: "1.2",
            }}
            className="mb-4"
          >
            {data.heading}
          </h1>

          <p className=" text-[17px] font-[400] mb-[15px]">{data.para1}</p>

          <p className=" text-[17px] font-[400] ">{data.para2}</p>
          <div className=" pt-[40px]">
            <button
              onClick={() => {
                navigate("/lets-grow-business");
                window.scrollTo(0, 0);
              }}
              className="uppercase  text-white cursor-pointer font-semibold text-[15px] px-[30px] py-3 bg-[#ff5254] rounded-[4px] hover:bg-black hover:text-[#ff5254] transition-colors duration-300"
            >
              Request a Free Proposal
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className=" w-[40%] -mt-[70px]  ">
          <div className=" -mb-[100px]  ">
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
