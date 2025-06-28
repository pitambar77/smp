import React, { useState } from "react";

const steps = [
  {
    number: "1",
    text: <>Identify The Goal Of Your Safari Website</>,
    color: "#ff4c4c",
  },
  {
    number: "2",
    text: <>Collect Information, Brainstorm & Analyze Sketches</>,
    color: "#ff4c4c",
  },
  {
    number: "3",
    text: (
      <>Design A World-Class Safari Website That Enhances Brand Credibility</>
    ),
    color: "#ff4c4c",
  },
  {
    number: "4",
    text: <>Add Value To Your Destinations By Creating Amazing Content</>,
    color: "#ff4c4c",
  },
  {
    number: "5",
    text: <>Now It’s Time To Test Your Website</>,
    color: "#ff4c4c",
  },
  {
    number: "6",
    text: <>Time To Present Your Safari Website To Your Customers</>,
    color: "#ff4c4c",
  },
];

const WorkProcess = () => {
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
    <section className="bg-[#f4f4f4] text-center ">
      <div className="sm:py-[100px] py-[50px]">
        {/* Heading */}
        <h2 className="text-[24px] sm:text-5xl font-bold text-[#3467d8] sm:mb-5 mb-[10px]">
          The Way We Work, Makes Us Different
        </h2>

        {/* Subheadings */}
        <p className="text-[22px] text-[#787878]">
          Custom Website Design Process
        </p>
        <p className="text-[22px] text-[#787878] sm:mb-6 mb-2">
          Identify the goal of your Safari Website
        </p>

        {/* Description */}
        <p className="max-w-6xl mx-auto text-[#787878] text-[17px] text-center leading-relaxed mb-12 sm:px-0 px-4">
          With everyone having an online presence, it’s a difficult job to stand
          out as a safari website. With our years of expertise in the safari
          industry, we have come out with these 6 points to have a superior
          website for your safari & tour brand.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-10 gap-5  px-4 max-w-[1140px] sm:px-[15px] mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              onTouchStart={() => handleTouch(index)} // for mobile
              className="flex items-start text-left gap-4 cursor-pointer"
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
                className={`sm:text-[22px]  items-center  font-semibold leading-snug text-[16px] text-left hover:text-blue-800 ${
                  touchedIndex === index ? "text-blue-800" : "text-red-500 "
                }`}
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

export default WorkProcess;
