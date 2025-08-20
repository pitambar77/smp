
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { PiCheckFatFill } from 'react-icons/pi';
import RequestForm from "../../components/RequestForm";

function Visitors() {
  const [showForm] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // For thumbnail-to-video switch

  const handlePlay = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    if (showForm) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showForm]);

  return (
    <div className="relative w-full mb-20 overflow-visible md:overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 "
        style={{
          backgroundImage: "url('https://safarimarketingpro.com/images/socs-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Red Overlay */}
      <div className="absolute w-full h-full bg-[rgba(255,82,84,0.9)] z-10" />

      {/* Content */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 md:py-[80px] py-[40px] flex justify-center">
        <div className="md:max-w-[1140px] mx-auto ">
          <h2 className="font-[Montserrat] font-bold text-[48px] text-center capitalize text-white leading-[1.3] m-0 pb-[20px] px-0">
            Turn Visitors into Bookings with a Powerful <br/> Tanzania Safari Website
          </h2>

          <h4 className="w-full font-bold text-[20px] text-center text-[#e8e8e8]">
            Is your safari website giving a warm and compelling “Karibu” to your potential guests?
          </h4>
          <p className="font-[Montserrat] font-normal text-[19px] text-left text-white m-0 mt-4">
                In Tanzania’s world-class safari market, first impressions decide whether travelers choose you or your competitors. Your website should spark excitement, build trust, and make booking as effortless as spotting elephants in Tarangire.
              </p>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between md:mt-12 py-[30px] md:py-0 md:mx-3">
            {/* Left */}
            <div className="w-full lg:w-[50.33%]">
              
              <p className="font-[Montserrat] font-normal text-[19px] text-left text-white m-0 pb-[20px]">
                Make Every Itinerary & Booking Form Work Like a Sales Page
              </p>
              <div>
                {[
                  "We design websites that showcase Tanzania’s magic — from Serengeti plains to Zanzibar shores — with smart itineraries, intuitive booking, and content that inspires guests to book with you.",
                  "Your website should reflect who you are — a trusted, unforgettable Tanzania safari operator. We showcase your brand, destinations, and expertise with authenticity and impact.",
                  "A great safari website isn’t just beautiful — it’s your top sales tool. We design mobile-optimized, SEO-friendly sites that guide visitors to book their next Tanzanian adventure.",
                ].map((text, idx) => (
                  <div className="flex mb-[10px] items-start" key={idx}>
                    <span className="text-[#fff] sm:text-[18px] text-[14px] font-[400] mr-[8px] mt-1">
                      <PiCheckFatFill />
                    </span>
                    <p className="sm:text-[19px] text-justify sm:text-left text-[14px] text-[#fff] font-[400] mb-2">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-[19px] font-semibold text-white pb-5">Ready to transform your website into the ultimate Tanzania safari booking engine?</p>
              <div className="items-center mt-6 text-center sm:text-left">
                <Link to="/adds-booking">
  <button
    className="bg-[#011833]  font-semibold border uppercase border-[#011833] text-[#fff] md:text-[16px] text-[14px] px-2 py-3 md:px-4 md:py-3 rounded hover:bg-[rgba(255,82,84,0.9)] hover:border-white transition"
  >
    Schedule a call with a Tanzania safari web expert
  </button>
</Link>
              </div>
            </div>

            {/* Right: Video with Thumbnail Image */}
            <div className="w-full lg:w-[48%] flex justify-between items-center  mt-10">
              <div className="md:max-w-[500px] w-full md:h-[430px] aspect-video shadow-lg overflow-hidden relative">
                {!isPlaying ? (
                  <div
                    className="absolute inset-0 z-10 bg-center bg-cover cursor-pointer"
                    style={{
                      backgroundImage: "url('	https://safarimarketingpro.com/images/WjLgDl7U9ZA-HD.jpg')",
                    }}
                    onClick={handlePlay}
                  >
                    <div className="flex items-center justify-center w-full h-full bg-black/40">
                      <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg">
                        <svg className="w-8 h-8 text-[#3467d8]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/WjLgDl7U9ZA?autoplay=1&controls=1"
                    title="YouTube video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Popup */}
      

          </div>
    
  
  );
}

export default Visitors;

