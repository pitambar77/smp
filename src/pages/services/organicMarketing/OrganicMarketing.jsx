import React from 'react'
import Tabs from './Tabs'
import Banner from '../../../components/Banner'
import caseStudies from '../../../data/BannerData'
import ToggleSection from './ToggleSection'
import Searchers from './Searchers'
import Whyorganicmaters from './Whyorganicmaters'
import Craftorganic from './Craftorganic'
import Results from './Results'
import Work from './Work'
import Strategiesorganic from './Strategiesorganic'
import Analysisorganic from './Analysisorganic'
import Faqorganic from './Faqorganic'
import CaroselSection from '../../pricing/CaroselSection'
import Common from '../../../components/Common'
import Content9 from '../../home/Content9'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../api/config';


 
const API_URL = `${ BASE_URL }/api/organicvideo`;
 
 
 
const OrganicMarketing = () => {
  const data = caseStudies.organicMarketng
  const [video, setVideo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
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
      <div className="flex justify-center items-center -mt-15 z-10 relative">
        <div className="w-[290px] h-[200px] sm:w-[918px] sm:h-[450px]  rounded-lg shadow-2xl overflow-hidden bg-black relative" style={{ filter: 'drop-shadow(9px 13px 11px #4679c5)' }}>
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
      <Searchers />
      <Whyorganicmaters />
      <ToggleSection />
      <Tabs />
      <Craftorganic />
 
      <Results />
      <Work />
      <Strategiesorganic />
      <Analysisorganic />
 
      <Faqorganic />
      <CaroselSection />
      <Common />
      <Content9 />
    </div>
  )
}
 
export default OrganicMarketing
 

 