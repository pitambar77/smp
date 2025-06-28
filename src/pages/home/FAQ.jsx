// import React, { useState } from "react";
// import { FaChevronDown, FaChevronRight } from "react-icons/fa";

// const faqs = [
//   {
//     question: "Why should I choose Safari Marketing Pro?",
//     answer:
//       "You should select SMP because we have a unique and inventive marketing strategy that ensures the success of each campaign. It’s been more than 12 years we have been adding value to small to medium size safari business owners making them brand and getting them direct clients.",
//   },
//   {
//     question: "Don't own my Website. What are your Options?",
//     answer:
//       "To be present on the market and meet your client’s directly is one of the great feelings...",
//   },
//   {
//     question: "Can You Provide references?",
//     answer:
//       "Yes, we have 300+ clients who agreed to be contacted for feedback...",
//   },
//   {
//     question: "Can you help us with reporting?",
//     answer:
//       "Yes. We provide monthly analytics reports tailored to your safari business...",
//   },
//   {
//     question: "What I can expect when I choose you for my SAFARI Business?",
//     answer:
//       "We will help you increase bookings like we’ve helped 300+ African safari companies...",
//   },
//   {
//     question: "What are the Advantages of 360° Marketing services?",
//     answer:
//       "360° marketing services help increase brand awareness, loyalty, and bookings...",
//   },
//   {
//     question: "What common Marketing problems Organic Marketing can fix?",
//     answer:
//       "Organic strategies help solve: Unqualified Leads, High Costs, and Low Sales...",
//   },
//   {
//     question: "How do I choose a digital agency for my safari company?",
//     answer:
//       "Know your goals. Then choose an agency with a proven track record, strong portfolio, and client testimonials...",
//   },
//   {
//     question: "How does the payment work and how much does it cost?",
//     answer:
//       "We agree on payment before starting. For websites: 50% upfront, 50% before launch. For marketing: 50% upfront, 50% after 6 months...",
//   },
//   {
//     question: "What are the benefits of hiring a digital marketing agency?",
//     answer:
//       "It lets you focus on growing your safari business while we handle digital growth with reliable, accountable experts...",
//   },
// ];

// function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   // Split into 2 columns
//   const leftColumn = faqs.filter((_, i) => i % 2 === 0); // even index
//   const rightColumn = faqs.filter((_, i) => i % 2 === 1); // odd index

//   // Render function
//   const renderFAQItems = (faqList, colOffset) =>
//     faqList.map(({ question, answer }, i) => {
//       const index = i * 2 + colOffset;
//       return (
//         <div
//           key={index}
//           className="rounded-[10px] border mb-[10px] border-[#ddd] cursor-pointer  overflow-hidden"
//         >

//           <button
//             onClick={() => toggleFAQ(index)}
//             className={`w-full flex justify-between cursor-pointer px-[15px] py-[20px] text-[18px] font-[500] transition-colors duration-300 ease-in-out
//               ${
//                 openIndex === index
//                   ? "hover:bg-[#333] bg-[#f1f1f1]  hover:text-white text-gray-900 "
//                   : "bg-[#f1f1f1] text-gray-900 hover:bg-[#333] hover:text-white"
//               }`}
//           >
//             <span className="text-left ">{question}</span>

//             <span className="ml-4 text-lg font-black">
//               {openIndex === index ? (
//                 <FaChevronDown />
//               ) : (
//                 <FaChevronRight className=" mr-[5px] mt-1 font-bold" />
//               )}
//             </span>
//           </button>
//           {openIndex === index && (
//             <div className="px-6 py-4 text-[#787878] text-[17px]">
//               <p className="mb-0 whitespace-pre-line">{answer}</p>
//             </div>
//           )}
//            </div>

//       );
//     });

