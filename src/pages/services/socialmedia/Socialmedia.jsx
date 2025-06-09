 
import Banner from '../../../components/Banner'
import Takepridesocial from './Takepridesocial'
import caseStudies from '../../../data/BannerData'
import Socialmediauser from './Socialmediauser'
import Managersocialmedia from './Managersocialmedia'
import WhySafari from './WhySafari'
import Craftsocialmedia from './Craftsocialmedia'
import Fundamentalsocial from './Fundamentalsocial'
import Worksocial from './Worksocial'
import Strategiessocial from './Strategiessocial'
import Faqsocial from './Faqsocial'
import CaroselSection from '../../pricing/CaroselSection'
import Common from '../../../components/Common'
import Content9 from '../../home/Content9'
import { BASE_URL } from '../../../api/config'
 
 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
const API_URL = `${ BASE_URL }/api/socialvideo`;
 
 
const Socialmedia = () => {
  const data = caseStudies.socialmedia
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
    <div>
      <Banner {...data} />
      {/* YouTube Video Overlapping */}
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
 
      <Takepridesocial />
      <Socialmediauser />
      <Managersocialmedia />
      <WhySafari />
      <Craftsocialmedia />
      <Fundamentalsocial />
      <Worksocial />
      <Strategiessocial />
      <Faqsocial />
      <CaroselSection />
      <Common />
      <Content9 />
    </div>
  )
}
 
export default Socialmedia
  