import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const faqs = [
  {
    question: "Will you help me get more bookings through my website?",
    answer:
    //   "Absolutely. Our primary goal is to turn your website into a powerful conversion tool that works for you 24/7. We design professional, mobile-optimized, user-friendly websites with clear itineraries, easy-to-use booking forms, and compelling content. Everything is built to earn your visitors' trust—and guide them toward making a booking.But to succeed in the safari industry, two essential pillars must work hand in hand:A world-class website – One that not only looks stunning but is also built to convert visitors into paying customers.A strategic marketing plan – Targeted, data-driven campaigns that drive quality traffic and generate direct inquiries and bookings.Here's the truth: marketing is only as strong as your website.If your site isn’t fast, intuitive, Google-friendly, and tailored to your audience’s expectations, even the best marketing won’t deliver results. You’ll attract traffic—but lose conversions.That’s why we focus on both: a website that sells and a marketing strategy that scales.",
["Absolutely. Our primary goal is to turn your website into a powerful conversion tool that works for you 24/7.", <br/>,<br/>,
    "We design professional, mobile-optimized, user-friendly websites with clear itineraries, easy-to-use booking forms, and compelling content. Everything is built to earn your visitors' trust—and guide them toward making a booking.",<br/>,<br/>,
    "But to succeed in the safari industry, two essential pillars must work hand in hand:",<br/>,<br/>,
    "A world-class website – One that not only looks stunning but is also built to convert visitors into paying customers.",<br/>,<br/>,
    "A strategic marketing plan – Targeted, data-driven campaigns that drive quality traffic and generate direct inquiries and bookings.",<br/>,<br/>,
    "Here's the truth: marketing is only as strong as your website.",<br/>,<br/>,
    "If your site isn’t fast, intuitive, Google-friendly, and tailored to your audience’s expectations, even the best marketing won’t deliver results. You’ll attract traffic—but lose conversions.",<br/>,<br/>,
    "That’s why we focus on both: a website that sells and a marketing strategy that scales."
]

},
  {
    question: "What makes Safari Marketing Pro different from other agencies?",
    answer:
      "We specialize only in safari marketing, which means we understand your business better than general agencies. We visit real locations, know the travel patterns, and speak your audience’s language. Our team brings 13+ years of experience with a strong focus on results, which is more inquiries, more bookings, and more growth.",
  },
  {
  question: "Where do you get images for my safari website?",
  answer: [
    "We understand how important visuals are in the travel industry. That’s why we always recommend using your own original images from past safaris, if available. Authentic photos of your team, vehicles, clients, and real experiences help build trust and create a stronger emotional connection with your audience.",
    <br />, <br />,
    "However, if you don’t have original images, no worries—we’ll source a curated collection of high-quality images from Google that highlight African wildlife, landscapes, lodges, local tribes, and real safari moments. These visuals are carefully selected to match your brand and showcase the true spirit of your adventures.",
    <br />, <br />,
    "We offer three flexible solutions designed specifically for the safari and tour industry:",
    <br />, <br />,
    "Budget Package",
    <br />,
    "Perfect for startups or small tour operators. It covers all essentials—clean design, mobile optimization, inquiry forms, and basic SEO.",
    <br />, <br />,
    "Mid-Range Package",
    <br />,
    "Ideal for growing businesses. It includes customized layouts, engaging content, SEO optimization, destination highlights, social media links, and booking integrations.",
    <br />, <br />,
    "Luxury Package",
    <br />,
    "A complete digital marketing and website transformation. This includes advanced design, copywriting, keyword-targeted content, premium SEO, blog management, multilingual support, and conversion tools. You also get a full team—designers, marketers, content creators, and SEO experts—dedicated to your project.",
    <br />, <br />,
    "The cost depends on:",
    <br />,
    "• The number of destinations or experiences you want to feature",
    <br />,
    "• The level of customization and design required",
    <br />,
    "• Whether you want extra features like a blog, CRM, booking engine, or payment gateways",
    <br />,
    "• Your marketing goals (lead generation, traffic, brand awareness)",
    <br />, <br />,
    "We don’t give cookie-cutter prices. Instead, we prefer to discuss your goals first, then share a customized quote that matches your vision and budget.",
  ]
}
,
  {
    question: "Do I get limited pages on my website?",
    answer:
      "Not at all. We don’t believe in “one-size-fits-all” websites. The number of pages depends entirely on your business needs. Whether you’re offering safaris, trekking, beach holidays, or cultural tours, we create a custom structure based on your offerings.",
  },
  {
    question: "How long will it take to complete my website or campaign?",
    answer:
      "Timelines depend on your project scope, but typically a website takes 25 to 30 working day from planning to launch. We maintain constant communication, we will create a WhatsApp group where our team and you can communicate directly. This will be the space where we discuss all the details of your project. Our team will keep you updated on the steps we take and explain how we plan to move forward with your project.",
  },
  {
    question: "Where do you get images for my safari website?",
    answer:
      "360° marketing services help increase brand awareness, loyalty, and bookings....",
  },
  {
    question: "Do you work with safari companies outside of Tanzania?",
    answer:
      "Yes, we work with safari operators across Africa. Whether you're based in Tanzania, Kenya, Uganda, Rwanda., Botswana, Namibia, South Africa, Zimbabwe, Ethiopia, Zambia, Egypt, Mauritius, we adapt to your unique location, wildlife experiences, and customer base to create a marketing strategy that works.",
  },
  {
    question: "I already have a website. Can you improve it instead of starting from scratch?",
    answer:
      "Know your goals. Then choose an agency with a proven track record, strong portfolio, and client testimonials...",
  },
 
];

function FaqAfrica() {
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
    <div className="bg-white pt-10 md:pb-[30px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1125px] mx-auto ">
        <h2 className="font-[Montserrat] text-center  font-[700] md:text-[40px] text-[24px] capitalize text-[#3467d8] leading-[1.3] md:mb-10  md:px-[20%] pb-8 md:pb-[20px]">
          Frequently Asked Questions Of <br className="sm:hidden" />
          African Safari Operators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-x-[30px] gap-x-[15px] md:px-[8px]  ">
          <div className="flex flex-col text-start">
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

export default  FaqAfrica;
