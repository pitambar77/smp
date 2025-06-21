import React from "react";

import { PiCheckFatFill } from "react-icons/pi";
import { ImCross } from "react-icons/im";
import { FaTimes } from "react-icons/fa";

const pros = [
  <>
    We understand exactly what your customer might be looking for in your{" "}
    <span className=" font-[600]"> African Safari Website </span>. So, we curate
    the designs to satisfy the search.
  </>,
  <>
    We make{" "}
    <span className=" font-[600]">
      {" "}
      Website Designs For African Tours And Travel{" "}
    </span>{" "}
    that separate you from the crowd and which is aligned with your brand
    objective.
  </>,
  "A visually appealing website can be a deciding factor for most of the audience and we give our quality attention to that.",
  "We have mastered how your customer wants your website experience to be, so we prepare navigations accordingly.",
  <>
    We optimize your website from end-to-end starting from the website to every{" "}
    <span className=" font-[600]"> African Safaris Content </span> to keep you
    on top of the search.
  </>,
  <>
    Loading time can be a drawback for your website so we remove unnecessary
    functionalities that would slow down the process.
  </>,
  <>
    We present the right and quality content that solves all your customer
    queries.
  </>,
  <>
    We prepare the website with keeping the target audience in mind which in
    turn builds the brand reputation that stays in the customer’s mind for a
    long span.
  </>,
];

const cons = [
  <>
    With not having an understanding of the{" "}
    <span className=" font-semibold">African Safari Industry</span> , the
    website might not be rightfully designed for your audience.
  </>,
  "Chances are your website might look similar to another website as there is no deep research on your objective.",
  <>
    What looks good for one website, might not look the same for another. So,
    discovering what would work for each{" "}
    <span className=" font-semibold">
      {" "}
      Web Design For African Safari Operator{" "}
    </span>{" "}
    is a task.
  </>,
  "Without having ground-level experience, it is difficult to achieve that.",
  <>
    Understanding which optimization works for an{" "}
    <span className=" font-semibold"> African Safari Website </span> might be a
    difficult task altogether.
  </>,
  <>
    Figuring out which ones to keep and which ones to remove for the right
    functioning of your website can lead to the wrong.
  </>,
  <>Not having enough content to support your website is a huge fallback.</>,
  <>
    Target audience is often avoided in the process which fails you in building
    a brand presence.
  </>,
];

const WhySafaripro = () => {
  return (
    <div className="sm:pt-[60px] pt-[30px] sm:pb-[80px] pb-[10px]  bg-white  ">
      {/* Heading */}
      <h2 className="font-bold sm:text-[48px] text-[24px] text-center capitalize text-[#3467d8] leading-[1.4] m-0 sm:pb-[15px] pb-[10px] ">
        Why Safari Marketing Pro Trumps Ordinary <br />
        Agencies In African Safari Web Solutions?
      </h2>

      <p className="font-normal text-[22px] text-center  capitalize text-[#787878] sm:leading-[1.4] m-0 p-0 sm:mb-25 mb-10">
        Choose  Excellence, Choose Success.
      </p>
   
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <ul className="">
             <div className=" sm:w-[540px] text-center sm:mb-[78px] mb-[20px]">
          <h3 className="text-[#3467d8] sm:text-[36px] text-[24px]  font-semibold capitalize  ">
            Safari Marketing Pro
          </h3>
        </div>
            {pros.map((item, idx) => (
              <li key={idx} className="flex items-start ">
                <PiCheckFatFill className="text-green-600 sm:mt-5 mt-1 mr-3 shrink-0" />
                <p className="text-[#787878] sm:text-[18px] text-[14px] sm:pt-[15px] sm:pb-[17px] pb-[10px] leading-[1.5] sm:text-start text-justify">
                  {item}
                </p>
              </li>
            ))}
          </ul>
          <ul className="">
            <div className="  sm:w-[570px] sm:flex sm:mb-[78px] mb-[20px] text-center ">
          <h3 className="text-[#3467d8] sm:text-[36px] text-[24px]  font-semibold sm:mr-20  ">
            vs.
          </h3>

          <h3 className="text-[#3467d8]  sm:text-[36px] text-[24px]  font-semibold capitalize sm:mt-4   ">
            Other Agencies
          </h3>
        </div>
            {cons.map((item, idx) => (
              <li key={idx} className="flex items-start ">
                <FaTimes className="text-red-500 sm:mt-5 mt-1 mr-3 shrink-0" />
                <p className="text-[#787878] sm:text-[18px] text-[14px] sm:pt-[15px] sm:pb-[17px] pb-[10px] leading-[1.5] sm:text-start text-justify">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhySafaripro;
