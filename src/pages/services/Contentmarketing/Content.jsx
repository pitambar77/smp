import React, { useEffect } from 'react'
import Homecontent from './Homecontent'
import Takepride from './Takepride'
import Lifecycle from './Lifecycle'

import Fundamentalcontent from './Fundamentalcontent'
import Wellcraftedcontet from './Wellcraftedcontet'
import Strategiescontent from './Strategiescontent'
import Work from './Work'
import Faqcontent from './Faqcontent'
import CaroselSection from '../../pricing/CaroselSection'
import Common from '../../../components/Common'
import Content9 from '../../home/Content9'
import Craftcontent from './Craftcontent'

function Content() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <>
      
      <Homecontent/>
      <Takepride/>
      <Lifecycle/>
     <Craftcontent/>
      <Fundamentalcontent/>
      <Wellcraftedcontet/>
      <Work/>
      <Strategiescontent/>
      <Faqcontent/>
      <CaroselSection/>
      <Common/>
      <Content9/>
      </>
    </div>
  )
}

export default Content
