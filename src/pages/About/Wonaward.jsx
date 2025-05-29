import React from 'react';
 
function Wonaward() {
  return (
    <div>
      <section className="bg-white py-30 px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Left Side - Awards Text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C39] mb-8">
              Awards We’ve Won
            </h2>
 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 text-[#787878] font-montserrat">
              <div>
                <p className="flex items-center font-montserrat font-semibold text-[22px] text-left capitalize text-[#767676] leading-[1.3] m-0 py-[10px] pb-[20px]">
                  <span className="text-blue-500 mr-2 text-xl">★</span>
                  Top B2B Company
                </p>
                <p className="ml-6 font-montserrat font-medium text-[16px] text-left capitalize text-[#787878] leading-[1.3] m-0 p-0">
                  Clutch Award
                </p>
              </div>
 
              <div>
                <p className="flex items-center font-montserrat font-semibold text-[22px] text-left capitalize text-[#767676] leading-[1.3] m-0 py-[10px] pb-[20px]">
                  <span className="text-blue-500 mr-2 text-xl">★</span>
                  Best In Search
                </p>
                <p className="ml-6 font-montserrat font-medium text-[16px] text-left capitalize text-[#787878] leading-[1.3] m-0 p-0">
                  Top SEOs
                </p>
              </div>
 
              <div>
                <p className="flex items-center font-montserrat font-semibold text-[22px] text-left capitalize text-[#767676] leading-[1.3] m-0 py-[10px] pb-[20px]">
                  <span className="text-blue-500 mr-2 text-xl">★</span>
                  Growing Businesses Online
                </p>
                <p className="ml-6 font-montserrat font-medium text-[16px] text-left capitalize text-[#787878] leading-[1.3] m-0 p-0">
                  Google
                </p>
              </div>
 
              <div>
                <p className="flex items-center font-montserrat font-semibold text-[22px] text-left capitalize text-[#767676] leading-[1.3] m-0 py-[10px] pb-[20px]">
                  <span className="text-blue-500 mr-2 text-xl">★</span>
                  Top Digital Marketing Agency
                </p>
                <p className="ml-6 font-montserrat font-medium text-[16px] text-left capitalize text-[#787878] leading-[1.3] m-0 p-0">
                  Clutch Award
                </p>
              </div>
            </div>
          </div>
 
          {/* Right Side - Logos */}
          <div className="w-full float-left relative mt-[105px] flex-1 flex flex-wrap justify-center items-center gap-10">
            <img
              src="https://safarimarketingpro.com/images/wmatbp-fig-1.png"
              alt="Google"
              className="h-30 w-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default Wonaward;