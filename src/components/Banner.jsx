import React from 'react';

const Banner = ({ title, description, imageUrl }) => {
  return (
    <section
      className="relative  w-[100%] h-[540px] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="w-[100%] h-[540px] bg-[linear-gradient(to_right,#0057ffd6_40%,#4679c587_80%,rgba(70,121,197,0.33)_100%)]  pt-[13%] px-4 md:px-16">
        <div className="max-w-[1140px] mx-auto text-center">
          <h1 className="text-[48px] font-[600] md:text-5xl  pb-[15px] leading-[1.4]">{title}</h1>
          <p className="text-lg md:text-[18px] font-[500] px-[10%] leading-[1.5]">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
