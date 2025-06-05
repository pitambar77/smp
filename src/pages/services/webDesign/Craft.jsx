import React from 'react';
import { useNavigate } from 'react-router-dom';
 
const Craft = () => {
  const navigate = useNavigate();
  return (
        <div
          className="text-white mt-5  "
          style={{
            background: 'linear-gradient(0deg, #427fdf 0%, #396bb1 100%)',
          }}
        >
          <div className=" max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-15 z-10 relative overflow-hidden">
 
            {/* Left Text Section */}
            <div  className=' w-[660px]'>
             <h1
      style={{
        fontSize: '38px',
        fontFamily: `'Montserrat', sans-serif`,
        textTransform: 'capitalize',
        color: '#fff',
            fontWeight: 700,
 
 
        letterSpacing: '0.45px',
 
 
        lineHeight: '1.2',
      }}
      className="mb-4"
    >
      Craft A Winning Website That Ignites Strategic Growth
    </h1>
 
              <p
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 400,
        fontSize: '17px',
        textAlign: 'left',
        color: '#fff',
        lineHeight: 'inherit',
 
 
      }}
 
    >
      In the blink of an eye, your audience forms an opinion about your African safari and tour brand. Crafting a unique and compelling experience is the key to not only shaping a positive brand reputation but also to generating valuable inquiries.
    </p>
 
              <p className="text-lg md:text-xl mb-8 leading-relaxed"
                style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 400,
        fontSize: '17px',
        textAlign: 'left',
        color: '#fff',
        lineHeight: 'inherit',
 
      }}
 
              >
                Transform your online presence into a captivating journey that leaves a lasting impression. Our expertly designed safari and tours website seamlessly blends functionality with aesthetics, ensuring every click resonates with the spirit of adventure. From stunning visuals to user-friendly navigation, we prioritize the elements that elevate your brand above the rest.
              </p>
              <button
              onClick={() => {navigate('/lets-grow-business');window.scrollTo(0, 0); }}
          className="uppercase w-[300px] text-[16px] tracking-[1.5px] shadow-[0_12px_18px_0_rgba(0,0,0,0.15)] px-[10px] py-[15px] bg-[#ff5254] text-white border border-[#ff5254] font-semibold hover:bg-black hover:text-red-500 transition-colors duration-300 rounded-md"
        >
          REQUEST A FREE Proposal
        </button>
            </div>
 
            {/* Right Image */}
            <div className="flex justify-center ">
              <img
                src="https://safarimarketingpro.com/images/web-designing-image.png"
                alt="Safari Marketing Pro Representative"
                className="h-[620px] object-cover ml-30 -mb-5.5 z-10  "
              />
            </div>
          </div>
       </div>
   
      );
};
 
      export default Craft;
 
 