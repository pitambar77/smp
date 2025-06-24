import React from 'react'

import { PiCheckFatFill } from "react-icons/pi";

const CaseStudyCard = ({title,items}) => {
  return (
    <div className=" sm:max-w-[1050px] mx-auto  mb-12 px-4 ">
      <h2 className="sm:text-3xl text-[24px] font-bold text-[#3467d8] sm:py-[18px] py-2 leading-[1.4]">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] pt-[30px]">
        {items.map((group, index) => (
          <div key={index} className="bg-[#F0F0F0]  pt-[50px] pb-[30px]  px-[30px]  p-[12.5px] rounded-[20px] shadow-sm space-y-3">
            {group.map((point, idx) => (
              <div key={idx} className="flex items-start   ">
               
                 <div className=' flex'>
                <span className=' mt-1 mr-[10px] text-[#011833] sm:text-[18px] text-[16px] font-[600]'><PiCheckFatFill/></span>
                <p className="text-[#787878] sm:text-[17px] text-[14px] font-[400] pb-[10px] ">{point}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

  )
}

export default CaseStudyCard
