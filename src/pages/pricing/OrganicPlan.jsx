// import React from 'react';

// const packages = [
//   {
//     title: 'PACKAGES',
//     details: [
//       '2000$(BUDGET)',
//       '3000$(MID LUXURY)',
//       '5000$(LUXURY)'
//     ],
//     description: [
//       `Fundamental analysis of your website, identifying key areas for improvement.\n\nBasic Restructuring`,
//       `This package delves deeper into your website's performance, usability, and content strategy. It includes advanced analytics, user behavior analysis, and thorough keyword research.\n\nHigh-End & Informative Structure`,
//       `This Luxury package not only assesses your safari website but also conducts an in-depth analysis of competitors and market trends. It includes detailed competitor benchmarking, specific insights, and a tailored strategy to outperform competitors.\n\nPerfect for those operators aiming for a strategic edge in their market.\n\nWith a focus on sustained growth and competitive advantage.`
//     ]
//   },
//   {
//     title: 'Research\nWebsite architect',
//     details: ['', '', `This package goes beyond structuring and prioritises the enhancement of user experience.\n\n**When we create we focus on 3 things**\n1. Industry leaders\n2. Your requirements\n3. Customers needs\n\nIt involves advanced restructuring with a focus on luxury design, in-depth content information, and strategic placement of information about the destinations.`]
//   },
//   {
//     title: 'Graphics',
//     details: [
//       `Focuses on incorporating basic images`,
//       `Rich visuals showing brand presence`,
//       `Premium package includes static & client images + maps, clips, PDFs`
//     ]
//   },
//   {
//     title: 'Communications',
//     details: [
//       'Provide info about mission, vision, and story.',
//       'Narrative based on brand identity.',
//       'Premium crafted branding story, goals, alignment.'
//     ]
//   },
//   {
//     title: 'Identify Destination Contents',
//     details: [
//       'Client provides the content.',
//       'Support with tailored SEO content.',
//       'Advanced writing, visual guides, enhanced storytelling.'
//     ]
//   },
//   {
//     title: 'Layout Designs',
//     details: ['Predefined Layouts', 'Pre-Customized Layouts', 'Tailor-made design']
//   },
//   {
//     title: 'Number of pages',
//     details: ['100 to 120', '150-200', '400']
//   },
//   {
//     title: 'Responsive Design',
//     details: [
//       'Fit on the mobile',
//       'Fit on mobile and Desktop',
//       'It talks to the client. It creates impact on the clients'
//     ]
//   },
//   {
//     title: 'Platform',
//     details: ['HTML', 'HTML / WordPress', 'Based on your Requirement']
//   },
//   {
//     title: 'SEO Optimization',
//     details: [
//       'Basic SEO optimization',
//       'Advanced SEO strategies and optimization',
//       'Tailored SEO for optimal visibility'
//     ]
//   },
//   {
//     title: 'Confirmation/thank you page setup',
//     details: [
//       'Only Thank You page integration',
//       'Thank You page and consumer copy integration',
//       'Thank You page and consumer copy + conversion setup'
//     ]
//   },
//   {
//     title: 'Browser & device compatibility',
//     details: [
//       'Chrome only',
//       'Chrome / Safari',
//       'All major browsers and devices'
//     ]
//   },
//   {
//     title: 'Autoresponder (Bot & live chat)',
//     details: ['Live Chat', 'Add WhatsApp integration', 'WhatsApp & Bot support']
//   },
//   {
//     title: 'Advanced analytics tracking',
//     details: ['NO', 'YES', 'YES']
//   },
//   {
//     title: 'Blog page Designing and development',
//     details: [
//       'Only Blog Designing',
//       'Blog Design + Home page integration',
//       'Blog + Home page + Dedicated landing page'
//     ]
//   },
//   {
//     title: 'Join Group Tour',
//     details: ['NO', 'Home page integration only', 'Dedicated landing page integration']
//   },
//   {
//     title: 'Maintenance',
//     details: [
//       '2 months, only adding packages',
//       '3 months, only adding packages',
//       '1 year full maintenance + technical error fixing'
//     ]
//   },
//   {
//     title: 'Dedicated UX project manager',
//     details: [
//       'Dedicated Project Manager',
//       '2 departments included',
//       '6 departments included'
//     ]
//   },
//   {
//     title: 'You get 24/7 support',
//     details: ['Yes', 'Yes', 'Yes']
//   }
// ];

