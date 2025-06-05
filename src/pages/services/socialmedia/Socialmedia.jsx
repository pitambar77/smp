import React from 'react'
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

const Socialmedia = () => {
    const data = caseStudies.socialmedia
  return (
    <div>
     <Banner {...data} />
     {/* YouTube Video Overlapping */}
      <div className="flex justify-center items-center -mt-16 z-10 relative">
        <div
          className="w-full max-w-4xl h-[450px] aspect-video rounded-lg shadow-2xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://i.ytimg.com/vi/wl1FNxw0Uu8/maxresdefault.jpg)',
          }}
        >
          <iframe
            width="100%"
            height="100%"
      src="https://www.youtube.com/embed/cFgBGjHNFr8?controls=1&modestbranding=0&rel=0"
            title="Safari Marketing Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
 
 
      {/* Optional spacing below */}
      <div className="h-20 bg-white" />
 
     <Takepridesocial/>
     <Socialmediauser/>
     <Managersocialmedia/>
     <WhySafari/>
     <Craftsocialmedia/>
     <Fundamentalsocial/>
     <Worksocial/>
     <Strategiessocial/>
     <Faqsocial/>
     <CaroselSection/>
     <Common/>
     <Content9/>
    </div>
  )
}

export default Socialmedia
