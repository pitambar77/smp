import React from 'react'
import Banner from '../../components/Banner'
import caseStudies from '../../data/BannerData'
import TaituTourContent from './TaituTourContent'
import CardCarousel from './CardCarousel'
import Common from '../../components/Common'

const TaituTourCaseStudy = () => {
    const data = caseStudies.taituTour
  return (
    <div>
      <Banner {...data}/>
      <TaituTourContent/>
      <div className=' w-full py-[100px]'>
            <div className=' max-w-[1140px] mx-auto text-center'>
                <h1 className='text-[#3467d8] text-[40px] font-[700] leading-[1.3] px-[15%]'>Explore Success Stories</h1>
                <p className=' text-[18px] font-[400] py-[15px] px-[30px] text-[#787878]'>Team Up With Safari Marketing Pro – The Next Amazing Case Study Could Be Yours!</p>
            <CardCarousel/>
            </div>
            
      </div>
      <Common/>
    </div>
  )
}

export default TaituTourCaseStudy
