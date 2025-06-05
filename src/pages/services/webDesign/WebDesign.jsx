import React from 'react'
import caseStudies from '../../../data/BannerData'
import Banner from '../../../components/Banner'
import Websites from './Websites'
import WhySafaripro from './WhySafaripro'
import Craft from './Craft'
import Fundamental from './Fundamental'
import SafariMarketingHeader from './SafariMarketingHeader'
import WorkProcess from './WorkProcess'
import Goalwebdesign from './Goalwebdesign'
import Faqwebdesign from './Faqwebdesign'
import CaroselSection from '../../pricing/CaroselSection'
import Common from '../../../components/Common'
import Content9 from '../../home/Content9'

const WebDesign = () => {
    const data = caseStudies.webDesign
  return (
    <div>
      <Banner {...data}/>
      <div className="flex justify-center items-center -mt-10 z-10 relative">
  <div className="w-full max-w-[920px] h-[460px] rounded-lg shadow-2xl overflow-hidden bg-black relative">
    <iframe
      className="w-full h-full scale-100 origin-center"
      src="https://www.youtube.com/embed/WjLgDl7U9ZA?controls=1&modestbranding=0&rel=0"
      title="Safari Marketing Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
<div className="h-20 bg-white" />
<Websites/>
<WhySafaripro/>
<Craft/>
<Fundamental/>
<SafariMarketingHeader/>
<WorkProcess/>
<Goalwebdesign/>
<Faqwebdesign/>
<CaroselSection/>
<Common/>
<Content9/>
    </div>
    
  )
}

export default WebDesign
