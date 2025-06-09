import React from 'react'

import chinSign from '../../assets/images/chin-sign.png'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { BASE_URL } from '../../api/config';

const SubBanner = () => {
    const [softbanner, setSoftbanner] = useState(null);

  useEffect(() => {
    axios.get(`${ BASE_URL }/api/team-soft-banner`)
      .then((res) => {
        setSoftbanner(res.data);
      })
      .catch((err) => {
        console.error("Error fetching overview:", err);
      });
  }, []);
  

  if (!softbanner) return <div className="text-center mt-10">Loading...</div>;



  return (
    
      <div className='  bg-[#F0F0F0] pt-24'>
            <div className='max-w-[1140px]  mx-auto  '>
            <div className=' flex lg:flex-row flex-col   '>
                <div className=' basis-[40%]'>
                    <img src={`${ BASE_URL }/uploads/${softbanner.image}`} alt="team" className=' ' />
                </div>
                <div className=' basis-[60%]'>
                    <div className='px-6 '>
                        <h1 className=' font-[600] text-4xl  text-[#3467d8] leading-snug  '>{softbanner.heading}</h1>
                        <p className='py-4 text-[#787878] font-[400] text-[18px] leading-snug '>{softbanner.content}</p>
                        <button className='bg-[#FF5254] text-white py-[10px] px-5 rounded-md '>READ MORE</button>
                        <img src={chinSign} alt="sign" className=' py-5 ml-[-22px] ' />
                        <h2 className='text-[#3467d8] font-[600] text-2xl leading-snug  ' >Mr Chinu Pal | <span className=' italic'>Founder of the Safari Marketing Pro</span> </h2>
                    </div>
                </div>
            </div>
           
           

        </div>


       
    </div>
  )
}

export default SubBanner
