import React from 'react';
 
const Searchers= () => {
  return (
    <section className="bg-[#F0F0F0] py-20 px-4 font-[Montserrat]">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center   -mb-18 mt-6">
        {/* Left Side: Stat */}
        <div className="border-l-4 border-[#ff4e4e]  pl-6 mb-58">
          <h2 className="text-[#2f6bd7] text-[48px] sm:text-5xl font-[700] leading-tight">
            75% of searchers <br /> never go past <br /> the first page of <br /> search results.
          </h2>
        </div>
 
        {/* Right Side: Paragraphs + Button */}
        <div>
          <p className="text-[#787878] text-[18px] leading-relaxed mb-6">
            If your African Safari Website is not showing up on the first page of Google when someone
            makes a search regarding the kind of services you provide, then you might be putting all
            your <strong className="font-semibold">SEO Marketing For African Safari</strong> efforts wrong.
          </p>
 
          <p className="text-[#787878] text-[18px] leading-relaxed mb-8">
            You are losing on a great load of potential customers and a huge reach that can make your
            <strong className="font-semibold"> African Safari Website</strong> win leading to long-term exponential growth.
          </p>
 
          {/* <button className="bg-[#ff4e4e] text-white font-semibold text-sm px-6 py-3 rounded hover:bg-red-500 transition">
            GET YOUR FREE INITIAL ANALYSIS
          </button> */}
          <div className=" text-[16px]">
             
                <button className="bg-[#FF5254] text-white font-semibold  text-[16px] hover:bg-black hover:text-red-500 transition-colors  duration-300 min-w-[148px] rounded px-8 py-3">
                  <span>GET YOUR FREE INITIAL ANALYSIS</span>
                </button>
      
            </div>
        </div>
      </div>
    </section>
  );
};
 
export default Searchers;
 
 