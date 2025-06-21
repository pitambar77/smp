import { useState } from 'react';

const tabData = [
  {
    id: 1,
    title: 'Future-Forward Search',
    content: `We always carry a futuristic approach in our African Safari Keyword strategies or the content that we write. The analysis is done in such a way that your website will still perform well in the times to come with technologies.`,
     content1: `Detailed keyword research, adapting future technologies, keeping up with the trend, and deep content research.`,
},
  {
    id: 2,
    title: 'Competitor Analysis',
    content: 'Doing an African Safari Competitor Analysis in the same industry and implementing what works for them can be a great way to learn. It also creates the opportunity to do what they have not adopted yet so you can have a win at the same.',
    content1: `Website research, detailed market position, social media presence, and Marketing efforts.`
},
  {
    id: 3,
    title: 'Full-funnel Safari Keyword Strategies',
    content: 'Understanding the keywords that work at each level of the conversion funnel plays a vital role in doing SEO Marketing For African Safari Website.',
    content1:'Keywords strategy for each level, website SEO, Right keyword in your content.'
},
  {
    id: 4,
    title: 'Site Architecture Optimization',
    content: 'Creating your website in a way that can help a user easily find the information they are looking for is a very important part of SEO to keep the traffic growing.',
    content1:'Easy navigation, fast loading, and visually appealing.'
},
  {
    id: 5,
    title: 'Strategic Link Building',
    content: 'Gaining quality links back to your African Safari Website can improve your page authority or build trust as well as ranking in the search engine result page.',
    content1:'Analysing quality links, increase page authority, and Search engine result page analysis.'
},
  {
    id: 6,
    title: 'Full-funnel Content Strategy',
    content: 'Having content that satisfies each level in a customer’s journey, can improve awareness about your brand and result in seamless conversion.',
    content1:'Content that educates your customer, Intent-oriented content, Content that converts.'
  },
  {
    id: 7,
    title: 'Scalable Technical SEO',
    content: 'Technically optimizing & and auditing your African Safari Website elements, gives a better chance to be found and ranked higher in the search engines.',
    content1:'Audit the website’s technical aspects, and review the ranking factors.'
  },
  {
    id: 8,
    title: 'Social Media Marketing',
    content: 'Leverage the power of popular social media networks to achieve your African Safari brand’s goals. It’s a great way to reach a greater audience segment with chances of getting leads.',
    content1:'Analysing the scope of each social media channel, reach more of your target audience.'
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
     <>
  
    
   
        <div className=' w-full bg-[#fafaff] '>
            <div className=' max-w-[1140px] mx-auto pt-[60px] pb-[80px] sm:px-[15px] '>
                <div className=' flex flex-col md:flex-row justify-between'>
                    <div className=' basis-[30%]'>
                        <h1 className=' text-[#3467d8] sm:text-[48px] text-[24px] sm:text-start text-center font-[700] pb-[15px] leading-[1.4] '>Organic Marketing Strategy</h1>
                    </div>
                    <div className=' basis-[60%]'>
                        <div className=' sm:mt-[60px] mt-10 sm:text-start text-justify sm:px-[15px] px-4'>
                            <p className='text-[#787878] sm:text-[18px] text-[14px] font-[400] sm:pb-[17px] sm:pt-[15px] leading-[1.4] '>Doing all things right and following a proven SEO strategy can change the whole behaviors of your website, as the visibility increases. This means more traffic and more opportunities to convert potential <br /> <strong>African Safari Customers</strong> .</p>
                            <p className='text-[#787878] sm:text-[18px] text-[14px]  font-[400] pb-[17px] pt-[15px] leading-[1.4] '>Here we present some of the ways that have acted as game changers for our SEO strategy.</p>
                        </div>
                    </div>

                </div>
                <div className=' flex flex-col md:flex-row gap-12 mt-[10px] sm:px-0 px-4  '>
                    <div className=' basis-[50%] '>
                        <div className='grid sm:grid-cols-2 gap-x-[45px] sm:gap-y-6 gap-y-4  ' >
                        {tabData.map((tab) => (
                            <div
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`cursor-pointer p-[20px] rounded  border-l-6 transition ${
                                activeTab === tab.id
                                ? 'bg-[#090a4a] text-white border-l-[#ff5254] text-center '
                                : 'bg-white text-black border-l-[#ff5254] hover:bg-gray-100 text-center '
                            } ` } style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
                            >
                            <span className=" text-[18px] font-[500]  ">
                                {tab.id}. {tab.title}
                                {activeTab === tab.id && <span className="ml-1">➜</span>}
                            </span>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className=' basis-[50%]'>
                        <div className="basis-full md:basis-1/2 bg-white shadow-md rounded-[5px]  p-[20px] flex flex-col items-center sm:min-h-[461px] " style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
                            <div className=' sm:mt-[50px] mt-[10px] '>
                                <h2 className="sm:text-[34px] text-[24px] font-bold text-[#3467d8] leading-[1.3] text-start">
                                {tabData[activeTab - 1].title}
                            </h2>
                            <p className="text-[#787878] font-[400] sm:text-[18px] text-[14px] leading-[1.5] sm:pt-[48px] pt-[20px]  whitespace-pre-line ">
                                {tabData[activeTab - 1].content}
                            </p>
                            <p className="text-[#787878] font-[400] sm:text-[18px] text-[14px] leading-[1.5] whitespace-pre-line py-[15px]">
                                {tabData[activeTab - 1].content1}
                            </p>
                            </div>
         
                                <div className='sm:pt-[50px] pt-[20px] sm:pb-[15px] '>
                                    <button className="bg-[#ff5254] text-white sm:px-[40px] px-[15px] font-semibold hover:text-[#ff5254] hover:border-[#ff5254] hover:border  sm:text-[16px] text-[14px] uppercase sm:py-[15px] py-[10px] rounded shadow hover:bg-[#011833] border-[#ff5254] duration-500 cursor-pointer " style={{ boxShadow: '0 12px 18px 0 rgb(0 0 0 / 15%)',letterSpacing: '1.5px'  }}>
                                    DOWNLOAD BROCHURE
                                </button>
                                </div>
                                
                                </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
