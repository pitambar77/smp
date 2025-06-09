import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../api/config';
 
const API_URL = `${ BASE_URL }/api/googlevideo`;
 
const GoogleHome = () => {
  const [video, setVideo] = useState(null);
 
  useEffect(() => {
    axios.get(API_URL)
      .then(res => setVideo(res.data))
      .catch(err => console.error(err));
  }, []);
 
  // Extract the video ID from the YouTube URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[1].length === 11) ? match[1] : null;
  };
 
  const videoId = video ? getYouTubeId(video.videoUrl) : null;
 
  return (
    <section className="relative">
      {/* Background Image with Overlay and Content */}
      <div className="w-full h-[540px] bg-[url('https://safarimarketingpro.com/images/google-ads-banner.jpg')] bg-cover bg-center">
        <div className="w-full h-full bg-[linear-gradient(to_right,#0057ffd6_40%,#4679c587_80%,rgba(70,121,197,0.33)_100%)] flex items-center justify-center px-4">
          <div className="max-w-[1140px] mt-14 mx-auto text-center text-white">
            <h2 className="font-[Montserrat] text-center font-semibold text-[48px] capitalize leading-[1.4] mb-2 pb-[10px]">
              Creating Perfect BOOKING Journeys with GOOGLE ADS
            </h2>
            <p className="font-[Montserrat] font-medium text-[18px] leading-[1.5] my-0 px-[10%] text-center">
              Maximizing your growth in revenue by driving in quality traffic, inquiries and more bookings with harnessing the power of Google Ads. We help you with curating the best Ad strategies for your safari business to get the results you deserve.
            </p>
          </div>
        </div>
      </div>
 
      {/* YouTube iframe showing native UI with Watch on YouTube */}
      <div className=" w-full flex justify-center items-center -mt-15 z-10 relative">
        <div className=" w-full max-w-[918px] h-[450px]  rounded-lg shadow-2xl overflow-hidden bg-black relative" style={{ filter: 'drop-shadow(9px 13px 11px #4679c5)' }}>
          {videoId ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&rel=0`}
              title="Safari Marketing Video"
              
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">
              Loading video...
            </div>
          )}
        </div>
      </div>
 
      {/* Optional spacing below */}
      <div className="h-20 bg-white" />
    </section>
  );
};
 
export default GoogleHome;
 
 