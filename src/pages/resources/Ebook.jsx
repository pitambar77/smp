import React from 'react'

import MarketingProofSection from './MarketingProofSection'
import Banner from '../../components/Banner'
import caseStudies from '../../data/BannerData'
import Content9 from '../home/Content9'
 
function Ebook() {
    const data = caseStudies.ebook
  return (
    <div className='-mt-[135px]'>
        <Banner {...data}/>  
    <MarketingProofSection/>
    <Content9/>
    </div>
  )
}
 
export default Ebook
 