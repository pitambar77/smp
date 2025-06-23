import React from 'react'

const tabs = ["Website", "360 Marketing", "Organic Marketing", "PPC Marketing"];

const Tabs = ({ activeTab, onChange }) => {
  return (
    // <div className=' w-full'>
    //    <div className=' w-[1140px] mx-auto   p-10   '>
    //         <h1 className=' capitalize  text-[50px]  font-[700] text-[#3467d8] text-center leading-snug'>Most Demaned Packages</h1>
    //        <div className=' flex gap-4 mt-16'>
    //         <button className=' bg-[#ff5254] border-2 border-[#ff5254] text-white py-[15px] px-[40px] rounded-md font-[600] text-[20px]'>Website</button>
    //         <button className='hover:bg-[#ff5254] border-2 hover:border-[#ff5254] border-[#ccc] hover:text-white text-[#011833]  py-[15px] px-[40px] rounded-md font-[600] text-[20px] duration-300 ease-in-out'>360 Marketing</button>

    //         <button className='hover:bg-[#ff5254] border-2 hover:border-[#ff5254] border-[#ccc] hover:text-white text-[#011833]  py-[15px] px-[40px] rounded-md font-[600] text-[20px] duration-300 ease-in-out'>Organic Marketing</button>
    //       <button className='hover:bg-[#ff5254] border-2 hover:border-[#ff5254] border-[#ccc] hover:text-white text-[#011833]  py-[15px] px-[40px] rounded-md font-[600] text-[20px] duration-300 ease-in-out'>PPC Marketing</button>

    //        </div>
    //     </div>
    // </div>

    <div className=' w-full'>
        <div className=' w-[1140px] mx-auto   pt-[65px]   '>
             <h1 className=' capitalize  text-[50px]  font-[700] text-[#3467d8] text-center leading-snug pb-[15px]'>Most Demaned Packages</h1>
             <div className="flex justify-center items-center mt-[30px]  flex-wrap">
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => onChange(tab)}
          className={`py-[15px] px-[40px] rounded-md font-[600] mr-[17px] text-[20px] border-2 border-[#ccc] cursor-pointer duration-300 ${
            activeTab === tab
              ? "bg-[#ff5254] text-white border-[#ff5254]   "
              : "border-[#ccc] text-[#011833]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
        </div>
    </div>

   


  )
}

export default Tabs
