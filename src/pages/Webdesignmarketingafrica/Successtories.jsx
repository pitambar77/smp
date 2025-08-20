import React from 'react'
import Videopart from './Videopart'
import { Link } from "react-router-dom";

function Successtories() {
  return (
    <>

      <div className="max-w-[1140px] mx-auto ">
        <h3 class="font-montserrat font-bold text-[40px] text-center capitalize text-[#3467d8] leading-[1.3] m-0 pb-[20px] ">
        Real Stories, Real Outcomes <br/> for Tanzania Safari Operators
        </h3>

        <h4 className="pt-5 font-medium text-[20px] text-center text-[#787878] mb-7"
>We strive for excellence in everything we do — from creative website design to strategic marketing — but most importantly, we deliver results that drive more bookings for our clients.
</h4>
 <div className="relative z-10 flex items-center justify-center ">
        <div className="w-[290px] h-[200px] sm:w-[1050px] sm:h-[595px] relative overflow-hidden bg-black shadow-2xl " >
         
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/NhEqaeHnlP8?autoplay=1"
              title="Safari Marketing Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
         
            <div className="flex items-center justify-center w-full h-full text-white">
              Loading video...
            </div>
            
         
        </div>
      </div>
      <div className="flex justify-center mt-8">
          <Link to="/adds-booking">
  <button
    className="bg-[#011833] font-semibold border border-[#011833] text-[#fff] md:text-[16px] text-[14px] px-2 py-3 md:px-8 md:py-3 rounded hover:bg-[rgba(255,82,84,0.9)] hover:border-white transition"
  >
    SCHEDULE CALL WITH AN EXPERT
  </button>
</Link>
        </div>
    </div>
      
    </>
  )
}

export default Successtories
