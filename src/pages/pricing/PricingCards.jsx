import React from 'react'
import { useNavigate } from 'react-router-dom';

const PricingCards = ({title, price, investment}) => {
  const navigate = useNavigate();
  return (
    <div className=' w-full'>
      <div className="bg-blue-50 border-b border-gray-300  p-6  text-center max-w-[1140px] mx-auto  ">
      <div className="flex justify-center mb-4">
        <div className="bg-white rounded-full p-3 mt-[-58px] shadow-lg">
          <svg className="h-[50px] w-[52px] p-[20%] text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 3h2v14H3V3zm6 4h2v10H9V7zm6-2h2v12h-2V5z" />
          </svg>
        </div>
      </div>
      <div className='  p-[80px 2% 50px 2%]'>
        <h3 className="text-[22px] font-[700] text-[#011833] p-[15px]">{title}</h3>
      <p className="text-[52px] font-[800] text-[#ff5254] p-[15px] ">${price}</p>
      </div>
      
     
    </div>
     <div className="  hover:shadow  text-center max-w-[1140px] mx-auto  pt-[20px] pb-[40px] duration-300 ">
         <p className="font-semibold text-[20px] text-[#011833] pt-[20px] pb-[40px]">${investment} INITIAL INVESTMENT</p>
      <button 
       onClick={() => {navigate('/lets-grow-business');window.scrollTo(0, 0); }}
      className="bg-[#ff4b4b] hover:bg-[#011833] hover:text-[#ff5254] text-white px-[30px] py-[12px] rounded font-semibold duration-500">
        Send Me A Proposal
      </button>
     </div>

    </div>
  )
}

export default PricingCards
