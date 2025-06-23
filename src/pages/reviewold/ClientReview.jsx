import React from "react";
import Review from "../../components/Review";

const ClientReview = () => {
  return (
    <div className=" w-full pt-[80px] pb-[10px]">
      <div className=" max-w-[1172px] mx-auto  items-center justify-center text-center">
        <h1 className=" capitalize   md:text-[48px] text-2xl text-[#3467d8] font-[700] px-[10%] pb-[10px]  leading-[1.3] ">
          Reviews From one of the worlds most trusted partners
        </h1>
        <p className=" px-4 py-4  text-cente text-[#787878] text-[22px] font-[400]">
          Don’t just take our word for it. See what our clients are saying.
        </p>
      </div>
      <div className=" max-w-[1140px] mx-[80px]">
        <Review />
      </div>
    </div>
  );
};

export default ClientReview;
