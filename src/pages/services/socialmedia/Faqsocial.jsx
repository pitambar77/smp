import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
const faqs = [
  {
    question: "What is your content strategy for social media?",
    answer:
      "We curate intent-oriented content for our clients that provides solutions to their target audience. The content and creatives are prepared in such a way that it will intrigue a user to engage.",
  },
  {
    question: "Is itv neccessary to do social media for the safari operators?",
    answer:
      "It surely is! In this era where everyone is on digital media, there is no better way to spread the word about your business than social media and reach the right audience.",
  },
  {
    question: "How much does social media management cost?",
    answer:
      "This entirely depends on what are the client’s requirements from us like, what exactly is the scope of the project, and their expectations from us.",
  },
  {
    question: " Does social media help in bringing customers?",
    answer:
      "Does social media help in bringing customers?Social media gives your safari & tour company the opportunity to connect and engage on a personal level with both current and potential customers. So, no doubt it has great potential to bring customers.",
  },
  {
    question: "How do i optimize my social media profile?",
    answer:
      "Optimizing your social media profile is really essential, if done correctly, you can reach your target audience hugely. There are many ways to optimize starting from even your profile picture. Get in touch with us to explore how you can do it correctly.",
  },
  {
    question:
      "Which marketing chanel is better for my safari business?SEO or social media?",
    answer:
      "While SEO takes a little time to see results, Social Media Marketing For African Tour Operators can boost visibility and traffic quickly. We recommend implementing the balance of both for the best results in driving in more inquiries & bookings for your business.",
  },
  {
    question: "Which social media platforms should my safari brand be on?",
    answer:
      "Different social media platforms cater to different purposes. Identify what you want to achieve from social media marketing for your business and choose your platform wisely.",
  },
];

function Faqsocial() {
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
            <div className="px-6 py-4 bg-white border-t border-gray-300 text-[#787878] text-[17px]">
              <p className="mb-0 whitespace-pre-line">{answer}</p>
            </div>
          )}
        </div>
      );
    });

  return (
   <div className="bg-white pt-[100px] pb-[30px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1125px] mx-auto">
        <h2 className=" text-center  font-[700] text-[40px] capitalize text-[#3467d8] leading-[1.3]   px-[5%] pb-[15px]">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] px-[8px] pt-10  ">
          <div className="flex flex-col  text-start">
            {renderFAQItems(leftColumn, 0)}
          </div>
          <div className="flex flex-col ">
            {renderFAQItems(rightColumn, 1)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqsocial;
