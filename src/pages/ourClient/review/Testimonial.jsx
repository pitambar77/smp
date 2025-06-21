import React from "react";
import { BiSolidQuoteRight } from "react-icons/bi";

const testimonials = [
  {
    text: `These guys are incredible. They've helped us to grow our business and now the biggest problem we seem to come across is having too much business - which is the ideal problem to have. We are right where we wanted to be and SMP made that possible. Thanks guys!`,
    image: "https://safarimarketingpro.com/images/wgboas-fig-109.png",
    company: "Falocn Safaris",
    name: "Hamilton Mandizvidza",
  },
  {
    text: `The great thing about Safari Marketing Pro is the small town feel of the company, but with the backing of a big business. We've been able to leverage that by really getting help with everything we need from a marketing standpoint through one company and platform.`,
    image: "https://safarimarketingpro.com/images/wgboas-fig-13.png",
    company: "Jerry Tanzania Tours",
    name: "Jeremiah Kimambo",
  },
  {
    text: `With SMP's help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much easier to use, has tons of more features than before and is incredibly easy to maintain. We could not be happier with our new website! Thanks,CHIN, THANKS SMP TEAM!`,
    image: "https://safarimarketingpro.com/images/wgboas-fig-56.png",
    company: "AT Gear",
    name: "Fred Namwandu",
  },
  {
    text: `We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer`,
    image: "https://safarimarketingpro.com/images/wgboas-fig-10.png",
    company: "Gazelle Safari Africa",
    name: "Ann Kalembe",
  },
  {
    text: `SMP has allowed us to get our story and the purpose of our company out in front of people. It is a one-stop shop that can personalize your business's existence, put you on the map and help you reach your dreams and goals.`,
    image: "https://safarimarketingpro.com/images/wgboas-fig-16.png",
    company: "Lifetime Safaris",
    name: "Baraka & Agness",
  },
  {
    text: `SAFARI MARKETING PRO is responsible for helping us generate millions in new business over the past 7 years. We have had to brainstorm and challenge the status quo but it has paid off in spades. SMP fuels my brand..`,
    image: "https://safarimarketingpro.com/images/wgboas-fig-83.png",
    company: "Safari DMC",
    name: "Andrew Nganga",
  },
];
const Testimonial = () => {
  return (
    <div className=" w-full">
      <div className=" max-w-[1140px] mx-auto pt-[70px]  items-center justify-center text-center">
        <h1 className=" capitalize px-[8%] pb-[15px] text-[48px]  text-[#3467d8] font-[700] leading-[1.4] ">
          See What Our Clients Are Saying About Our Services
        </h1>
        <p className=" px-4  text-cente text-[#787878] text-[22px] font-[400]">
          Don’t just take our word for it. See what our clients are saying.
        </p>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 py-[30px] overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-[0px_6px_16px_rgb(0_0_0_/_22%)] p-5 h-[340px] flex flex-col justify-between overflow-hidden"
            >
              <BiSolidQuoteRight className="absolute bottom-17 right-[10px] text-gray-200 w-30 h-30 opacity-70 z-0" />

              <p className="text-[#787878] text-[16px] leading-inherit mb-[15px] relative z-10 ">
                {item.text}
              </p>

              <div className="flex items-center gap-4 pt-4  relative  z-10">
                <img
                  src={item.image}
                  alt={item.company}
                  className="w-[80px] h-full object-contain"
                />
                <div>
                  <h3 className="text-[#011833] text-[20px] font-semibold pb-[5px]">
                    {item.company}
                  </h3>
                  <p className="text-[#787878] text-[16px] pb-[5px] font-medium">
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
