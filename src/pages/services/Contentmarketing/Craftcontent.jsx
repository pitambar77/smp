import React from 'react';
import { useNavigate } from 'react-router-dom';

const Craftcontent = () => {
  const navigate = useNavigate();
  return (
        <div
          className="text-white mt-5 "
          style={{
            background: 'linear-gradient(0deg, #427fdf 0%, #396bb1 100%)',
          }}
        >
          <div className=" max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-15">

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
Ready To Elevate Your Brand’s Voice And Connect With Your Audience On A Deeper Level?
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
From captivating destination pages to engaging blogs and everything in between, we excel at crafting empathetic, human-centered content tailored to meet the unique needs of your travelers at every stage of the journey. Our expertise extends to authoritative content for key pages and conditions, complemented by helpful and insightful blog posts.    </p>

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
For our discerning travelers, we go above and beyond, offering world-class content not just about national parks but also comprehensive information. Discover superintendent costs, the optimal times to visit, recommended activities, available accommodations, and much more. Elevate your travel experience with our meticulously curated content that adds a touch of excellence to every destination.
              </p>
              <button
               onClick={() => {navigate('/contact-us');window.scrollTo(0, 0); }}
          className="uppercase cursor-pointer w-[300px] text-[16px] tracking-[1.5px] shadow-[0_12px_18px_0_rgba(0,0,0,0.15)] px-[10px] py-[15px] bg-[#ff5254] text-white border border-[#ff5254] font-semibold hover:bg-black hover:text-red-500 transition-colors duration-300 rounded-md"
        >
          REQUEST A FREE Proposal
        </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center ">
              <img
                src="https://safarimarketingpro.com/images/lfsais-figs-1a.png"
                alt="Safari Marketing Pro Representative"
                className="h-[700px] object-cover ml-30 -mb-1   "
              />
            </div>
          </div>
       </div>
   
      );
};

      export default Craftcontent;
