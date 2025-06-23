import React, { useEffect, useState } from 'react'
import RequestForm from '../../components/RequestForm';

const Ads = () => {
  const [showForm, setShowForm] = useState(false);
      
         useEffect(() => {
          if (showForm) {
            document.body.classList.add('overflow-hidden');
          } else {
            document.body.classList.remove('overflow-hidden');
          }
      
          return () => document.body.classList.remove('overflow-hidden');
        }, [showForm]);
  return (
    <>
    
       <div
        className=" w-full  "
        style={{
          backgroundImage: "url('https://safarimarketingpro.com/images/socs-bg.jpg')",
    backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      <div className=' w-full mt-10 bg-[linear-gradient(rgba(255,82,84,0.9),rgba(255,82,84,0.9))] '>
      <div className=' max-w-[1140px] mx-auto md:py-[80px] py-[40px] '>
        <div className=' flex md:flex-row flex-col'>
            <div className=' basis-[50%] px-[15px] '>
                <h1 className=' md:text-[36px] text-[24px] font-[600] text-white text-center md:text-left pb-[30px]'>We look forward to working with you to take your online marketing efforts to the next level</h1>
                <button
                onClick={() => setShowForm(true)}
                 className=' bg-[#011833] hover:bg-[#ff5254] border border-[#ff5254] md:py-[12px] md:px-[40px] px-4 py-2 rounded-[5px] md:text-[16px] text-[14px] font-[600] text-white  uppercase duration-300'>Schedule Call with an Expert</button>
            </div>

          {showForm && (
              
               <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat] ">
                 <div  className=" mt-[80px] relative w-[90%] max-w-[600px] bg-gradient-to-b from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg
                           animate-slide-down-fade  ">
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setShowForm(false)}
                    className="absolute cursor-pointer -top-6 -right-5 bg-red-400 hover:bg-[#396bb1] text-white hover:text-red-400 font-bold text-[32px] w-10 h-10 flex items-center justify-center shadow-md"
                  >
                    ×
                  </button>
                   <div className="text-white text-center py-8 -mt-5 rounded-t-lg">
          <h3 className="text-[24px] font-medium leading-snug uppercase">
            Schedule Call with an Expert
          </h3>
          <div className="border-t border-white w-full mx-auto mt-4 -mb-4" />
        </div>
                  <RequestForm/>
            
                </div>
               </div>
            )}

            <div className='basis-[50%] md:pl-[30px] pt-6 md:pt-0 px-4 md:px-0 '>
                  <div className='bg-[url(https://i.ytimg.com/vi_webp/M3j3TDH1r8g/maxresdefault.webp)] md:h-[320px] bg-cover bg-center md:w-full bg-[#424242] h-[266px] '>
            <iframe src="https://www.youtube.com/embed/M3j3TDH1r8g" frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen="1" data-gtm-yt-inspected-12="true" className=' bg-cover bg-center w-full h-full'></iframe>
        </div>
            </div>
        </div>
      </div>
    </div>
    </div>
    <div className=' w-full bg-[linear-gradient(0deg,#427fdf_0%,#396bb1_100%)] bg-[#3467d8] '>
             <div className=' max-w-[1140px] mx-auto md:py-[80px] py-[30px]'>
                <div className='flex md:flex-row flex-col'>
                <div className=' basis-[60%] pr-[30px] px-4 xl:px-0'>
                    <h1 className=' md:text-[38px] text-[24px] text-center md:text-left font-bold pb-[15px] text-white tracking-[0.45px] leading-[1.2] capitalize'>
                        How we determine pricing
                    </h1>
                    <h2 className=' font-[600] md:text-[17px] text-[14px]  text-justify  md:pb-[15px] pb-[10px] text-white'>Discuss Your Business Goals</h2>
                    <p className='font-[400] md:text-[17px] text-[14px]  text-justify  md:pb-[15px] pb-[10px] text-white leading-[inherit]'>We'll engage in a conversation about your safari and tours company's aspirations, both short- and long-term. This information will guide the creation of tailored plan to achieve your goals.</p>

                     <h2 className=' font-[600] md:text-[17px] text-[14px]  text-justify  md:pb-[15px] pb-[10px] text-white leading-[inherit]'>Analyse Your Market</h2>
                    <p className='font-[400] md:text-[17px] text-[14px]  text-justify  md:pb-[15px] pb-[10px] text-white leading-[inherit]'>We'll conduct a thorough examination of your competition, considering both their overall business strategies and their presence within search. This analysis will inform the development of the most effective action plan for your safari and tours business.</p>
                     <h2 className=' font-[600] md:text-[17px] text-[14px]  text-justify  md:pb-[15px] pb-[10px] text-white leading-[inherit]'>Review Your Strategic Objectives</h2>
                    <p className='font-[400] md:text-[17px] text-[14px]  text-justify  md:pb-[15px] pb-[10px] text-white leading-[inherit]'>What key objectives are outlined in your win -winroadmap? Whether it's doubling down on content production or launching a new website, we'll craft a strategic plan that aligns perfectly with your goals.</p>
                    
                    <p className='font-[400] md:text-[17px] text-[14px]  text-justify  md:pb-[15px] pb-[10px] text-white leading-[inherit]'>At Safari Marketing Pro, we view obstacles as opportunities for Safari Business growth. We learn from our mistakes and continuously improve our knowledge and skills to provide solutions that scale up the safari business.</p>
                     
                      <button 
                       onClick={() => setShowForm(true)}
                      className=' hover:bg-[#011833] bg-[#ff5254] hover:text-[#ff5254] mt-[10px] md:py-[12px] md:px-[30px] px-2.5 py-2.5 rounded-[5px]
                       md:text-[16px] text-[13px] font-[600]
                       text-white  uppercase duration-300'>Request A Free Strategy Session</button>
                </div>
                </div>
               
             </div>
    </div>
    
    </>
    
  )
}

export default Ads
