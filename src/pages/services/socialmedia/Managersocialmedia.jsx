import React from "react";
import { PiCheckFatFill } from "react-icons/pi";

const contentLeft = [
  {
    text: `<strong>Social media done wrong-</strong>  social media is the first thing that prospects look out for when searching for an <strong>African Safari Operator</strong> like you. If you have not provided enough relevant information for them to have trust in you, while maintaining your brand positioning, then it will rather drive away inquiries.`,
  },
  {
    text: `<strong>Increase your profitability- </strong>  We curate an African Safari Social Media Marketing to help you reach an unlimited number of prospects across locations without spending a hefty amount.`,
  },
  {
    text: `<strong>Not the conventional social media management-</strong>  We thoroughly research your unique African safari business needs and plan a strategy that would perform the best.`,
  },
  // {
  //     text: `<strong>Increase in conversion rate</strong> – An impactful Website Design For African Safari Operators can highly benefit you in turning your leads into customers. As the first thing someone searches for is your website, an amazing one gets the job done!`,
  // },
];

const contentRight = [
  {
    text: `<strong>Social media done right-</strong>  The perfect <strong>  Social Media Strategy For African Safari</strong> should align with your safari brand’s visions. It should be optimized to be found easily when searched and should present every aspect of your working areas in a visually appealing manner. As it’s like an ornament for your safari brand, you must showcase everything that is likely to drive bookings.`,
  },
  {
    text: `<strong>Brand visibility -</strong>  We make your safari brand seen & and recognized across different platforms by your target audience.`,
  },
  {
    text: `<strong>Let our work speak</strong>  We are entrusted by more than clients in the African Safari And Tour Industry.`,
  },
];

const Managersocialmedia = () => {
  return (
    <>
      <div className="relative w-full">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('https://safarimarketingpro.com/images/bg-monkey.png')] bg-cover bg-center z-0" />

        {/* Gradient overlay */}
        <div className="absolute inset-0  z-10" />

        {/* Main content */}
        <div className="relative z-20 text-white py-20 px-6">
          <div className="max-w-[1140px] mx-auto text-center mb-5 ">
            <h2 className="font-[Montserrat] font-bold text-[36px] md:text-[48px] capitalize leading-[1.4] px-4 mb-8 mt-6">
              Not reaching a huge portion of your potential customers due to
              poorly managed Social Media Marketing?{" "}
            </h2>

            <div className="grid gap-y-6 mt-[65px] text-left w-full max-w-[1140px] mx-auto px-6 ">
          
              {contentLeft.map((item, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-2 gap-[40px] "
                >
                  {/* Left Item */}
                  <div className="  rounded-md flex items-start gap-[10px] h-full ml-15">
                     <PiCheckFatFill className="text-[#ff5255] text-[20px] mt-1 shrink-0" />
                    <p
                      className="text-white text-[18px]  leading-[inherit]"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>

                  {/* Right Item */}
                  <div className="  rounded-md flex items-start gap-[10px] mr-[70px] h-full">
                     <PiCheckFatFill className="text-[#ff5255] text-[20px] mt-1 shrink-0" />
                    <p
                      className="text-white text-[18px]  leading-[inherit]"
                      dangerouslySetInnerHTML={{
                        __html: contentRight[i]?.text || "",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Managersocialmedia;
