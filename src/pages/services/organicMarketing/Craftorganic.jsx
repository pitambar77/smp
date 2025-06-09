import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../api/config';

 
const API = `${ BASE_URL }/api/organicCraft`;
 
const Craftorganic = () => {
  const [data, setData] = useState(null);
 
  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.error('Failed to fetch craft content', err));
  }, []);
 
  if (!data) return null;
 
  return (
    <div
      className="relative  bg-[#396bb1] font-[Montserrat] text-white overflow-hidden"
      style={{
        background: 'linear-gradient(0deg, #427fdf 0%, #396bb1 100%)',
      }}
    >
      <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="w-[655px] text-left py-[40px] z-10">
          <h2 className="font-bold text-[36px] leading-[1.2] mt-10 mb-5 capitalize">
            {data.heading}
          </h2>
 
          {data.paragraphs?.map((para, idx) => (
            <p
              key={idx}
              className="text-[17px] font-[400] leading-[1.5]  pb-[13px]"
            >
              {para}
            </p>
          ))}
 
          <div className="text-[16px] mb-15">
            <button className="bg-[#FF5254] text-white text-[16px] hover:bg-black hover:text-red-500 transition-colors duration-300 rounded px-6 py-3">
              <strong>REQUEST A FREE STRATEGY SESSION</strong>
            </button>
          </div>
        </div>
      </div>
 
      {/* Absolute Image at Bottom Right */}
      <div className="absolute bottom-0 right-0 z-0">
        <img
          src={`${ BASE_URL }/${data.image}`}
          alt="Craft Section"
          className="w-[445px] h-auto object-contain mr-40"
        />
      </div>
    </div>
  );
};
 
export default Craftorganic;