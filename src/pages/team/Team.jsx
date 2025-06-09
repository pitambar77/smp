import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Card from './Card'
import Gallery from './Gallery'
import SubBanner from './SubBanner'

import Common from '../../components/Common'
import axios from 'axios'
import { BASE_URL } from '../../api/config'


const Team = () => {

   const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${ BASE_URL }/api/all-banners/team`);
        setBannerData(res.data);
      } catch (err) {
        console.error("Failed to fetch banner", err);
      }
    };
    fetchBanner();
  }, []);

  if (!bannerData) return <div></div>;

  

  return (
    <>
       <Banner
        title={bannerData.title}
        description={bannerData.description}
        imageUrl={`${ BASE_URL }/${bannerData.imageUrl}`}
      />

        <SubBanner/>
        <Card/>
        <Gallery/>
        <Common/>
    
       
    </>
  )
}

export default Team
