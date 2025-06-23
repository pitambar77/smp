import React from "react";

import CardCarousel from "../taituTour/CardCarousel";

const CaroselSection = () => {
  return (
    <div className=" w-full mt-24 bg-[#011833] z-10 ">
      <div className=" w-full  bg-[#ff5254]">
        
        <div className=" max-w-[1140px] mx-auto sm:py-[100px] py-[40px]">
          
          <div className=" text-center">
            <h1 className=" w-full sm:text-[44px] text-[24px] font-[700] text-white py-[20px] sm:px-0 px-4 ">
              Explore Success Stories
            </h1>
            <h2 className=" sm:text-[24px] text-[18px] font-[600] text-white ">
              Team Up With Safari Marketing Pro – The Next Amazing Case Study
              Could Be Yours!
            </h2>
            <p className=" sm:text-[17px] text-[15px] font-[500] leading-[1.7] text-white pb-[50px] pt-[3%] sm:px-[10px] px-4 sm:text-center text-justify">
              We bring innovative thinking, an adaptive methodology, strong
              ethics, and years of expertise to marketing and web design in the
              safari and tour industry. Our team has won awards for our web
              design expertise and accolades for our effective SEO strategies.
              Our clients know that when they give us a call, we'll pick up the
              phone and provide them with the time and information they need.
              Our comprehensive approach to online marketing and web design
              results in a robust and lucrative online presence for each of our
              clients. Click on any project below to see the results!
            </p>
          </div>
          <CardCarousel />
        </div>
      </div>
    </div>
  );
};

export default CaroselSection;
