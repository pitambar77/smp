import React from 'react';
import { useNavigate } from 'react-router-dom';
 
function PartnerSection() {
  let navigate = useNavigate();
  return (
    <section className="bg-white  md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-23">
       
        {/* Left - Logos */}
        <div className="w-full lg:w-1/2 flex justify-center">
  <img
    src="https://safarimarketingpro.com/images/social-logos.png"
    alt="Partner Logos"
    className="w-full h-auto object-contain"
  />
</div>
 
 
        {/* Right - Text */}
        <div className="w-full lg:w-1/2 max-w-xl text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C39] mb-6 leading-snug">
            Safari Marketing Pro <br />
            Named Google AdWords™ <br />
            Premier Partner
          </h2>
          <p className="text-[#787878] mb-4 leading-relaxed">
            SMP is excited to announce that we have been awarded Premier Partner Status by Google AdWords™!
          </p>
          <p className="text-[#787878] mb-4 leading-relaxed">
            Which means we have exceeded the expectations of the African countries for our outstanding work in the safari industry. Client’s success is where our happiness lies and we have only followed our aim to solve their problems & came out with flying colours.
          </p>
          <p className="text-[#787878] mb-6 leading-relaxed">
            This elite Premier Partner status is something we are truly proud of and grateful for. It is a testament to the profitable results we deliver to our clients every day.
          </p>
         <button
          onClick={() => {navigate('/contact-us');window.scrollTo(0, 0); }}
 className="uppercase cursor-pointer text-[16px] tracking-[1.5px] shadow-[0_12px_18px_0_rgba(0,0,0,0.15)] px-[40px] py-[15px] bg-[#ff5254] text-white   font-semibold hover:bg-[#011833]  hover:text-red-500 duration-500 ease-in rounded-[4px]"
>
  WORK WITH US
</button>
 
        </div>
      </div>
    </section>
  );
}
 
export default PartnerSection;
 