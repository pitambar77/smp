import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner';
import Tabs from './Tabs'
import PricingCards from './PricingCards';
import BudgetPlan from './BudgetPlan';
import Ads from './Ads';
import VideoAdd from '../review/VideoAdd';
import CaroselSection from './CaroselSection';
import { BASE_URL } from '../../api/config';
import axios from 'axios';


const Pricing = () => {

    const [activeTab, setActiveTab] = useState("Website");

  const allPackages = {
    Website: [
      { title: "BUDGET PLAN", price: "2,000", investment: "1000" },
      { title: "MID-RANGE PLAN", price: "3000", investment: "1500" },
      { title: "LUXURY PLAN", price: "5000", investment: "2500" },
    ],
    "360 Marketing": [
      { title: "LUXURY PLAN", price: "30000", investment: "9999" },
      
    ],
    "Organic Marketing": [
      { title: "BUDGET PLAN", price: "12,000", investment: "3600" },
      { title: "MID-RANGE PLAN", price: "18,000", investment: "5,400" },
      { title: "LUXURY PLAN", price: "25,000", investment: "7500" },
    ],
    "PPC Marketing": [
      { title: "BUDGET PLAN", price: "8000", investment: "1800" },
      { title: "MID-RANGE PLAN", price: "15000", investment: "4500" },
      { title: "LUXURY PLAN", price: "25000", investment: "7,500" },
    ],
  };

  const currentPackages = allPackages[activeTab];
const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${ BASE_URL }/api/all-banners/pricing`);
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
   
       <div className=' max-w-[1140px]  mx-auto mt-[60px]  text-center  '>
        <p className='  text-center pr-[12%] pl-[12%] pb-[10px] text-[20px]  text-[#787878] font-[400] leading-[1.8] '>Too many digital marketing providers take a copy-and-paste approach to their services. That’s not our style — and it’s not how we've driven $3 billion in revenue for our clients in just the past twelve years. Instead, we build custom plans based on your safari and tour business industry and goals. Get a preview of what that can look like below:</p>
     </div>
      <main className=" max-w-[1140px] mx-auto">
        <Tabs activeTab={activeTab} onChange={setActiveTab} />
        <div className="grid md:grid-cols-3 gap-x-[30px] mt-[90px] px-[15px]  ">
          {currentPackages.map((pkg, index) => (
            <PricingCards key={index} {...pkg} />
          ))}
        </div>
      </main>

      <BudgetPlan/>
      <Ads/>
      <VideoAdd/>
      <CaroselSection/>
     
    </div>
  )
}

export default Pricing
