import React from 'react'

import { PiCheckFatFill } from "react-icons/pi";

const CaseStudyCard = ({title,items}) => {
  return (
    <div className=" max-w-[1050px] mx-auto  mb-12">
      <h2 className="text-3xl font-bold text-[#3467d8] py-[18px] leading-[1.4]">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] pt-[30px]">
        {items.map((group, index) => (
          <div key={index} className="bg-[#F0F0F0]  pt-[50px] pb-[30px]  px-[30px]  p-[12.5px] rounded-[20px] shadow-sm space-y-3">
            {group.map((point, idx) => (
              <div key={idx} className="flex items-start   ">
               
                 <div className=' flex'>
                <span className=' mt-1 mr-[10px] text-[#011833] text-[18px] font-[600]'><PiCheckFatFill/></span>
                <p className="text-[#787878] text-[17px] font-[400] pb-[10px] ">{point}</p>
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
