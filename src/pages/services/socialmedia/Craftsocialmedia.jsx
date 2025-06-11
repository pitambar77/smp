import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../api/config";
import RequestForm from "../../../components/RequestForm";

const API = `${BASE_URL}/api/socialCraft`;

const Craftsocialmedia = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to fetch craft content", err));
  }, []);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
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
      className=" "
      style={{
        background: "linear-gradient(0deg, #427fdf 0%, #396bb1 100%)",
      }}
    >
      <div className=" max-w-[1140px]  mx-auto flex justify-between  pt-[80px] pb-[60px] overflow-hidden">
        {/* Left Text Section */}
        <div className=" w-[60%] pr-[30px] ">
          <h1 className=" text-[38px] font-bold text-white leading-[1.2] tracking-[0.45px] pb-[15px]">
            {data.heading}{" "}
          </h1>

          {data.paragraphs?.map((para, idx) => (
            <p
              key={idx}
              className="mb-[15px] text-[17px] font-[400] text-white"
            >
              {para}
            </p>
          ))}

          <div className=" ">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#ff4d4d] text-white font-semibold px-[30px] py-3 rounded  cursor-pointer  hover:bg-[#011833] ease-in duration-500 hover:text-red-600 transition"
            >
              REQUEST A FREE STRATEGY SESSION
            </button>
          </div>

          {showForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat]">
              <div
                className="  relative w-[90%] max-w-[600px] bg-gradient-to-b from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg mt-[80px]
               animate-slide-down-fade"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute cursor-pointer -top-6 -right-5 bg-red-400 hover:bg-[#396bb1] text-white hover:text-red-400 font-bold text-[32px] w-10 h-10 flex items-center justify-center shadow-md"
                >
                  ×
                </button>
                <div className="text-white text-center py-8 -mt-5 rounded-t-lg">
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

        {/* Right Image */}
        <div className="  ">
          <img
            src={`${BASE_URL}/${data.image}`}
            alt="Craft Section"
            className="max-w-[340px] md:max-w-[440px]   w-full drop-shadow-xl mt-[180px] -mb-[180px]   "
          />
        </div>
      </div>
    </div>
  );
};

export default Craftsocialmedia;
