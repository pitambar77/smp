import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../api/config";

const API = `${BASE_URL} /api/contentCraft`;

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
  console.log(data)

  return (
    <div
      className="text-white mt-5 "
      style={{
        background: "linear-gradient(0deg, #427fdf 0%, #396bb1 100%)",
      }}
    >
      <div className=" max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-15">
        {/* Left Text Section */}
        <div className=" w-[700px] ml-15 mr-20">
          <h1
            style={{
              fontSize: "37px",
              fontFamily: `'Montserrat', sans-serif`,
              textTransform: "capitalize",
              color: "#fff",
              fontWeight: 700,

              letterSpacing: "0.45px",

              lineHeight: "1.2",
            }}
            className="mb-4"
          >
            {data.heading}{" "}
          </h1>
          {data.paragraphs?.map((para, idx) => (
            <p
              key={idx}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                textAlign: "left",
                color: "#fff",
                lineHeight: "inherit",
              }}
              className="mb-3 mr-30"
            >
              {para}
            </p>
          ))}

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

        {/* Right Image */}
        <div className="flex justify-center ">
          <img
            src={`${BASE_URL}/${data.image}`}
            alt="Craft Section"
            className="h-[620px] object-cover ml-30 -mb-1   "
          />
        </div>
      </div>
    </div>
  );
};

export default Craftcontent;
