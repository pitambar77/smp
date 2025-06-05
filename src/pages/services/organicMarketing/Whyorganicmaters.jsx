import React from 'react';
import { CheckCircle } from 'lucide-react';
 
 
 
const Whyorganicmaters = () => {
    return (
        <>
 
            <div className="relative w-full">
                {/* Background image */}
                <div className="absolute inset-0 bg-[url('https://safarimarketingpro.com/images/bg-wsmtdmyc.png')] bg-cover bg-center z-0" />
 
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-[rgba(52,103,216,0.9)] z-10" />
 
                {/* Main content */}
                <div className="relative z-20 text-white py-20 px-6">
                    <div className="max-w-[1140px] mx-auto text-center  mb-5 ">
                        <h2 className="font-[Montserrat] text-center font-bold text-[36px] md:text-[48px] capitalize leading-[1.4] pt-0 pb-[15px] px-[8%]">
 
                            Why Organic Marketing Matters For Every Safari Operator
                        </h2>
 
                        <h3 className="text-[20px] md:text-[22px] font-[Montserrat] font-medium mb-10">
                            Increase Your Search Rankings and Get Discovered More Online
                        </h3>
                        {/* <p className="font-[Montserrat] font-medium text-[18px] text-center text-white leading-[1.7] px-[6%] pb-[15px] m-0">
                            When considering if Google Ads are right for your African Safari Business, there are a lot of variables to think about such as: who is going to continuously monitor my African Safari Google ADs Campaign and make changes on the go if needed. How big market is for the African Safari Operators, what are the targeted keywords that will give inquiries, and are my safari campaigns reaching the people who are really Searching For African Safaris?
                        </p> */}
 
 
                        <p className="font-[Montserrat] font-medium text-[18px] text-center text-white leading-[1.7] px-[6%] pb-[15px] m-0">
                            As the owner of an African Safari Company, it can be a challenge to keep your inbox full and your safari guides are busy. And even when it comes to Organic Marketing For African Safari Businesses like yours, a lot goes into it. From managing your website, building links, creating optimized content, or performing keyword research, there’s a lot to be done. You're spending a ton of money on your marketing but why isn't your inbox full of the bookings?                        </p>
 
                        <p className="font-[Montserrat] font-medium text-[18px] text-center text-white leading-[1.7] px-[6%] pb-[15px] m-0">
                            Travellers who looking for the best Safari and tour operators from USA & UK, and Canada come across your competitors’ websites first we need to understand these are very important topics you need to think of.                                               </p>
 
 
 
 
                    </div>
                   <div className="max-w-[950px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
  {[
    `This is due to the <span class='font-semibold'>African Safaris Organic Marketing</span> that they have invested in for years and years.`,
    `The high-intent <span class='font-semibold'>African Safari Keywords</span> they are using for top ranking in Google.`,
    `Which information clients are looking at online before they book.`,
    `What Backlink they are using to bring more traffic.`,
    `They are reaching out to a larger audience who are really looking for <span class='font-semibold'>African Safari.</span>`,
    `They are adopting new Organic Marketing Strategies For African Safari Operator.`,
    `They are managing their reputations by using Trip Advisor, Tour Radar etc.`
  ].map((text, idx) => (
    <div key={idx} className="flex items-start gap-3">
      <i className="fa-solid fa-check text-red-500 text-[20px] mt-1"></i>
      <p
        className="font-[Montserrat] text-[18px] leading-[1.6] text-white"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  ))}
</div>
 
<div>
  <p className="font-[Montserrat] ml-35 mr-35 font-medium text-[18px] text-center text-white leading-[1.7] px-[6%] pb-[15px] mt-10">
    So, the above Reasons are wake-up alarms for your
    <span className="font-semibold"> African Safari Business</span>. If you want guaranteed revenue then you need a result-oriented Specific
    <span className="font-semibold"> African Safari Organic Marketing Plan.</span> Wonder how can you get a tailor-made
    <span className="font-semibold"> SEO Marketing Plan For African Safari Business?</span> We at
    <span className="font-semibold"> Safari Marketing Pro</span> have successfully provided end-to-end
    <span className="font-semibold"> SEO Marketing Solution For African Safari Operator</span> to enhance their Revenue.
  </p>
</div>
 
<div className="max-w-[950px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
  {[
    "Google holds 92.03% of the global search engine market share.",
    "Only 25% of customers scroll past the first page of SERPs.",
    "The organic search result has an average click-through rate (CTR) of 31.7%.",
    `81% of consumers conduct online research before they make a booking for their <span class='font-semibold'>African Safari Trip</span>.`
  ].map((text, idx) => (
    <div key={idx} className="flex items-start gap-3">
      <i className="fa-solid fa-check text-red-500 text-[20px] mt-1"></i>
      <p
        className="font-[Montserrat] text-[18px] leading-[1.6] text-white"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  ))}
</div>
 
                    <div className=" text-center mt-12 ">
                        <p className=" font-bold text-[28px] text-white underline">
                            <a href="" target='_blank'>So Stop worrying and start Acting!!</a>
 
                        </p>
                    </div>
 
                </div>
            </div>
 
 
 
 
 
 
        </>
    );
};
 
export default Whyorganicmaters;
 
 