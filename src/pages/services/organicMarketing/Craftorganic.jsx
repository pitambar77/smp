import React from 'react';
 
const Craftorganic = () => {
  return (
    <div
      className="relative w-full bg-[#396bb1] font-[Montserrat] text-white overflow-hidden"
      style={{
    background: 'linear-gradient(0deg, #427fdf 0%, #396bb1 100%)',}}>
     
    <div className="max-w-[1140px] mt-8 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between relative z-10">
       
        {/* Left Content */}
        <div className="w-[670px] text-left z-10">
         <h2 className="font-[Montserrat] font-bold text-[40px] text-left text-white leading-[1.3] mt-10 mb-5 p-0 capitalize">
Transform Your Brand As A Leading Safari Operator With Safari Marketing Pro</h2>
<p className="font-[Montserrat] font-medium text-[17px] text-left text-white leading-[1.6] m-0 pt-0 pr-0 pb-[15px] pl-0">
As African safari Operators’ only choice for marketing their company, <span className='font-semibold'> SAFARI MARKETING PRO</span>has a proven track record. For <span className='font-semibold'> more than 12 years,</span> SMP has been helping <span className='font-semibold'>African Safari Businesses </span>to grow their online presence to drive more revenue.</p>
         <p className="font-[Montserrat] font-medium text-[17px] text-left text-white leading-[1.6] m-0 pt-0 pr-0 pb-[15px] pl-0">
To provide our clients with a clear path to success, <span className='font-semibold'>we stay up to date with the latest trends and innovations , explore various marketing tactics </span>and test them through our internal campaigns to determine which strategies would generate the best results.</p>
 
          <p className="text-[17px] font-normal leading-relaxed mb-3">
            At Safari Marketing Pro, <span className='font-semibold'>we view obstacles as opportunities for Safari Business growth</span>We learn from our mistakes and continuously improve our knowledge and skills to provide solutions that scale up the safari business.
          </p>
          <p className="text-[17px] font-normal leading-relaxed mb-5">
           We live by our two primary core values: <span className='font-semibold'>Relationships and Results.</span>We’re here for every <span className='font-semibold'>African Safari Tour Operator,</span> that’s our pillar. We have experts who specialize in helping safari businesses of all sizes -- from small businesses to large achieve exponential growth. We believe in owning the voice of our clients and we work hard every day to prove it.
          </p>
 
          <div className=" text-[16px] mb-15">
         
                <button className="bg-[#FF5254] text-white text-[16px] hover:bg-black hover:text-red-500 transition-colors duration-300  rounded px-6 py-3">
                  <strong className='font-semibold'>REQUEST A FREE STRATEGY SESSION</strong>
                </button>
          
            </div>
        </div>
      </div>
 
      {/* Absolute Image at Bottom Right */}
      <div className="absolute bottom-0 right-0 z-0">
        <img
          src="https://safarimarketingpro.com/images/lfsais-figs-a.png"
          alt="Safari Marketing Pro Representative"
          className="w-[445px] h-auto object-contain mr-40"
        />
      </div>
    </div>
  );
};
 
export default Craftorganic;
 
 