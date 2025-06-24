import React from 'react';
import { IoMdArrowRoundUp } from 'react-icons/io';
import CountUp from 'react-countup';

const StatsBlock = ({ percentage, label }) => {
  const numericValue = parseFloat(percentage); // e.g., 40 from "40%"

  return (
    <div className="">
      <div className="flex items-start ">
        <h3 className="sm:text-[90px] text-[60px] font-bold text-white">
          <CountUp end={numericValue} duration={6} suffix="%" />
        </h3>
        <span className="sm:text-[90px] text-[80px]  font-bold mt-5 text-white pl-5">
          <IoMdArrowRoundUp />
        </span>
      </div>
      <h3 className="text-[25px] sm:text-[35px]  font-bold text-white leading-10 -mt-6">
        INCREASE
      </h3>
      <p className="text-white font-semibold">
        <strong>{label}</strong>
      </p>
    </div>
  );
};

export default StatsBlock;
