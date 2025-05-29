import React from 'react';
 
export default function FooterReviewcard() {
  return (
    <div className="bg-[#2354cb] p-5  rounded-lg w-full max-w-xl mx-auto">
      <div className="bg-white rounded shadow-lg p-7">
        {/* Header */}
        <div className="flex flex-row items-center gap-3">
          <img src="https://img.shgstatic.com/clutch-static-prod/image/scale/60x60/s3fs-public/logos/3aff45ed89355c1ecf9e7dad6de80877.png" alt="Manorama Logo" className="h-6 w-auto" />
          <h3 className="text-lg font-semibold text-[#1b2c37]">
            Manorama Web Solutions <br />Private Limited Reviews
          </h3>
        </div>
 
        {/* Star Rating */}
        <div className="flex items-center justify-between mt-4 mb-3">
          <div className="flex items-center bg-[#1b2c37] text-white font-bold px-3 py-1 rounded-l-full">
            4.9
          </div>
          <div className="flex items-center bg-white shadow-md px-3 py-1 rounded-r-full">
            <span className="text-red-500 text-lg">★★★★★</span>
            <span className="text-red-500 text-sm ml-2">24 REVIEWS</span>
          </div>
        </div>
 
        {/* Ratings with segmented red lines */}
        <div className="space-y-3 mt-4">
          {[
            { label: 'Scheduling', score: 4.9 },
            { label: 'Quality', score: 4.9 },
            { label: 'Cost', score: 4.8 },
            { label: 'Would Refer', score: 4.9 },
          ].map((item, i) => {
            const segments = 4;
            const filled = Math.round((item.score /5) * segments);
 
            return (
              <div key={i}>
                <div className="flex justify-between text-[#1b2c37] text-sm font-semibold mb-1">
                  <span>{item.label}</span>
                  <span>{item.score}</span>
                </div>
                <div className="flex gap-[2px]">
                  {Array.from({ length: segments }, (_, idx) => (
                    <div
                      key={idx}
                      className={`h-[5px] flex-1 rounded-sm ${
                        idx < filled ? 'bg-red-500' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
 
        {/* Footer */}
        <div className="bg-[#16333c] text-white text-sm text-center font-semibold py-3 mt-5 rounded">
          Powered by <span className="font-bold text-lg">Clutch</span>
        </div>
      </div>
    </div>
  );
}