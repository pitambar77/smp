import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../api/config";
import RequestForm from "../../../components/RequestForm";

const API = `${BASE_URL}/api/organicCraft`;

const Craftorganic = () => {
  const [data, setData] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to fetch craft content", err));

    if (showForm) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [showForm]);

  if (!data) return null;

  return (
    <div
      className="relative  bg-[#396bb1] font-[Montserrat]  overflow-hidden"
      style={{
        background: "linear-gradient(0deg, #427fdf 0%, #396bb1 100%)",
      }}
    >
      <div className="max-w-[1140px] mx-auto flex flex-col sm:flex-row items-start sm:items-center sm:justify-between relative z-10 sm:px-0 px-4">
        {/* Left Content */}
        <div className="sm:w-[655px] text-left sm:py-[40px] py-[10px] z-10">
          <h2 className="font-bold sm:text-[36px] sm:text-start text-center text-[24px] leading-[1.2] mt-10 mb-5 capitalize text-white">
            {data.heading}
          </h2>

          {/* {data.paragraphs?.map((para, idx) => ( */}
          <p
            // key={idx}
            className="sm:text-[17px] text-[14px] text-justify sm:text-start font-[400] leading-[1.5]  sm:pb-[13px] pb-[10px] text-white"
          >
            As African safari Operators’ only choice for marketing their
            company, <strong> SAFARI MARKETING PRO </strong> has a proven track
            record. For more than 12 years, SMP has been helping African Safari
            Businesses to grow their online presence to drive more revenue.
          </p>
          <p
            // key={idx}
            className="sm:text-[17px] text-[14px] text-justify sm:text-start font-[400] leading-[1.5]  sm:pb-[13px] pb-[10px] text-white"
          >
            To provide our clients with a clear path to success,{" "}
            <strong>
              {" "}
              we stay up to date with the latest trends and innovations, explore
              various marketing tactics{" "}
            </strong>{" "}
            , and test them through our internal campaigns to determine which
            strategies would generate the best results.
          </p>
          <p
            // key={idx}
            className="sm:text-[17px] text-[14px] text-justify sm:text-start font-[400] leading-[1.5]  sm:pb-[13px] pb-[10px] text-white"
          >
            At Safari Marketing Pro,{" "}
            <strong>
              {" "}
              we view obstacles as opportunities for Safari Business growth{" "}
            </strong>
            . We learn from our mistakes and continuously improve our knowledge
            and skills to provide solutions that scale up the safari business.
          </p>
          <p
            // key={idx}
            className="sm:text-[17px] text-[14px] text-justify sm:text-start font-[400] leading-[1.5]  sm:pb-[13px] pb-[10px] text-white"
          >
            We live by our two primary core values:{" "}
            <strong> Relationships and Results </strong>. We’re here for every{" "}
            <strong> African Safari Tour Operator </strong>, that’s our pillar.
            We have experts who specialize in helping safari businesses of all
            sizes -- from small businesses to large achieve exponential growth.
            We believe in owning the voice of our clients and we work hard every
            day to prove it.
          </p>
          {/* ))} */}

          <div className=" sm:mb-15 sm:mt-0 mt-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#FF5254] text-white sm:text-[16px] text-[13px] font-semibold hover:bg-[#011833] ease-in duration-500 cursor-pointer hover:text-red-500 transition-colors  rounded sm:px-6 px-[10px]  sm:py-3 py-[10px]"
            >
              REQUEST A FREE STRATEGY SESSION
            </button>
          </div>
          {showForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat]">
              <div
                className="  relative w-[95%] sm:px-0 px-4 max-w-[600px] bg-[#3467d8] bg-gradient-to-t from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg mt-[80px]
                                       animate-slide-down-fade"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute cursor-pointer -top-6 -right-5 bg-red-400 hover:bg-[#396bb1] text-white hover:text-red-400 font-bold text-[32px] w-10 h-10 flex items-center justify-center shadow-md"
                >
                  ×
                </button>
                <div className="text-white text-center py-8 md:-mt-5 rounded-t-lg">
                  <h3 className="text-[24px] font-medium leading-snug">
                    REQUEST A FREE STRATEGY SESSION
                  </h3>
                  <div className="border-t border-white w-full mx-auto mt-4 -mb-4" />
                </div>
                <RequestForm />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Absolute Image at Bottom Right */}
      <div className="sm:absolute sm:bottom-0 sm:right-0 sm:z-0">
        <img
          src={`${BASE_URL}/${data.image}`}
          alt="Craft Section"
          className="sm:w-[445px] sm:h-auto object-contain mr-40"
        />
      </div>
    </div>
  );
};

export default Craftorganic;
