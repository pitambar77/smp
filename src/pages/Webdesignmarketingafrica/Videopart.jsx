import React, { useRef, useState } from "react";

const Videopart = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    iframeRef.current.src =
      "https://www.youtube.com/embed/NhEqaeHnlP8?autoplay=1";
  };

  return (
    <div className="flex items-center justify-center px-4 py-10 bg-white">
      <div className="w-full max-w-6xl">
        {/* Video Container */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          {!isPlaying ? (
            <div
              className="relative cursor-pointer"
              onClick={handlePlay}
            >
              {/* Play Button Overlay */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FF0000"
                    d="M94.761,27.369c-1.075-4.045-4.24-7.231-8.26-8.312C79.216,17.092,50,17.092,50,17.092
                  s-29.216,0-36.501,1.965c-4.02,1.081-7.186,4.267-8.26,8.312C3.286,34.702,3.286,50,3.286,50s0,15.298,1.952,22.631
                  c1.074,4.045,4.24,7.231,8.26,8.312C20.784,82.908,50,82.908,50,82.908s29.216,0,36.502-1.965c4.02-1.082,7.185-4.267,8.26-8.312
                  C96.714,65.298,96.714,50,96.714,50S96.714,34.702,94.761,27.369z"
                  />
                  <polygon
                    fill="#FFFFFF"
                    points="40.284,35.877 40.284,64.123 65.114,50.001"
                  />
                </svg>
              </div>

              {/* Static Image Thumbnail */}
              <img
                src="/images/video-thumbnail.png" // Replace with your actual path
                alt="Video Thumbnail"
                className="block w-full h-auto"
              />
            </div>
          ) : (
            <iframe
              ref={iframeRef}
              className="w-full h-[620px]"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title="Video Player"
            ></iframe>
          )}
        </div>

        {/* CTA Button (optional) */}
        <div className="flex justify-center mt-8">
          <a
            href="/adds-booking"
            className="px-6 py-3 text-lg text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Request Strategy Session
          </a>
        </div>
      </div>
    </div>
  );
};

export default Videopart;
