import React, { useState } from 'react';

const faqs = [
  {
    question: 'Do you use pre-made templates?',
    answer: 'No, we design every safari website from scratch tailored to your brand and business goals.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Typically between 3 to 6 weeks depending on complexity and feedback turnaround.',
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer: 'Absolutely! All our designs are fully responsive across devices.',
  },
  {
    question: 'Can I update my website myself?',
    answer: 'Yes, we build on CMS platforms so you can easily manage your content.',
  },
  {
    question: 'Do you provide SEO optimization?',
    answer: 'Yes, basic SEO is included to ensure your safari business ranks well on Google.',
  },
  {
    question: 'Do you offer hosting and maintenance?',
    answer: 'Yes, we offer optional hosting and ongoing support packages.',
  },
  {
    question: 'What if I don’t like the initial design?',
    answer: 'We provide revisions based on your feedback to ensure you’re satisfied.',
  },
];

function Faqgoogleads() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1125px] mx-auto text-center">
        <h2 className="font-[Montserrat] font-bold text-[40px] text-center capitalize text-[#3467d8] leading-[1.3] mb-10">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="text-[#011833] border border-[rgba(0,0,0,0.02)] bg-[#f1f1f1] px-[15px] py-[20px] rounded-[10px] transition duration-300 hover:bg-gray-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-base font-semibold focus:outline-none"
                >
                  {faq.question}
                  <span
                    className={`transform transition-transform duration-300 text-xl font-bold ${
                      isOpen ? 'rotate-90' : ''
                    }`}
                  >
                    ▶
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 font-[Montserrat] font-normal text-[17px] text-[#787878] bg-white leading-[1.7] text-left pb-[15px]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faqgoogleads;
