import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../api/config';
 
const API = `${ BASE_URL }/api/socialCraft`;
 
const Craftsocialmedia = () => {
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
          className="text-white "
          style={{
            background: 'linear-gradient(0deg, #427fdf 0%, #396bb1 100%)',
          }}
        >
          <div className=" max-w-[1140px]  mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-15">
 
            {/* Left Text Section */}
            <div  className=' w-[640px] ml-15 mr-70'>
             <h1
      style={{
        fontSize: '35px',
        fontFamily: `'Montserrat', sans-serif`,
        textTransform: 'capitalize',
        color: '#fff',
            fontWeight: 700,
 
 
        letterSpacing: '0.45px',
 
 
        lineHeight: '1.2',
      }}
      className="mb-4"
    >
 {data.heading}  </h1>
 
           {data.paragraphs?.map((para, idx) => (
 
              <p              
              key={idx}
 
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 400,
        fontSize: '15px',
        textAlign: 'left',
        color: '#fff',
        lineHeight: 'inherit',
 
 
      }}
   className='mb-4'
    >
 {para}
  </p>
    ))}
             
 
   
         <div className=" -mb-10 text-[16px] ">
             
                <button className="bg-[#FF5254] text-white text-[16px] hover:bg-black hover:text-red-500 transition-colors font-semibold duration-300 min-w-[148px] rounded-r-md p-3 ">
                  <strong>REQUEST A FREE STRATEGY SESSION</strong>
                </button>
       
            </div>
            </div>
 
            {/* Right Image */}
            <div className="flex justify-center ">
              <img
                src={`${ BASE_URL }/${data.image}`}
          alt="Craft Section"
                className="h-[620px] object-cover ml-30  mt-30 "
              />
            </div>
          </div>
       </div>
   
      );
};
 
      export default Craftsocialmedia;
 