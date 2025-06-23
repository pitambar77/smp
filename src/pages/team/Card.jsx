import React from 'react'

import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../api/config'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Card = () => {


  const [teamMember, setTeamMember] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/team-card`)
      .then((res) => {
        setTeamMember(res.data);
      })
      .catch((err) => {
        console.error("Error fetching teamMember:", err);
      });
  }, []);


  if (!teamMember) return <div className="text-center mt-10">Loading...</div>;




  return (
    <div className=' w-full'>
      <div className=' max-w-[1140px] mx-auto md:pt-[90px] pt-[40px] text-center'>
        <h1 className=' capitalize  md:text-[50px] text-[24px] text-[#3467d8] font-[700] md:px-[12%] pb-[15px] leading-[1.4]'>Meet Your New & Improved Digital Team</h1>
        <p className=' text-[#787878] text-[22px] font-[400] leading-[1.4] '>Educate Customers More Than Others</p>
      </div>
      {/* <div className=' max-w-[1140px] mx-auto  '>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-[30px] px-[15px] mt-[30px]   font-semibold">
          {teamMember.map((member) => (
            <div
              key={member._id}
              className=" rounded-[10px] shadow-[0_3px_16px_rgb(0_0_0_/_10%)]"
            >
              {member.image && (
                <img
                  src={`${BASE_URL}/${member.image}`}
                  alt={member.name}
                  className=""
                />
              )}
              <div className=' items-start p-[15px]  '>
                <h1 className='  text-[22px] text-[#011833] pb-[5px] '>{member.name}</h1>
                <h2 className=' text-[15px] text-[#FF5254] pb-[10px]'>{member.role}</h2>
              </div>


            </div>
          ))}
        </div>
      </div> */}
      {/* 🔹 Mobile slider – visible px */}
<div className="sm:hidden px-[15px] mt-[30px]">
  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    speed={700}
    loop
    slidesPerView={1}
    spaceBetween={20}
  >
    {teamMember.map((member) => (
      <SwiperSlide key={member._id}>
        <div className="rounded-[10px] shadow-[0_3px_16px_rgb(0_0_0_/_10%)]">
          {member.image && (
            <img src={`${BASE_URL}/${member.image}`} alt={member.name} />
          )}
          <div className="p-[15px]">
            <h1 className="text-[22px] text-[#011833] pb-[5px]">{member.name}</h1>
            <h2 className="text-[15px] text-[#FF5254] pb-[10px]">{member.role}</h2>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

{/* 🔹 Original grid px (unchanged) */}
 <div className='  max-w-[1140px] mx-auto  '>

  <div className="hidden sm:grid md:grid-cols-3 gap-[30px] px-[15px] mt-[30px] font-semibold">
          {teamMember.map((member) => (
            <div
              key={member._id}
              className=" rounded-[10px] shadow-[0_3px_16px_rgb(0_0_0_/_10%)]"
            >
              {member.image && (
                <img
                  src={`${BASE_URL}/${member.image}`}
                  alt={member.name}
                  className=""
                />
              )}
              <div className=' items-start p-[15px]  '>
                <h1 className='  text-[22px] text-[#011833] pb-[5px] '>{member.name}</h1>
                <h2 className=' text-[15px] text-[#FF5254] pb-[10px]'>{member.role}</h2>
              </div>


            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Card
