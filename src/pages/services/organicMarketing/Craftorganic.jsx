import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../api/config';
import RequestForm from '../../../components/RequestForm';

 
const API = `${ BASE_URL }/api/organicCraft`;
 
const Craftorganic = () => {
  const [data, setData] = useState(null);
   const [showForm, setShowForm] = useState(false);
 
  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.error('Failed to fetch craft content', err));

      if (showForm) {
                document.body.classList.add('overflow-hidden');
              } else {
                document.body.classList.remove('overflow-hidden');
              }
          
              return () => document.body.classList.remove('overflow-hidden');

  }, [showForm]);
 
  if (!data) return null;
          
  
 
  return (
    <div
      className="relative  bg-[#396bb1] font-[Montserrat]  overflow-hidden"
      style={{
        background: 'linear-gradient(0deg, #427fdf 0%, #396bb1 100%)',
      }}
    >
      <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="w-[655px] text-left py-[40px] z-10">
          <h2 className="font-bold text-[36px] leading-[1.2] mt-10 mb-5 capitalize text-white">
            {data.heading}
          </h2>
 
          {data.paragraphs?.map((para, idx) => (
            <p
              key={idx}
              className="text-[17px] font-[400] leading-[1.5]  pb-[13px] text-white"
            >
              {para}
            </p>
          ))}
 
          <div className="text-[16px] mb-15">
            <button 
             onClick={() => setShowForm(true)}
            className="bg-[#FF5254] text-white text-[16px] font-semibold hover:bg-[#011833] ease-in duration-500 cursor-pointer hover:text-red-500 transition-colors  rounded px-6 py-3">
              REQUEST A FREE STRATEGY SESSION
            </button>
          </div>
           {showForm && (
                          
                           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat]">
                             <div className="  relative w-[90%] max-w-[600px] bg-[#3467d8] bg-gradient-to-t from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg mt-[80px]
                                       animate-slide-down-fade">
                              
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
                              <RequestForm/>
                        
                            </div>
                           </div>
                        )}
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