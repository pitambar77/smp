 
import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
 
const Step = ({id, number, title, children, isFirst = false }) => {
  return (
    <div id={id} className="pt-15 pb-5 ">
      {/* Divider except for first */}
      {!isFirst && (
        <div className="max-w-[1140px] mx-auto">
          <div className="border-t border-gray-300 w-full" />
        </div>
      )}
 
      {/* Step content */}
      <div className="max-w-[1140px] mt-10 mx-auto px-4 grid md:grid-cols-12 gap-6 items-start">
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
 
const Strategiesorganic = () => {
    const navigate = useNavigate();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, []);
 
  return (
    <div className="bg-[#ff5254] min-h-screen">
      {/* Step 1 */}
      <Step
     
      id="step-1"
      number={1} isFirst={true} title={`Competitor Research`}>
        <p>
          Every <strong className="font-semibold">Organic Marketing Campaign</strong> begins with
          identifying competitors in your <strong className="font-semibold">African Safari Market.</strong>{' '}
          The process is essential to your success as we can determine what is working currently for your
          competitors. If your competitors perform well in search engines, they likely have proven work for
          ranking in your area..
        </p>
        <p>
          Performing <strong className="font-semibold">African Safari Competitor Research</strong>, also
          allows you to close the gap between you and your leading safari competitor’s content and
          link-building strategies.:
        </p>
      </Step>
 
      {/* Step 2 */}
      <Step
       
      id="step-2"
      number={2} title={`Researching & Identifying Intent Keywords`}>
        <p>
          Competitor research also consists of identifying Intent keywords your competitors are ranking for that
          you are not. By identifying a list of relevant <strong className="font-semibold">African Safari Keywords,</strong>{' '}
          we can plan for every page on your African Safari Website and the respective keywords they target.
        </p>
        <p>
          <strong className="font-semibold">African Safari Keyword Research</strong> is the key to your organic
          marketing campaigns and will lay the footprint for each and every page on your safari website.
        </p>
        <p>
          Our <strong className="font-semibold">Organic Marketing For African Safari Operator</strong>consists of
          identifying relevant keywords and mapping them out in an easily understood way. That way, you can approve
          the overall direction and understand the marketing strategy.
        </p>
      </Step>
 
      {/* Step 3 */}
     
      <Step
       
      id="step-3"
      number={3} title={`Performing Your Content & Technical Audit`}>
 
        <p>
          Unless you’re starting from scratch, all marketing efforts should begin with an initial audit to identify
          any and all issues with your Safari website currently. This can include various problems that should be
          tackled before any new content or link-building is begun..
        </p>
      </Step>
 
      {/* Step 4 */}
      <Step
       
      id="step-4"
      number={4} title={`Give Them What They Want`}>
        <p>
          The third step of the web design process is to design how the African Safari Website will look. In this
          step, a website layout is created with basic web page elements such as the menus, banners related to your
          services, welcome section, itineraries and landing page navigation, widgets, and so forth.
        </p>
        <p>
          The challenge of good <strong className="font-semibold">African Safari Operator Website Design</strong>, like
          all designs, is balancing form and function. Use the information you gathered in the Discovery and Planning
          phases to shape your design. <strong className="font-semibold">Safari Marketing Pro</strong> have the
          intention behind every design decision.
        </p>
      </Step>
 
      {/* Step 5 */}
      <Step
       
      id="step-5"
      number={5} title={`Identifying And Qualifying Backlink Opportunities For Outreach`}>
        <ul className="space-y-2 ml-9">
          {[
            'What do your customers like or dislike about this design?',
            'What CTA buttons are being pressed first?',
            'Where does the attention of the user linger?',
            'How does the user handle certain tasks, such as finding FAQs or making their book?',
            'Does any part of the design confuse the user?',
            'How friendly is your safari website to your customers?',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <i className="fas fa-check text-white mt-1"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>We make sure to test every page, every destination and itinerary content, landing page navigations, and everything from our end.</p>
      </Step>
 
      {/* Step 6 */}
      <Step
       
      id="step-6"
      number={6} title={`Transparent Reporting`}>
        <p>
          Your <strong className="font-semibold"> African Safari Website </strong> is ready to go live at this
          stage of the web design process. Once the website has been fully reviewed and approved by the client, we
          will ready to go for live the site.
        </p>
 
        <div className="px-[10px] py-[10px] text-[16px] mt-15 mb-13">
        
            <button
             onClick={() => {navigate('/lets-grow-business');window.scrollTo(0, 0); }}
             className="bg-[#011833] cursor-pointer text-white text-[16px] uppercase font-semibold px-10 py-[15px] rounded-[5px] border border-[#ff5254] hover:bg-[#ff5254] hover:text-white transition-colors duration-300">
              <strong>STAND OUT AMONGST THE CROWD</strong>
            </button>
      
        </div>
      </Step>
    </div>
  );
};
 
export default Strategiesorganic;
 
 