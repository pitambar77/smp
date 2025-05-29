import React from 'react'
import Banner from '../../components/Banner'
import caseStudies from '../../data/BannerData'
import NumberCounter from '../AfricanScenicCaseStudy/NumberCounter'
import JerryContentCard from './JerryContentCard'

const JerryTanzania = () => {
    const data = caseStudies.jerryTanzania
  return (
    <div>
     <Banner {...data}/>
    <div className=' w-full'>
         <div className=' max-w-[1140px] mx-auto mt-[60px] py-[29.45px]'>
            <div>
                <h1 className="text-4xl text-[#3467d8] text-center font-[700] md:text-[50px]  pb-[15px] leading-[1.4] px-[8%]">Safari Marketing Pro Services <br/> Used</h1>
            </div>
            <div className=' grid grid-cols-3 p-[2%] items-center'>
               <div className='px-[15px] '>
                    <div className=' flex justify-center items-center'>
                    <img src="https://safarimarketingpro.com/images/serach.png" alt="search" className='bg-[#F0F0F0] p-[9%] mb-[10px] rounded-[5px] w-[110px] items-center' />
                    </div>
                    
                    <p className='text-center text-[#787878] font-[400] text-[17px] pb-[15px]'>Search Engine Optimization (SEO)</p>
                </div>
                 
                <div className='px-[15px] text-center'>
                    <div className=' flex justify-center items-center'>
                    <img src="https://safarimarketingpro.com/images/cursor.png" alt="search" className='bg-[#F0F0F0] p-[9%] mb-[10px] rounded-[5px] w-[110px] items-center' />
                    </div>
                    
                    <p className='text-center text-[#787878] font-[400] text-[17px] pb-[15px]'>Website Upgradation</p>
                </div>
                 <div className='px-[15px] text-center'>
                    <div className=' flex justify-center items-center'>
                    <img src="https://safarimarketingpro.com/images/heart.png" alt="search" className='bg-[#F0F0F0] p-[9%] mb-[10px] rounded-[5px] w-[110px] items-center' />
                    </div>
                    
                    <p className='text-center text-[#787878] font-[400] text-[17px] pb-[15px]'>Organic Social Media  Marketing</p>
                </div>
            </div>

            <div className=' max-w-[1050px] mx-auto px-[15px]'>
                <div>
                    <p className=' pb-[15px] text-[17px] text-[#787878] font-[400]'>Their aim is to provide travellers from all around the Tanzania with a unique experience ,As the Best Tanzania Safari Company, they offer world-class packages for safaris and Kilimanjaro climbing, catering to groups, organizations, families, backpackers, and individuals.</p>
                </div>
                <p className=' pb-[15px] text-[17px] text-[#787878] font-[400]'>In 2020, Jerry Tanzania Tours formed a partnership with Safari Marketing Pro to improve their website traffic. After not seeing any significant progress with other web marketing agencies in the past, they sought out Safari Marketing Pro to take their company to the next level.</p>
                <p className=' pb-[15px] text-[17px] text-[#787878] font-[400]'>Prior to their collaboration with Safari Marketing Pro, Jerry Tanzania Tours faced several challenges that impeded their progress towards their objectives. These obstacles included the need for rebranding, refining their location targeting.</p>
                <p className=' pb-[15px] text-[17px] text-[#787878] font-[400]'>To overcome these challenges, Safari Marketing Pro devised and executed a comprehensive digital marketing campaign that comprised search engine optimization (SEO), and organic social media marketing. This multi-pronged approach enabled Jerry Tanzania Tours to tackle their obstacles and elevate their digital presence.</p>
                <p className=' pb-[15px] text-[17px] text-[#787878] font-[400]'>Jerry Tanzania Tours remains committed to its ongoing partnership with Safari Marketing Pro as they continue to work together to bolster the company's digital presence and realize steady business growth.</p>

            </div>
        </div>
      </div>
      <NumberCounter/>
      <JerryContentCard/>
    </div>
  )
}

export default JerryTanzania
