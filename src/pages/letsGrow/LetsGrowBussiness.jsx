import React from 'react'
import Banner from '../../components/Banner'
import caseStudies from '../../data/BannerData'
import Letscontact from './Letscontact'
import Review from '../../components/Review'
import Common from '../../components/Common'

const LetsGrowBussiness = () => {
    const data = caseStudies.letsGrow
  return (
    <div>
      <Banner {...data}/>
      <Letscontact/>
      <Review/>
      <Common/>
    </div>
  )
}

export default LetsGrowBussiness
