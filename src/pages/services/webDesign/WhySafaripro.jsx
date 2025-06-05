import React from 'react';
import { XCircle } from 'lucide-react';
 
const pros = [
  `                 <span class="text-green-600 text-xl mr-5">✔</span>
We understand exactly what your customer might be looking for in your <strong class="font-semibold">African Safari Website</strong>. So, we curate the designs to satisfy the search.`,
  `                 <span class="text-green-600 text-xl mr-5">✔</span>
We make <strong class="font-semibold">Website Designs For African Tours And Travel</strong> that separate you from the crowd and which is aligned with your brand objective.`,
  `                 <span class="text-green-600 text-xl mr-5">✔</span>
A visually appealing website can be a deciding factor for most of the audience and we give our quality attention to that.`,
  `                 <span class="text-green-600 text-xl mr-5">✔</span>
We have mastered how your customer wants your website experience to be, so we prepare navigations accordingly.`,
  `  <span class="text-green-600 text-xl mr-5">✔</span>We optimize your website from end-to-end starting from the website to every <span class="font-semibold">African Safaris Content</span> to keep you on top of the search.`,
 
  `  <span class="text-green-600 text-xl mr-5">✔</span>Loading time can be a drawback for your website so we remove unnecessary functionalities that would slow down the process.`,
  `  <span class="text-green-600 text-xl mr-5">✔</span>We present the right and quality content that solves all your customer queries.`,
  `  <span class="text-green-600 text-xl mr-5">✔</span>We prepare the website with keeping the target audience in mind which in turn builds the brand reputation that stays in the customer’s mind for a long span.`
 
];
 
const cons = [
  ` <span class="text-red-600 text-xl mr-5">✖</span>With not having an understanding of the <strong class="font-semibold">African Safari Industry</strong>, the website might not be rightfully designed for your audience.`,
  ` <span class="text-red-600 text-xl mr-5">✖</span>Chances are your website might look similar to another website as there is no deep research on your objective.`,
  ` <span class="text-red-600 text-xl mr-5">✖</span>What looks good for one website, might not look the same for another. So, discovering what would work for each <strong class="font-semibold">Web Design For African Safari Operator</strong> is a task.`,
  ` <span class="text-red-600 text-xl mr-5">✖</span>Without having ground-level experience, it is difficult to achieve that.`,
  ` <span class="text-red-600 text-xl mr-5">✖</span>Understanding which optimization works for an <span class="font-semibold">African Safari Website</span>might be a difficult task altogether.`,
  ` <span class="text-red-600 text-xl mr-5">✖</span>Figuring out which ones to keep and which ones to remove for the right functioning of your website can lead to the wrong.`,
  ` <span class="text-red-600 text-xl mr-5">✖</span>Not having enough content to support your website is a huge fallback.`,
  ` <span class="text-red-600 text-xl mr-5">✖</span>Target audience is often avoided in the process which fails you in building a brand presence.
 
`
 
 
];
 
const WhySafaripro = () => {
  return (
    <section className="py-28 px-4 bg-white text-center font-[Montserrat]">
      {/* Heading */}
      <h2 className="font-bold text-[48px] text-center capitalize text-[#3467d8] leading-[1.4] m-0 pb-[15px]">
        Why Safari Marketing Pro Trumps Ordinary <br />
        Agencies In African Safari Web Solutions?
      </h2>
 
      {/* Subheading */}
      <p className="font-normal text-[22px] text-center capitalize text-[#787878] leading-[1.4] m-0 p-0 mb-25">
        Choose Excellence, Choose Success.
      </p>
      <div className="flex justify-center items-center gap-10 mb-8">
        {/* Left Side */}
        <h3 className="text-[#3467d8] text-[36px] font-semibold capitalize ">
          Safari Marketing Pro
        </h3>
 
        {/* VS Text - enlarged */}
        <h3 className="text-[#3467d8] text-[38px] font-semibold sec3_h3 mob-vs pl-5 pr-25 ">
          vs.
        </h3>
 
        {/* Right Side */}
        <h3 className="text-[#3467d8]  mr-20 text-[36px] font-semibold capitalize  ">
          Other Agencies
        </h3>
      </div>
 
 
 
 
      {/* Comparison Grid */}
      <div className="max-w-7xl mx-auto mt-20 " >
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Safari Marketing Pro */}
          <div className="space-y-7 ml-20 w-[510px]  ">
            {pros.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* <span className="text-green-600 text-xl mr-5">✔</span> */}
                {/* <i className="fa-solid fa-check text-green-500 mt-1 font-[800] "></i> */}
 
                <p
                  className="text-[#787878] text-[18px] font-[Montserrat] leading-[1.7]"
 
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
            ))}
          </div>
 
          {/* Other Agencies */}
          <div className="space-y-8 mr-28">
            {cons.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* <XCircle className="text-red-500 mt-1" /> */}
                <p
                  className="  text-[#787878] text-[18px] font-[Montserrat] leading-[1.7]"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default WhySafaripro;
 
 