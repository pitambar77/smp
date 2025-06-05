 
import React from 'react';
 
const steps = [
  {
    number: '1',
    text: (
      <>
        Identify The Goal Of Your <br /> Safari Website
      </>
    ),
    color: '#ff4c4c',
  },
  {
    number: '2',
    text: (
      <>
        Collect Information, <br /> Brainstorm & Analyze <br /> Sketches
      </>
    ),
    color: '#ff4c4c',
  },
  {
    number: '3',
    text: (
      <>
        Design A World-Class <br /> Safari Website That <br /> Enhances Brand <br /> Credibility
      </>
    ),
    color: '#ff4c4c',
  },
  {
    number: '4',
    text: (
      <>
        Add Value To Your <br /> Destinations By Creating <br /> Amazing Content
      </>
    ),
    color: '#ff4c4c',
  },
  {
    number: '5',
    text: (
      <>
        Now It’s Time To Test <br /> Your Website
      </>
    ),
    color: '#ff4c4c',
  },
  {
    number: '6',
    text: (
      <>
        Time To Present Your <br /> Safari Website To Your <br /> Customers
      </>
    ),
    color: '#ff4c4c',
  },
];
 
const WorkProcess = () => {
  const handleScrollToStep = (number) => {
    const el = document.getElementById(`step-${number}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
 
  return (
    <section className="bg-[#f4f4f4] text-center font-[Montserrat]">
      <div className="py-[100px]">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-[#3467d8] mb-5">
          The Way We Work, Makes Us Different
        </h2>
 
        {/* Subheadings */}
        <p className="text-[22px] text-[#5e5e5e]">Custom Website Design Process</p>
        <p className="text-[22px] text-[#5e5e5e] mb-6">
          Identify the goal of your Safari Website
        </p>
 
        {/* Description */}
        <p className="max-w-6xl mx-auto text-[#5e5e5e] text-[17px] text-center leading-relaxed mb-12">
          With everyone having an online presence, it’s a difficult job to stand out as a safari
          website. With our years of expertise in the safari industry, we have come out with
          these 6 points to have a superior website for your safari & tour brand.
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
                if (e.key === 'Enter') handleScrollToStep(step.number);
              }}
            >
              {/* Number */}
              <span
                className="text-[80px] hover:text-red-500 font-semibold leading-[1em] relative -left-1"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  display: 'block',
                  textAlign: 'left',
                  position: 'relative',
                  marginTop: '-2%',
                }}
              >
                {step.number}
              </span>
 
              {/* Text */}
              <div
                className={`text-xl text-red-500 items-center  font-semibold leading-snug text-[22px] text-left hover:text-blue-800`}
                
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
 
 