import React from 'react'


const Card = ({data}) => {
  return (
     <div className="bg-[#041936] text-white  shadow-lg flex flex-col items-start overflow-hidden">
      <div className=' p-4'>
        <h3 className="font-[600] pb-[5px] text-[16px]">{data.company}</h3>
        <h2 className="text-[24px] font-semibold tracking-wide leading-[1.2]">{data.title}</h2>

        
        <div className=' grid grid-cols-3 gap-[15px] pt-[30px]'>
        {data.metrics.map((metric, index) => (
            <div key={index} className=" ">
              <h1 className=" text-[28px] pb-[5px] font-[700]">{metric.value}</h1> 
              <h1 className=' text-[14px] font-[600]'>{metric.label}</h1>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap  pt-[30px]">
          {data.tags.map((tag, idx) => (
            <span key={idx} className="bg-[#f2f6fc] font-[600] text-black text-[14px] px-[10px] py-[5px] rounded my-[2px] mx-[3px]">
              {tag}
            </span>
          ))}
        </div>
     </div>

      <div className="pb-[10px] flex  pl-4  ">
        <div className=' absolute pt-[16px]  '>
        <button
        //   onClick={() => navigate(data.link)}
          className=" border-white border-2 pl-[15px] py-[10px] pr-[25px]  rounded hover:bg-[#ff5254] hover:border-[#ff5254] duration-500  text-[14px] bg-transparent "
        >
          READ FULL CASE STUDY &rarr;
        </button>
        </div>
        
        <img
          src={data.image}
          alt={data.company}
          className=" w-[60%] ml-[200px] -mt-[50px] -mb-5"
        />
      </div>
    
 </div>
  )
}

export default Card
