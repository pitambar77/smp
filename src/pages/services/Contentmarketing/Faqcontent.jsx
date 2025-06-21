import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
const faqs = [
  {
    question: `How do you structure your writing process?`,
    answer: `Before starting out the writing process, we thoroughly understand the requirements of our client. After that, we prepare high-quality content by following the steps of research, drafting, revising, editing, and proofreading.`,
  },
  {
    question: `Will you be providing original content?`,
    answer: `Yes, we will be coming up with well-researched content that will be hugely engaging for your potential audience.`,
  },
  {
    question: `Is keyword research included in your content writing package?`,
    answer: `Yes, the initial part of our content-writing process includes detailed keyword research that will help your content get to the top of search engine rankings.`,
  },
  {
    question: `Will the content be SEO friendly?`,
    answer: `Definitely! We take care of all the SEO aspects starting from distributing keywords to optimizing the content that will make your brand more visible and reachable.`,
  },

  {
    question: `What is the cost of your content writing services?`,
    answer: `We offer a range of content writing services, and the cost depends on the requirements of the client. It can vary depending on the kind of content, the word limit, and various other factors. Get in touch with our team to get an accurate quote.`,
  },
  {
    question: `What requirements do we need to provide before starting the process?`,
    answer: `We will need a deep understanding of your project like the kind of pages you want to have, the scope of your budget, and the period within which the project should be completed. We always welcome any additional suggestions from the client side.`,
  },
];

function Faqwebdesign() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Manually split: first 4 to left, rest to right
  const leftColumn = faqs.slice(0, 4);
  const rightColumn = faqs.slice(4);

  // Render function
  const renderFAQItems = (faqList, colOffset) =>
    faqList.map(({ question, answer }, i) => {
      const index = i + colOffset;
      return (
        <div
          key={index}
          className="rounded-[10px] border mb-[10px] border-[#ddd] cursor-pointer  overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className={`w-full flex justify-between cursor-pointer px-[15px] py-[20px] text-[18px] font-[500] transition-colors duration-300 ease-in-out
              ${
                openIndex === index
                  ? "hover:bg-[#333] bg-[#f1f1f1]  hover:text-white text-gray-900 "
                  : "bg-[#f1f1f1] text-gray-900 hover:bg-[#333] hover:text-white"
              }`}
          >
            <span className="text-left">{question}</span>
            <span className="ml-4 text-lg font-extrabold">
              {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 text-[#787878] text-[17px]">
              <p className="mb-0 whitespace-pre-line">{answer}</p>
            </div>
          )}
        </div>
      );
    });

  return (
    <div className="bg-white pt-[100px] pb-[30px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1125px] mx-auto">
        <h2 className="font-[Montserrat] text-cente mt-13 font-[700] text-[40px] capitalize text-[#3467d8] leading-[1.3] mb-10 px-[20%] pb-[20px]">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] px-[8px] ">
          <div className="flex flex-col gap-4 text-start">
            {renderFAQItems(leftColumn, 0)}
          </div>
          <div className="flex flex-col ">{renderFAQItems(rightColumn, 4)}</div>
        </div>
      </div>
    </div>
  );
}

export default Faqwebdesign;
