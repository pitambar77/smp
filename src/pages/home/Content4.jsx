import React, { useEffect, useState } from 'react';
import RequestForm from '../../components/RequestForm';
 
function Content4() {
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
    <div className="bg-[rgba(61,114,194,0.95)] w-full py-20 px-4 sm:px-6">
      {/* Inner Wrapper with consistent max width */}
      <div className="max-w-[1220px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Heading */}
        <h2
          className="font-montserrat font-bold text-[48px] text-center text-white leading-[1.3] capitalize m-0 px-[10%] pb-[15px] mt-6 mb-10"
        >
          Why African Safari Operators Losing Inquiries?
        </h2>
 
 
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-lg text-white">
            <h6 className="font-montserrat font-semibold text-[20px] text-left text-white italic leading-normal m-0 pt-0 pr-0 pb-[10px] pl-0">
              Don’t have a safari website for their business
            </h6>
            <p>
 
              How much money your safari companies have already lost for not having a world-class safari website?? Is it 1000$, 2000$ or $10,000 every day? A recent survey found that 42% of small safari companies don’t have a website for their business. Are not the figures really surprising?
              <strong>I meant when 3 billion of your potential customers spend an average of 10 hours a day on the internet, </strong>
              Is it wise to not have an online presence??
            </p>
 
 
            <p>
              Most the safari operators sending lots of money on their
              <strong>SAFARI GUIDES, OUTDOOR EQUIPMENT, SAFARI FLEETS, and INVEST in the INTERIOR DESIGN OF THEIR OFFICE.</strong>
              <strong className="text-[18px] text-justify text-[#efefef] leading-[1.5] block">
                Because they don’t understand customers will not knock on their doors.
              </strong> A well-presented and informative safari website can convert website users to paying customers in a fraction of the time. You just have to understand what your potential customers need and design a professional website according to that.
            </p>
 
            <p>
              Even when a prospect visits your company/office to inquire or get more information your representative briefs them or motivates them to understand and buy your services
              <strong> But your website is your online shop that doesn’t need a salesperson to educate your customers. </strong>
 
            </p>
 
            <h6>Not having a solid marketing plan to achieve your goals
            </h6>
 
            <p>
 
 
              The competition in the Safari Business is sky high and to sustain the business one needs to behave a result-oriented 360 marketing plan. And that’s why those operators            </p>
            <strong>who have knowledge about the marketing secrets are becoming more successful and those who don’t know are losing inquiries and letting their competitors stay ahead from them. </strong>
            Don’t you think that is how your business going on currently?
            <p>
 
              Even some of the safari operators enter with no guaranteed marketing plan? They work with companies             </p>
 
            <p>
              Do you know more than 2 million people search safari-related keywords on Google? How many of them are reaching you?
            </p>
          </div>
 
          {/* Right Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-lg text-white">
            <p>
              With the highly emerging challenges in the safari market, if your potential safari customers won’t find you, then how will you generate bookings for your safari business???
            </p>
 
            <p>
              Not appearing in the top search results can be the difference between success and failure.
            </p>
 
            <h3 className="text-xl font-bold text-white">You Are Sharing Your Profits to Your Agents</h3>
 
            <p>
              Isn’t it painful to benefit a third-party business by throwing away a huge share of your profits? Most safari companies believe that agents are game changers. But are they really?
            </p>
 
            <p>
              When you do all the hard work to deliver a great safari experience, why give away your hard-earned money to an agent who makes no real effort? Have you ever calculated how much revenue you're losing?
            </p>
 
            <p>
              If you want to retain all your profits, reach customers directly through online marketing. Relying on agents only grows their business—not yours.
            </p>
 
            <p className="font-semibold">Find out how???</p>
 
            {/* Custom Dot List */}
            <div className="space-y-2">
              {[
                "Takes a huge amount of profits as a share",
                "Charges for each and every booking",
                "There is no brand recognition",
                "Sends random inquiries from anywhere",
                "They share the same inquiries with many safari tour companies",
                "No control over your business",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-3 border-red-500 text-red-500 font-extrabold text-2xl leading-none">
                    &middot;
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p>
              So the choice is crystal clear—either keep all the profits and grow your own business or continue helping agents grow theirs. <strong>Revenue comes with wise business decisions.</strong>
            </p>
 
            <p className="font-light text-white">
              Now, might you finally understand why you're losing customers???
            </p>
          </div>
        </div>
 
        {/* Footer Call-to-Action */}
        <div className="mt-20 text-center">
          <button  onClick={() => setShowForm(true)} >
            <p className="text-3xl font-bold text-white underline hover:text-black duration-500 cursor-pointer">
            So Now Stop Losing Money and Get the first step towards getting More Leads
            and Schedule a Strategy Session</p>
       
          </button>
           </div>
                      {showForm && (
               
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat] ">
                  <div className=" mt-[80px] relative w-[90%] max-w-[600px] bg-gradient-to-b from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg
                 animate-slide-down-fade">
                   
                   {/* Close Button */}
                   <button
                     onClick={() => setShowForm(false)}
                     className="absolute cursor-pointer -top-6 -right-5 bg-red-400 hover:bg-[#396bb1] text-white hover:text-red-400 font-bold text-[32px] w-10 h-10 flex items-center justify-center shadow-md"
                   >
                      ×
                   </button>
                   <div className="text-white text-center py-8 -mt-5 rounded-t-lg">
          <h3 className="text-[24px] font-medium leading-snug uppercase">
             schedule a strategy session
          </h3>
          <div className="border-t border-white w-full mx-auto mt-4 -mb-4" />
        </div>
                   <RequestForm/>
             
                 </div>
                </div>
             )}
            
      </div>
    </div>
  );
}
 
export default Content4;