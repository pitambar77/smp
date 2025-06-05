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

const OrganicMarketing = () => {
    const data = caseStudies.organicMarketng
  return (
    <div>
        <Banner {...data}/>
        <div className="flex justify-center items-center -mt-10 z-10 relative">
  <div className="w-full max-w-[920px] h-[460px] rounded-lg shadow-2xl overflow-hidden bg-black relative">
    <iframe
      className="w-full h-full scale-100 origin-center"
      src="https://www.youtube.com/embed/RykHyTWQr1Y?controls=1&modestbranding=0&rel=0"
      title="Safari Marketing Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
 
 
        {/* Optional spacing below */}
        <div className="h-20 bg-white" />
        <Searchers/>
        <Whyorganicmaters/>
        <ToggleSection/>
         <Tabs/>
        <Craftorganic/>
        
        <Results/>
        <Work/>
        <Strategiesorganic/>
        <Analysisorganic/>
    
      <Faqorganic/>
      <CaroselSection/>
      <Common/>
      <Content9/>
    </div>
  )
}

export default OrganicMarketing
