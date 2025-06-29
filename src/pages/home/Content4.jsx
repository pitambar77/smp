// import React, { useEffect, useState } from "react";
// import RequestForm from "../../components/RequestForm";
// import { FaRegDotCircle } from "react-icons/fa";

// function Content4() {
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     if (showForm) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }

//     return () => document.body.classList.remove("overflow-hidden");
//   }, [showForm]);

//   return (
//     <div className="bg-[#3467d8] bg-[url('https://safarimarketingpro.com/images/bg-monkey.png')] bg-cover bg-center  w-full py-[100px] px-4 sm:px-6">
//       {/* Inner Wrapper with consistent max width */}
//       <div className="max-w-[1140px] mx-auto ">
//         {/* Heading */}
//         <h2 className="font-montserrat font-bold text-[48px] text-center text-white leading-[1.3] capitalize m-0 px-[10%] pb-[15px] mt-6 mb-10">
//           Why African Safari Operators Losing Inquiries?
//         </h2>

//         {/* Two Column Layout */}
//         <div className=" grid grid-cols-2 gap-x-[30px]">
//           {/* Left Content */}
//           <div className=" ">
//             <h6 className=" font-semibold text-[20px] text-left text-white italic leading-normal  pb-[10px] ">
//               Don’t have a safari website for their business
//             </h6>
//             <p className=" text-[#efefef] mb-[15px] text-[18px] font-[200] leading-[1.5] text-justify">
//               How much money your safari companies have already lost for not
//               having a world-class safari website?? Is it 1000$, 2000$ or
//               $10,000 every day? A recent survey found that 42% of small safari
//               companies don’t have a website for their business. Are not the
//               figures really surprising?
//               <strong className=" font-semibold">
//                 {" "}
//                 I meant when 3 billion of your potential customers spend an
//                 average of 10 hours a day on the internet,{" "}
//               </strong>
//               Is it wise to not have an online presence??
//             </p>
//             <p className=" text-[#efefef] mb-[15px] text-[18px] font-[300] leading-[1.5] text-justify">
//               Most the safari operators sending lots of money on their{" "}
//               <strong className=" font-semibold">
//                 SAFARI GUIDES, OUTDOOR EQUIPMENT, SAFARI FLEETS, and INVEST in
//                 the INTERIOR DESIGN OF THEIR OFFICE. Because they don’t
//                 understand customers will not knock on their doors.
//               </strong>
//             </p>
//             {/* <p className="text-[#efefef] mb-[15px] text-[18px] font-[300] leading-[1.5] text-justify">
//                 Even when a prospect visits your company/office to inquire or
//                 get more information your representative briefs them or
//                 motivates them to understand and buy your services.
//               </p> */}

//             <p className=" text-[#efefef] mb-[15px] text-[18px] font-[300] leading-[1.5] text-justify">
//               Even when a prospect visits your company/office to inquire or get
//               more information your representative briefs them or motivates them
//               to understand and buy your services.{" "}
//               <strong className=" font-semibold">
//                 But your website is your online shop that doesn’t need a
//                 salesperson to educate your customers.{" "}
//               </strong>
//               A well-presented and informative safari website can convert
//               website users to paying customers in a fraction of the time. You
//               just have to understand what your potential customers need and
//               design a professional website according to that.
//             </p>
//             <h6 className=" font-semibold text-[20px] text-left text-white italic leading-normal  pb-[10px] ">
//               Not having a solid marketing plan to achieve your goals
//             </h6>
//             <p className=" text-[#efefef] mb-[15px] text-[18px] font-[300] leading-[1.5] text-justify">
//               The competition in the Safari Business is sky high and to sustain
//               the business one needs to behave a result-oriented 360 marketing
//               plan. And that’s why those operators{" "}
//               <strong className=" font-semibold">
//                 who have knowledge about the marketing secrets are becoming more
//                 successful and those who don’t know are losing inquiries and
//                 letting their competitors stay ahead from them.{" "}
//               </strong>
//               Don’t you think that is how your business going on currently?
//             </p>

//             <p className=" text-[#efefef] mb-[15px] text-[18px] font-[300] leading-[1.5] text-justify">
//               Even some of the safari operators enter with no guaranteed
//               marketing plan? They work with companies{" "}
//               <strong className=" font-semibold">
//                 who don’t know about what is Serengeti, who are never being
//                 Tanzania to understand the whole eco-system of a customer, and
//                 who don’t know what is peak season and low season. Even they
//                 don’t know what a USA & UK people search before they book an
//                 African Safari.
//               </strong>
//             </p>
//             <p className=" text-[#efefef] text-[18px] font-[300] leading-[1.5] pb-[15px] text-justify">
//               Do you know there are almost more than 2 Million people searching
//               safari-related keywords on Google?? How many of them are reaching
//               you on a regular basis??
//             </p>
//           </div>

