import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'

import Letscontact from './Letscontact'
import Review from '../../components/Review'
import Common from '../../components/Common'
import axios from 'axios'
import { BASE_URL } from '../../api/config'
import Content9 from '../home/Content9'

const LetsGrowBussiness = () => {
     const [bannerData, setBannerData] = useState(null);
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className=" w-full pt-[40px] pb-[100px]">
        <div className=" max-w-[1172px] mx-auto  items-center justify-center text-center pb-[15px]">
          <h1 className=" capitalize   md:text-[48px] text-2xl text-[#3467d8] font-[700] px-[10%] pb-[10px]  leading-[1.3] ">
            See What Our Clients Are Saying About Our Services
          </h1>
        </div>
       <Review/>
      </div>
      <div className=' pb-[20px]'>
      <Common/>
      </div>
      
      <Content9/>
    </div>
  )
}

export default LetsGrowBussiness
