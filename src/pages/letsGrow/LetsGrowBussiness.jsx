import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'

import Letscontact from './Letscontact'
import Review from '../../components/Review'
import Common from '../../components/Common'
import axios from 'axios'
import { BASE_URL } from '../../api/config'

const LetsGrowBussiness = () => {
     const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${ BASE_URL }/api/all-banners/letsGrow`);
        setBannerData(res.data);
      } catch (err) {
        console.error("Failed to fetch banner", err);
      }
    };
    fetchBanner();
  }, []);

  if (!bannerData) return <div>Loading...</div>;

  

  return (
    <div>
       <Banner
        title={bannerData.title}
        description={bannerData.description}
        imageUrl={`${ BASE_URL }/${bannerData.imageUrl}`}
      />
      <Letscontact/>
      <Review/>
      <Common/>
    </div>
  )
}

export default LetsGrowBussiness
