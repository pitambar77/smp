import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../api/config';
import Banner from '../../../components/Banner';

 
const API_URL = `${ BASE_URL }/api/contentvideo`;
 
const Homecontent = () => {
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


  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${ BASE_URL }/api/all-banners/contentMarketng`);
        setBannerData(res.data);
      } catch (err) {
        console.error("Failed to fetch banner", err);
      }
    };
    fetchBanner();
  }, []);

  if (!bannerData) return <div></div>;

  
 
 
  return (
     
 <section className="relative">
  <Banner
        title={bannerData.title}
        description={bannerData.description}
        imageUrl={`${ BASE_URL }/${bannerData.imageUrl}`}
      />
      {/* YouTube iframe showing native UI with Watch on YouTube */}
     <div className="flex justify-center items-center -mt-15 z-10 relative">
        <div className="w-full max-w-[918px] h-[450px]  rounded-lg shadow-2xl overflow-hidden bg-black relative" style={{ filter: 'drop-shadow(9px 13px 11px #4679c5)' }}>
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
 
  )
}
 
export default Homecontent
 
 