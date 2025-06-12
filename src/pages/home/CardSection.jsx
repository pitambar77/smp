import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from '../../api/config';


const CardSection = () => {
  const middleContentIndexes = [11, 12, 19, 20];
  const [images, setImages] = useState([]);
 
  // Fetch images from backend API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${ BASE_URL }/api/images`);
        setImages(res.data);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };
    fetchImages();
  }, []);

  console.log(images)
 
  // Render each image box
  const renderImageBox = (img, key) => (
    <div
      key={key}
      className="bg-[#fbfbfb] border border-white rounded-lg shadow-[0px_6px_16px_rgba(0,0,0,0.22)]
                  h-[95px] mb-[15px] p-[6px] flex items-center justify-center overflow-hidden"
    >
      <img
        src={`${ BASE_URL }${img.src}`}
        alt={img.alt || ""}
        className="w-full h-full object-contain rounded-md"
      />
    </div>
    
  );

  // Render the fixed middle content block that spans 2 cols and 2 rows
  const renderMiddleContent = () => (
    <div
      className="col-span-2 row-span-2 flex items-center justify-center text-center
                 text-[30px] font-semibold font-montserrat uppercase text-[#3467d8]
                 leading-[1.4] bg-white shadow-blue-500/30  "
     
    >
      HAPPY CLIENTS WHO PUT TRUST ON US
    </div>
  );


  let imageIndex = 0;
 
  // === EXTRA IMAGES (29th and beyond) ===
  const extraImages = images.slice(28);
 
  return (
    <div className="py-[100px] flex flex-col justify-between ">
      <div className="max-w-[1140px] mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-8 gap-x-[15px] justify-between ">
          {Array.from({ length: 32 }).map((_, idx) => {
            if (middleContentIndexes.includes(idx)) {
              // Only render middle content once at index 12 (top-left of 2x2 block)
              if (idx === 12) return renderMiddleContent();
              // Skip other middle indexes to avoid duplicates
              return null;
            }
 
            const img = images[imageIndex++];
            return img ? renderImageBox(img, img._id || idx) : <div key={idx} className=" " />;
          })}
        </div>
 
        {/* Extra images in new row(s) below */}
        {extraImages.length > 0 && (
          <div className="grid grid-cols-8 gap-[15px] justify-between ">
            {extraImages.map((img, idx) => (
              <div
                key={img._id || idx}
                className="bg-[#fbfbfb] border border-white rounded-lg shadow-[0px_6px_16px_rgba(0,0,0,0.22)]
                           w-[120px] h-[95px] flex overflow-hidden"
              >
                <img
                  src={`${ BASE_URL }${img.src}`}
                  alt={img.alt || ""}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
     
  );
};
 
export default CardSection;
 
 