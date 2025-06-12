import React from "react";

const steps = [
  {
    number: "1",
    text: <>Competitor Research </>,
    color: "#ff4c4c",
  },
  {
    number: "2",
    text: <>Intent keyword research </>,
    color: "#ff4c4c",
  },
  {
    number: "3",
    text: <>Performing Content & Technical Audit</>,
    color: "#ff4c4c",
  },
  {
    number: "4",
    text: <>Give them what they want</>,
    color: "#ff4c4c",
  },
  {
    number: "5",
    text: <>Identify & Qualify Backlinks </>,
    color: "#ff4c4c",
  },
  {
    number: "6",
    text: <>Transparent Reporting </>,
    color: "#ff4c4c",
  },
];

const Work = () => {
  const handleScrollToStep = (number) => {
    const el = document.getElementById(`step-${number}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section className="bg-white text-center px-4 py-16 font-[Montserrat]">
      {/* Heading */}
      <div className="max-w-[1140px] mx-auto mt-6 mb-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#3467d8] mb-2 leading-[1.5]">
          The Way We Work, Makes Us Different{" "}
        </h2>

        {/* Subheadings */}
        <p className="text-xl mt-5 mb-5 text-[#5e5e5e]">
          Your First Step Towards Digital Success
        </p>

        <p className=" text-[#5e5e5e] text-[17px]  text-start leading-relaxed mb-12">
          We understand your safari & tour business needs to be more visible on
          the search engine result page to attract more potential customers and
          opportunities that would convert. With years of trial & test, we come
          up with some ways that would give you the best results by implementing
          SEO.
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
                className="text-[80px] hover:text-red-500 font-semibold leading-[1em] relative -left-1"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  display: "block",
                  position: "relative",
                  marginTop: "-2%",
                }}
              >
                {step.number}
              </span>

              {/* Text */}
              <div
                className={`text-xl font-semibold text-red-500 leading-snug text-[22px] text-left mt-3 hover:text-blue-500 ${step.color}`}
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

export default Work;
