import React from 'react'
import Banner from '../../components/Banner'
// import teamChinpal from '../../assets/images/team-chinpal.png'
// import chinSign from '../../assets/images/chin-sign.png'
import Card from './Card'
import Gallery from './Gallery'
import SubBanner from './SubBanner'
import caseStudies from '../../data/BannerData'
import Common from '../../components/Common'


const Team = () => {

  const data = caseStudies.team

  return (
    <>
    <div className='-mt-[135px]'>
      <Banner {...data}/>
        <SubBanner/>
        <Card/>
        <Gallery/>
        <Common/>
    </div>
       
    </>
  )
}

export default Team
