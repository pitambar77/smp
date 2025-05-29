import React from 'react';

const packages = [
  {
    title: 'PACKAGES',
    details: [
      '2000$(BUDGET)',
      '3000$(MID LUXURY)',
      '5000$(LUXURY)'
    ],
    description: [
      `Fundamental analysis of your website, identifying key areas for improvement.\n\nBasic Restructuring`,
      `This package delves deeper into your website's performance, usability, and content strategy. It includes advanced analytics, user behavior analysis, and thorough keyword research.\n\nHigh-End & Informative Structure`,
      `This Luxury package not only assesses your safari website but also conducts an in-depth analysis of competitors and market trends. It includes detailed competitor benchmarking, specific insights, and a tailored strategy to outperform competitors.\n\nPerfect for those operators aiming for a strategic edge in their market.\n\nWith a focus on sustained growth and competitive advantage.`
    ]
  },
  {
    title: 'Research\nWebsite architect',
    details: ['', '', `This package goes beyond structuring and prioritises the enhancement of user experience.\n\n**When we create we focus on 3 things**\n1. Industry leaders\n2. Your requirements\n3. Customers needs\n\nIt involves advanced restructuring with a focus on luxury design, in-depth content information, and strategic placement of information about the destinations.`]
  },
  {
    title: 'Graphics',
    details: [
      `Focuses on incorporating basic images`,
      `Rich visuals showing brand presence`,
      `Premium package includes static & client images + maps, clips, PDFs`
    ]
  },
  {
    title: 'Communications',
    details: [
      'Provide info about mission, vision, and story.',
      'Narrative based on brand identity.',
      'Premium crafted branding story, goals, alignment.'
    ]
  },
  {
    title: 'Identify Destination Contents',
    details: [
      'Client provides the content.',
      'Support with tailored SEO content.',
      'Advanced writing, visual guides, enhanced storytelling.'
    ]
  },
  {
    title: 'Layout Designs',
    details: ['Predefined Layouts', 'Pre-Customized Layouts', 'Tailor-made design']
  },
  {
    title: 'Number of pages',
    details: ['100 to 120', '150-200', '400']
  },
  {
    title: 'Responsive Design',
    details: [
      'Fit on the mobile',
      'Fit on mobile and Desktop',
      'It talks to the client. It creates impact on the clients'
    ]
  },
  {
    title: 'Platform',
    details: ['HTML', 'HTML / WordPress', 'Based on your Requirement']
  },
  {
    title: 'SEO Optimization',
    details: [
      'Basic SEO optimization',
      'Advanced SEO strategies and optimization',
      'Tailored SEO for optimal visibility'
    ]
  },
  {
    title: 'Confirmation/thank you page setup',
    details: [
      'Only Thank You page integration',
      'Thank You page and consumer copy integration',
      'Thank You page and consumer copy + conversion setup'
    ]
  },
  {
    title: 'Browser & device compatibility',
    details: [
      'Chrome only',
      'Chrome / Safari',
      'All major browsers and devices'
    ]
  },
  {
    title: 'Autoresponder (Bot & live chat)',
    details: ['Live Chat', 'Add WhatsApp integration', 'WhatsApp & Bot support']
  },
  {
    title: 'Advanced analytics tracking',
    details: ['NO', 'YES', 'YES']
  },
  {
    title: 'Blog page Designing and development',
    details: [
      'Only Blog Designing',
      'Blog Design + Home page integration',
      'Blog + Home page + Dedicated landing page'
    ]
  },
  {
    title: 'Join Group Tour',
    details: ['NO', 'Home page integration only', 'Dedicated landing page integration']
  },
  {
    title: 'Maintenance',
    details: [
      '2 months, only adding packages',
      '3 months, only adding packages',
      '1 year full maintenance + technical error fixing'
    ]
  },
  {
    title: 'Dedicated UX project manager',
    details: [
      'Dedicated Project Manager',
      '2 departments included',
      '6 departments included'
    ]
  },
  {
    title: 'You get 24/7 support',
    details: ['Yes', 'Yes', 'Yes']
  }
];

const BudgetPlan = () => {
  return (
    <div className="overflow-auto w-full">
      <div className="max-w-[1140px] mx-auto  py-10">
      <div className="min-w-[1000px] grid grid-cols-4 border border-gray-300">
        {packages.map((pkg, i) => (
          <React.Fragment key={i}>
            <div className={`border border-gray-200 p-4 font-semibold ${i === 0 ? 'bg-[#ff5254] text-2xl flex items-center justify-center text-white' : 'bg-[#011833] text-white flex items-center justify-center'}`}>
              {pkg.title} 
            </div>
            {pkg.details.map((detail, j) => (
              <div key={j} className={`border border-gray-200 p-4 whitespace-pre-line ${i === 0 ? 'bg-[#ff5254] flex items-center justify-center text-2xl font-[600] p-[20px] text-white' : 'bg-[#d9e7fdc9] text-[#626262]'}`}>
                {detail}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>

    </div>
  )
}

export default BudgetPlan
