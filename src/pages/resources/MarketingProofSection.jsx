import React, { useState } from "react";
 
const cards = [
  {
    id: 1,
    image:
      "https://safarimarketingpro.com/images/TARGETED%20LEADS%20&%20CONVERSIONS%20AS%20AN%20AFRICAN%20SAFARI%20&%20TOUR%20OPERATOR%20YOUR%20GUIDE%20TO%20DRIVING%20MORE%20LI.png",
  },
  {
    id: 2,
    image:
      "https://safarimarketingpro.com/images/REASONS%20WHY%20BUILDING%20A%20SAFARI%20&%20TOUR%20BRAND%20MATTERS%20LI.png",
  },
  {
    id: 3,
    image:
      "https://safarimarketingpro.com/images/5%20REASONS%20WHY%20VISUALLY%20APPEALING%20CONTENT%20IS%20ESSENTIAL%20FOR%20AFRICAN%20SAFARI%20&%20TOUR%20OPERATORS%20LI.png",
  },
  {
    id: 4,
    image:
      "https://safarimarketingpro.com/images/FIND%20THE%20RIGHT%20KEYWORDS%20WITH%20INTENT%20FOR%20YOUR%20AFRICAN%20SAFARI%20&%20TOUR%20WEBSITE%20LI.png",
  },
  {
    id: 5,
    image:
      "https://safarimarketingpro.com/images/HOW%20TO%20ENSURE%20YOUR%20SAFARI%20&%20TOUR%20WEBSITE%20BLOG%20AND%20SEO%20ARE%20WORKING%20TOGETHER%20LI.png",
  },
  {
    id: 6,
    image:
      "https://safarimarketingpro.com/images/7%20Tips%20to%20optimize%20your%20destination%20web%20pages%20for%20every%20African%20safari%20&%20tour%20operator%20LI.png",
  },
    {
    id: 7,
    image:
      "https://safarimarketingpro.com/images/WHAT%20SHOULD%20BE%20YOUR%20STRATEGY%20TO%20CHOOSE%20THE%20RIGHT%20KEYWORD%20FOR%20YOUR%20AFRICAN%20SAFARI%20BUSINESS%20LI.png",
  },
  {
    id: 8,
    image:
      "https://safarimarketingpro.com/images/SHOCKING%20STATS%20FOR%202023%20THAT%20EVERY%20SAFARI%20&%20TOUR%20OPERATOR%20NEEDS%20TO%20HEAR%20LI.png",
  },
  {
    id: 9,
    image:
      "https://safarimarketingpro.com/images/WHAT%20SAFARI%20AND%20TOUR%20CLIENTS%20BUY%20LI.png",
  },  {
    id: 10,
    image:
      "https://safarimarketingpro.com/images/HOW%20CAN%20I%20MAKE%20MY%20SAFARI%20WEBSITE%20STAND%20OUT%20FROM%20THE%20COMPETITOR'S%20WEBSITE_LINKEDIN.png",
  },
  {
    id: 11,
    image:
      "https://safarimarketingpro.com/images/UNDERSTANDING%20THE%20KEYWORD%20MATCH%20TYPE%20WHILE%20RUNNING%20A%20GOOGLE%20ADS%20CAMPAIGN%20LI.png",
  },
  {
    id: 12,
    image:
      "https://safarimarketingpro.com/images/7%20Tips%20to%20optimize%20your%20destination%20web%20pages%20for%20every%20African%20safari%20&%20tour%20operator%20LI.png",
  },  {
    id: 13,
    image:
      "https://safarimarketingpro.com//images/TARGETING-SPECIFIC-GEOGRAPHIC.png",
  },
  {
    id: 5,
    image:
      "https://safarimarketingpro.com/images/8%20Key%20metrics%20to%20measure%20the%20success%20of%20a%20ppc%20campaign%20for%20your%20African%20safari%20business%20LI.png",
  },
  {
    id: 6,
    image:
      "https://safarimarketingpro.com/images/HOW%20WE%20WRITE%20GREAT%20CONTENT%20FOR%20THE%20safari%20and%20tour%20operators%20that%20keep%20us%20at%20the%20top%20LI.png",
  },
];
 
const MarketingProofSection = () => {
  const [showForm, setShowForm] = useState(false);
 
  return (
    <div className="py-16 px-6 bg-white">
      {/* Header */}
      <div className="text-center mt-5 mb-12 max-w-[1140px] mx-auto">
       
        <h2 className="font-[Montserrat] font-bold text-[40px] text-center capitalize text-[#3467d8] leading-[1.3] m-0 px-[15%]">
  Let Us PROVE It To You
</h2>
<p className="font-[Montserrat] font-normal text-[18px] text-center text-[#787878] leading-normal -mb-5 px-[30px] py-[15px]">
  Find out how we can accelerate your Booking flow online
</p>
 
      </div>
 
      {/* Cards */}
<div className="grid -mb-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1140px] mx-auto pr-8">
  {cards.map((card, index) => (
    <div
      key={index}
      onClick={() => setShowForm(true)}
      className="cursor-pointer transition transform hover:scale-105"
    >
      <img
        src={card.image}
        alt={`Card ${card.id}`}
        className="rounded  w-full h-auto"
      />
    </div>
  ))}
</div>
{showForm && (
  <div className="fixed  inset-0 z-50 flex items-center justify-center bg-black/60   font-[Montserrat]">
    <div className="relative w-[90%] max-w-xl bg-[linear-gradient(0deg,_#427fdf_0%,_#396bb1_100%)] rounded-lg shadow-lg">
      {/* Close Button */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-2 right-2 text-white bg-red-600 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold"
      >
        ✕
      </button>
 
      {/* Heading */}
      <div className=" text-white text-center py-6 px-4 rounded-t-lg">
        <h3 className="text-lg sm:text-xl font-semibold leading-snug">
          TARGETING SPECIFIC GEOGRAPHIC LOCATIONS <br />
          IN A PPC CAMPAIGN FOR YOUR AFRICAN SAFARI BUSINESS
        </h3>
      </div>
 
      {/* Form */}
      <form className="p-6 sm:p-8 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name*"
            className="p-3 border rounded w-full text-black bg-white"
          />
          <input
            type="email"
            placeholder="Email Address*"
            className="p-3 border rounded w-full text-black bg-white"
          />
        </div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select className="p-3 border rounded w-full text-black bg-white">
            <option>Country Code</option>
            <option>+254</option>
            <option>+255</option>
            <option>+256</option>
            <option>+27</option>
          </select>
          <input
            type="tel"
            placeholder="Phone*"
            className="p-3 border rounded w-full text-black bg-white"
          />
        </div>
 
        <input
          type="text"
          placeholder="Website*"
          className="p-3 border rounded w-full text-black bg-white"
        />
 
        {/* CAPTCHA Simulation */}
        <div className="flex bg-white items-center gap-2 border rounded p-3">
          <input type="checkbox" className="w-5 h-5" />
          <span className="text-black  text-sm">I'm not a robot</span>
          <img
            src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
            alt="reCAPTCHA"
            className="ml-auto w-6 h-6"
          />
        </div>
 
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded text-center"
        >
          GET MY FREE QUOTE
        </button>
      </form>
    </div>
  </div>
)}
 
 
     
         
       
    </div>
  );
};
 
export default MarketingProofSection;