import React from 'react'
import { Link } from "react-router-dom"
function Gallery() {
  return (
    <>
    <div >
      <div className="max-w-[1140px] mx-auto mt-[58px] pt-[20px]">
        <h2 class="font-montserrat font-bold text-[40px] text-center capitalize text-[#3467d8] leading-[1.3] m-0 pb-[20px] ">
          From start-ups to leading safari operators, we’ve become the bridge to success.
        
        </h2>
         <h2 class="font-montserrat font-bold text-[18px] text-center capitalize text-[#3467d8] leading-[1.3] m-0 pb-[20px] ">
         
         Safari Marketing Pro is a trusted name in safari marketing across every street of Tanzania. 
        </h2>
   
    </div>

       {/* Slider */}
       <div>
     <div className="relative w-full mt-[50px] overflow-hidden">
  {/* Outer wrapper to limit the scroll area's width */}
  <div className="mx-auto overflow-hidden max-w-[1480px]">
    <div
      className="flex whitespace-nowrap"
      style={{
        animation: 'scrollLeft 25s linear infinite',
      }}
    >
      {[...Array(10)].map((_, index) => (
        <img
          key={index}
          src="https://safarimarketingpro.com/images/SMP-Client-Logo.png"
          alt={`Client Logo ${index + 1}`}
          className="w-100%"
        />
      ))}
    </div>
  </div>
</div>

      </div>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
   </div>
  
{/* next section */}

<div className='max-w-[1040px] mx-auto py-[100px] mb-10'>

<div>
<h2 className="font-[Montserrat] font-bold text-[40px] text-center capitalize text-[#3467d8] leading-[1.3] m-0 pb-5">
There’s No Space for avrage in <br/> Tanzania’s Safari Industry
</h2>
<p className="text-[20px]  leading-[36px] text-[#787878] mt-5 text-center"> In Tanzania’s booming safari market, travelers have endless options—and if your safari  website or marketing isn’t top-notch, they’ll choose someone else. A poorly designed site, low search rankings, or ineffective advertising can quietly eat away at your bookings.

</p>
<p className="font-[Montserrat] text-[19px]  text-[#787878] leading-[1.8]  pb-[15px] font-light  mt-5 text-center">
Are you looking for a website and marketing strategy that works for you, not against you? The right approach can transform your online presence into a 24/7 booking engine. </p>

<p className="text-[20px]  leading-[36px] text-[#787878]  text-center">
   Many safari operators in Tanzania struggle because their websites are outdated, their SEO is weak, or their marketing campaigns fail to reach the right audience. Common issues include generic images that don’t inspire, confusing navigation that frustrates visitors, and missing or unclear itineraries that leave travelers with unanswered questions. All of this leads to hesitation—and hesitation costs you bookings. 

</p>
<p className="font-[Montserrat] text-[19px]  text-[#787878] leading-[1.8]  pb-[15px] font-light  mt-5 text-center">
 <span className='font-semibold '>The sad truth?</span> As a safari operator, you know Tanzania inside out—you understand the destinations, design amazing packages, and know exactly what your guests want once they arrive. But when it comes to marketing, there’s often a gap. And in that gap, opportunities slip away.
</p>

<p className="text-[20px]  leading-[36px] text-[#787878]  text-center"> 
At  <span className='font-semibold '> Safari Marketing Pro,</span> with over 15 years in the safari industry, we’ve seen this challenge firsthand. We understand the unique disconnect between Tanzania’s safari operators and their potential guests. That’s why we create <strong> customized marketing plans </strong> for every stage of a safari operator’s journey—whether you’re a small local company just starting out or an established industry leader aiming to dominate the market.
</p>
<p className="font-[Montserrat] text-[19px]  text-[#787878] leading-[1.8]  pb-[15px] font-light  mt-5 text-center">
 <span className='font-semibold '> How do we do it?</span> Simple—every step we take is backed by data. With more than a decade of industry insights, we know what travellers are searching for, what inspires them to click “book now,” and what keeps them coming back. From powerful keyword research to compelling storytelling, our strategies are designed to ignite the traveller’s imagination and turn their interest into action.
</p>

{/* <p className="font-[Montserrat] text-[19px]  text-[#787878] leading-[1.8]  pb-[15px] font-light  text-center">Safari travel is one of the most emotional decisions a person can make. If your website doesn’t stir their imagination, answer their questions, or earn their trust, they’ll quietly move on—and book with someone who does.

</p>
<p className="font-[Montserrat] text-[19px]  text-[#787878] leading-[1.8]  pb-[15px] font-light   text-center">At Safari Marketing Pro, 
    <span className='text-[#787878] font-semibold'> we understand the safari ecosystem.</span> We know what your guests are dreaming of—and what makes them decide to book.

</p>
<p className="font-[Montserrat] text-[19px]  text-[#787878] leading-[1.8]  pb-[15px] font-light   text-center">We bridge the gap between the magic you offer and how it’s experienced online—transforming your website into more than just a platform. We make it the start of the journey.

</p>
<p className="font-[Montserrat] text-[19px]  text-[#787878] leading-[1.8]   pb-[15px] font-light   text-center">Let’s turn your website into the first unforgettable step of someone’s dream safari.

</p> */}
</div>
<div class="w-full float-left relative py-[30px] pb-[10px] text-center">
<Link to="/adds-booking">
  <button className="inline-block px-[40px] py-[15px] uppercase text-[16px] bg-[#ff5254] text-white font-semibold rounded-[5px] border-[#ff5254] hover:bg-[#011833] hover:text-[#ff5254]">
    Get Free Proposal
  </button>
</Link>
</div>


</div>

       
   







  </>
  )
}

export default Gallery
