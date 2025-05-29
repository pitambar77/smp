import React from 'react'

import { africanScenicPageData,africanScenicPageData1 } from "../../data/CaseStudyData";
import CaseStudyCard from '../../components/CaseStudyCard';
import { FaCheck } from "react-icons/fa";
const ContentCard = () => {
  return (
    <>
    <div className="py-12 ">

        <div className='max-w-[1050px] mx-auto px-[15px]'>
            {africanScenicPageData1.map((section, idx) => (
        
        <CaseStudyCard key={idx} title={section.title} items={section.items}/>
      ))}
      <p className='text-[#787878]  text-[17px] pb-[15px]'>Safari Marketing Pro's SEO efforts resulted in a substantial increase in website traffic. The client's website now receives 10,000 monthly visitors, which is a significant improvement from zero traffic. The client's website now ranks in the top results for 20 to 25 keywords, which has greatly increased its online visibility and search engine rankings.</p>
      <p className='text-[#787878]  text-[17px] pb-[15px]'>The increased traffic is a direct result of improved organic rankings and higher visibility in search results.</p>
        <div className=' grid grid-cols-2 justify-between p-[30px]'>
            <div className='text-[#787878]  '>
                <p className='pb-[15px] flex items-center'> <FaCheck className=' text-[#011833] font-[400] text-[16px] mr-[10px]'/> <strong >Organic Traffic: </strong>+360%</p>
                 <p className='pb-[15px] flex items-center'> <FaCheck className=' text-[#011833] font-[400] text-[16px] mr-[10px]'/><strong >New Users: </strong>+68%</p>
                  <p className='pb-[15px] flex items-center'> <FaCheck className=' text-[#011833] font-[400] text-[16px] mr-[10px]'/><strong >Onsite Goal Completions: </strong>+119%</p>
                  
            </div>
            <div>
                <p className='text-[#787878]  pb-[15px] flex items-center'> <FaCheck className=' text-[#011833] font-[400] text-[16px] mr-[10px]'/><strong>Overall Sessions (MoM):</strong>+58%</p>
                <p className='text-[#787878]  pb-[15px] flex items-center'> <FaCheck className=' text-[#011833] font-[400] text-[16px] mr-[10px]'/><strong>“Travel Industries” Page Sessions:</strong>+1,000%</p>

                <p className='text-[#787878]  pb-[15px] flex items-center'> <FaCheck className=' text-[#011833] font-[400] text-[16px] mr-[10px]'/><strong>“Contact Us” Page Sessions:</strong>+120%</p>

            </div>
        </div>
        </div>

         <div className='max-w-[1050px] mx-auto px-[15px] mt-[60px]'>
            <h1 className="text-4xl text-[#3467d8] text-center font-[700] md:text-[50px]  pb-[30px] leading-[1.4] px-[8%]">{africanScenicPageData.heading}</h1>
      <p className='text-[#787878]  text-[17px]' >{africanScenicPageData.subheading}</p>

      </div>
      {africanScenicPageData.sections.map((section, idx) => (
        
        <CaseStudyCard key={idx} title={section.title} items={section.items}/>
      ))}
      <div className='max-w-[1050px] mx-auto px-[15px]'>
      <p className='text-[#787878]  text-[17px]' >By combining a well-structured content calendar, visually compelling content, and active community engagement, Safari Marketing Pro aimed to not only increase brand visibility but also cultivate a loyal and engaged online community for African Scenic Safaris. This strategy focused on creating a positive brand image and encouraging social sharing, ultimately driving increased awareness and interest in the safari company's offerings.</p>

      </div>
    </div>
</>
  )
}

export default ContentCard
