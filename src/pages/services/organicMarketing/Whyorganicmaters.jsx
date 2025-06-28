import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { PiCheckFatFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Whyorganicmaters = () => {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouch = () => {
    setIsTouched(!isTouched);
  };
  return (
    <>
      <div className="relative w-full">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('https://safarimarketingpro.com/images/bg-wsmtdmyc.png')] bg-cover bg-center z-0" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[rgba(52,103,216,0.9)] z-10" />

        {/* Main content */}
        <div className="relative z-20 text-white py-20 sm:px-6">
          <div className="max-w-[1140px] mx-auto   mb-5 ">
            <h2 className=" text-center font-bold text-[24px] sm:text-[36px] lg:text-[48px] capitalize leading-[1.4] pt-0 pb-[15px] sm:px-[8%] px-2">
              Why Organic Marketing Matters For Every Safari Operator
            </h2>

            <h3 className="text-[18px] sm:text-[22px] text-center  font-medium sm:mb-10">
              Increase Your Search Rankings and Get Discovered More Online
            </h3>
          </div>
          <div className=" max-w-[1140px] mx-auto">
            <p className=" font-medium sm:text-[18px] text-[14px] sm:text-center text-justify text-white leading-[1.7] mx-[2px] px-[6%] pb-[15px] ">
              As the owner of an African Safari Company, it can be a challenge
              to keep your inbox full and your safari guides are busy. And even
              when it comes to Organic Marketing For African Safari Businesses
              like yours, a lot goes into it. From managing your website,
              building links, creating optimized content, or performing keyword
              research, there’s a lot to be done. You're spending a ton of money
              on your marketing but why isn't your inbox full of the bookings?
            </p>

            <p className=" font-medium sm:text-[18px] text-[14px] sm:text-center text-justify text-white leading-[1.7] px-[6%] pb-[15px] m-0">
              Travellers who looking for the best Safari and tour operators from
              USA & UK, and Canada come across your competitors’ websites first
              we need to understand these are very important topics you need to
              think of.{" "}
            </p>
          </div>
          <div className="max-w-[1140px] mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 sm:pt-[20px] pt-2 sm:px-[6%] px-4">
              
            
            {[
              `This is due to the <span class='font-semibold'>African Safaris Organic Marketing</span> that they have invested in for years and years.`,
              `The high-intent <span class='font-semibold'>African Safari Keywords</span> they are using for top ranking in Google.`,
              `Which information clients are looking at online before they book.`,
              `What Backlink they are using to bring more traffic.`,
              `They are reaching out to a larger audience who are really looking for <span class='font-semibold'>African Safari.</span>`,
              `They are adopting new Organic Marketing Strategies For African Safari Operator.`,
              `They are managing their reputations by using Trip Advisor, Tour Radar etc.`,
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-3 sm:pb-[20px] pb-2 sm:px-[15px]">
                <span className=" text-[#ff5255] sm:text-[20px] text-[14px] mt-1">
                  <PiCheckFatFill />
                </span>
                <p
                  className=" sm:text-[18px] text-[14px] sm:leading-[1.6] text-white sm:text-start text-justify "
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </div>
            ))}
          </div>
</div>
          <div className="max-w-[1140px] mx-auto">
            <p className=" font-medium px-4 sm:text-[18px] text-[14px] sm:text-center text-justify text-white leading-[1.7] sm:px-[6%] pb-[15px] sm:mt-10 mt-4">
              So, the above Reasons are wake-up alarms for your
              <span className="font-semibold"> African Safari Business</span>.
              If you want guaranteed revenue then you need a result-oriented
              Specific
              <span className="font-semibold">
                {" "}
                African Safari Organic Marketing Plan.
              </span>{" "}
              Wonder how can you get a tailor-made
              <span className="font-semibold">
                {" "}
                SEO Marketing Plan For African Safari Business?
              </span>{" "}
              We at
              <span className="font-semibold"> Safari Marketing Pro</span> have
              successfully provided end-to-end
              <span className="font-semibold">
                {" "}
                SEO Marketing Solution For African Safari Operator
              </span>{" "}
              to enhance their Revenue.
            </p>
          </div>

          <div className="max-w-[1140px] mx-auto ">
             <div className="grid grid-cols-1 md:grid-cols-2 sm:pt-[20px] pt-2 sm:px-[6%] px-4">
            {[
              "Google holds 92.03% of the global search engine market share.",
              "Only 25% of customers scroll past the first page of SERPs.",
              "The organic search result has an average click-through rate (CTR) of 31.7%.",
              `81% of consumers conduct online research before they make a booking for their <span class='font-semibold'>African Safari Trip</span>.`,
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-3 sm:pb-[20px] pb-2 sm:px-[15px]">
                <span className=" text-[#ff5255] sm:text-[20px] text-[14px] mt-1">
                  <PiCheckFatFill />
                </span>
                <p
                  className=" sm:text-[18px] text-[14px] sm:leading-[1.6] text-white sm:text-start text-justify "
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </div>
            ))}
          </div>
          </div>

          <div className=" text-center sm:mt-12 mt-4 ">
            <p 
            onTouchStart={handleTouch} // for mobile
      onClick={handleTouch} 
                className={` font-bold text-[28px]  underline cursor-pointer hover:text-black ${
        isTouched ? 'text-black' : 'text-white'
      }`}>
            
              <Link to='/lets-grow-business'>
              
                So Stop worrying and start Acting!!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whyorganicmaters;
