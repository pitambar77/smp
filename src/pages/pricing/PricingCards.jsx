import React from 'react'
import { useNavigate } from 'react-router-dom';

const PricingCards = ({title, price, investment}) => {
  const navigate = useNavigate();
  return (
    <div className=' w-full hover:shadow-[0_3px_15px_rgb(204,228,255,0.51)]'>
      <div className="bg-blue-50 border-b border-gray-300  p-6  text-center max-w-[1140px] mx-auto  ">
      <div className="flex justify-center mb-4">
        <div className="bg-[#f0f6fe] rounded-full bg-white p-3 mt-[-70px] shadow-[0_3px_15px_rgb(204,228,255,0.51)]">
          {/* <svg className="h-[50px] w-[52px] p-[20%] text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 3h2v14H3V3zm6 4h2v10H9V7zm6-2h2v12h-2V5z" />
          </svg> */}
          <img src="https://safarimarketingpro.com/images/exssepln-plan-icon-1.png" alt="" className='md:p-[20%] md:w-[64px] md:h-[64px] '  />
        </div>
      </div>
      <div className='  p-[80px 2% 50px 2%]'>
        <h3 className="md:text-[22px] font-[700] text-[#011833] py-[15px]">{title}</h3>
      <p className="md:text-[52px] text-[32px] font-[800] text-[#ff5254] pb-[15px] ">${price}</p>
      </div>
      
     
    </div>
     <div className="   text-center max-w-[1140px] mx-auto  pt-[20px] md:pb-[26px] pb-[90px] pb-[30px] duration-300 ">
         <p className="font-bold md:text-[20px] text-[16px] text-[#011833] md:pt-[20px] md:pb-[40px] pb-5">${investment} INITIAL INVESTMENT</p>
      <button 
       onClick={() => {navigate('/lets-grow-business');window.scrollTo(0, 0); }}
      className="bg-[#ff4b4b] text-[14px] md:text-[16px] cursor-pointer hover:bg-[#011833] hover:text-[#ff5254] text-white md:px-[30px] md:py-[12px] px-6 py-2 rounded font-semibold duration-500">
        Send Me A Proposal
      </button>
     </div>

    </div>
  )
}

export default PricingCards