//           {/* Right Content */}
//           <div className=" ">
//             <p className=" text-[#efefef] text-[18px] font-[300] leading-[1.5] mb-[15px] text-justify">
//               With the highly emerging challenges in the safari market, if
//               you’re potential safari customers won’t find you then how you will
//               generate bookings for your safari Business???
//             </p>

//             <p className=" text-[#efefef] text-[18px] font-[300] leading-[1.5] mb-[15px] text-justify">
//               <strong className=" font-semibold">
//                 Not appearing in the top search results can be the difference
//                 between the success and failure of your safari Business.
//               </strong>
//             </p>

//             <h3 className=" font-semibold text-[20px] text-left text-white italic leading-normal  pb-[10px] ">
//               You are sharing your Profits to Your Agents
//             </h3>
//             <p className=" text-[#efefef] text-[18px] font-[300] leading-[1.5] mb-[15px] text-justify">
//               Is not it painful to benefit a third-party business by throwing a
//               huge share of your Profits?{" "}
//               <strong className="font-semibold">
//                 {" "}
//                 Most safari companies share a strong opinion that Safari Agents
//                 are the game changer for their safari business. But Do they
//                 really?
//               </strong>{" "}
//               Have you ever analyzed how much money you are throwing away by
//               completely depending on Agents?
//             </p>
//             <p className=" text-[#efefef] text-[18px] font-[300] leading-[1.5] mb-[15px] text-justify">
//               When as a safari company you make all the efforts and hard work to
//               make your safari customers' trip a memorable one, why you are
//               providing your hard-earned money to a third-party agent who does
//               not even make 0.01% effort
//               <strong className=" font-semibold">
//                 ? Of course, they provide a lot of customers to you, but have
//                 you ever analyzed how much $ you are losing by that process?
//               </strong>
//             </p>

//             <p className=" text-[#efefef] text-[18px] font-[300] leading-[1.5] mb-[15px] text-justify">
//               As a safari owner if{" "}
//               <strong className=" font-semibold">
//                 you want to get all the profits for your safari company then you
//                 need to reach your customers directly through online marketing
//                 but if you will rely on Agents
//               </strong>
//               then you are going to benefit their business more compared to your
//               safari business.
//             </p>

//             <p className="text-[#efefef] text-[18px] font-[300] leading-[1.5] mb-[15px] text-justify">
//               Find out how???
//             </p>

//             {/* Custom Dot List */}
//             <div className="">
//               {[
//                 "Takes a huge amount of profits as a share",
//                 "Charges for each and every booking",
//                 "There is no brand recognition",
//                 "Sends random inquiries from anywhere",
//                 "They share the same inquiries with many safari tour companies",
//                 "No control over your business",
//               ].map((item, index) => (
//                 <div key={index} className="flex items-start  ">
//                   <div className="flex items-center justify-center w-4 h-4 mt-1  mx-[10px] rounded-full border-3 border-[#ff5254] text-[#ff5254] font-extrabold text-[22px] ">
//                     &middot;
//                   </div>
//                   {/* <FaRegDotCircle  className="flex items-center justify-center pl-[10px] text-[#ff5254] text-[26px] font-extrabold "/> */}
//                   <strong className=" font-semibold text-[#ede7e7] text-[17px] pb-[10px] ">
//                     {item}
//                   </strong>
//                 </div>
//               ))}
//             </div>
//             <p className=" text-[#efefef] text-[18px] font-[300] leading-[1.5] mb-[15px] text-justify">
//               So the choice is crystal clear for you whether you want to take
//               all the profits and make your business grow or share your
//               hard-earned money with an Agent and make their business grow.
//               Always remember Revenue comes with Wise Business Decisions.
//             </p>

//             <p className=" text-[#efefef] text-[18px] font-thin leading-[1.5] mb-[15px] text-justify">
//               Now, might be you are able to know why you are losing customers???
//             </p>
//           </div>
//         </div>

//         {/* Footer Call-to-Action */}
//         <div className="pt-[30px] text-center">
//           <button onClick={() => setShowForm(true)}>
//             <p className="text-3xl font-bold pb-[15px] text-white underline hover:text-black duration-500 cursor-pointer">
//               So Now Stop Losing Money and Get the first step towards getting
//               More Leads and Schedule a Strategy Session!
//             </p>
//           </button>
//         </div>
//         {showForm && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat] ">
//             <div
//               className=" mt-[80px] relative w-[90%] max-w-[600px] bg-[#3467d8] bg-gradient-to-t from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg
//                  animate-slide-down-fade"
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setShowForm(false)}
//                 className="absolute cursor-pointer -top-6 -right-5 bg-red-400 hover:bg-[#396bb1] text-white hover:text-red-400 font-bold text-[32px] w-10 h-10 flex items-center justify-center shadow-md"
//               >
//                 ×
//               </button>
//               <div className="text-white text-center py-8 -mt-5 rounded-t-lg">
//                 <h3 className="text-[24px] font-medium leading-snug uppercase">
//                   schedule a strategy session
//                 </h3>
//                 <div className="border-t border-white w-full mx-auto mt-4 -mb-4" />
//               </div>
//               <RequestForm />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Content4;