//   return (
//     <div className="bg-white pt-[100px] pb-[30px] px-4 sm:px-6 lg:px-8">
//       <div className="max-w-[1125px] mx-auto ">
//         <h2 className="font-[Montserrat] text-center  font-[700] text-[40px] capitalize text-[#3467d8] leading-[1.3] mb-10 px-[20%] pb-[20px]">
//           Frequently Asked Questions Of <br className="sm:hidden" />
//           African Safari Operators
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] px-[8px] ">
//           <div className="flex flex-col  text-start">
//             {renderFAQItems(leftColumn, 0)}
//           </div>
//           <div className="flex flex-col   ">
//             {renderFAQItems(rightColumn, 1)}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FAQ;

//<-------------------------------Responsive-------------------------------------->

import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const faqs = [
  {
    question: "Why should I choose Safari Marketing Pro?",
    answer:
      "You should select SMP because we have a unique and inventive marketing strategy that ensures the success of each campaign. It’s been more than 12 years we have been adding value to small to medium size safari business owners making them brand and getting them direct clients.",
  },
  {
    question: "Don't own my Website. What are your Options?",
    answer:
      "To be present on the market and meet your client’s directly is one of the great feelings...",
  },
  {
    question: "Can You Provide references?",
    answer:
      "Yes, we have 300+ clients who agreed to be contacted for feedback...",
  },
  {
    question: "Can you help us with reporting?",
    answer:
      "Yes. We provide monthly analytics reports tailored to your safari business...",
  },
  {
    question: "What I can expect when I choose you for my SAFARI Business?",
    answer:
      "We will help you increase bookings like we’ve helped 300+ African safari companies...",
  },
  {
    question: "What are the Advantages of 360° Marketing services?",
    answer:
      "360° marketing services help increase brand awareness, loyalty, and bookings...",
  },
  {
    question: "What common Marketing problems Organic Marketing can fix?",
    answer:
      "Organic strategies help solve: Unqualified Leads, High Costs, and Low Sales...",
  },
  {
    question: "How do I choose a digital agency for my safari company?",
    answer:
      "Know your goals. Then choose an agency with a proven track record, strong portfolio, and client testimonials...",
  },
  {
    question: "How does the payment work and how much does it cost?",
    answer:
      "We agree on payment before starting. For websites: 50% upfront, 50% before launch. For marketing: 50% upfront, 50% after 6 months...",
  },
  {
    question: "What are the benefits of hiring a digital marketing agency?",
    answer:
      "It lets you focus on growing your safari business while we handle digital growth with reliable, accountable experts...",
  },
];

function FAQ() {
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
          className="rounded-[10px] border mb-[10px] border-[#ddd] cursor-pointer   overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className={`w-full flex justify-between md:px-[15px] md:py-[20px] px-4 py-2 md:text-[18px]  text-[14px] font-[500] transition-colors duration-300 ease-in-out
              ${
                openIndex === index
                  ? "hover:bg-[#333] bg-[#f1f1f1]  hover:text-white text-gray-900 "
                  : "bg-[#f1f1f1] text-gray-900 hover:bg-[#333] hover:text-white"
              }`}
          >
            <span className="text-left ">{question}</span>

            <span className="ml-4 sm:text-lg text-[14px] font-black">
              {openIndex === index ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight className=" sm:mr-[5px] mt-1 font-bold" />
              )}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 text-[#787878] md:text-[17px] text-[14px]">
              <p className="mb-0 whitespace-pre-line">{answer}</p>
            </div>
          )}
        </div>
      );
    });

  return (
    <div className="bg-white md:pt-[100px] pt-10 md:pb-[30px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1125px] mx-auto ">
        <h2 className="font-[Montserrat] text-center  font-[700] md:text-[40px] text-[24px] capitalize text-[#3467d8] leading-[1.3] md:mb-10  md:px-[20%] pb-8 md:pb-[20px]">
          Frequently Asked Questions Of <br className="sm:hidden" />
          African Safari Operators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-x-[30px] gap-x-[15px] md:px-[8px]  ">
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

export default FAQ;
