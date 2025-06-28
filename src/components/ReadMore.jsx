
import React, { useState } from 'react';

const ReadMore = ({ paragraphs = [], maxChars = 311 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(prev => !prev);

  return (
    <div>
      {isExpanded ? (
        // Show all paragraphs
        paragraphs.map((para, idx) => (
          <p
            key={idx}
            className="pt-[15px] pb-[17px] text-[#787878] font-[400] text-[18px] leading-[1.5] sm:text-left text-justify"
          >
            {para}
          </p>
        ))
      ) : (
        // Show only the first 312 characters of the first paragraph
        <p className="pt-[15px] pb-[17px] text-[#787878] font-[400] text-[18px] leading-[1.5] sm:text-left text-justify ">
          {paragraphs[0]?.length > maxChars
            ? paragraphs[0].slice(0, maxChars) + '...'
            : paragraphs[0]}
        </p>
      )}

      {/* Show button only if first para is longer than maxChars */}
      {paragraphs[0]?.length > maxChars && (
        <button
          onClick={toggleExpand}
          className="bg-[#FF5254] text-[15px] cursor-pointer text-white py-[10px] px-[22px] rounded-[4px]  transition uppercase "
        >
          {isExpanded ? 'READ LESS' : 'READ MORE'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