// const OrganicPlan = () => {
//   return (
//     <div className="overflow-auto w-full">
//       <div className="max-w-[1140px] mx-auto  pt-[16px]">
//       <div className="min-w-[1000px] grid grid-cols-4 border border-gray-300">
//         {packages.map((pkg, i) => (
//           <React.Fragment key={i}>
//             <div className={`border border-gray-200 p-4 font-semibold ${i === 0 ? 'bg-[#ff5254] text-2xl flex items-center justify-center text-white' : 'bg-[#011833] text-white flex items-center justify-center'}`}>
//               {pkg.title}
//             </div>
//             {pkg.details.map((detail, j) => (
//               <div key={j} className={`border border-gray-200 p-4 whitespace-pre-line ${i === 0 ? 'bg-[#ff5254] flex items-center justify-center text-2xl font-[600] p-[20px] text-white' : 'bg-[#d9e7fdc9] text-[#626262]'}`}>
//                 {detail}
//               </div>
//             ))}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>

//     </div>
//   )
// }

// export default OrganicPlan
import { FaCheck } from "react-icons/fa";

const organicPlans = [
  { price: "$ 12000.00" },
  { price: "$ 18000.00" },
  { price: "$ 25000.00" },
];

const features = [
  "Identify the competitors who is leading in African Tourism Market",
  "Competitors Keywords",
  "Competitors Landing Page",
  "Competitors' Offers",
  "Competitors Targeted Countries",
];

