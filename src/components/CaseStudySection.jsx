import React from 'react';
import StatsBlock from './StatsBlock';
import GalleryGrid from './GalleryGrid';

const CaseStudySection = ({ title, image, stats, galleryImages }) => {
  return (
    <div className="w-full bg-[#ff5254] pt-[10px] pb-[50px]">
      <div className="flex flex-col md:flex-row pt-[5%]">
        <div className="basis-[66%]">
          <img src={image} alt="Case Study Visual" />
        </div>
        <div className="w-full md:w-auto px-[30px] md:px-[60px] mt-10 md:mt-0">
          <h3 className="text-[35px] font-bold text-white pb-[40px] leading-snug">
            {title}
          </h3>

          {stats.map((item, idx) => (
            <StatsBlock key={idx} percentage={item.value} label={item.label} />
          ))}
        </div>
      </div>

      <GalleryGrid images={galleryImages} />
    </div>
  );
};

export default CaseStudySection;
