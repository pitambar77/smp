import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MarketingProofSection from './MarketingProofSection'
import Banner from '../../components/Banner'
import Content9 from '../home/Content9'
import {BASE_URL} from '../../api/config'
 
function Ebook() {
    const [bannerData, setBannerData] = useState(null);

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${ BASE_URL }/api/all-banners/ebook`);
        setBannerData(res.data);
      } catch (err) {
        console.error("Failed to fetch banner", err);
      }
    };
    fetchBanner();
  }, []);

  if (!bannerData) return <div></div>;

  

  return (
    <div>
       <Banner
        title={bannerData.title}
        description={bannerData.description}
        imageUrl={`${ BASE_URL }/${bannerData.imageUrl}`}
      />
    <MarketingProofSection/>
    <Content9/>
    </div>
  )
}
 
export default Ebook
 