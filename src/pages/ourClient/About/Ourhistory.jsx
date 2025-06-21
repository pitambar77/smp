import React, { useEffect, useState } from "react";
import RequestForm from "../../components/RequestForm";
import { FaCheck } from "react-icons/fa";

function Ourhistory() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (showForm) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [showForm]);

  return (
    <div className=" w-full ">
      <div className=" max-w-[1140px] mx-auto py-[100px]">
        <div className=" px-[15px]  ">
          <h3 className=" font-bold text-[48px] text-center capitalize text-[#3467d8] leading-[1.4]  pb-[15px]">
            Our History
          </h3>

          <p className=" text-[22px] text-center text-[#787878] leading-[1.4] pb-[30px] capitalize">
            Turning Lookers Into Bookers – Since 2012!
          </p>

          <div className=" mt-[30px]">
            <div>
              <h3 className=" text-[22px] font-semibold  capitalize text-[#767676] leading-[1.3] pt-[10px] pb-[20px]">
                Our Mission
              </h3>
              <p className=" text-[18px]  text-[#787878] leading-[1.5]  pb-[17px] ">
                Our Mission at Safari Marketing Pro is to (re)shape each safari
                and Tour Company so that they won’t have to rely on agents
              </p>
            </div>

            <div>
              <h3 className="text-[22px] font-semibold  capitalize text-[#767676] leading-[1.3] pt-[10px] pb-[20px] ">
                Our Vision
              </h3>
              <p className=" text-[18px]  text-[#787878] leading-[1.5] pb-[17px]  ">
                We want to ensure that every tour operator out there can
                transform their business into the digital field. This will
                certify one very important thing – not needing the assistance of
                any agents or third parties. Eventually, the tour companies can
                build their ecosystem of Digital Marketing.
              </p>

              <p className=" text-[18px]  text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
                Building a recognizable brand is a crucial aspect of sustaining
                a business. Because this is the platform where most of the
                revenue will be generated.
              </p>
            </div>
            <div>
              <h3 className="text-[22px] font-semibold  capitalize text-[#767676] leading-[1.3] pt-[10px] pb-[20px] ">
                A Peek Into Our History
              </h3>
              <p className="font-montserrat text-[20px]  text-[#4679c5] font-semibold  leading-[1.5] m-0  pb-[17px]">
                Many individuals wondered why we wanted to work with Tour
                Operators in Africa! But, this decision wasn’t taken on impulse,
                we had a specific reason!
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-semibold italic capitalize text-[#767676] leading-[1.3] pt-[10px] pb-[20px]">
                A Behind the scenes outlook
              </h3>
              <p className=" text-[18px]  text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
                In 2012, there was a big hype about getting an easy project
                concerning digital marketing from the USA and Europe. It
                would’ve been easy to go where the demand was.{" "}
              </p>
              <p className=" text-[18px]  text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
                But, when we started our company our board of directors had a
                concrete goal in mind. We wanted to change the whole world for
                individuals who knew nothing about digital marketing. This was
                not a popular decision, to say the least. We had a lot of
                fallout and many people made mocking remarks. Because according
                to them – how were we going to manage a business in a country
                that didn’t even have basic facilities like food?{" "}
              </p>
              <p className=" text-[18px]  text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
                A big question arose – How will Safari Marketing Pro survive?
                But as our founder had a goal, he stuck to it and didn’t let
                outside factors affect his ultimate goal. He has a saying –
                <span className=" font-semibold  leading-[1.5]">
                  “Risk is not where the risk exists, Risk is somewhere where
                  work exists. And, that’s why we love to take risks.”
                </span>
              </p>
            </div>

            <div>
              <h3 className=" text-[22px] font-semibold  capitalize text-[#767676] leading-[1.3] pt-[10px] pb-[20px]">
                Challenges We Faced In The African Market
              </h3>
              <p className=" text-[18px]  text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
                It’s a fact that every organization has their ups and downs.
                And, when we reached Africa we straightaway had a realization
                that they knew next to nothing about Digital Marketing.{" "}
              </p>
              <p className=" text-[18px]  text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
                So they didn’t believe that one could bring clients from Digital
                Marketing.
              </p>

              <p className=" text-[18px]  text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
                Almost 95% of the safari operators relied on agents. And these
                agents were just sitting comfortably in an air-conditioned room
                and conducting a sub-par job of digital marketing. They used the
                tour operators as ground handlers. All of these tour operators
                didn’t even realize that they were missing out on huge
                opportunities.
              </p>

              <p className=" text-[18px]  text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
                This is where our struggle began. No one understood our vision
                and even when we tried to sell them websites free of cost they
                didn’t accept. They had a mindset that we were based in India so
                how could we understand the ecosystem of Africa?
              </p>

              <p className=" text-[18px]  text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
                We understood why this obstacle happened. So, we decided to get
                ahead of the problem and visited each corner of Africa. We sat
                down with safari operators and saw their struggles and
                challenges working with B2B agents. After this fascinating
                journey, we had an overall understanding of the tour and safari
                business. We learned 3 important things:
              </p>
            </div>
            <div className="flex justify-between items-center my-[13px]">
              {/* Item 1 */}
              <div className="group flex items-center  cursor-pointer">
                <span className="text-[#0dc091]  group-hover:text-red-500 transition-colors duration-300">
                  <FaCheck className=" text-[14px]" />
                </span>
                <p className="ml-2 font-semibold text-[18px]  text-[#787878] leading-[1.5] m-0 pt-2 pb-2 group-hover:text-blue-600 transition-colors duration-300">
                  How A Tour Operator Works
                </p>
              </div>

              {/* Item 2 */}
              <div className="group flex items-center  cursor-pointer">
                <span className="text-[#0dc091] group-hover:text-red-500 transition-colors duration-300">
                  <FaCheck className=" text-[14px]" />
                </span>
                <p className="ml-2  font-semibold text-[18px]  text-[#787878] leading-[1.5] m-0 pt-2 pb-2 group-hover:text-blue-600 transition-colors duration-300">
                  The Mindset Of A Tour Operator
                </p>
              </div>

              {/* Item 3 */}
              <div className="group flex items-center  cursor-pointer">
                <span className="text-[#0dc091]  group-hover:text-red-500 transition-colors duration-300">
                  <FaCheck className=" text-[14px]" />
                </span>
                <p className="ml-2  font-semibold text-[18px]  text-[#787878] leading-[1.5] m-0 pt-2 pb-2 group-hover:text-blue-600 transition-colors duration-300">
                  The Demand & Value Of The Market
                </p>
              </div>
            </div>

            <p className=" text-[18px]  text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
              Then, we listed out all the problems. And tried to focus on the
              main problem – educating the African tour operators about the
              digital platform.{" "}
            </p>
            <div>
              <h3 className=" text-[22px] font-semibold  capitalize text-[#767676] leading-[1.3] pt-[10px] pb-[20px]">
                How We Managed To Capture The Heart Of African Tour Operators{" "}
              </h3>
              <p className=" text-[18px]  text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
                After we addressed the problems and did all the hard work, we
                managed to create a new brand in the African Safari Market,
                especially the southern and eastern African markets. Now we can
                proudly say that we are the only Safari Marketing Company
                operating in the African Market.
              </p>
              <p className=" text-[18px]  text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
                Now we have acquired an in-depth understanding of the safari
                businesses’ needs and work as a bridge between their potential
                customers. We also make sure that each of our valued clients can
                reach their targeted audience in all the possible online
                marketing ways.
              </p>
              <p className=" text-[18px]  text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
                We’ve observed people getting inquiries, but they don’t have an
                understanding of how to properly handle them – this is where we
                come in. We as a marketing company help them close into sales.
              </p>
              <p className="text-[18px]  text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
                We know that everyone in the African Safari market is good at
                operations. However, no one has figured out how to accurately
                create a website or market their brand value to their potential
                customers. With the expertise that we’ve obtained over the
                years, we can get our clients results and satisfactory services.
              </p>
              <p className=" text-[18px]  text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
                Now we understand the destinations of Africa better than the
                owners. This is thanks to the experience of 10 years working
                with more than 300 satisfied customers such as -
                <span className="italic font-semibold">
                  Falcon Safaris, 748 Air services LTD, Go2 Africa, Mahlatini
                  Luxury Travel, Discover Africa and Jewel of Africa, TANAPA,
                  Rhino Africa, Easy Travels, Altezza Travel, Zara Tours, etc.
                </span>{" "}
              </p>
            </div>

            <h3 className=" text-[22px] font-semibold  capitalize text-[#767676] leading-[1.3] pt-[10px] pb-[20px]">
              Our Vision For The Future!
            </h3>
            <p className=" text-[18px]  text-[#787878] leading-[1.5] m-0  pb-[17px]">
              Even though we’ve received great recognition in the African
              Market, we don’t just want to settle in. We have even more visions
              on the horizon. Our ultimate goal is to reach every safari and
              tour operator in each corner of Africa and other continents. And
              assist them in digitizing their business.{" "}
            </p>
            <p className=" text-[18px]  text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
              Furthermore, we also want to make operators eligible so that they
              can run their safari organization with the help of Digital
              Marketing. This will make sure that they won’t have to depend upon
              B2B agents. We are continuing to develop Safari Marketing Pro with
              regular and constant upgrades and are testing to ensure the best
              possible results.
            </p>
            <p className=" text-[18px]  text-[#787878] leading-[1.5] m-0 pt-[15px] pb-[17px]">
              If you want to gain more insights regarding what we’re currently
              up to, then head over to our company blog section -
              <a
                className="text-[#337ab7]"
                href="https://www.safarimarketingpro.com/blog/"
              >
                https://www.safarimarketingpro.com/blog/
              </a>
            </p>
          </div>
        </div>
        <div className=" pt-[30px] pb-[15px] text-center ">
          <button
            onClick={() => setShowForm(true)}
            className="uppercase cursor-pointer text-[16px] tracking-[1.5px] shadow-[0_12px_18px_0_rgba(0,0,0,0.15)] px-[40px] py-[12px] bg-[#ff5254] text-white   font-semibold hover:bg-[#011833]  hover:text-red-500 duration-500 ease-in rounded-[4px]"
          >
            REQUEST A FREE STRATEGY SESSION
          </button>
        </div>
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat] ">
            <div
              className=" mt-[80px] relative w-[90%] max-w-[600px] bg-gradient-to-b from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg
                 animate-slide-down-fade  "
            >
              {/* Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute cursor-pointer -top-6 -right-5 bg-red-400 hover:bg-[#396bb1] text-white hover:text-red-400 font-bold text-[32px] w-10 h-10 flex items-center justify-center shadow-md"
              >
                ×
              </button>
              <div className="text-white text-center py-8 -mt-5 rounded-t-lg">
                <h3 className="text-[24px] font-medium leading-snug">
                  REQUEST A FREE STRATEGY SESSION
                </h3>
                <div className="border-t border-white w-full mx-auto mt-4 -mb-4" />
              </div>
              <RequestForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ourhistory;
