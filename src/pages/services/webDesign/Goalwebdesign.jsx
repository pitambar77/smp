import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PiCheckFatFill } from "react-icons/pi";


const Step = ({ id, number, title, children, isFirst = false }) => {
    
  return (
    <div id={id} className="pt-4 sm:pb-5 pb-0">
      {!isFirst && (
        <div className="max-w-[1140px] mx-auto">
          <div className="border-t border-gray-300 w-full" />
        </div>
      )}
 
      {/* Step content */}
      <div className="max-w-[1140px] mt-10 mx-auto px-4 grid md:grid-cols-12 sm:gap-6 gap-2 items-start">
        {/* Left side */}
        <div className="md:col-span-4">
          <h3 className="sm:text-2xl text-[18px] font-bold text-[#0b2239]">STEP {number}:</h3>
          <h4 className="mt-2 text-white sm:text-2xl text-[18px] font-[500] leading-snug whitespace-pre-line">
            {title}
          </h4>
        </div>
 
        {/* Right side */}
        <div className="sm:col-span-8 text-white space-y-4 sm:text-[17px] text-[14px] sm:text-start text-justify ">{children}</div>
      </div>
    </div>
  );
};
 
const Goalwebdesign = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-[#ff5254] py-[50px] ">
      {/* Step 1 */}
      <Step
        id="step-1"
        number={1}
        isFirst={true}
        title={`Identify The Goal Of Your\nSafari Website`}
      >
        <p>
          It’s impossible to complete a successful <strong>African Safari Website Design</strong>{' '}
          process without first knowing what the goals of your business are.
        </p>
        <p>
          Before we start with the process of a <strong>Bespoke African Safari Website Design</strong>
          , we ask you these questions:
        </p>
        <ul className="space-y-2 sm:ml-9">
          {[
            'What is your target audience?',
            'Which services do you want to offer to your customers mostly (Like trekking or Safaris)?',
            'What are itineraries sizes (Budget, Mid-range, or Luxury)?',
            'What extra features you are giving which will help to attract your customers?',
            'Who are your competitors and how they are performing?',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
            <span className=' mt-1 mr-[12px] text-[#fff]  sm:text-[18px] text-[14px] font-[600]'><PiCheckFatFill  /></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          After getting the answers to all these questions, we can easily go ahead with the next step
          of your <strong>African Safari Web Page Design Process</strong>. The detailed information
          will give you a clear direction of the entire process.
        </p>
      </Step>
 
      {/* Step 2 */}
      <Step id="step-2" number={2} title={`Collect Information.\nBrainstorm And Analyse\nSketches.`}>
        <p>
          Just like information-gathering, the planning step of an <strong>African Safari Website
          Design</strong> is a most creative part of creating a new safari website.
        </p>
        <p>
          We brainstorm to build a sketches layout and structure with the goals and scope in mind.
          After all this we create some rough designs from early feedback from the client.
        </p>
      </Step>
 
      {/* Step 3 */}
      <Step
        id="step-3"
        number={3}
        title={`Design A World-Class Safari Website Enhances Safari\nBrand Credibility`}
      >
        <p>
          The third step of the web design process is to design how the African Safari Website will
          look. In this step, a website layout is created with basic web page elements such as the
          menus, banners related to your services, welcome section, itineraries and landing page
          navigation, widgets, and so forth.
        </p>
        <p>
          The challenge of good <strong>African Safari Operator Website Design</strong>, like all
          designs, is balancing form and function. Use the information you gathered in the Discovery
          and Planning phases to shape your design. <strong>Safari Marketing Pro</strong> have the
          intention behind every design decision.
        </p>
      </Step>
 
      {/* Step 4 */}
      <Step
        id="step-4"
        number={4}
        title={`Add Value Your Destinations By Creating Amazing Contents`}
      >
        <p>
          The third step of the web design process is to design how the African Safari Website will
          look. In this step, a website layout is created with basic web page elements such as the
          menus, banners related to your services, welcome section, itineraries and landing page
          navigation, widgets, and so forth.
        </p>
        <p>
          The challenge of good <strong>African Safari Operator Website Design</strong>, like all
          designs, is balancing form and function. Use the information you gathered in the Discovery
          and Planning phases to shape your design. <strong>Safari Marketing Pro</strong> have the
          intention behind every design decision.
        </p>
      </Step>
 
      {/* Step 5 */}
      <Step id="step-5" number={5} title={`Now It’s Time To Test. This Time We Are Always Consider These Questions:`}>
        <ul className="space-y-2 sm:ml-9">
          {[
            'What do your customers like or dislike about this design?',
            'What CTA buttons are being pressed first?',
            'Where does the attention of the user linger?',
            'How does the user handle certain tasks, such as finding FAQs or making their book?',
            'Does any part of the design confuse the user?',
            'How friendly is your safari website to your customers?',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className=' mt-1 mr-[12px] text-[#fff]  sm:text-[18px] text-[14px] font-[600]'><PiCheckFatFill  /></span>
              
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          We make sure to test every page, every destination and itinerary content, landing page
          navigations, and everything from our end.
        </p>
      </Step>
 
      {/* Step 6 */}
      <Step
        id="step-6"
        number={6}
        title={`It’s Time To Make Your Safari Site Visible In Front Of Your Customers.`}
      >
        <p>
          Your <strong>African Safari Website</strong> is ready to go live at this stage of the web
          design process. Once the website has been fully reviewed and approved by the client, we
          will ready to go for live the site.
        </p>
 
        <div className=" sm:px-[10px] sm:py-[10px]  sm:mt-[70px] mt-[50px]  ">
         
            <button 
             onClick={() => {navigate('/lets-grow-business');window.scrollTo(0, 0); }}
            className="bg-[#011833] text-white sm:text-[16px] text-[14px]  uppercase font-[500] sm:px-10 px-[12px] sm:py-[12px] py-[10px] rounded-[5px] border border-[#011833] cursor-pointer hover:bg-[#ff5254] hover:border-[#ff5254] hover:text-white ease-in duration-300">
              STAND OUT AMONGST THE CROWD!
            </button>
        
        </div>
      </Step>
    </div>
  );
};
 
export default Goalwebdesign;
 