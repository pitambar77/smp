import React from "react";
import { useNavigate } from "react-router-dom";

function WhyWorkinSmp() {
  const navigate = useNavigate();
  return (
    <div className=" max-w-[1140px] mx-auto">
      <section className="  pt-[100px] bg-white px-[15px]">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-start">
          {/* Left Column - Text */}
          <div className="text-[#5e5e5e] text-[18px] leading-[1.8] font-[Montserrat] pr-[15px] ">
            <h2 className="text-[36px] font-semibold text-left capitalize text-[#3467d8] leading-[1.3] ">
              Why Work With SMP?
            </h2>
            <p className=" pt-[15px] pb-[17px] text-[18px] text-left text-[#787878] leading-[1.5] mt-[30px]  ">
              We think that every safari company has something unique to offer
              in terms of how they operate and the services they offer. Hence,
              you can’t just figure out one recipe that works for all of them.
            </p>

            <p className=" pt-[15px] pb-[17px] text-[18px] text-left text-[#787878] leading-[1.5]  ">
              The safari businesses we serve are very good at understanding the
              destinations and the areas of operation but they lag behind at
              understanding their client’s needs, having a clean website that
              attracts more customers, how to market it for more reach or even
              doing a simple follow-up!
            </p>
            <p className=" pt-[15px] pb-[17px] text-[18px] text-left text-[#787878] leading-[1.5]  ">
              The only 1-2% of the safari companies that have some knowledge on
              how to convince & acquire the customers are gathering most part of
              the revenue even when the tour experience provided by lesser-known
              companies are better than them.
            </p>

            <button
              onClick={() => {
                navigate("/our-clients");
                window.scrollTo(0, 0);
              }}
              className="uppercase cursor-pointer text-[18px] tracking-[0.8px] mt-[15px] shadow-[0_12px_18px_0_rgba(0,0,0,0.15)] px-[40px] py-[12px] bg-[#ff5254] text-white   font-semibold hover:bg-[#011833]  hover:text-red-500 duration-500 ease-in rounded-[4px]"
            >
              BROWSE ALL CASE STUDIES
            </button>
          </div>

          {/* Right Column - YouTube Video and Text */}
          <div className="text-[#5e5e5e] text-[18px] leading-[1.8]   pl-[15px]">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[300px] "
                src="https://www.youtube.com/embed/M3j3TDH1r8g"
                title="10x Your Safari Bookings With Safari Marketing Pro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className=" pt-[15px] pb-[17px] text-[18px] text-left text-[#787878] leading-[1.5]  mt-[30px] ">
              That’s where SMP comes into play, as the only safari marketing
              company existed in the whole Africa who understands the entire
              safari eco-system. We understood the problems of every client no
              matter how big or small they are and provided them the best in
              class result oriented solutions.
            </p>
            <p className=" pt-[15px] pb-[17px] text-[18px] text-left text-[#787878] leading-[1.5]  ">
              Because our client’s success is our success!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyWorkinSmp;
