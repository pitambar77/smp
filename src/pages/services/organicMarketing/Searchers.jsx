import React, { useEffect, useState } from "react";
import RequestForm from "../../../components/RequestForm";

const Searchers = () => {
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
    <section className="bg-[#F0F0F0] sm:pt-20 pt-[40px] sm:pb-20 pb-28 px-4 font-[Montserrat]">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center   -mb-18 mt-6">
        {/* Left Side: Stat */}
        <div className=" sm:border-l-4 border-[#ff4e4e]  sm:pl-6 sm:mb-58">
          <h2 className="text-[#2f6bd7] sm:text-[48px] text-[30px] sm:text-5xl font-[700] text-center sm:leading-tight ">
            75% of searchers never go past the first page of search results.
          </h2>
        </div>

        {/* Right Side: Paragraphs + Button */}
        <div>
          <p className="text-[#787878] sm:text-[18px] text-[14px] leading-relaxed sm:mb-6 mb-4 sm:text-start text-justify ">
            If your African Safari Website is not showing up on the first page
            of Google when someone makes a search regarding the kind of services
            you provide, then you might be putting all your{" "}
            <strong className="font-semibold">
              SEO Marketing For African Safari
            </strong>{" "}
            efforts wrong.
          </p>

          <p className="text-[#787878] sm:text-[18px] text-[14px] leading-relaxed sm:mb-8 mb-4 sm:text-start text-justify ">
            You are losing on a great load of potential customers and a huge
            reach that can make your
            <strong className="font-semibold">
              {" "}
              African Safari Website
            </strong>{" "}
            win leading to long-term exponential growth.
          </p>

          {/* <button className="bg-[#ff4e4e] text-white font-semibold text-sm px-6 py-3 rounded hover:bg-red-500 transition">
            GET YOUR FREE INITIAL ANALYSIS
          </button> */}
          <div className=" sm:text-center ">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#FF5254] text-white font-semibold  sm:text-[16px] text-[13px] hover:bg-[#011833] ease-in duration-500 cursor-pointer hover:text-red-500 transition-colors   min-w-[148px] rounded sm:px-8 px-[12px] sm:py-3 py-[10px]"
            >
              GET YOUR FREE INITIAL ANALYSIS
            </button>
          </div>
          {showForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat]">
              <div
                className="  relative w-[95%] sm:px-0 px-4 max-w-[600px] bg-[#3467d8] bg-gradient-to-t from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg mt-[80px]
                             animate-slide-down-fade"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute cursor-pointer -top-6 -right-5 bg-red-400 hover:bg-[#396bb1] text-white hover:text-red-400 font-bold text-[32px] w-10 h-10 flex items-center justify-center shadow-md"
                >
                  ×
                </button>
                <div className="text-white text-center py-8 md:-mt-5 rounded-t-lg">
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
    </section>
  );
};

export default Searchers;
