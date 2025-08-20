import React, { useEffect, useState } from 'react'
import Tabs from './Tabs'
import PricingCards from './PricingCards'
import BudgetPlan from '../../pages/pricing/BudgetPlan'

const Package = () => {

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
   
     
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div>
          <main className="sm:max-w-[1140px] mx-auto">
        <Tabs activeTab={activeTab} onChange={setActiveTab} />
        <div className="grid md:grid-cols-3 gap-x-[30px] mt-[90px]  px-[15px]">
          {currentPackages.map((pkg, index) => (
            <PricingCards key={index} {...pkg} />
          ))}
        </div>
 
        {/* Show the correct BudgetPlan for each tab */}
        {activeTab === "Website" && ""}
        {activeTab === "Organic Marketing" && ""}
        {activeTab === "PPC Marketing" && " "}
        {/* {activeTab === "360 Marketing" && <BudgetPlan type="marketing360" />} */}
      </main>
      
     
    </div>
  )
}

export default Package
