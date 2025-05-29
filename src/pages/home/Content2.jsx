import React from 'react';
 
function Content2() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Shared Background Image Layer */}
      <div
        className="absolute inset-0 z-0 h-[1200px]"
        style={{
          backgroundImage: "url('content2images/socs-bg.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
 
      {/* Red Overlay for Top Content Only */}
      <div className="absolute top-0 left-0 w-full h-[1200px] bg-[rgba(255,82,84,0.9)] z-10" />
 
      {/* Main Content */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 mt-[60px] py-[60px] pb-12 flex justify-center">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-montserrat font-bold text-[48px] text-white leading-[1.3] mb-15">
            Highly Converting Safari Websites for African Safari Operators
          </h1>
 
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-2xl font-medium text-white mb-6">
                Is your website conveying an appealing “HELLO” to your customers?
              </p>
              <p className="text-lg text-white mb-5">
                Your safari website creates that first impression on your potential customer’s mind before they talk to you, meet you, or make an inquiry/bookings with you.
              </p>
              <p className="text-lg text-white mb-5">
                Make your itineraries and booking forms your sales page. We make your potential customers believe that you are a highly professional and trusted safari company, just like they are looking for.
              </p>
              <p className="text-lg text-white mb-5">
                We convert strangers into paying guests with a well-presented and informative website. Schedule a call with an expert today!
              </p>
 
              <div className="mt-6">
                <button className="bg-gray-900 text-white text-lg px-8 py-3 rounded hover:bg-red-600 transition">
                  <strong>SCHEDULE CALL WITH AN EXPERT</strong>
                </button>
              </div>
            </div>
 
            {/* Right Side (Video Embed) */}
            <div className="flex-1 flex justify-center items-center w-full">
              <div className="w-full h-full aspect-video max-w-xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Safari Marketing Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* Image + White Bottom Half */}
      <div className="relative z-20 pt-20">
        <div className="flex justify-center mb-28 relative">
          <img
            src="https://safarimarketingpro.com/images/soowrk-fig-1.png"
            alt="Supporting Visual"
            className="w-full max-w-6xl relative z-10"
          />
 
          {/* White background only for bottom half of image */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white z-0" />
        </div>
      </div>
    </div>
  );
}
 
export default Content2;