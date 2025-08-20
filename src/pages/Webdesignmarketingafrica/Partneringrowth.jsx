// import React from 'react'

// function Partneringrowth() {
//   return (
//   <>
//   <div className="px-4 bg-white">
//       {/* Heading */}
//       <h3 className="font-montserrat font-bold text-[40px] text-[#3467d8] leading-[1.3] relative text-center mb-[30px]">
//         We’re not just your marketing agency -we’re
//         <br/>
// your partner in growth of your Safari Business.
//       </h3>
//       <h4 className="font-montserrat font-normal text-[19px] text-center text-[#787878] mb-[30px]"> 
//         Here’s what you can expect from Safari Marketing Pro:

//       </h4>
// </div>
//   </>
//   )
// }

// export default Partneringrowth
import React from 'react';

const partnerData = [
  {
    img: 'https://safarimarketingpro.com/images/Complete.png',
    title: 'Complete Safari Business Audit',
    desc: `We’ll review your entire online presence — from your safari website and Google Ads to your social media and SEO — to see what’s working, what’s not, and where the biggest growth opportunities are hiding.`,
  },
  {
    img: 'https://safarimarketingpro.com/images/In-Depth.png',
    title: 'In-Depth Competitor Analysis',
    desc: `We dig into your competitors — both local Tanzania operators and international safari brands — to see exactly what they’re doing to attract travelers. Then we build strategies to help you outperform them, both online and in the booking funnel.`,
  },
  {
    img: 'https://safarimarketingpro.com/images/Tailored.png',
    title: 'Tailored Growth Strategy for Safari Operators',
    desc: `From high-converting website designs focused on user experience and bookings, to data-driven digital marketing campaigns across Google, Facebook, Instagram, and more — every plan is custom-built for your safari business to generate more inquiries, leads, and confirmed bookings.`,
  },
  {
    img: 'https://safarimarketingpro.com/images/ROI.png',
    title: 'ROI-Driven Projections',
    desc: `We keep your business goals front and center. You’ll get clear, realistic projections for leads, bookings, and revenue growth — all backed by data, key performance indicators, and a step-by-step roadmap to measurable success.`,
  },
];

function Partneringrowth() {
  return (
    <>
      <div className="px-4 bg-white pb-25">
      {/* Heading */}
      <h3 className="font-montserrat font-bold text-[40px] text-[#3467d8] leading-[1.3] relative text-center mb-[30px]">
        We’re Not Just Your Marketing Agency — We’re 
        <br/>
Your Partner in Growing Your Safari Business
      </h3>
      <h4 className="font-montserrat font-normal text-[19px] text-center text-[#787878] mb-[30px]"> 
        Here’s what you can expect from Safari Marketing Pro:

      </h4>


        {/* Grid */}
        <div className="max-w-[1110px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {partnerData.map((item, index) => (
            <div
              key={index}
              className="p-3  text-center transition-shadow duration-300 bg-white border border-gray-200 shadow-[1px_4px_15px_0_rgba(0,0,0,0.3)] rounded-l-xs "
            >
              <div className="mb-5 relative text-center pt-[35px]">
  <div className="flex justify-center w-full">
    <div className="max-w-[140px]">
      <img
        src={item.img}
        alt={item.title}
        className="mx-auto h-[80px] object-contain"
      />
    </div>
  </div>
</div>

              <h4 className="font-montserrat mb-8 font-bold text-[20px] text-[#0057ff] leading-[1.3] relative">
                {item.title}
              </h4>
              <p className="font-medium text-[17px]  text-center text-[#3d3b3b] font-montserrat mb-5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Partneringrowth;
