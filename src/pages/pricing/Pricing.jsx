import React, { useState } from 'react'
import Banner from './Banner'
import Tabs from './Tabs'
import PricingCards from './PricingCards';
import BudgetPlan from './BudgetPlan';
import Ads from './Ads';
import VideoAdd from '../review/VideoAdd';
import CaroselSection from './CaroselSection';

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

  return (
    <div>
      <Banner/>
      <main className="container mx-auto px-4">
        <Tabs activeTab={activeTab} onChange={setActiveTab} />
        <div className="grid md:grid-cols-3 gap-6 mt-10 p-10 ">
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
