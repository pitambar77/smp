import React from 'react'

import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../api/config'

const Card = () => {


     const [teamMember, setTeamMember] = useState(null);

  useEffect(() => {
    axios.get(`${ BASE_URL }/api/team-card`)
      .then((res) => {
        setTeamMember(res.data);
      })
      .catch((err) => {
        console.error("Error fetching teamMember:", err);
      });
  }, []);
  

  if (!teamMember) return <div className="text-center mt-10">Loading...</div>;




  return (
    <div  className=' w-full'>
      <div className=' max-w-[1140px] mx-auto py-20  items-center justify-center text-center'>
        <h1 className=' capitalize  text-5xl text-[#3467d8] font-[700] md:px-48 px-4 leading-snug'>Meet Your New & Improved Digital Team</h1>
        <p  className=' py-4 text-[#787878] text-[22px] font-[400]'>Educate Customers More Than Others</p>
      </div>
      <div className=' max-w-[1140px] mx-auto pb-5'>
            {/* <div className=' grid sm:grid-cols-1 md:grid-cols-3 gap-8  font-semibold '>
                <div className=' p-4 shadow-lg rounded-md'>
                    <img src={ouletm1} alt="" />
                    <div className=' items-start py-4 px-2 '>
                        <h1 className='  text-[22px] text-[#011833] '>Suvransu Shekhar Sahoo</h1>
                        <h2 className=' text-[15px] text-[#FF5254] font-semibold'>Chief Executive Officer</h2>
                    </div>
                </div>
                 <div className=' p-4 shadow-lg rounded-md'>
                    <img src={ouletm2} alt="" />
                    <div className=' items-start py-4 px-2'>
                        <h1 className=' text-[22px] text-[#011833] font-semibold'>Sasmita Mangaraj</h1>
                        <h2 className=' text-[15px] text-[#FF5254] font-semibold'>Research & Development Manager</h2>
                    </div>
                </div>
                 <div className=' p-4 shadow-lg rounded-md'>
                    <img src={ouletm3} alt="" />
                    <div className=' items-start py-4 px-2'>
                        <h1 className=' text-[22px] text-[#011833]'>Gayatri Palei</h1>
                        <h2 className=' text-[15px] text-[#FF5254]'>Business Development Manager</h2>
                    </div>
                </div>
                 <div className=' p-4 shadow-lg rounded-md'>
                    <img src={ouletm4} alt="" />
                    <div className=' items-start py-4 px-2'>
                        <h1 className=' text-[22px] text-[#011833]'>Rajesh Routary</h1>
                        <h2 className=' text-[15px] text-[#FF5254]'>Senior HR</h2>
                    </div>
                </div>
                 <div className=' p-4 shadow-lg rounded-md'>
                    <img src={ouletm5} alt="" />
                    <div className=' items-start  py-4 px-2'>
                        <h1 className=' text-[22px] text-[#011833]'>Payal Das</h1>
                        <h2 className=' text-[15px] text-[#FF5254]'>Designing TL</h2>
                    </div>
                </div>
                 <div className=' p-4 shadow-lg rounded-md'>
                    <img src={ouletm6} alt="" />
                    <div className=' items-start py-4 px-2'>
                        <h1 className=' text-[22px] text-[#011833]'>Manoj Kumar Das</h1>
                        <h2 className=' text-[15px] text-[#FF5254]'>SEO Analyst</h2>
                    </div>
                </div>
                 <div className=' p-4 shadow-lg rounded-md '>
                    <img src={ouletm7} alt="" />
                    <div className=' items-start py-4 px-2'>
                        <h1 className=' text-[22px] text-[#011833]'>Somesh Das</h1>
                        <h2 className=' text-[15px] text-[#FF5254]'>Content Writer</h2>
                    </div>
                </div>
                 <div className=' p-4 shadow-lg rounded-md'>
                    <img src={ouletm8} alt="" />
                    <div className=' items-start py-4 px-2'>
                        <h1 className=' text-[22px] text-[#011833]'>Chinmay Biswal</h1>
                        <h2 className=' text-[15px] text-[#FF5254]'>SMO Analyst</h2>
                    </div>
                </div>
            </div> */}
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8  font-semibold">
        {teamMember.map((member) => (
          <div
            key={member._id}
            className="p-4 shadow-lg rounded-md"
          >
            {member.image && (
              <img
                src={`${ BASE_URL }/${member.image}`}
                alt={member.name}
                className=""
              />
            )}
            <div className=' items-start py-4 px-2 '>
                <h1 className='  text-[22px] text-[#011833] '>{member.name}</h1>
                <h2 className=' text-[15px] text-[#FF5254]'>{member.role}</h2>
            </div>
           
           
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Card
