import React from "react";

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
  const handleScrollToStep = (number) => {
    const el = document.getElementById(`step-${number}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section className="bg-[#f4f4f4] text-center px-4 py-16 font-[Montserrat]">
      {/* Heading */}
      <div className="max-w-[1140px] mx-auto mt-6 mb-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#3467d8] mb-2 leading-[1.5]">
          Crafting a Distinctive Impact with Our Exceptional Work
        </h2>

        {/* Subheadings */}
        <p className="text-xl mt-5 mb-5 text-[#5e5e5e]">
          Reach Your Target Market With Ads That Convert
        </p>
        {/* <p className="text-xl text-[#5e5e5e] mb-6">Identify the goal of your Safari Website</p> */}

        {/* Description */}

        <p className=" float-left  text-[#5e5e5e] text-[17px]  text-start leading-relaxed ">
          As every safari & tour business requires unique attention for running
          an ad campaign, we prepare tailor made strategies that would result in
          great returns along with amazing revenue generations.
        </p>
        <p className=" text-[#5e5e5e] text-[17px]  text-start leading-relaxed mb-12">
          With doing a deep analysis like knowing the keywords that would give
          us a great exposure to preparing world-class landing pages that would
          convert, we help you in designing great ad campaigns
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
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
                className="text-[80px]  hover:text-red-500 font-semibold leading-[1em] relative -left-1"
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
                className={`text-xl text-red-500 items-center font-semibold leading-snug text-[22px] text-left   hover:text-blue-500 ${step.color}`}
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
