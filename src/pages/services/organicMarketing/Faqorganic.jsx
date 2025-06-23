import React, { useState } from 'react';
 import { FaChevronDown, FaChevronRight } from "react-icons/fa";
const faqs = [
  { question: 'What makes a successful marketing strategy?',answer:'Over the years, we’ve worked with safari operators in whole African continents dedicatedly. We manage all the marketing efforts for small medium and luxury safari operators.' },
  { question: 'How soon can I expect results?',answer:'Organic marketing services can take a few months to a year to complete. Certain factors, such as your starting point, can determine the overall length that it takes to see noticeable results. We’ve seen noticeable improvements with campaigns within a couple of weeks. Still, most safari operators can expect sizable results and work completed on their organic campaign in a 6 months mark if specific guidelines are met.' },
  { question: 'Why safari operators most do organic marketing?',answer:'Spreading brand awareness, generating bookings, increasing your brand’s reach, instilling trust among consumers, all these primarily depend on one thing: marketing.' },
  { question: 'Who will I be working with?',answer:'Your main point of contact will be a dedicated Google Ads Manager who is responsible for the research, planning, and performance of your account. Plus, our founder MR. CHIN PAL for all of our Google Ads projects for quality.' },
      { question: 'Do You Guarantee Results?',answer:'We guarantee that if you implement everything to give you 10X growth for your safari business. Depending on the starting point and existing issues with your site this can take a varying amount of time, but we’ll always explain every situation in detail and answer questions you have so you know what we’re aiming for you and what stands in the way.' },
 
  { question: 'Do I pick the keywords?',answer:'We would love your input on potential keywords. You know your market best, and your input would be highly beneficial. However, we go through extensive keyword research and qualification processes to identify the top intend keywords to target at the beginning of every marketing process. Our expert team will then map out every page to be created with the target keywords associated with each page. Once completed, we will share it with you for approval before moving on to the next steps.' },
  { question: 'How much do your charge for organic marketing cost?',answer:'Our monthly organic marketing fees range from 1000$ to $3000+/month. When you request an Organic marketing quote, we’ll review your website and provide a quote based on the size of your website and the strength of your competition.' },
 
  { question: 'Is Organic Marketing Is Better Than Paid Advertising?',answer:'ORGANIC MARKETING and PAID ADVERTISING work together to boost your website and position your brand as an authority in your industry or niche. ORGANIC MARKETING often gives you a far better return on your investment by comparison to paid media options. That’s not to say that ORGANIC MARKETING is cheap and easy; it takes a fair amount of time and resources to get it right but its long-term rewards are immense and sustainable. Most times, SEO and paid advertising will work together to provide the best results.' },
  
];
 
function Faqorganic() {
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
      <div className="bg-white sm:pt-[100px] pb-[30px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1125px] mx-auto ">
          <h2 className="font-[Montserrat] text-center  font-[700] sm:text-[40px] text-[24px] capitalize text-[#3467d8] leading-[1.3] sm:mb-10 mb-4 sm:px-[20%] sm:pb-[20px] pb-[10px]">
           Frequently Asked Questions
          </h2>
          {/* <div className=' flex justify-between items-center pb-[20px]'>
           
           
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-x-[30px] sm:px-[8px]  ">
            <div className="flex flex-col  text-start">
               <h2 className=' sm:text-[26px] text-[18px]  font-bold pb-[15px]'>Sales Questions</h2>
              {renderFAQItems(leftColumn, 0)}
            </div>
            <div className="flex flex-col   ">
               <h2 className=' sm:text-[26px] text-[18px] font-bold pb-[15px] '>Content Marketing Questions</h2>
              {renderFAQItems(rightColumn, 1)}
            </div>
          </div>
        </div>
      </div>
    );
  }
 
export default Faqorganic;
 
 