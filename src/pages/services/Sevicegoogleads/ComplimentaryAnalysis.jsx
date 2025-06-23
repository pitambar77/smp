import React, { useEffect, useState } from "react";
import GooglAdsPPCForm from "../../../components/GooglAdsPPCForm";

const ComplimentaryAnalysis = () => {

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
    <div className="bg-[#ff4f4f] sm:py-16 py-[50px] relative overflow-hidden">
      <div className="max-w-[1110px]  mt-4  mx-auto items-center relative sm:px-0 px-4">
        {/* Left Column: Heading + Boxes */}
        <div className="sm:w-[75%]">
          <h2 className="font-[Montserrat] font-bold sm:text-[40px] text-[24px] sm:text-left text-center text-white leading-[1.3] capitalize">
            Begin With A Complimentary Analysis Of Your Google Advertising
            Campaign.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:h-[280px] sm:mt-25 mt-10 sm:mb-10 mb-4 sm:mr-5 ">
            {/* Box 1 */}
            <div className="bg-white sm:py-8 sm:px-8 py-20  text-center shadow-sm" >
              <h3 className="text-[#3467d8] font-semibold sm:text-[22px] text-[18px]  font-[Montserrat] mb-2 sm:mt-5">
                <button onClick={() => setShowForm(true)}> I Am New To Google Advertising</button>
               
              </h3>
              <p className="text-[#787878] ml-5 mr-5 text-center sm:text-[18px] text-[14px]  font-[Montserrat] leading-relaxed">
                How can Google advertising help grow your safari and tour
                business? Let’s run the numbers.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white sm:py-8 sm:px-8 py-20 text-center shadow-sm">
              <h3 className="text-[#3467d8] sm:text-[22px] text-[18px] font-semibold font-[Montserrat] sm:mt-5 mb-2">
                I Am Running A Google Ads Campaign
              </h3>
              <p className="text-[#787878] ml-5 mr-5 text-center sm:text-[18px] text-[14px] font-[Montserrat] leading-relaxed">
                Get a complimentary audit to see how much money we can save for
                your safari and tour business.
              </p>
            </div>
          </div>
        </div>

              {showForm && ( 
                <GooglAdsPPCForm/>
               )}

        {/* Right Column: Phone Image */}
        <div className=" ">
          <img
            src="https://safarimarketingpro.com/images/smp_mobile_png.png"
            alt="Phone Ad Preview"
            className="absolute sm:-mb-26 bottom-0 right-[-20rem]  w-[627px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ComplimentaryAnalysis;
