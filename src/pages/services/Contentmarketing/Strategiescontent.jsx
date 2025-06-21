import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PiCheckFatFill } from "react-icons/pi";

const Step = ({ number, title, children, isFirst = false }) => {
  return (
    <div className="pt-4 pb-5 ">
      {" "}
      {/* Reduced padding top and bottom */}
      {!isFirst && (
        <div className="max-w-[1140px] mx-auto">
          <div className="border-t border-gray-300 w-full" />
        </div>
      )}
      {/* Step content */}
      <div className="max-w-[1140px] mt-10 mx-auto px-4 grid md:grid-cols-12 gap-6 items-start">
        {" "}
        {/* Reduced margin top */}
        {/* Left side */}
        <div className="md:col-span-4">
          <h3 className="text-2xl font-bold text-[#0b2239]">STEP {number}:</h3>
          <h4 className="mt-2 text-white text-2xl font-semibold leading-snug whitespace-pre-line">
            {title}
          </h4>
        </div>
        {/* Right side */}
        <div className="md:col-span-8 text-white space-y-4 text-[17px]">
          {children}
        </div>
      </div>
    </div>
  );
};
const Strategiescontent = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#ff5254] min-h-screen">
      {/* Step 1 */}
      <Step number={1} isFirst={true} title={`Gathering the requirements`}>
        <p>
          Before starting out with the African Safaris Content Writing Process,
          our first step is to understand & and gather all the requirements from
          the client for us to deliver the best.
        </p>
        <p>We have a detailed discussion regarding:</p>
        <ul className="space-y-2 ml-9">
          {[
            "The writing structure they wish to have",
            "Required word limit",
            "The keywords they want to prioritize",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className=' mt-1 mr-[12px] text-[#fff]  text-[18px] font-[600]'><PiCheckFatFill  /></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {/* <p>
          After getting the answers to all these questions, we can easily go ahead with the next step of your <strong>African Safari Web Page Design Process</strong>. The detailed information will give you a clear direction of the entire process.
        </p> */}
      </Step>
      {/*  */}
      <Step
        number={2}
        title={`Analyzing the competitors
`}
      >
        <p>
          In the second step, we run a comprehensive competitor analysis. This
          will help us identify what strategies they have followed in curating
          their African Safaris Content that keeps them at the top!
        </p>
        <p>
          From there, we take out points that we can implement in our writing
          approach to enhance ourselves.
        </p>
        <p>This step will typically help us identify:</p>
        <ul className="space-y-2 ml-9">
          {[
            "The writing structure they have followed",
            "The pattern of sentences (are they short and simple, are they easily readable or too long)",
            "How they have laid out all the information and",
            "What extra features you are giving which will help to attract your customers?",
            "How smartly they have placed their keywords",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
             <span className=' mt-1 mr-[12px] text-[#fff]  text-[18px] font-[600]'><PiCheckFatFill  /></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {/* <p>
          After getting the answers to all these questions, we can easily go ahead with the next step of your <strong>African Safari Web Page Design Process</strong>. The detailed information will give you a clear direction of the entire process.
        </p> */}
      </Step>{" "}
      <Step
        number={3}
        title={`Writing High-Quality Content
`}
      >
        <p>
          Here we put our best efforts toward grabbing the reader’s attention.
          Starting from adding a catchy hook to making sure the appropriate
          African Safaris Keywords are placed properly, we do everything to make
          it engaging for the readers.
        </p>
        <p>In this process we make sure to include:</p>
        <ul className="space-y-2 ml-9">
          {[
            "Titles and headings in proper sequence",
            "Supporting examples to back up the topic",
            "Maintaining keyword density for better search engine ranking",
            "Adding safari flavor to the content so it resonates with the safari and tour audience",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
             <span className=' mt-1 mr-[12px] text-[#fff]  text-[18px] font-[600]'><PiCheckFatFill  /></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {/* <p>
          After getting the answers to all these questions, we can easily go ahead with the next step of your <strong>African Safari Web Page Design Process</strong>. The detailed information will give you a clear direction of the entire process.
        </p> */}
      </Step>
      <Step
        number={4}
        title={`Proofreading For Improvements
`}
      >
        <p>
          We believe there is always room for improvement, that’s why we take
          proofreading very seriously. This helps us correct any errors, and
          language improvements, and keep up the consistency.
        </p>
        <p>This step helps us with the following:</p>
        <ul className="space-y-2 ml-9">
          {[
            "Simplifying the paragraphs and sentences",
            "Eliminating any related information",
            "Sorting out unnecessary jargon",
            "What extra features you are giving which will help to attract your customers?",
            "Making sure the content is plagiarism-free",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className=' mt-1 mr-[12px] text-[#fff]  text-[18px] font-[600]'><PiCheckFatFill  /></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {/* <p>
          After getting the answers to all these questions, we can easily go ahead with the next step of your <strong>African Safari Web Page Design Process</strong>. The detailed information will give you a clear direction of the entire process.
        </p> */}

        <div className="px-[10px] py-[10px] text-[16px] mt-15 mb-8">
          <button
            onClick={() => {
              navigate("/lets-grow-business");
              window.scrollTo(0, 0);
            }}
            className="bg-[#011833] cursor-pointer text-white text-[16px] uppercase font-semibold px-10 py-[15px] rounded-[5px] border border-[#ff5254] hover:bg-[#ff5254] hover:text-white transition-colors duration-300"
          >
            <strong>STAND OUT AMONGST THE CROWD</strong>
          </button>
        </div>
      </Step>
    </div>
  );
};

export default Strategiescontent;
