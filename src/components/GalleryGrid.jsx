import React from 'react';

const GalleryGrid = ({ images }) => {
  return (
    <div className="sm:max-w-[1050px] mx-auto pt-[50px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-[30px] py-[51px] px-[15px]">
        {images.map((imgSrc, idx) => (
          <img key={idx} src={imgSrc} alt={`Gallery ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
