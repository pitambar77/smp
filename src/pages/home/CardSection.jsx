import React from "react";
import imageData from "../../data/HomeData";
 
const CardSection = () => {
  const middleTextIndexes = [11, 12, 17, 18];
  let imageIndex = 0;
 
  const renderImageBox = (img, key) => (
    <div
      key={key}
      className="bg-[#fbfbfb] border border-white rounded-lg shadow-[0px_6px_16px_rgba(0,0,0,0.22)]
                 w-[120px] h-[105px] p-3 m-2 flex items-center justify-center overflow-hidden"
    >
      <img
        src={img.src}
        alt={`img-${img.id}`}
        className="w-full h-full object-contain rounded-md"
      />
    </div>
  );
 
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" max-w-6xl w-full">
        <div className="grid grid-cols-8 gap-1 justify-items-center">
          {Array.from({ length: 32 }).map((_, idx) => {
            if (idx === 12) {
              return (
                <div
                  key={idx}
                  className="col-span-2 row-span-2 flex items-center justify-center text-center
                             text-[30px] font-semibold font-montserrat uppercase text-[#3467d8]
                             leading-[1.4] bg-white shadow-blue-500/30 m-2 p-0"
                  style={{
                    gridColumn: 'span 2',
                    gridRow: 'span 2',
                    margin: 0,
                    padding: 0,
                  }}
                >
                  HAPPY CLIENTS WHO PUT TRUST ON US
                </div>
              );
            }
 
            if (middleTextIndexes.includes(idx)) return null;
 
            const img = imageData.all[imageIndex++];
            return img
              ? renderImageBox(img, idx)
              : <div key={idx} className="w-[110px] h-[50px] m-2" />;
          })}
        </div>
      </div>
    </div>
  );
};
 
export default CardSection;