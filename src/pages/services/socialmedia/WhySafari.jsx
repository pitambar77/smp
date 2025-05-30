import React from "react";
 
const contentLeft = [
  {
    title: `Strategic Prowess:`,
    text: "Our experts bring a wealth of strategic finesse to the table, ensuring your brand stands out in the crowded digital landscape.",
  },
  {
    title: "Cost-Effective Mastery:",
    text: "Unlock the full power of Facebook, LinkedIn, YouTube, Pinterest, and more without draining your budget. Sand Safari Marketing Pro is your passport to cost-effective mastery.",
  },
  {
    title: "Bandwidth Liberation:",
    text: "No need to stretch your bandwidth to the limits. Our team takes the reins, allowing you to focus on what you do best – crafting unforgettable safari experiences.",
  },
  {
    title: "Multichannel Domination:",
    text: "Imagine your brand not just on one platform, but conquering them all. Sand Safari Marketing Pro is the key to unleashing your brand's full potential across diverse social media platforms.",
  },
];
 
const contentRight = [
  {
    title: "Brand Awareness Safari:",
    text: "Watch as your brand roams free across the digital landscape, captivating audiences and leaving a lasting impression. Our dedicated squad ensures your brand is in the spotlight.",
  },
  {
    title: "Lead Expedition:",
    text: "Generating leads becomes a seamless journey. Sand Safari Marketing Pro leads the way, guiding potential customers toward the extraordinary experiences your business offers.",
  },
  {
    title: "Sales Safari Finale:",
    text: "Seal the deal with sales effortlessly. Our dedicated squad manages your social media presence, turning engagement into conversions.",
  },
  {
    title: "",
    text: "So, fellow adventurer, it's time to embrace the benefits, cast aside the burdens, and let the enthralling adventure of digital dominance begin! The digital savannah awaits – are you ready to conquer it with the Sand Safari Marketing Pro?",
  },
];
 
export default function WhySafari() {
  return (
    <>
  <div className="relative w-full mb-35" >
  <div className=" md:px-16  bg-white font-[Montserrat]">
    {/* HEADER */}
    <div className="mt-15 mb-16 max-w-[1140px] w-full mx-auto text-center">
      <h2 className="text-[48px] md:text-5xl font-bold text-[#3467d8] leading-[1.4] mb-4">
        Why Safari Marketing Pro Trumps Ordinary Agencies In African Safari Web Solutions?
      </h2>
      <h3 className="text-xl font-[400] text-[22px]  text-[#787878] leading-1.4 mb-6">
        Choose Excellence, Choose Success.
      </h3>
      <p className="text-[#787878] test-[17px] font[400]  mx-auto leading-relaxed mb-4">
        Embarking on the thrilling journey of establishing your African safari or tour business is an exhilarating adventure, but navigating the expansive terrain of social media can be a wild ride filled with challenges. Crafting a captivating strategy, mastering content scheduling, and engaging with your audience – it’s a digital expedition that requires more than just a casual approach.
      </p>
      <p className="text-[#787878] test-[17px] font[400] mx-auto leading-relaxed mb-4">
        But fear not, intrepid entrepreneurs! Imagine having a dream team of seasoned social media experts at your side, equipped with the latest tools and strategies, ready to guide your brand through the vast digital savannah. Enter Sand Safari Marketing Pro – the unsung heroes of the modern marketing era.
      </p>
      <p className="text-[#787878] test-[17px] font[400]  mx-auto leading-relaxed mb-4">
        Now, let's delve into the irresistible benefits that await:
      </p>
    </div>
 
    {/* CONTENT GRID */}
    <div className="max-w-[1140px] mx-auto">
    <div className="grid md:grid-cols-2 gap-12 ">
      {/* Left Column */}
      <div className="flex flex-col   ">
        {contentLeft.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 h-full ml-5">
            {/* <i className="fa-solid fa-check text-green-500 text-xl mt-1 " /> */}
            <div>
              <p className="text-[#787878] text-lg leading-relaxed">
                <strong className="text-[#787878] font-semibold">
                        <i className="fa-solid fa-check text-green-500 mr-4" /> {item.title}
 
 
                    </strong> {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
 
      {/* Right Column */}
      <div className="flex flex-col gap-8 mt-18 mr-15">
        {contentRight.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 h-full">
            {/* <i className="fa-solid fa-check text-green-500 text-xl mt-1" /> */}
            <div>
              <p className="text-[#787878] text-lg leading-relaxed">
                {item.title && <strong className="text-[#787878] font-semibold">
                   
                        <i className="fa-solid fa-check text-green-500 mr-4 " /> {item.title}
 
                    </strong>} {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  </div>
</div>
</>
  );
}
 