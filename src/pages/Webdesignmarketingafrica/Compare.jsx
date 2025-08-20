import React from "react";
import { PiCheckFatFill } from "react-icons/pi";
import { FaTimes } from "react-icons/fa";

const safariPros = [
  ` Local safari expertise — nothing outsourced overseas. We understand Tanzania’s destinations, seasons, and traveler expectations.`,

"Tailored strategy sessions with in-depth pre-campaign research to target your ideal safari clients.",

"Integrated marketing tools that combine campaign management, reporting, and approvals — so we focus on boosting your bookings, not drowning in admin.",

"Recognized industry leaders with proven results for Tanzania’s top safari operators.",

"No one-size-fits-all approach — we create custom campaigns for every operator, from start-ups to industry leaders.",

"Highly experienced team in SEO, Google Ads, and social media advertising for the safari market.",

"Unbeatable performance milestones — from higher website traffic to increased direct bookings.",

"No hidden fees — ever. You own all your data, accounts, and creative assets.",
];

const otherCons = [
  "Outsource work overseas, missing Tanzania-specific knowledge",
"Offer generic packages with no customization for your safari brand",
"Depend on outdated tools and spreadsheets that slow campaign performance",
"Treat clients like short-term projects instead of long-term partners",
"Provide basic, surface-level audits without deep safari industry insights",
"Small, overstretched teams with limited capacity",
"Poor account servicing and lack of proactive campaign optimization",
"No clear performance milestones or booking growth targets",
"Hide costs and control your data so you can’t take it elsewhere",
];

const Compare = () => {
  return (
    <section className="px-4 py-[80px] bg-white">
      {/* Heading */}
      <h2 className="font-montserrat font-bold text-[40px] text-[#3467d8] leading-[1.3] text-center mb-[45px]">
        We don’t design websites — <br />
        we re-engineer them to bring you results.
      </h2>

      {/* Comparison Grid */}
      <div className="grid max-w-[1110px] gap-10 mx-auto md:grid-cols-2">
        {/* Left - Safari Marketing Pro */}
        <div>
          <h3 className="font-montserrat font-bold text-[25px] text-black leading-[1.3] relative text-center mb-[40px] ">
            Safari Marketing Pro <span className="text-[#4779c5] float-right  ">Vs</span>
          </h3>
          <ul className="space-y-4">
            {safariPros.map((item, idx) => (
              <li key={idx} className="list-none font-montserrat font-medium text-[17px] text-left text-[#0b0b0b] leading-inherit m-0 pb-[15px] relative flex items-start pr-[50px]">
                <PiCheckFatFill className="flex-shrink-0 mt-1 w-4 mr-3 text-[#3467d8]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Other Agencies */}
        <div>
          <h3 className="font-montserrat font-bold text-[25px] text-black leading-[1.3] relative ml-10 text-center mb-[40px]">
            Other Marketing Agencies
          </h3>
          <ul className="space-y-4">
            {otherCons.map((item, idx) => (
              <li key={idx} className="list-none font-montserrat font-medium text-[17px] text-left text-[#0b0b0b] leading-inherit m-0 pb-[15px] relative flex items-start pl-[60px]">
                <FaTimes className="flex-shrink-0 w-4 mt-1 mr-3 text-red-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Compare;
