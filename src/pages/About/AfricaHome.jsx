import React, { useEffect } from 'react';
// import { FaCheck } from "react-icons/fa";
import { FiPlayCircle } from "react-icons/fi";
 
import { useState } from "react";
import RequestForm from '../../components/RequestForm';
 
function AfricaHome() {
    const [playVideo, setPlayVideo] = useState(false);
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
    <div className="relative w-full overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 h-[880px]"
        style={{
    backgroundImage: "url('https://safarimarketingpro.com/images/socs-bg.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
 
      {/* Red Overlay */}
      <div className="absolute  w-full h-[1200px] bg-[linear-gradient(rgba(255,82,84,0.9),rgba(255,82,84,0.9))] z-10" />
 
      {/* Main Content */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 mt-[50px] py-[60px]  flex justify-center">
        <div className="max-w-[1140px] text-center ">
          <h1 className="font-montserrat font-bold text-[48px]  text-white leading-[1.3] mb-4 ">
Africa is our second home.
          </h1>
<h2 className="font-montserrat font-normal text-[22px] text-center text-white leading-normal ">
  Chin is very well known in Africa as a Safari Mentor.
</h2>
 
          {/* Two Column Layout */}
          <div className="flex flex-col gap-8 lg:flex-row  items-start justify-between mt-12 ml-3 ">
            {/* Left: Fixed Width Content */}
            <div className="w-[665px] h-[485px] text-left">
             
              <p className="text-[17px] text-[#fff] font-[400] mb-5">
As Africa is our second home, we don’t take clients to do only marketing, we understand the whole eco-system of the safari to serve the clients amazingly from their operations to their sales.
              </p>
              <div className="flex items-start gap-3 mb-3">
  <p className="text-[17px] text-[#fff] font-[600]">
If you don’t know where Serengeti is, how will you bring customers to Serengeti?
 
  </p>
</div>
            <div className="flex items-start gap-3 mb-3">
  <p className="text-[17px] text-[#fff] font-[400]">
So, we make sure to sit down with the clients and thoroughly check them from the ground label up until they connect to a customer. It’s not just about marketing, where we bring customers to them; we are also part of the process where they convert the customers or checking whether they are following up or not.
 
 
 
  </p>
</div>
            <div className="flex items-start gap-3 mb-3">
 
  <p className="text-[17px] text-[#fff] font-[400]">
That’s why Chin is committed to giving them face-to-face meetings to bring value from every angle.
 
  </p>
</div>
 
              <div className="mt-6">
                <button 
                onClick={() => setShowForm(true)}
                className="bg-[#011833] font-semibold border border-[#011833] text-[#fff] text-[16px] px-8 py-3 rounded hover:bg-[rgba(255,82,84,0.9)] hover:border-white transition ease-in duration-500">
                  SCHEDULE CALL WITH AN EXPERT
                </button>
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

            </div>
 
            {/* Right: Video Embed */}
           <div className="flex-1 flex justify-center items-center ">
      <div className="max-w-[540px] h-[430px] aspect-video shadow-lg overflow-hidden relative cursor-pointer">
        {!playVideo && (
          <>
            <img
              src="https://safarimarketingpro.com/images/maxresdefault.jpg"
              alt="Video preview"
              className="w-full h-full object-cover"
              onClick={() => setPlayVideo(true)}
             
            />
            {/* YouTube play button overlay */}
              <div className="absolute inset-0 bg-[#04040429] bg-opacity-30"></div>
 
            <div
              onClick={() => setPlayVideo(true)}
              className="absolute inset-0 flex justify-center items-center"
            >
              <div className=" rounded-full flex justify-center items-center shadow-lg  transition">
            <span className='text-6xl font-semibold'> <FiPlayCircle /></span>
 
              </div>
            </div>
          </>
        )}
 
        {playVideo && (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/V12f3YAttXY?autoplay=1"
            title="Safari Marketing Video"
         
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
 
          </div>
        </div>
      </div>
 
   
    </div>
  );
}
 
export default AfricaHome;
 
 