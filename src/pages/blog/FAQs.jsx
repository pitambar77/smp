import React, { useState } from 'react';

const faqData = [
  "Is Google removing ccTLDs entirely?",
  "Will my ccTLDs lose rankings because of this?",
  "Should I move everything to a .com domain?",
  "Can I target multiple countries with one website?",
  "Are ccTLDs now a bad idea?",
  "Do I need to change my existing ccTLD site?",
  "Do ccTLDs impact paid search or just organic?",
];

const FAQItem = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        className="flex items-center justify-between w-full text-left text-lg font-medium text-[#787878] hover:text-[#505050] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]">
          {/* Replace with actual answer */}
          <p>Answer content goes here. You can update this with the real content.</p>
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className=" text-2xl md:text-[36px] text-[#3467d8] font-bold mb-8">
        Frequently asked questions about ccTLDs and SEO
      </h2>
      
      {faqData.map((question, idx) => (
        <FAQItem key={idx} question={question} />
      ))}

      <div className="mt-10">
        <h3 className="text-2xl font-bold text-[#3467d8] mb-2">Final thoughts</h3>
        <p className="font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]">
          Google’s update doesn’t change how international SEO works, but it’s a good reason to check if your setup actually does.
        </p>
      </div>
    </div>
  );
};

export default FAQs;
