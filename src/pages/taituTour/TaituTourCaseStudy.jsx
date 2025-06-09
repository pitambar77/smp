import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'

import TaituTourContent from './TaituTourContent'
import CardCarousel from './CardCarousel'
import Common from '../../components/Common'
import axios from 'axios'
import { BASE_URL } from '../../api/config'

const TaituTourCaseStudy = () => {
    const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${ BASE_URL }/api/all-banners/taituTour`);
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
      <TaituTourContent/>
      <div className=' w-full py-[100px]'>
            <div className=' max-w-[1140px] mx-auto text-center'>
                <h1 className='text-[#3467d8] text-[40px] font-[700] leading-[1.3] px-[15%]'>Explore Success Stories</h1>
                <p className=' text-[18px] font-[400] py-[15px] px-[30px] text-[#787878]'>Team Up With Safari Marketing Pro – The Next Amazing Case Study Could Be Yours!</p>
            <CardCarousel/>
            </div>
            
      </div>
      <Common/>
    </div>
  )
}

export default TaituTourCaseStudy
