import React from 'react'
 
function WhyWorkinSmp() {
  return (
    <div>
   
    <section className="px-4 md:px-16 py-16 bg-white ml-35 mr-35 mt-10 mb-10">
     
 
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column - Text */}
        <div className="text-[#5e5e5e] text-[18px] leading-[1.8] font-[Montserrat] space-y-7">
        <h2 className="text-[36px] font-semibold text-left capitalize text-[#3467d8] leading-[1.3] font-[Montserrat] mb-12">
  Why Work With SMP?
</h2>
<p className="font-[Montserrat] font-normal text-[18px] text-left text-[#787878] leading-[1.5] gap-5 ">
  We think that every safari company has something unique to offer in terms of how they operate and the services they offer. Hence, you can’t just figure out one recipe that works for all of them.
</p>
 
       <p className="font-[Montserrat] font-normal text-[18px] text-left text-[#787878] leading-[1.5] gap-5 ">
 
            The safari businesses we serve are very good at understanding the destinations and the areas of operation but they lag behind at understanding their client’s needs, having a clean website that attracts more customers, how to market it for more reach or even doing a simple follow-up!
          </p>
        <p className="font-[Montserrat] font-normal text-[18px] text-left text-[#787878] leading-[1.5] gap-5 ">
 
            The only 1-2% of the safari companies that have some knowledge on how to convince & acquire the customers are gathering most part of the revenue even when the tour experience provided by lesser-known companies are better than them.
          </p>
 
           <button
          className="uppercase mt-2 w-[368px] text-[18px] tracking-[1.5px] p-2 py-2.5 bg-[#ff5254] text-white border border-[#ff5254] font-semibold hover:bg-black hover:text-red-500 transition-colors duration-300 rounded"
        >
  BROWSE ALL CASE STUDIES
        </button>
        </div>
 
        {/* Right Column - YouTube Video and Text */}
        <div className="text-[#5e5e5e] text-[18px] leading-[1.8] font-[Montserrat] space-y-6">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[300px] "
      src="https://www.youtube.com/embed/M3j3TDH1r8g"
              title="10x Your Safari Bookings With Safari Marketing Pro"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
 
         <p className="font-[Montserrat] font-normal text-[18px] text-left text-[#787878] leading-[1.5]  mt-13 ">
 
            That’s where SMP comes into play, as the only safari marketing company existed in the whole Africa who understands the entire safari eco-system. We understood the problems of every client no matter how big or small they are and provided them the best in class result oriented solutions.
          </p>
         <p className="font-[Montserrat] font-normal text-[18px] text-left text-[#787878] leading-[1.5] gap-5 ">
 
            Because our client’s success is our success!
          </p>
        </div>
      </div>
    </section>
 
 
    </div>
  )
}
 
export default WhyWorkinSmp