//<-----------------------------------------------------------------Responsive-------------------------

import React, { useEffect, useState } from "react";
import RequestForm from "../../components/RequestForm";
import { FaRegDotCircle } from "react-icons/fa";

function Content4() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (showForm) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [showForm]);

  return (
    <div className="bg-[#3467d8] bg-[url('https://safarimarketingpro.com/images/bg-monkey.png')] bg-cover bg-center  w-full md:py-[100px]  py-[50px] md:px-4 px-6">
      {/* Inner Wrapper with consistent max width */}
      <div className="max-w-[1140px] mx-auto ">
        {/* Heading */}
        <h2 className="font-montserrat font-bold md:text-[48px] text-[24px] text-center text-white leading-[1.3] capitalize m-0 md:px-[10%] md:pb-[15px] md:mt-6   mb-10">
          Why African Safari Operators Losing Inquiries?
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[30px] md:gap-y-[40px]">
          {/* Left Content */}
          <div className=" ">
            <h6 className=" font-semibold md:text-[20px] text-left text-white italic leading-normal  pb-[10px] text-[16px] ">
              Don’t have a safari website for their business
            </h6>
            <p className=" text-[#efefef] mb-[15px] md:md:text-[18px] text-[14px] font-[200] leading-[1.5] text-justify">
              How much money your safari companies have already lost for not
              having a world-class safari website?? Is it 1000$, 2000$ or
              $10,000 every day? A recent survey found that 42% of small safari
              companies don’t have a website for their business. Are not the
              figures really surprising?
              <strong className=" font-semibold">
                {" "}
                I meant when 3 billion of your potential customers spend an
                average of 10 hours a day on the internet,{" "}
              </strong>
              Is it wise to not have an online presence??
            </p>
            <p className=" text-[#efefef] mb-[15px] md:text-[18px] text-[14px] font-[300] leading-[1.5] text-justify">
              Most the safari operators sending lots of money on their{" "}
              <strong className=" font-semibold">
                SAFARI GUIDES, OUTDOOR EQUIPMENT, SAFARI FLEETS, and INVEST in
                the INTERIOR DESIGN OF THEIR OFFICE. Because they don’t
                understand customers will not knock on their doors.
              </strong>
            </p>
            {/* <p className="text-[#efefef] mb-[15px] md:text-[18px] text-[14px] font-[300] leading-[1.5] text-justify">
                Even when a prospect visits your company/office to inquire or
                get more information your representative briefs them or
                motivates them to understand and buy your services.
              </p> */}

            <p className=" text-[#efefef] mb-[15px] md:text-[18px] text-[14px] font-[300] leading-[1.5] text-justify">
              Even when a prospect visits your company/office to inquire or get
              more information your representative briefs them or motivates them
              to understand and buy your services.{" "}
              <strong className=" font-semibold">
                But your website is your online shop that doesn’t need a
                salesperson to educate your customers.{" "}
              </strong>
              A well-presented and informative safari website can convert
              website users to paying customers in a fraction of the time. You
              just have to understand what your potential customers need and
              design a professional website according to that.
            </p>
            <h6 className=" font-semibold md:text-[20px] text-16px  text-left text-white italic leading-normal  pb-[10px] ">
              Not having a solid marketing plan to achieve your goals
            </h6>
            <p className=" text-[#efefef] mb-[15px] md:text-[18px] text-[14px] font-[300] leading-[1.5] text-justify">
              The competition in the Safari Business is sky high and to sustain
              the business one needs to behave a result-oriented 360 marketing
              plan. And that’s why those operators{" "}
              <strong className=" font-semibold">
                who have knowledge about the marketing secrets are becoming more
                successful and those who don’t know are losing inquiries and
                letting their competitors stay ahead from them.{" "}
              </strong>
              Don’t you think that is how your business going on currently?
            </p>

            <p className=" text-[#efefef] mb-[15px] md:text-[18px] text-[14px] font-[300] leading-[1.5] text-justify">
              Even some of the safari operators enter with no guaranteed
              marketing plan? They work with companies{" "}
              <strong className=" font-semibold">
                who don’t know about what is Serengeti, who are never being
                Tanzania to understand the whole eco-system of a customer, and
                who don’t know what is peak season and low season. Even they
                don’t know what a USA & UK people search before they book an
                African Safari.
              </strong>
            </p>
            <p className=" text-[#efefef] md:text-[18px] text-[14px] font-[300] leading-[1.5] pb-[15px] text-justify">
              Do you know there are almost more than 2 Million people searching
              safari-related keywords on Google?? How many of them are reaching
              you on a regular basis??
            </p>
          </div>

          {/* Right Content */}
          <div className=" ">
            <p className=" text-[#efefef] md:text-[18px] text-[14px] font-[300] leading-[1.5] mb-[15px] text-justify">
              With the highly emerging challenges in the safari market, if
              you’re potential safari customers won’t find you then how you will
              generate bookings for your safari Business???
            </p>

            <p className=" text-[#efefef] md:text-[18px] text-[14px] font-[300] leading-[1.5] mb-[15px] text-justify">
              <strong className=" font-semibold">
                Not appearing in the top search results can be the difference
                between the success and failure of your safari Business.
              </strong>
            </p>

            <h3 className=" font-semibold  text-[16px] md:text-[20px] text-left text-white italic leading-normal  pb-[10px] ">
              You are sharing your Profits to Your Agents
            </h3>
            <p className=" text-[#efefef] md:text-[18px] text-[14px] font-[300] leading-[1.5] mb-[15px] text-justify">
              Is not it painful to benefit a third-party business by throwing a
              huge share of your Profits?{" "}
              <strong className="font-semibold">
                {" "}
                Most safari companies share a strong opinion that Safari Agents
                are the game changer for their safari business. But Do they
                really?
              </strong>{" "}
              Have you ever analyzed how much money you are throwing away by
              completely depending on Agents?
            </p>
            <p className=" text-[#efefef] md:text-[18px] text-[14px] font-[300] leading-[1.5] mb-[15px] text-justify">
              When as a safari company you make all the efforts and hard work to
              make your safari customers' trip a memorable one, why you are
              providing your hard-earned money to a third-party agent who does
              not even make 0.01% effort
              <strong className=" font-semibold">
                ? Of course, they provide a lot of customers to you, but have
                you ever analyzed how much $ you are losing by that process?
              </strong>
            </p>

            <p className=" text-[#efefef] md:text-[18px] text-[14px] font-[300] leading-[1.5] mb-[15px] text-justify">
              As a safari owner if{" "}
              <strong className=" font-semibold">
                you want to get all the profits for your safari company then you
                need to reach your customers directly through online marketing
                but if you will rely on Agents
              </strong>
              then you are going to benefit their business more compared to your
              safari business.
            </p>

            <p className="text-[#efefef] md:text-[18px] text-[14px] font-[300] leading-[1.5] mb-[15px] text-justify">
              Find out how???
            </p>

            {/* Custom Dot List */}
            <div className="">
              {[
                "Takes a huge amount of profits as a share",
                "Charges for each and every booking",
                "There is no brand recognition",
                "Sends random inquiries from anywhere",
                "They share the same inquiries with many safari tour companies",
                "No control over your business",
              ].map((item, index) => (
                <div key={index} className="flex items-start  ">
                  <div className="flex items-center justify-center w-4 h-4 mt-1  mx-[10px] rounded-full border-3 border-[#ff5254] text-[#ff5254] font-extrabold text-[22px]  ">
                    &middot;
                  </div>
                  {/* <FaRegDotCircle  className="flex items-center justify-center pl-[10px] text-[#ff5254] text-[26px] font-extrabold "/> */}
                  <strong className=" font-semibold text-[#ede7e7] md:text-[17px] text-[14px] pb-[10px] ">
                    {item}
                  </strong>
                </div>
              ))}
            </div>
            <p className=" text-[#efefef] md:text-[18px] text-[14px] font-[300] leading-[1.5] mb-[15px] text-justify">
              So the choice is crystal clear for you whether you want to take
              all the profits and make your business grow or share your
              hard-earned money with an Agent and make their business grow.
              Always remember Revenue comes with Wise Business Decisions.
            </p>

            <p className=" text-[#efefef] md:text-[18px] text-[14px] font-thin leading-[1.5] mb-[15px] text-justify">
              Now, might be you are able to know why you are losing customers???
            </p>
          </div>
        </div>

        {/* Footer Call-to-Action */}
        <div className="pt-[30px] text-center">
          <button onClick={() => setShowForm(true)}>
            <p className="text-[28px] font-bold md:pb-[15px] text-white underline hover:text-black duration-500 cursor-pointer">
              So Now Stop Losing Money and Get the first step towards getting
              More Leads and Schedule a Strategy Session
            </p>
          </button>
        </div>
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat] ">
            <div
              className=" mt-[80px] relative w-[90%] max-w-[600px] bg-[#3467d8] bg-gradient-to-t from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg
                 animate-slide-down-fade"
            >
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
              <RequestForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Content4;
