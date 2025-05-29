import React from 'react'
// import { CheckCircle } from "lucide-react";
import { FaCheck } from "react-icons/fa";
const CaseStudyCard = ({title,items}) => {
  return (
    <div className=" max-w-[1050px] mx-auto px-[15px] mb-12">
      <h2 className="text-3xl font-bold text-[#3467d8] py-[18px] leading-[1.4]">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] pt-[30px]">
        {items.map((group, index) => (
          <div key={index} className="bg-[#F0F0F0]  py-[30px] px-[30px]  p-[12.5px] rounded-[20px] shadow-sm space-y-3">
            {group.map((point, idx) => (
              <div key={idx} className="flex items-start   ">
                {/* <CheckCircle size={18} className="text-blue-600 mt-1" /> */}
                {/* <FaCheck className='text-[#011833] font-[400] text-[50px] mr-[10px] mt-[-10px]'/> */}
                 <div className=' flex'>
                <span className=' mt-1 mr-[10px] text-[#011833] text-[18px] font-[600]'><FaCheck/></span>
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
