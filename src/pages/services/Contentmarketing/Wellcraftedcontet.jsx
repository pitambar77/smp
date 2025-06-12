

import React from 'react';
import { CheckCircle } from 'lucide-react';


const contentLeft = [
    {
        text: `<span class="font-semibold">Builds Brand Awareness –</span>By crafting well-written and engaging content, African safari and tour brands can effectively communicate their brand values and visions to their target audience.`,
    },

    {
        text: `<span class="font-semibold">Grows Online Authority </span>When you produce content that resonates with the target audience, it’s highly likely to attract links from other websites which further enhances authority and visibility`,
    },

    {
        text: `<span class="font-semibold"> Provides Long-Term Results -</span>High-quality African Travel Content tends to be timeless, addressing fundamental topics and providing information that remains relevant over time. As a result, it continues to rank well on search engines and keeps a flow of organic traffic.`,
    },
   

];

const contentRight = [
    {
        text: `<span class="font-semibold">Customized approach for each client –</span> We understand each client is unique in terms of requirements, brand identity, and target audience. So, we take a personalized approach to ensure the content aligns with your needs.`,
    },


    {
        text: `<span class="font-semibold">Assuring each content is of the highest standard –</span>High-quality African Travel Content tends to be timeless, addressing fundamental topics and providing information that remains relevant over time. As a result, it continues to rank well on search engines and keeps a flow of organic traffic.`,
    },
    {
        text: `<span class="font-semibold"> Provides Long-Term Results -</span>High-quality African Travel Content tends to be timeless, addressing fundamental topics and providing information that remains relevant over time. As a result, it continues to rank well on search engines and keeps a flow of organic traffic.`,
    },

    // {
    //     text: `<span class="font-semibold">An online shop</span> – Your website is a platform where you can display all the safari & tour services with all the packages you provide. This gives your customers an idea about you firsthand before contacting you.`,
    // },

    // {
    //     text: `<span class="font-semibold">Strong Brand Presence</span> – Recognizing your brand can bring awareness that leads to more customer trust which results in how successful your brand will be. So, presenting your brand goal in the right way is a must do!`,
    // },
];


const Wellcraftedcontent = () => {
    return (
        <>

            <div className="relative w-full">
                {/* Background image */}
                {/* <div className="absolute inset-0 bg-[url('https://safarimarketingpro.com/images/google-ads-bg-wsmtdmyc.jpg')] bg-cover bg-center z-0" /> */}
                <div className="absolute inset-0 bg-[url('https://safarimarketingpro.com/images/bg-monkey.png')] bg-cover bg-center z-0" />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-[#3467d8] z-10" />

                {/* Main content */}
                <div className="relative z-20 text-white py-20 px-6">
                    <div className="max-w-[1140px] mx-auto text-center  mb-20 ">
                        <h2 className="font-[Montserrat] text-center font-bold text-[36px] md:text-[48px] capitalize leading-[1.4] pt-0 pb-[15px] px-[8%]">

                            Well-Crafted Content Serves As The Foundation Of Your Online Presence

                        </h2>

                        {/* <p className="font-[Montserrat] font-medium text-[18px] text-center text-white leading-[1.7] px-[6%] pb-[15px] m-0">
              Our Content Writing For African Safari Operators includes writing compelling content that helps scale up your safari & and tour brand and captivate more potential customers.           
                           </p> */}
                        <p className="font-[Montserrat] font-medium text-[18px] text-center text-white leading-[1.7] px-[6%] pb-[15px] m-0">
                            With most of the African Safari & Tour Customers being on online platforms to look for services they require, it has been studied that 77% of users get captive by great quality content. In addition to that, if your content is SEO optimized, it can bring 10x more return on investment.
                        </p>

                        <p className="font-[Montserrat] font-medium text-[18px] text-center text-white leading-[1.7] px-[6%] pb-[15px] m-0">
                            Let’s look at the benefits of the right Content Writing For African Safari Operators.
                        </p>


                       
                        <div className="w-[87%] pt-5 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mx-auto text-left">

  {/* Left Column Items */}
  {contentLeft.map((item, i) => (
    <div key={i} className="flex items-start gap-3 px-4">
      <i className="fa-solid fa-check text-red-500 mt-1 text-[20px]"></i>
      <p
        className="text-white text-[18px] font-[Montserrat] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: item.text }}
      />
    </div>
  ))}

  {/* Right Column Items */}
  {contentRight.map((item, i) => (
    <div key={i} className="flex items-start gap-3 px-4">
      <i className="fa-solid fa-check text-red-500 mt-1 text-[20px]"></i>
      <p
        className="text-white text-[18px] font-[Montserrat] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: item.text }}
      />
    </div>
  ))}

</div>


                    </div>
                </div>
            </div>






        </>
    );
};

export default Wellcraftedcontent;
