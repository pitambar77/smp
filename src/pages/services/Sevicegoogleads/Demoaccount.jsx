import React from "react";

function Demoaccount() {
  return (
    <div>
      <>
        <section className="bg-white text-center px-4 sm:py-16 py-8 font-[Montserrat]">
          {/* Heading */}
          <div className="max-w-[1110px] h-[730px] mx-auto mt-6 mb-6 ">
            <h2 className="text-[24px] sm:text-5xl font-bold text-[#3467d8] mb-2 sm:px-0 px-4 leading-[1.5]">
              How Your Google Ads Demo Account Looks?{" "}
            </h2>

            <p className="font-[Montserrat] font-normal sm:text-[18px] text-[14px] sm:px-0 px-4 sm:text-left text-justify text-[#787878] leading-[1.5] mb-[15px] pt-[15px] pb-[17px]">
              In this competitive world of safari and tour operators, it is no
              doubt a tedious task to reach your potential customers. Running a
              Google Ad can be your way out to be visible to your safari
              audience. Get a walk through of what you would be achieving by
              running a successful ad campaign.
            </p>

            {/* YouTube iframe showing native UI with Watch on YouTube */}
            <div className="flex justify-center items-center mt-8 z-10 relative sm:px-0 px-4">
              <div className="w-full max-w-[880px] h-[460px]  shadow-2xl overflow-hidden bg-black relative">
                <iframe
                  className="w-full h-full scale-100 origin-center"
                  src="https://www.youtube.com/embed/wl1FNxw0Uu8?controls=1&modestbranding=0&rel=0"
                  title="Safari Marketing Video"
                  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Demoaccount;
