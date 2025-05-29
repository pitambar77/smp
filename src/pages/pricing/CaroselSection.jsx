import React from 'react'

import CardCarousel from '../taituTour/CardCarousel'

const CaroselSection = () => {
  return (
    <div className=' w-full mt-10 bg-[linear-gradient(rgba(255,82,84,0.9),rgba(255,82,84,0.9))] '>
      <div className=' max-w-[1140px] mx-auto py-[100px]'>
        
            <div className=' text-center'>
             
                <h1 className=' w-full text-[44px] font-[700] text-white py-[20px] '>Explore Success Stories</h1>

                <h2 className=' text-[24px] font-[600] text-white '>Team Up With Safari Marketing Pro – The Next Amazing Case Study Could Be Yours!</h2>
                <p className=' text-[17px] font-[500] leading-[1.7] text-white pb-[50px] pt-[3%] px-[10px]'>We bring innovative thinking, an adaptive methodology, strong ethics, and years of expertise to marketing and web design in the safari and tour industry. Our team has won awards for our web design expertise and accolades for our effective SEO strategies. Our clients know that when they give us a call, we'll pick up the phone and provide them with the time and information they need. Our comprehensive approach to online marketing and web design results in a robust and lucrative online presence for each of our clients. Click on any project below to see the results!</p>
            </div>
        <CardCarousel/>
      </div>
    </div>
  )
}

export default CaroselSection
