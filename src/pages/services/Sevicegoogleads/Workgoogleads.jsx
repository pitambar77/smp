import React, { useState } from "react";

const steps = [
  {
    number: "1",
    text: <>Strategies that work</>,
    color: "#ff4c4c",
  },
  {
    number: "2",
    text: <>Intent keyword research </>,
    color: "#ff4c4c",
  },
  {
    number: "3",
    text: <>Creating great ad copies </>,
    color: "#ff4c4c",
  },
  {
    number: "4",
    text: <>Great landing pages</>,
    color: "#ff4c4c",
  },
  {
    number: "5",
    text: <>Transparent campaign management</>,
    color: "#ff4c4c",
  },
  {
    number: "6",
    text: <>Detailed reporting </>,
    color: "#ff4c4c",
  },
];

const WorkProcessgoogleads = () => {

  const [touchedIndex, setTouchedIndex] = useState(null);
    
  
    const handleTouch = (index) => {
      setTouchedIndex(index);
    };

  const handleScrollToStep = (number) => {
    const el = document.getElementById(`step-${number}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section className="bg-[#f4f4f4] text-center px-4 sm:py-16 py-[40px]">
      {/* Heading */}
      <div className="max-w-[1140px] mx-auto sm:mt-6 mb-6">
        <h2 className="text-[24px] sm:text-5xl font-bold text-[#3467d8] mb-2 capitalize sm:leading-[1.5]">
          Crafting a Distinctive Impact with Our Exceptional Work
        </h2>

        {/* Subheadings */}
        <p className="text-xl mt-5 mb-5 text-[#787878]">
          Reach Your Target Market With Ads That Convert
        </p>
        {/* <p className="text-xl text-[#787878] mb-6">Identify the goal of your Safari Website</p> */}

        {/* Description */}

        <p className=" float-left  text-[#787878] text-[17px]   sm:text-start text-justify leading-relaxed sm:px-[15px] pb-[15px] ">
          As every safari & tour business requires unique attention for running
          an ad campaign, we prepare tailor made strategies that would result in
          great returns along with amazing revenue generations.
        </p>
        <p className=" text-[#787878] text-[17px]   sm:text-start text-justify leading-relaxed mb-12 sm:px-[15px]">
          With doing a deep analysis like knowing the keywords that would give
          us a great exposure to preparing world-class landing pages that would
          convert, we help you in designing great ad campaigns
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 max-w-[1140px] mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              onTouchStart={() => handleTouch(index)} // for mobile
              className="flex  text-left gap-4 px-[15px] cursor-pointer capitalize items-center"
              onClick={() => handleScrollToStep(step.number)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleScrollToStep(step.number);
              }}
            >
              {/* Number */}
              <span
                 className={`sm:text-[80px] text-[60px] hover:text-red-500 font-semibold leading-[1em] relative -left-1 ${
                  touchedIndex === index ? "text-red-500" : " "
                }`}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  // color: 'black',
                  display: "block",
                  textAlign: "left",
                  position: "relative",
                  marginTop: "-2%",
                }}
              >
                {step.number}
              </span>

              {/* Text */}
              <div
               onTouchStart={() => handleTouch(index)}
                className={` sm:text-[22px]  items-center  font-semibold leading-snug text-[20px] text-left hover:text-blue-800 ${
                  touchedIndex === index ? "text-blue-800" : "text-red-500 "
                }`}
                // style={{ color: step.color }}
              >
                {step.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessgoogleads;
