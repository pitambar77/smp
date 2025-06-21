import React from "react";
import { useNavigate } from "react-router-dom";

const trainingData = [
  "Leadership Training",
  "Presentation Training",
  "Sales Training",
  "Customer ServiceTraining",
  "People SkillsTraining",
  "Org Development Solutions",
];

const TrainingCard = ({ title, onClick, description }) => (
  <div className=" border border-[#f1f1f1] rounded  max-w-[1140px] mx-auto  text-center] ">
    <div className="bg-[#ff5254] text-white text-[26px]  font-semibold text-center py-[10px] px-[15px] ">
      {title}
    </div>
    <p className="text-center text-[17px] text-[#787878] mt-4 mb-6 px-4">{description}</p>
    <ul className=" text-center text-[17px] text-[#787878]">
      {trainingData.map((item, idx) => (
        <li
          key={idx}
          className={`py-2 ${idx % 2 === 0 ? "bg-[#f8f8f8]" : "bg-white"}`}
        >
          {item}
        </li>
      ))}
    </ul>
    <div className="text-center mt-6  py-8 bg-[#f8f8f8]">
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
          onClick(); // Call the passed onClick function
        }}
        className="bg-[#ff5254] text-white duration-300 ease-in cursor-pointer px-[30px] py-[12px] text-[16px] rounded hover:bg-[#011833] hover:text-[#ff5254] font-semibold"
      >
        Get Started Now
      </button>
    </div>
  </div>
);

const TrainingPkg = () => {
  const navigate = useNavigate();

  const handleIndividualsClick = () => {
    navigate("/get-start-for-training");
  };

  const handleTeamsClick = () => {
    navigate("/get-start-for-training");
  };

  return (
    <div className="w-full mt-20">
      <div className=" max-w-[1140px] mx-auto px-[15%] pb-[15px] text-center">
        <h1 className="text-[50px] text-[#3467d8] font-[700] leading-[1.4]">
          Which Training Package Is Best For Me?
        </h1>
      </div>
      <div className="  py-[20px] px-4 flex justify-center">
        <div className="max-w-[1140px] mx-auto w-[60%] flex flex-col lg:flex-row justify-between gap-8 pl-[8px]">
          <TrainingCard
            title="Individuals"
            description="Looking to increase your personal sales skill set? Trying to push your income to the next level. CardoneU was designed just for that. Let us help get you there."
            onClick={handleTeamsClick}
          />
          <TrainingCard
            title="Teams & Businesses"
            description="Running your business is hard enough without having to worry about your staff performing at their best. Let us help take their sales to the next level for you."
            onClick={handleIndividualsClick}
          />
        </div>
      </div>
    </div>
  );
};

export default TrainingPkg;
