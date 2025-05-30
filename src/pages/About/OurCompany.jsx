import React from 'react'

import Banner from '../../components/Banner'
import caseStudies from '../../data/BannerData'
import Softbanner from './Softbanner'
import WhyWorkinSmp from './WhyWorkinSmp'

import Ourhistory from './Ourhistory'
import Wonaward from './Wonaward'
import PartnerSection from './PartnerSection'
import CharitySection from './CharitySection'
import Africancontinent from './Africancontinent'
import Meeting from './Meeting'
import AfricaHome from './AfricaHome'
import Review from '../../components/Review'
import Content9 from '../home/Content9'
 
function Ourcompany() {
    const data = caseStudies.oueCompany
  return (
    <>
    <div className=' -mt-[135px]'>
      <Banner {...data}/>
      <Softbanner/>
      <WhyWorkinSmp/>
      
      <Ourhistory/>
      <Wonaward/>
      <PartnerSection/>
      <CharitySection/>
      <Africancontinent/>
      <Meeting/>
      <AfricaHome/>
      <Review/>
      <Content9/>
    </div>
      
     
    </>
  )
}
 
export default Ourcompany