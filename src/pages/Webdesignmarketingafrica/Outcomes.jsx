import React from 'react'
import Videopart from './Videopart'

function Outcomes() {
  return (
    <>

      <div className="max-w-[1140px] mx-auto ">
        <h3 class="font-montserrat font-bold text-[40px] text-center capitalize text-[#3467d8] leading-[1.3] m-0 pb-[20px] ">
        Real Stories, Real Outcomes for Tanzania Safari Operators
        </h3>

        <h4 className="pt-5 font-medium text-[20px] text-center text-[#787878] mb-7">
          We strive for excellence in everything we do — from creative website design to strategic marketing — but most importantly, we deliver results that drive more bookings for our clients.
</h4>
 <div className="relative z-10 flex items-center justify-center ">
        <div className="w-[290px] h-[200px] sm:w-[1100px] sm:h-[595px] relative overflow-hidden bg-black  " >
         
            <iframe
              className="w-full h-full"
               src="https://www.youtube.com/embed/V12f3YAttXY?autoplay=1"
              title="Safari Marketing Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
         
            <div className="flex items-center justify-center w-full h-full text-white">
              Loading video...
            </div>
            
         
        </div>
      </div>
      
    </div>
        <div>
            <div className=" w-full md:pt-[70px] pt-[40px] pb-[40px] ">
              <div className=" max-w-[1140px] mx-auto text-center ">
                <h2 className="font-montserrat font-extrabold text-[40px] text-center capitalize text-[#3467d8] leading-[1.4] m-0 px-[8%] pb-[15px]">
                  We promise to have face to face meeting once in a year.

                </h2>
                <p className="text-[22px] font-medium leading-[inherit] capitalize font-montserrat text-[#787878] text-center pb-10 m-0 tracking-wide">
                  The one where we tell you how good we are.


                </p>
              </div>
              <div className=" max-w-[1140px] mx-auto px-4 md:px-0 ">
                <div className="">
                  <img
                    src={`https://safarimarketingpro.com/images/smp-add-visit-gallry.png`}
                    alt="gallery image"
                    className="bg-cover "
                  />
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Outcomes
