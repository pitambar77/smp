import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const Table = () => {
  return (
    <div className="bg-[#f0f0f0] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative z-30 text-center px-7">
          <h2 className="font-montserrat font-bold md:text-[48px] text-[24px] text-center text-blue-600 leading-[1.3] capitalize m-0 px-[10%] pb-[15px] mt-10">
            SMP In Comparison To Other Marketing Agencies
          </h2>

          <p
            className="mb-10"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: "22px",
              textAlign: "center",
              textTransform: "capitalize",
              color: "#787878",
              lineHeight: 1.4,
              padding: 0,
            }}
          >
            Educate your customers to learn more
          </p>
        </div>

        {/* ✅ Responsive scroll container added here */}
        <div className="mb-16 ml-2 mr-2 overflow-x-auto">
          <div className="min-w-[840px]">
            {/* Header */}
            <div className="grid grid-cols-3 text-white text-center font-montserrat text-[20px] font-semibold uppercase border">
              <div className="bg-[#001634]  h-[100px] flex items-center justify-center border">
                SPECIFICATIONS
              </div>
              <div className="bg-[#0057FF]  h-[100px] flex items-center justify-center border">
                SAFARI MARKETING PRO
              </div>
              <div className="bg-[#FF4D4D]  h-[100px] flex items-center justify-center border">
                OTHER AGENCIES
              </div>
            </div>

            {/* Rows */}
            {[
              {
                title: "The Niche",
                smp: "We are the industry leaders in understanding the African safari eco-system.",
                other:
                  "No ground level understanding of how the entire safari eco-system works.",
              },
              {
                title: "Strategy",
                smp: "Data-backed marketing strategies focused on results in the safari industry.",
                other:
                  "Generic marketing playbooks used for all industries with no specialization.",
              },
              {
                title: "Team Expertise",
                smp: "Team of experts with deep knowledge of safari travel and customer behavior.",
                other:
                  "Junior marketers with no direct experience in safari travel or tourism.",
              },
              {
                title: "Creative Direction",
                smp: "Visual storytelling tailored to wildlife tourism audiences.",
                other:
                  "Recycled creatives with no understanding of wildlife appeal or impact.",
              },
              {
                title: "Support & Guidance",
                smp: "Personalised account management and long-term success strategy.",
                other:
                  "One-size-fits-all approach with limited post-campaign support.",
              },
            ].map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-3 text-sm md:text-base text-[#333] border border-white"
              >
                <div className="bg-[#001634] text-white text-center font-montserrat text-[18px] font-semibold h-[160px] flex items-center justify-center border">
                  {row.title}
                </div>
                <div className="bg-[#d2e1ff] text-left font-montserrat text-[17px] text-[#626262] leading-[1.5] px-5 py-2.5 flex items-start border">
                  <span className="text-green-600 mr-2 text-[18px]">
                    <FaCheck />
                  </span>
                  {row.smp}
                </div>
                <div className="bg-[#d2e1ff] text-center font-montserrat text-[17px] text-[#626262] leading-[1.5] px-5 py-2.5 flex items-start justify-center border">
                  <span className="text-red-500 mr-2 text-[18px]">
                    <FaTimes />
                  </span>
                  {row.other}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
