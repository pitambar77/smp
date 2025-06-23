// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BASE_URL } from '../../api/config';

// const CardSection = () => {
//   const middleContentIndexes = [11, 12, 19, 20];
//   const [images, setImages] = useState([]);

//   // Fetch images from backend API
//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const res = await axios.get(`${ BASE_URL }/api/images`);
//         setImages(res.data);
//       } catch (error) {
//         console.error("Failed to fetch images:", error);
//       }
//     };
//     fetchImages();
//   }, []);

//   console.log(images)

//   // Render each image box
//   const renderImageBox = (img, key) => (
//     <div
//       key={key}
//       className="bg-[#fbfbfb] border border-white rounded-lg shadow-[0px_6px_16px_rgba(0,0,0,0.22)]
//                   h-[95px] mb-[15px] p-[6px] flex items-center justify-center overflow-hidden"
//     >
//       <img
//         src={`${ BASE_URL }${img.src}`}
//         alt={img.alt || ""}
//         className="w-full h-full object-contain rounded-md"
//       />
//     </div>

//   );

//   // Render the fixed middle content block that spans 2 cols and 2 rows
//   const renderMiddleContent = () => (
//     <div
//       className="col-span-2 row-span-2 flex items-center justify-center text-center
//                  text-[30px] font-semibold font-montserrat uppercase text-[#3467d8]
//                  leading-[1.4] bg-white shadow-blue-500/30  "

//     >
//       HAPPY CLIENTS WHO PUT TRUST ON US
//     </div>
//   );

//   let imageIndex = 0;

//   // === EXTRA IMAGES (29th and beyond) ===
//   const extraImages = images.slice(28);

//   return (
//     <div className="py-[100px] flex flex-col justify-between ">
//       <div className="max-w-[1140px] mx-auto">
//         {/* Main grid */}
//         <div className="grid grid-cols-8 gap-x-[15px] justify-between ">
//           {Array.from({ length: 32 }).map((_, idx) => {
//             if (middleContentIndexes.includes(idx)) {
//               // Only render middle content once at index 12 (top-left of 2x2 block)
//               if (idx === 12) return renderMiddleContent();
//               // Skip other middle indexes to avoid duplicates
//               return null;
//             }

//             const img = images[imageIndex++];
//             return img ? renderImageBox(img, img._id || idx) : <div key={idx} className=" " />;
//           })}
//         </div>

//         {/* Extra images in new row(s) below */}
//         {extraImages.length > 0 && (
//           <div className="grid grid-cols-8 gap-[15px] justify-between ">
//             {extraImages.map((img, idx) => (
//               <div
//                 key={img._id || idx}
//                 className="bg-[#fbfbfb] border border-white rounded-lg shadow-[0px_6px_16px_rgba(0,0,0,0.22)]
//                            w-[120px] h-[95px] flex overflow-hidden"
//               >
//                 <img
//                   src={`${ BASE_URL }${img.src}`}
//                   alt={img.alt || ""}
//                   className="w-full h-full object-contain rounded-md"
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>

//   );
// };

// export default CardSection;

//-----------------------------------------------------Responsive---------------

import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/config";

const CardSection = () => {
  const middleContentIndexes = [11, 12, 19, 20];
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/images`);
        setImages(res.data);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };
    fetchImages();
  }, []);

  const renderImageBox = (img, key) => (
    <div
      key={key}
      className="bg-[#fbfbfb] border border-white rounded-lg shadow-[0px_6px_16px_rgba(0,0,0,0.22)] h-[95px] mb-[15px] p-[6px] flex items-center justify-center overflow-hidden"
    >
      <img
        src={`${BASE_URL}${img.src}`}
        alt={img.alt || ""}
        className="w-full h-full object-contain rounded-md"
      />
    </div>
  );

  const renderMiddleContent = () => (
    <div className="col-span-2 row-span-2 flex items-center justify-center text-center text-[30px] font-semibold font-montserrat uppercase text-[#3467d8] leading-[1.4] bg-white shadow-blue-500/30">
      HAPPY CLIENTS WHO PUT TRUST ON US
    </div>
  );

  let imageIndex = 0;
  const extraImages = images.slice(28);

  return (
    <div className="md:py-[100px] pt-10 pb-5 flex flex-col justify-between">
      <div className="max-w-[1140px] mx-auto">
        {/* === DESKTOP/TABLET GRID === */}
        <div className="hidden sm:grid grid-cols-8 gap-x-[15px] justify-between">
          {Array.from({ length: 32 }).map((_, idx) => {
            if (middleContentIndexes.includes(idx)) {
              if (idx === 12) return renderMiddleContent();
              return null;
            }
            const img = images[imageIndex++];
            return img ? (
              renderImageBox(img, img._id || idx)
            ) : (
              <div key={idx} />
            );
          })}
        </div>

        {/* === EXTRA IMAGES FOR DESKTOP/TABLET === */}
        {extraImages.length > 0 && (
          <div className="hidden sm:grid grid-cols-8 gap-[15px] justify-between mt-4">
            {extraImages.map((img, idx) => (
              <div
                key={img._id || idx}
                className="bg-[#fbfbfb] border border-white rounded-lg shadow-[0px_6px_16px_rgba(0,0,0,0.22)] w-[120px] h-[95px] flex overflow-hidden"
              >
                <img
                  src={`${BASE_URL}${img.src}`}
                  alt={img.alt || ""}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            ))}
          </div>
        )}

        {/* === MOBILE ONLY LAYOUT === */}
        <div className="block sm:hidden px-4 ">
          {/* Left 12 images */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {images
              .slice(0, 12)
              .map((img, idx) => renderImageBox(img, img._id || `left-${idx}`))}
          </div>

          {/* Top 2 images of heading */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {images
              .slice(12, 14)
              .map((img, idx) => renderImageBox(img, img._id || `top-${idx}`))}
          </div>

          {/* Center Heading */}
          <div className="text-center text-[#3467d8] font-semibold uppercase text-[22px] mb-4">
            HAPPY CLIENTS WHO PUT TRUST ON US
          </div>

          {/* Bottom 2 images of heading */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {images
              .slice(14, 16)
              .map((img, idx) =>
                renderImageBox(img, img._id || `bottom-${idx}`)
              )}
          </div>

          {/* Right 12 images */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {images
              .slice(16, 28)
              .map((img, idx) =>
                renderImageBox(img, img._id || `right-${idx}`)
              )}
          </div>

          {/* Extra images (if any) */}
          {extraImages.length > 0 && (
            <div className="grid grid-cols-3 gap-4 mt-4">
              {extraImages.map((img, idx) =>
                renderImageBox(img, img._id || `extra-${idx}`)
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
