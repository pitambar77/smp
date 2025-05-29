import React from 'react'
 
export default function BodySection() {
  return (
    <section className="bg-[rgba(61,114,194,0.95)] relative w-full overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 mt-6">
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-x-20">
         
          {/* Left: Text/Content */}
          <div className="w-2/3 text-center md:text-left flex flex-col justify-center z-10 mt-12 pr-5 ml-10">
           <h2 className="font-montserrat text-white font-bold text-[50px] text-left   mb-6 m-0 pr-[20px] leading-[1.1]">
  We Want To Turn Your  <br />Lookers Into Bookers.
</h2>
 
            <p className="text-white mb-8 text-xl lg:text-xl mr-32 font-Montserrat', sans-serif">
              Providing African safari operators with more website visits, more  <br />bookings and more agents.
            </p>
 
            {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch justify-center md:justify-start mb-10 gap-0 w-full max-w-[900px] mx-auto">
  {/* First Button */}
  <button
    className="font-lato text-[rgb(120,120,120)] text-[20px] font-semibold leading-none
               w-full sm:w-auto h-[70px] rounded-t-md sm:rounded-l-md sm:rounded-tr-none
               m-0 px-5 py-[15px] outline-none border border-transparent
               hover:border-red-500 flex justify-between items-center text-left
               bg-white transition duration-300"
  >
    <span className="font-bold">I need more traffic to my website</span>
    <i className="fa-solid fa-angle-down ml-3 text-gray-600 text-2xl font-bold"></i>
  </button>
 
  {/* Second Button */}
  <button
    className="font-lato text-white text-[17px] tracking-[1px] font-semibold uppercase
               w-full sm:w-auto h-[70px] rounded-b-md sm:rounded-r-md sm:rounded-bl-none
               px-6 py-[15px] bg-[rgb(255,82,84)] border border-[rgb(255,82,84)]
               transition ease-out duration-500 outline-none hover:bg-black hover:text-red-500"
  >
    Get A Free Quote
  </button>
</div>
 
 
 
 
 
            {/* 4 Images in a row */}
            <div className="flex justify-center md:justify-start gap-7 pb-10 ">
              <img src="https://safarimarketingpro.com/images/hm-baner-logo-1.png" alt="Logo 1" className="h-23 w-auto" />
              <img src="https://safarimarketingpro.com/images/hm-baner-logo-1.png" alt="Logo 2" className="h-23 w-auto" />
              <img src="https://safarimarketingpro.com/images/hm-baner-logo-1.png" alt="Logo 3" className="h-23 w-auto" />
              <img src="https://safarimarketingpro.com/images/hm-baner-logo-1.png" alt="Logo 4" className="h-23 w-auto" />
            </div>
          </div>
 
          {/* Right: Full-height & wide image */}
         
        </div>
       
      </div>
 
  <div className="hidden md:block absolute right-0 pt-17  top-0 bottom-0">
    <img
      src="https://safarimarketingpro.com/images/banner-single-fig-1.png"
      alt="SMP Service"
      className="h-auto w-[620px]   object-cover"
    />
  </div>
 
 
    </section>
  )
}