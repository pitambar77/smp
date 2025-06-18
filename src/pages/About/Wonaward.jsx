import React from 'react';
import { FaStar } from "react-icons/fa6";
 
function Wonaward() {
  return (
    <div>
      <div className=" w-full">
        <div className="max-w-[1140px]  mx-auto pt-[100px] flex  justify-between items-center ">
          {/* Left Side - Awards Text */}
          <div className=" w-[67.66%]  pr-[30px] px-[15px] ">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C39] mb-8">
              Awards We’ve Won
            </h2>
 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between pr-[30px] ">
              <div>
                <p className=" flex font-semibold text-[22px]  capitalize text-[#767676] leading-[1.3]  py-[10px] pb-[20px]">
                  <span className="text-blue-500  w-[18px] mr-2 mt-[6px]"><img src="https://safarimarketingpro.com/images/wmatbp-star-icn.png" alt="" /></span>
                  Top B2B Company
                </p>
                <p className="ml-6 font-medium text-[16px]  capitalize text-[#787878] leading-[1.3] ">
                  Clutch Award
                </p>
              </div>
 
              <div>
                <p className="flex  font-semibold text-[22px]  capitalize text-[#767676] leading-[1.3]  py-[10px] pb-[20px]">
                  <span className="text-blue-500  w-[18px] mr-2 mt-[6px]"><img src="https://safarimarketingpro.com/images/wmatbp-star-icn.png" alt="" /></span>
                  Best In Search
                </p>
                <p className="ml-6 font-medium text-[16px]  capitalize text-[#787878] leading-[1.3] ">
                  Top SEOs
                </p>
              </div>
 
              <div className=' pr-2'>
                <p className="flex  font-semibold text-[22px] capitalize text-[#767676] leading-[1.3]  py-[10px] pb-[20px]">
                 <span className="text-blue-500  w-[18px] mr-2 mt-[6px]"><img src="https://safarimarketingpro.com/images/wmatbp-star-icn.png" alt="" /></span>
                  Growing Businesses  Online 
                </p>
                <p className="ml-6 font-medium text-[16px]  capitalize text-[#787878] leading-[1.3] ">
                  Google
                </p>
              </div>
 
              <div >
                <p className="flex  font-semibold text-[22px]  capitalize text-[#767676] leading-[1.3]  py-[10px] pb-[20px]">
                  <span className="text-blue-500  w-[18px] mr-2 mt-[6px]"><img src="https://safarimarketingpro.com/images/wmatbp-star-icn.png" alt="" /></span>
                  Top Digital Marketing Agency
                </p>
                <p className="ml-6 font-medium text-[16px]  capitalize text-[#787878] leading-[1.3] ">
                  Clutch Award
                </p>
              </div>
            </div>
          </div>
 
          {/* Right Side - Logos */}
          <div className=" pr-[10px]">
            <img
              src="https://safarimarketingpro.com/images/wmatbp-fig-1.png"
              alt="Google"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Wonaward;