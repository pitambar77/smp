import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const faqs = [
  {
    question: " Do you work for safari business before?",
    answer:
      "Over the years, we’ve worked with safari operators in whole African continents dedicatedly. We manage local and national Safari Google Ads campaigns for small medium and luxury safari operators.",
  },
  {
    question: "Can you audit my current Google Ads campaigns?",
    answer:
      "Yes, we’ll conduct an in-depth audit of your Google Ads campaigns to identify areas to improve. Plus, we’ll schedule a Google Ads Consulting session, so you can get all of your questions answered by an expert AdWords consultant.",
  },
  {
    question: " How much does Google Ads cost? ",
    answer: `Our standard cost for google is $6000 per 3 months and increase based on the size and complexity of your safari ad campaigns.

Contact us for a Google Ads quote.`,
  },

  {
    question: " When I can get leads from google ads campaigns?",
    answer:
      "An effective safari Google Ads campaign can start driving traffic, leads and bookings to your site in under 24 hours.",
  },
  {
    question: "Is there a minimum budget?",
    answer: (
      <>
        We do not have a minimum budget requirement for Google Ads management.
        However, if you are interested to spend the amount by your end then we
        are open for it.{" "}
        <strong>
          {" "}
          $1000 for one time ad set up with complete analysis and $500/month as
          monitor and management fee.
        </strong>
      </>
    ),
  },
  {
    question:
      "What I can expect when i choose you for my google ads campaigns?",
    answer: (
      <>
        When we work for Google ad campaigns, You Can Expect:
        <li>Increased leads, inquiries and traffic.</li>
        <li>Targeting for your most qualified and relevant customers.</li>
        <li>
          Total transparency and control over your budget. No hidden fees!
        </li>
        <li>Results you can actually see in as little as 24 hours!</li>
        <li>24/7 assistance with your safari campaigns!</li>
        <li>In-depth reports for strengthening your next strategy!</li>
      </>
    ),
  },
  {
    question: "Who will I be working with?",
    answer:
      "Your main point of contact will be a dedicated Google Ads Manager who is responsible for the research, planning, and performance of your account. Plus, our founder MR. CHIN PAL for all of our Google Ads projects for quality.",
  },
];

function Faqgoogleads() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split into 2 columns
  const leftColumn = faqs.filter((_, i) => i % 2 === 0); // even index
  const rightColumn = faqs.filter((_, i) => i % 2 === 1); // odd index

  // Render function
  const renderFAQItems = (faqList, colOffset) =>
    faqList.map(({ question, answer }, i) => {
      const index = i * 2 + colOffset;
      return (
        <div
          key={index}
          className="rounded-[10px] border mb-[10px] border-[#ddd] cursor-pointer  overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className={`w-full flex justify-between cursor-pointer sm:px-[15px] sm:py-[20px] px-[10px] py-[10px] sm:text-[18px] text-[14px] font-[500] transition-colors duration-300 ease-in-out
                 ${
                   openIndex === index
                     ? "hover:bg-[#333] bg-[#f1f1f1]  hover:text-white text-gray-900 "
                     : "bg-[#f1f1f1] text-gray-900 hover:bg-[#333] hover:text-white"
                 }`}
          >
            <span className="text-left ">{question}</span>

            <span className="ml-4 text-lg font-black">
              {openIndex === index ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight className=" mr-[5px] mt-1 font-bold" />
              )}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 text-[#787878] sm:text-[17px] text-[14px]">
              <p className="mb-0 whitespace-pre-line">{answer}</p>
            </div>
          )}
        </div>
      );
    });

  return (
    <div className="bg-white pt-[100px] sm:pb-[30px] pb-[10px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1125px] mx-auto ">
        <h2 className=" text-center  font-[700] sm:text-[40px] text-[24px] capitalize text-[#3467d8] leading-[1.3]  sm:mb-10 mb-4 sm:px-[20%] sm:pb-[20px] pb-[10px]">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-x-[30px] px-[8px] ">
          <div className="flex flex-col  text-start">
            {renderFAQItems(leftColumn, 0)}
          </div>
          <div className="flex flex-col   ">
            {renderFAQItems(rightColumn, 1)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqgoogleads;
