import React from 'react'
import WebHeader from '../../components/WebHeader'
import Hoverheader from '../../components/Hoverheader'
import Herosection from './Herosection'
import Gallery from './Gallery'
// import Visitors from './visitors'
import Successtories from './Successtories'
import Compare from './Compare'
import Partneringrowth from './Partneringrowth'
import BgSticky from '../training/BgSticky'
import Prove from './Prove'
import Datastrategy from './Datastrategy'

import Videos from './Videos'
import Africancontinent from '../About/Africancontinent'
import Outcomes from './Outcomes'
import FaqAfrica from './Faqafrica'
import Common from '../../components/Common'
import Subfooter from './Subfootes'
import SubForm from './SubForm'
import Package from './Package'




function Webdesignmarketingafrica() {
  return (
    <div>
      <WebHeader/>
      <Hoverheader/>
      <Herosection/>
     <Gallery/>
     {/* <Visitors/> */}
     <Successtories/>
     <Compare/>
     <Partneringrowth/>
          <BgSticky/>
          <Prove/>
          <Datastrategy/>
          <Package/>
          <Videos/>
          <Africancontinent />
          <Outcomes/>
          <FaqAfrica/>
             <Common />
             <Subfooter/>
         
    </div>
  )
}

export default Webdesignmarketingafrica
