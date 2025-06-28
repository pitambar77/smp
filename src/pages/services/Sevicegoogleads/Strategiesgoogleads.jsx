import React from "react";
import { useNavigate } from "react-router-dom";

const Step = ({ id, number, title, children, isFirst = false }) => {
  return (
    <div id={id} className="sm:pt-12 pt-6  ">
      {!isFirst && (
        <div className="max-w-[1140px] mx-auto">
          <div className="border-t border-gray-300 w-full" />
        </div>
      )}

      {/* Step content */}
      <div className="max-w-[1140px] mt-10 sm:mb-0 mb-6 mx-auto px-4 grid md:grid-cols-12 gap-6 items-start">
        {/* Left side */}
        <div className="md:col-span-4">
          <h3 className="sm:text-2xl text-[18px] font-bold text-[#0b2239]">STEP {number}:</h3>
          <h4 className="mt-2 text-white sm:text-2xl text-[18px] font-semibold leading-snug whitespace-pre-line">
            {title}
          </h4>
        </div>

        {/* Right side */}
        <div className="md:col-span-8 text-white space-y-4 sm:text-[17px] text-[14px]">
          {children}
        </div>
      </div>
    </div>
  );
};

const Strategiesgoogleads = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#ff5254] ">
      {/* Step 1 */}
      <Step
        id="step-1"
        number={1}
        isFirst={true}
        title={`Strategies That Work for You
`}
      >
        <p className=" ">
          Every safari business is different with its own needs. So, there’s no
          such thing as a one-size-fits-all strategy. We’ll analyze{" "}
          <strong className="font-bold">
            your market size, and market trends and also listen to your concerns
            so we can tailor-made a strategy
          </strong>{" "}
          that works only for your safari company.{" "}
        </p>
      </Step>

      {/* Step 2 */}
      <Step
        id="step-2"
        number={2}
        title={`Intent Keyword Research`}
      >
        <p className=" ">
          So, if you want to succeed with your <span className=" font-semibold"> African Safari Google Ads
          Campaigns </span> today, then search Intent needs to be a big part of your
          approach. At Safari Marketing Pro, <span className=" font-semibold"> we know the customer’s intent
          behind target keywords can make your safari campaign more effective
          and efficient</span>.
        </p>
        
      </Step>

      {/* Step 3 */}
      <Step
        id="step-3"
        number={3}
        title={`Creation Of Effective Safari Ad Copy
`}
      >
        <p className=" ">
          It’s the{" "}
          <strong className="font-semibold">
            only bridge between your safari landing pages and all the potential
            customers searching online for African Safaris.
          </strong>
          So before creating ad copy, the first thing we do is define the goal
          of the copy which will make the customers book with you.
        </p>
      </Step>

      {/* Step 4 */}
      <Step
        id="step-4"
        number={4}
        title={`Safari Landing Page That Covert Bookings
`}
      >
        <p className=" ">
          We create your safari landing pages with one intent to
          <strong className="font-semibold">
            — get more inquiries and bookings.{" "}
          </strong>
          So once someone lands on your safari landing page, it should be clear
          what you want them to do —
          <strong className="font-semibold">
            submit their info to your lead form.
          </strong>
        </p>
      </Step>

      {/* Step 5 */}
      <Step
        id="step-5"
        number={5}
        title={`Transparent Safari Campaign Management Pricing
`}
      >
        <p className=" ">
          At Safari Marketing Pro, we always aim to form a strong working
          relationship with our clients.
          <strong className="font-semibold">
            This is why we’re all about transparency.{" "}
          </strong>
          We work with your goals in mind every step of the way, so you get
          results you can actually see.
        </p>
      </Step>

      {/* Step 6 */}
      <Step
        id="step-6"
        number={6}
        title={`Detailed Reporting
`}
      >
        <p className=" leading-[1.6] pr-6">
          Safari Marketing Pro is all about involving you with your customers.
          Our{" "}
          <span className=" font-[600]">
            {" "}
            Google Ad Marketing For African Safari Operator{" "}
          </span>{" "}
          includes{" "}
          <span className=" font-[600]">
            {" "}
            comprehensive data tracking tools{" "}
          </span>{" "}
          that will let us know how well your campaign is performing. You’ll
          know everything you need to know and{" "}
          <span className=" font-[600]">
            {" "}
            we’ll give educated suggestions on how to proceed{" "}
          </span>
          .
        </p>
      </Step>
      <div className="sm:px-[10px] sm:py-[10px] text-center  mt-8 sm:pb-[100px] pb-[30px] ">
        <button
          onClick={() => {
            navigate("/lets-grow-business");
            window.scrollTo(0, 0);
          }}
          className="bg-[#011833] cursor-pointer text-white sm:text-[16px] text-[14px] uppercase font-semibold px-[10px] sm:py-[12px] py-[10px] rounded-[4px] border border-[#ff5254] hover:bg-[#ff5254] hover:text-white ease-in duration-300"
        >
          Get Quick Inquiries Now
        </button>
      </div>
    </div>
  );
};

export default Strategiesgoogleads;
