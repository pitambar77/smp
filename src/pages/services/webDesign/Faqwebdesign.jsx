import React, { useState } from 'react';
 
const faqs = [
  { question: 'Do You use pre-made templates?', answer: 'No, we build designs from scratch to the exact business needs of our valued customers. The site will be 100% Unique and maintain all the world class standard.' },
  { question: "Where can you find images for my safari website?", answer: 'Whatever good images you have with you can share those, otherwise we will collect from google and make some changes by using effects, and so the there will be no Copyrights on it.' },
  { question: 'How does your design process work?', answer: '1st we will do a structure of the whole website share with your team then we will brief it properly on why we must be needed to have these kinds of stuff on the website and all.Then once the structure approves us do a world-class design of the layout where the website will look 1000% unique in looks and great experience then we will share it with you then again will take your feedback for it and again we will be open to your suggestions.We will work with your choice and also our experience which layout work what audience we target what adds value to the visitors. It is 100% collaboration between your expertise in this field and our technical value that will bring amazing growth to the website and user experience.' },
  { question: 'Do i get pages in my websiteg?', answer: 'No, there is not any limitation for the no of webpages, you can get unlimited webpage according to your opinion,' },
  { question: ' I already have a website ,can you update it?', answer: 'f you have a website which is out of date and not generating sales, we can help to redesign it as per current tour industry website design trends. The price and timeline for such a project can be decided after thorough review of your existing website.' },
  { question: 'What is the cost of using your solution?', answer: 'SMP offers budget, mid-range and luxury solutions to the Safari and tour industry. And the cost depends on your requirements like (Destinations/ Goals / Services you are offering) so connect with the team in order to get an accurate quote.' },
  { question: 'I already have a website,can you update it?', answer: 'If you have a website which is out of date and not generating sales, we can help to redesign it as per current tour industry website design trends. The price and timeline for such a project can be decided after thorough review of your existing website.' },
 
];
 
function Faqwebdesign() {
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
        <div key={index} className="rounded-lg border border-gray-300 overflow-hidden">
          <button
            onClick={() => toggleFAQ(index)}
            className={`w-full flex justify-between items-center px-6 py-4 text-[18px] font-[500] transition-colors duration-300 ease-in-out
              ${openIndex === index ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900 hover:bg-[#333] hover:text-white'}`}
          >
              <span className="text-left">{question}</span>
 
            <span className="ml-4 text-lg font-extrabold">
              <i className={`fa-solid fa-${openIndex === index ? 'chevron-down' : 'chevron-right'}`}></i>
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
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1125px] mx-auto ">
        <h2 className="font-[Montserrat] text-center  font-[700] text-[40px] capitalize text-[#3467d8] leading-[1.3] mb-10 px-[20%] pb-[20px]">
          Frequently Asked Questions Of <br className="sm:hidden" />
          African Safari Operators
        </h2>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
          <div className="flex flex-col gap-4 text-start">
            {renderFAQItems(leftColumn, 0)}
          </div>
          <div className="flex flex-col gap-4">
            {renderFAQItems(rightColumn, 1)}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Faqwebdesign;
 
 