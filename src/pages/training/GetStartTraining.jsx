import React from 'react'
import Banner from '../../components/Banner'
import caseStudies from '../../data/BannerData'
import TrainingForm from '../../components/TrainingForm'
import Review from '../../components/Review'
import Common from '../../components/Common'

const GetStartTraining = () => {
    const data = caseStudies.getStartTraning
  return (
    <div>
      <Banner {...data}/>
      <div className=' max-w-[1140px] mx-auto pt-[70px] pb-[80px]'>
        <div className=' mx-[8%]'>
            <h2 className=' sm:text-[48px] text-[24px] font-[700] leading-[1.4] text-[#3467d8] text-center px-[4%] pb-[15px]'>Access The Platform From Any Device At Any Time </h2>
            <p className='sm:text-[22px] text-[15px] font-[400] leading-[1.4] text-[#787878] text-center px-[4%] pb-[15px]'>Unleash your true search potential and dominate the first page of Google.</p>
        </div>
        <TrainingForm/>
      </div>
      <Review/>
      <Common/>      
    </div>
  )
}

export default GetStartTraining
