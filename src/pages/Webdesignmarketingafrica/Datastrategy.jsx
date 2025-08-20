import React from "react";
import { PiCheckFatFill } from "react-icons/pi";


const Datastrategy = () => {
  return (
    <>
    
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1160px] mx-auto sm:px-6 sm:py-5 gap-10">
      {/* Left: Scrollable Content */}
      {/* Left: Your Content */}
      <div className="order-2 space-y-8 sm:order-1 ">
        <div>
          <h3 class="font-montserrat font-bold text-[25px] text-left capitalize text-[#3467d8] leading-[1.3] mb-0 pb-5">
           Turn a $1 into $10 with a Data-Driven Google Ads Strategy Built for Safari Operators.
          </h3>

     <h4 class="text-[20px] font-semibold mb-5">We Know How.</h4>
<p class="text-[#3d3b3b] font-montserrat text-[17px] font-medium pb-[15px]">
    The reality? Most digital agencies don’t have a clue how to run effective Google Ads—especially for the safari and travel industry.

</p>

    <p class="text-[#3d3b3b] font-montserrat text-[17px] font-medium pb-[15px]">
        At <span
         className="font-semibold">Safari Marketing Pro,</span> we’ve spent years helping African tour operators scale their ads, grow bookings, and dominate the market with jaw-dropping ROAS (Return On Ad Spend).

</p>      
          
      <p class="text-[#3d3b3b] font-montserrat text-[17px] font-medium pb-[15px]">Our experience in <span className="font-semibold">safari marketing</span> is unmatched. 
      We don’t see Google Ads as just an ad platform—we see
       it as a <span className="font-semibold">revenue machine</span> that can launch your business to the next level.

</p>      
         <p class="text-[#3d3b3b] font-montserrat text-[17px] font-medium pb-[15px]">Whether you're targeting adventure seekers in Germany, honeymooners from Italy, or solo explorers from the U.S.—we know how to reach them, convert them, and get them booked.

</p>  

         <p class="text-[#3d3b3b] font-montserrat text-[17px] font-medium pb-[15px]">If you're ready to stop wasting budget and start scaling with ads that actually convert into bookings, click below to schedule a call with one of our Safari Marketing Strategists.

</p>  
<p class="text-[#3d3b3b] font-montserrat text-[17px] font-medium pb-[15px]">Let’s turn clicks into clients—and clients into lifelong brand advocates.

</p>
        <div className="mt-3 ">
                  <button
                    href="/adds-booking"
                    className="font-montserrat bg-[#ff5254] border border-[#ff5254] hover:bg-black hover:border-black hover:text-[#ff5254]
                     text-white px-13 py-[15px] relative rounded-[4px] z-0 overflow-hidden 
                     text-base tracking-normal font-semibold capitalize no-underline float-none outline-none"
                  >
                    GET A FREE QUOTE
                  </button>
                </div> 
        </div>
      </div>

      {/* Right: Sticky Image */}
      <div className="relative order-1 mt-30 sm:order-2">
  <div className="w-full">
    <img
      src="https://safarimarketingpro.com/images/Google-ads-smp-copy.png"
      alt=""
      title=""
      className="w-full rounded-lg"
    />
  </div>
</div>


      </div>


      {/* new section */}


     <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1160px] mx-auto sm:px-6 sm:py-10 py-[50px] gap-10 items-center">
  {/* Left: Image (now on left, centered vertically) */}
  <div className="relative flex justify-center order-1 sm:order-1">
    <img
      src="https://safarimarketingpro.com/images/Organic-Marketing-smp-copy.png"
      alt=""
      title=""
      className="rounded-lg max-w-full max-h-[400px]" // you can adjust max height to suit your design
    />
  </div>

  {/* Right: Your Content (now on right) */}
  <div className="order-2 space-y-8 sm:order-2">
    <div>
      <h3 className="font-montserrat font-bold text-[25px] text-left capitalize text-[#3467d8] leading-[1.3] mb-0 pb-5">
       Your Safari Bookings Will Grow So Fast, You’ll Feel the Rush!

      </h3>

      

      <p className="text-[#3d3b3b] font-montserrat text-[17px] font-medium pb-[15px]">
      Think back to the last time you searched for something on Google and actually clicked past the first page of results. Exactly… you probably didn’t.


      </p>

      <p className="text-[#3d3b3b] font-montserrat text-[17px] font-medium pb-[15px]">
Just like your potential safari guests, most people don’t look past the top 5 listings. If your website isn’t ranking on the first page of search engine results (SERPs), you’re missing out on a huge number of leads—and bookings.

      </p>

      <p className="text-[#3d3b3b] font-montserrat text-[17px] font-medium pb-[15px]">
At <span className="font-semibold">Safari Marketing Pro,</span>
 we don’t just talk—we’ve lived it. 
 Unlike generic digital agencies, 
 we specialize in helping <span className="font-semibold">African tour operators</span> thrive online. Our team understands the unique challenges and opportunities of the safari industry because we work exclusively within this space.

      </p>

      <p className="text-[#3d3b3b] font-montserrat text-[17px] font-medium pb-[15px]">
With years of hands-on experience building powerful digital strategies for safari companies across Africa, we know exactly what it takes to get you noticed—and booked.

      </p>

      <p className="text-[#3d3b3b] font-montserrat text-[17px] font-medium pb-[15px]">
Our SEO specialists craft custom strategies that push your safari business to the top of Google, drive highly targeted organic traffic, and help you crush your previous sales records.

      </p>

      <p className="text-[#3d3b3b] font-montserrat text-[17px] font-medium pb-[15px]">
We don’t just boost your rankings—we build your bookings.

      </p>

      <div className="mt-3">
        <button
          href="/adds-booking"
          className="font-montserrat bg-[#ff5254] border border-[#ff5254] hover:bg-black hover:border-black hover:text-[#ff5254]
                     text-white px-13 py-[15px] relative rounded-[4px] z-0 overflow-hidden 
                     text-base tracking-normal font-semibold capitalize no-underline float-none outline-none"
        >
          GET A FREE QUOTE
        </button>
      </div>
    </div>
  </div>
</div>

      </>
  )  
};

export default Datastrategy;
