import React from 'react'
import teamChinpal from '../../assets/images/team-chinpal.png'
import chinSign from '../../assets/images/chin-sign.png'
const SubBanner = () => {
  return (
    
      <div className='  bg-[#F0F0F0] pt-24'>
            <div className='max-w-[1140px]  mx-auto  '>
            <div className=' flex lg:flex-row flex-col   '>
                <div className=' basis-[40%]'>
                    <img src={teamChinpal} alt="team" className=' ' />
                </div>
                <div className=' basis-[60%]'>
                    <div className='px-6 '>
                        <h1 className=' font-[600] text-4xl  text-[#3467d8] leading-snug  '>Fall in love with your Customers Problem!</h1>
                        <p className='py-4 text-[#787878] font-[400] text-[18px] leading-snug '>Chinu Pal, fondly known as the "king of sales," is a remarkable mentor who has revolutionized the safari industry with his exceptional guidance and unparalleled contributions to African tourism. His profound understanding of the safari ecosystem has brought tremendous value to safari businesses in every aspect....</p>
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
