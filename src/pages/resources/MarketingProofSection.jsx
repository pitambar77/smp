import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/config";
 
const API_URL = `${ BASE_URL }/api/marketing-proof`;
 
const MarketingProofSection = () => {
  const [data, setData] = useState({
    heading: "",
    subheading: "",
    images: [],
  });
  const [showForm, setShowForm] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URL);
        setData(res.data);
      } catch (error) {
        console.error("Failed to fetch marketing proof data:", error);
      }
    };
 
    fetchData();
  }, []);
 
  return (
    <div className="py-16 px-6 bg-white">
      {/* Header */}
      <div className="text-center mt-5 mb-12 max-w-[1140px] mx-auto">
        <h2 className="font-[Montserrat] font-bold text-[40px] text-center capitalize text-[#3467d8] leading-[1.3] m-0 px-[15%]">
          {data.heading}
        </h2>
        <p className="font-[Montserrat] font-normal text-[18px] text-center text-[#787878] leading-normal -mb-5 px-[30px] py-[15px]">
          {data.subheading}
        </p>
      </div>
 
      {/* Cards */}
      <div className="grid -mb-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 max-w-[1040px] mx-auto pr-8">
        {Array.isArray(data.images) &&
          data.images.map((image, index) => (
            <div
              key={index}
              onClick={() => setShowForm(true)}
              className="cursor-pointer transition transform hover:scale-105"
            >
              <img
                src={`${ BASE_URL }${image.url}`}
                alt={image.title || `Image ${index + 1}`}
                className="rounded w-full h-auto object-contain"
              />
            </div>
          ))}
      </div>
 
      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat]">
          <div className="relative w-[90%] max-w-xl bg-[linear-gradient(0deg,_#427fdf_0%,_#396bb1_100%)] rounded-lg shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold"
            >
              ✕
            </button>
 
            {/* Heading */}
            <div className="text-white text-center py-6 px-4 rounded-t-lg">
              <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                TARGETING SPECIFIC GEOGRAPHIC LOCATIONS <br />
                IN A PPC CAMPAIGN FOR YOUR AFRICAN SAFARI BUSINESS
              </h3>
            </div>
 
            {/* Form */}
            <form className="p-6 sm:p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="p-3 border rounded w-full text-black bg-white"
                />
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="p-3 border rounded w-full text-black bg-white"
                />
              </div>
 
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="p-3 border rounded w-full text-black bg-white">
                  <option>Country Code</option>
                  <option>+254</option>
                  <option>+255</option>
                  <option>+256</option>
                  <option>+27</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone*"
                  className="p-3 border rounded w-full text-black bg-white"
                />
              </div>
 
              <input
                type="text"
                placeholder="Website*"
                className="p-3 border rounded w-full text-black bg-white"
              />
 
              {/* CAPTCHA */}
              <div className="flex bg-white items-center gap-2 border rounded p-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-black text-sm">I'm not a robot</span>
                <img
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                  alt="reCAPTCHA"
                  className="ml-auto w-6 h-6"
                />
              </div>
 
              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded text-center"
              >
                GET MY FREE QUOTE
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default MarketingProofSection;
 
 