const OrganicPlan = () => {
  return (
    <div className="w-full bg-white">
      <div className="relative flex justify-center text-[#ff5254] font-semibold bg-white px-4 text-[14px] tracking-wide uppercase">
        SEE FULL COMPARISON &gt;
      </div>
      <div className="max-w-[1140px] mx-auto overflow-x-auto pt-6">
        {/* Price Row */}
        <div className="min-w-[1000px] grid grid-cols-3 text-center text-white">
          {organicPlans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-[#ff5254] text-[22px] font-bold py-4 border border-white"
            >
              {plan.price}
            </div>
          ))}
        </div>

        {/* Horizontal Line with Text */}
        <div className="relative w-full my-1">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-[#ff5254]" />
          </div>
        </div>

        {/* GOAL Header */}
        <div className="grid grid-cols-3 text-white text-center font-semibold text-[16px]">
          <div className="col-span-3 bg-[#0050d5] py-3 border border-white">
            Identify the goal of Your Company
          </div>
        </div>
        {/* Feature Columns */}
        <div className="min-w-[1000px] grid grid-cols-3 bg-[#d9e7fdc9] text-[#333] text-left">
          {organicPlans.map((_, idx) => (
            <div key={idx} className="p-4 border border-white space-y-2">
              <p>
                Analysis of Past Data. (If you have run any campaign). Targeted
                countries Analysis of the last 5 Years Data from where most
                visitors are landed on Africa
              </p>
              <p className="font-semibold mt-2">New Trending Searching Areas</p>
              <ul className="space-y-1 mt-1">
                {features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-[15px]">
                    <FaCheck className="text-green-600 mt-[5px]" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Keyword Research Section */}
        <div className="min-w-[1000px] mt-0">
          {/* Keyword Research Title */}
          <div className="grid grid-cols-3 text-white text-center font-semibold text-[16px]">
            <div className="col-span-3 bg-[#0050d5] py-3 border border-white">
              Keyword Research
            </div>
          </div>

          {/* Keywords Summary Row */}
          <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#333] text-center font-medium text-[15px]">
            <div className="p-4 border border-white">
              No Of Keywords To Add: <strong>800</strong> Focus Keywords
            </div>
            <div className="p-4 border border-white">
              No Of Keywords To Add: <strong>1200</strong> Focus Keywords
            </div>
            <div className="p-4 border border-white">
              No Of Keywords To Add: <strong>1600</strong> Focus Keywords
            </div>
          </div>

          {/* Intended Keywords Row */}
          <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#1f1f1f] text-center font-semibold text-[14px]">
            <div className="p-4 border border-white">
              80 INTENDED KEYWORDS.{" "}
              <span className="font-normal text-[13px]">
                (Intent Keywords For Tofu, Mofu & Bofu)
              </span>
            </div>
            <div className="p-4 border border-white">
              120 INTENDED KEYWORDS{" "}
              <span className="font-normal text-[13px]">
                (Intent Keywords For Tofu, Mofu & Bofu)
              </span>
            </div>
            <div className="p-4 border border-white">
              160 INTENDED KEYWORDS.{" "}
              <span className="font-normal text-[13px]">
                (Intent Keywords For Tofu, Mofu & Bofu)
              </span>
            </div>
          </div>

          {/* Analysis Details Row */}
          <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#1e1e1e] text-left text-[14px]">
            <div className="p-4 border border-white space-y-2">
              <p className="font-semibold">Basic Keyword Analysis</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Basic keyword analysis to identify primary and secondary
                  keywords.
                </li>
                <li>
                  Competitor keyword analysis for identifying potential gaps.
                </li>
              </ul>
            </div>

            <div className="p-4 border border-white space-y-2">
              <p className="font-semibold">Advanced Keyword Research:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  More comprehensive keyword analysis, considering user intent
                  and seasonality.
                </li>
                <li>Identification of emerging trends and opportunities.</li>
              </ul>
            </div>

            <div className="p-4 border border-white space-y-2">
              <p className="font-semibold">Customized Keyword Strategy:</p>
              <ul className="list-decimal list-inside space-y-1">
                <li>
                  Development of a tailored keyword strategy aligned with
                  broader your safari & tour business goals.
                </li>
                <li>
                  In-depth analysis of user intent behind keywords, leading to
                  more targeted content creation.
                </li>
                <li>
                  Based On intent (Informative, Commercial, Transactional)
                </li>
                <li>Competition & Keyword Difficulty</li>
                <li>Global Monthly Searches</li>
                <li>Local Monthly Searches</li>
              </ul>
            </div>
          </div>

          {/* Footer Label */}
          <div className="grid grid-cols-3 text-white text-center font-semibold text-[16px]">
            <div className="col-span-3 bg-[#0050d5] py-3 border border-white">
              ON-PAGE OPTIMIZATION
            </div>
          </div>
        </div>

        {/*  */}
        <div className="min-w-[1000px] mt-0">
          {/* Keyword Research Title */}
        </div>

        {/* Keywords Summary Row */}
        <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#333] text-center font-medium text-[15px]">
          <div className="p-4 border border-white">
            No Of Keywords To Add: <strong>800</strong> Focus Keywords
          </div>
          <div className="p-4 border border-white">
            No Of Keywords To Add: <strong>1200</strong> Focus Keywords
          </div>
          <div className="p-4 border border-white">
            No Of Keywords To Add: <strong>1600</strong> Focus Keywords
          </div>
        </div>

        {/* Intended Keywords Row */}
        <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#1f1f1f] text-center font-semibold text-[14px]">
          <div className="p-4 border border-white">
            80 INTENDED KEYWORDS.{" "}
            <span className="font-normal text-[13px]">
              (Intent Keywords For Tofu, Mofu & Bofu)
            </span>
          </div>
          <div className="p-4 border border-white">
            120 INTENDED KEYWORDS{" "}
            <span className="font-normal text-[13px]">
              (Intent Keywords For Tofu, Mofu & Bofu)
            </span>
          </div>
          <div className="p-4 border border-white">
            160 INTENDED KEYWORDS.{" "}
            <span className="font-normal text-[13px]">
              (Intent Keywords For Tofu, Mofu & Bofu)
            </span>
          </div>
        </div>

        {/* Analysis Details Row */}
        <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#1e1e1e] text-left text-[14px]">
          <div className="p-4 border border-white space-y-2">
            <p className="font-semibold">Basic Keyword Analysis</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Basic keyword analysis to identify primary and secondary
                keywords.
              </li>
              <li>
                Competitor keyword analysis for identifying potential gaps.
              </li>
            </ul>
          </div>

          <div className="p-4 border border-white space-y-2">
            <p className="font-semibold">Advanced Keyword Research:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                More comprehensive keyword analysis, considering user intent and
                seasonality.
              </li>
              <li>Identification of emerging trends and opportunities.</li>
            </ul>
          </div>

          <div className="p-4 border border-white space-y-2">
            <p className="font-semibold">Customized Keyword Strategy:</p>
            <ul className="list-decimal list-inside space-y-1">
              <li>
                Development of a tailored keyword strategy aligned with broader
                your safari & tour business goals.
              </li>
              <li>
                In-depth analysis of user intent behind keywords, leading to
                more targeted content creation.
              </li>
              <li>Based On intent (Informative, Commercial, Transactional)</li>
              <li>Competition & Keyword Difficulty</li>
              <li>Global Monthly Searches</li>
              <li>Local Monthly Searches</li>
            </ul>
          </div>
        </div>

        {/* Footer Label */}
      </div>
      {/*  */}
      <div className="min-w-[1000px] mt-0">
        {/* Keyword Research Title */}
        <div className="grid grid-cols-3 text-white text-center font-semibold text-[16px]">
          <div className="col-span-3 bg-[#0050d5] py-3 border border-white">
            Keyword Research
          </div>
        </div>

        {/* Keywords Summary Row */}
        <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#333] text-center font-medium text-[15px]">
          <div className="p-4 border border-white">
            No Of Keywords To Add: <strong>800</strong> Focus Keywords
          </div>
          <div className="p-4 border border-white">
            No Of Keywords To Add: <strong>1200</strong> Focus Keywords
          </div>
          <div className="p-4 border border-white">
            No Of Keywords To Add: <strong>1600</strong> Focus Keywords
          </div>
        </div>

        {/* Intended Keywords Row */}
        <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#1f1f1f] text-center font-semibold text-[14px]">
          <div className="p-4 border border-white">
            80 INTENDED KEYWORDS.{" "}
            <span className="font-normal text-[13px]">
              (Intent Keywords For Tofu, Mofu & Bofu)
            </span>
          </div>
          <div className="p-4 border border-white">
            120 INTENDED KEYWORDS{" "}
            <span className="font-normal text-[13px]">
              (Intent Keywords For Tofu, Mofu & Bofu)
            </span>
          </div>
          <div className="p-4 border border-white">
            160 INTENDED KEYWORDS.{" "}
            <span className="font-normal text-[13px]">
              (Intent Keywords For Tofu, Mofu & Bofu)
            </span>
          </div>
        </div>

        {/* Analysis Details Row */}
        <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#1e1e1e] text-left text-[14px]">
          <div className="p-4 border border-white space-y-2">
            <p className="font-semibold">Basic Keyword Analysis</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Basic keyword analysis to identify primary and secondary
                keywords.
              </li>
              <li>
                Competitor keyword analysis for identifying potential gaps.
              </li>
            </ul>
          </div>

          <div className="p-4 border border-white space-y-2">
            <p className="font-semibold">Advanced Keyword Research:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                More comprehensive keyword analysis, considering user intent and
                seasonality.
              </li>
              <li>Identification of emerging trends and opportunities.</li>
            </ul>
          </div>

          <div className="p-4 border border-white space-y-2">
            <p className="font-semibold">Customized Keyword Strategy:</p>
            <ul className="list-decimal list-inside space-y-1">
              <li>
                Development of a tailored keyword strategy aligned with broader
                your safari & tour business goals.
              </li>
              <li>
                In-depth analysis of user intent behind keywords, leading to
                more targeted content creation.
              </li>
              <li>Based On intent (Informative, Commercial, Transactional)</li>
              <li>Competition & Keyword Difficulty</li>
              <li>Global Monthly Searches</li>
              <li>Local Monthly Searches</li>
            </ul>
          </div>
        </div>

        {/* Footer Label */}
      </div>
      {/*  */}
      <div className="min-w-[1000px] mt-0">
        {/* Keyword Research Title */}
        <div className="grid grid-cols-3 text-white text-center font-semibold text-[16px]">
          <div className="col-span-3 bg-[#0050d5] py-3 border border-white">
            Keyword Research
          </div>
        </div>

        {/* Keywords Summary Row */}
        <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#333] text-center font-medium text-[15px]">
          <div className="p-4 border border-white">
            No Of Keywords To Add: <strong>800</strong> Focus Keywords
          </div>
          <div className="p-4 border border-white">
            No Of Keywords To Add: <strong>1200</strong> Focus Keywords
          </div>
          <div className="p-4 border border-white">
            No Of Keywords To Add: <strong>1600</strong> Focus Keywords
          </div>
        </div>

        {/* Intended Keywords Row */}
        <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#1f1f1f] text-center font-semibold text-[14px]">
          <div className="p-4 border border-white">
            80 INTENDED KEYWORDS.{" "}
            <span className="font-normal text-[13px]">
              (Intent Keywords For Tofu, Mofu & Bofu)
            </span>
          </div>
          <div className="p-4 border border-white">
            120 INTENDED KEYWORDS{" "}
            <span className="font-normal text-[13px]">
              (Intent Keywords For Tofu, Mofu & Bofu)
            </span>
          </div>
          <div className="p-4 border border-white">
            160 INTENDED KEYWORDS.{" "}
            <span className="font-normal text-[13px]">
              (Intent Keywords For Tofu, Mofu & Bofu)
            </span>
          </div>
        </div>

        {/* Analysis Details Row */}
        <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#1e1e1e] text-left text-[14px]">
          <div className="p-4 border border-white space-y-2">
            <p className="font-semibold">Basic Keyword Analysis</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Basic keyword analysis to identify primary and secondary
                keywords.
              </li>
              <li>
                Competitor keyword analysis for identifying potential gaps.
              </li>
            </ul>
          </div>

          <div className="p-4 border border-white space-y-2">
            <p className="font-semibold">Advanced Keyword Research:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                More comprehensive keyword analysis, considering user intent and
                seasonality.
              </li>
              <li>Identification of emerging trends and opportunities.</li>
            </ul>
          </div>

          <div className="p-4 border border-white space-y-2">
            <p className="font-semibold">Customized Keyword Strategy:</p>
            <ul className="list-decimal list-inside space-y-1">
              <li>
                Development of a tailored keyword strategy aligned with broader
                your safari & tour business goals.
              </li>
              <li>
                In-depth analysis of user intent behind keywords, leading to
                more targeted content creation.
              </li>
              <li>Based On intent (Informative, Commercial, Transactional)</li>
              <li>Competition & Keyword Difficulty</li>
              <li>Global Monthly Searches</li>
              <li>Local Monthly Searches</li>
            </ul>
          </div>
        </div>

        {/* Footer Label */}
      </div>
      {/*  */}
      <div className="min-w-[1000px] mt-0">
        {/* Keyword Research Title */}
        <div className="grid grid-cols-3 text-white text-center font-semibold text-[16px]">
          <div className="col-span-3 bg-[#0050d5] py-3 border border-white">
            Keyword Research
          </div>
        </div>

        {/* Keywords Summary Row */}
        <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#333] text-center font-medium text-[15px]">
          <div className="p-4 border border-white">
            No Of Keywords To Add: <strong>800</strong> Focus Keywords
          </div>
          <div className="p-4 border border-white">
            No Of Keywords To Add: <strong>1200</strong> Focus Keywords
          </div>
          <div className="p-4 border border-white">
            No Of Keywords To Add: <strong>1600</strong> Focus Keywords
          </div>
        </div>

        {/* Intended Keywords Row */}
        <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#1f1f1f] text-center font-semibold text-[14px]">
          <div className="p-4 border border-white">
            80 INTENDED KEYWORDS.{" "}
            <span className="font-normal text-[13px]">
              (Intent Keywords For Tofu, Mofu & Bofu)
            </span>
          </div>
          <div className="p-4 border border-white">
            120 INTENDED KEYWORDS{" "}
            <span className="font-normal text-[13px]">
              (Intent Keywords For Tofu, Mofu & Bofu)
            </span>
          </div>
          <div className="p-4 border border-white">
            160 INTENDED KEYWORDS.{" "}
            <span className="font-normal text-[13px]">
              (Intent Keywords For Tofu, Mofu & Bofu)
            </span>
          </div>
        </div>

        {/* Analysis Details Row */}
        <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#1e1e1e] text-left text-[14px]">
          <div className="p-4 border border-white space-y-2">
            <p className="font-semibold">Basic Keyword Analysis</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Basic keyword analysis to identify primary and secondary
                keywords.
              </li>
              <li>
                Competitor keyword analysis for identifying potential gaps.
              </li>
            </ul>
          </div>

          <div className="p-4 border border-white space-y-2">
            <p className="font-semibold">Advanced Keyword Research:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                More comprehensive keyword analysis, considering user intent and
                seasonality.
              </li>
              <li>Identification of emerging trends and opportunities.</li>
            </ul>
          </div>

          <div className="p-4 border border-white space-y-2">
            <p className="font-semibold">Customized Keyword Strategy:</p>
            <ul className="list-decimal list-inside space-y-1">
              <li>
                Development of a tailored keyword strategy aligned with broader
                your safari & tour business goals.
              </li>
              <li>
                In-depth analysis of user intent behind keywords, leading to
                more targeted content creation.
              </li>
              <li>Based On intent (Informative, Commercial, Transactional)</li>
              <li>Competition & Keyword Difficulty</li>
              <li>Global Monthly Searches</li>
              <li>Local Monthly Searches</li>
            </ul>
          </div>
        </div>

        {/* Footer Label */}
        <div className="grid grid-cols-3 text-white text-center font-semibold text-[16px]">
          <div className="col-span-3 bg-[#0050d5] py-3 border border-white">
            ON-PAGE OPTIMIZATION
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}

      {/*  */}
      <div className="min-w-[1000px] mt-0">
        {/* Keywords Summary Row */}
        <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#333] text-center font-medium text-[15px]">
          <div className="p-4 border border-white">
            No Of Keywords To Add: <strong>800</strong> Focus Keywords
          </div>
          <div className="p-4 border border-white">
            No Of Keywords To Add: <strong>1200</strong> Focus Keywords
          </div>
          <div className="p-4 border border-white">
            No Of Keywords To Add: <strong>1600</strong> Focus Keywords
          </div>
        </div>

        {/* Intended Keywords Row */}
        <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#1f1f1f] text-center font-semibold text-[14px]">
          <div className="p-4 border border-white">
            80 INTENDED KEYWORDS.{" "}
            <span className="font-normal text-[13px]">
              (Intent Keywords For Tofu, Mofu & Bofu)
            </span>
          </div>
          <div className="p-4 border border-white">
            120 INTENDED KEYWORDS{" "}
            <span className="font-normal text-[13px]">
              (Intent Keywords For Tofu, Mofu & Bofu)
            </span>
          </div>
          <div className="p-4 border border-white">
            160 INTENDED KEYWORDS.{" "}
            <span className="font-normal text-[13px]">
              (Intent Keywords For Tofu, Mofu & Bofu)
            </span>
          </div>
        </div>

        {/* Analysis Details Row */}
        <div className="grid grid-cols-3 bg-[#d9e7fdc9] text-[#1e1e1e] text-left text-[14px]">
          <div className="p-4 border border-white space-y-2">
            <p className="font-semibold">Basic Keyword Analysis</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Basic keyword analysis to identify primary and secondary
                keywords.
              </li>
              <li>
                Competitor keyword analysis for identifying potential gaps.
              </li>
            </ul>
          </div>

          <div className="p-4 border border-white space-y-2">
            <p className="font-semibold">Advanced Keyword Research:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                More comprehensive keyword analysis, considering user intent and
                seasonality.
              </li>
              <li>Identification of emerging trends and opportunities.</li>
            </ul>
          </div>

          <div className="p-4 border border-white space-y-2">
            <p className="font-semibold">Customized Keyword Strategy:</p>
            <ul className="list-decimal list-inside space-y-1">
              <li>
                Development of a tailored keyword strategy aligned with broader
                your safari & tour business goals.
              </li>
              <li>
                In-depth analysis of user intent behind keywords, leading to
                more targeted content creation.
              </li>
              <li>Based On intent (Informative, Commercial, Transactional)</li>
              <li>Competition & Keyword Difficulty</li>
              <li>Global Monthly Searches</li>
              <li>Local Monthly Searches</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicPlan;
