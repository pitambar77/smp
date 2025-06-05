
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Craftgoogleads = () => {
   const navigate = useNavigate();
  return (
  <section
  className="relative w-full min-h-screen font-[Montserrat] text-white overflow-hidden bg-cover bg-center"
  style={{
    background: `linear-gradient(rgba(52, 103, 216, 0.95), rgba(52, 103, 216, 0.95)), url('https://safarimarketingpro.com/images/wsmtdmyc-bg.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    pad:""
  }}
>

      {/* Content */}
      <div className="relative z-10 max-w-[1250px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 py-16">
        <div className="w-full lg:w-[750px] text-left">
          <h2 className="font-bold text-[40px] leading-[1.3] mt-10 mb-5 capitalize">
            Why SMP Is The Only Choice For Your Safari Campaigns
          </h2>

          <p className="text-[17px] font-medium leading-[1.6] mb-4">
            Advertising through Google ads is one of the best ways to expand your reach, find new
            customers, and grow your <strong>African Safari Business</strong>. However, it’s easy to
            waste money with Google ads, especially when you don’t have a strategy or don’t know how
            to optimize your bids. If you’re serious about adopting Google ads as an advertising
            method, you’ll want to work with a company that knows your safari industry better than
            <strong> African Safari Owners</strong>.
          </p>

          <p className="text-[17px] font-normal leading-relaxed mb-4">
            At <strong>Safari Marketing Pro</strong>, we have a team of experts that has extensive
            experience with Safari search ads, display ads, programmatic efforts, etc. Our mission
            is to help safari operators like you reap the benefits of your
            <strong> African Safari PPC campaign</strong>.
          </p>

          <p className="text-[17px] font-normal leading-relaxed mb-8">
            When we work with clients to develop an effective advertising strategy, we trim the fat
            and create an effective paid search strategy that will get you clicks.
          </p>

          <button 
           onClick={() => {navigate('/lets-grow-business');window.scrollTo(0, 0); }}
          className="uppercase text-white cursor-pointer font-semibold text-[15px] px-6 py-3 bg-[#ff5254] rounded-md hover:bg-black hover:text-[#ff5254] transition-colors duration-300">
            GET INSTANT ROI NOW
          </button>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="absolute bottom-0 right-0 z-0">
        <img
          src="https://safarimarketingpro.com/images/google-ads-woenayb-fig-11a.png"
          alt="Safari Marketing Pro Representative"
          className="w-[450px] h-auto object-contain mr-40"
        />
      </div>
    </section>
  );
};

export default Craftgoogleads;
