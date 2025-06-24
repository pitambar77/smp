import React from 'react'
import CountUp from 'react-countup';
const NumberCounter = () => {
  return (
    <div className=' bg-[#4679c5] text-white pb-[29.4px] my-[3%]  '>
        <div className='max-w-[1050px] mx-auto px-[15px]'>
  <h1 className="text-4xl text-center font-[700] md:text-[50px]  py-[20.4px] leading-[1.4] ">The Results</h1>
            <div className='  grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 sm:gap-8 gap-1'>
                <div className=' flex flex-col items-center justify-center text-red-400 bg-white p-[5%] mb-[20px] rounded-[10px] border-2 border-[#d3d3d3]'>
                    <p className=' text-[30px] font-[800] text-[#ff5254] '>
                        <CountUp 
                         start={0} 
                         end={360} 
                         prefix='+'
                         suffix='%'
                         duration={3} 
                         enableScrollSpy={true} 
                         scrollSpyOnce={true}
                        />
                    </p>
                    <p className=' text-center text-[#787878] text-[17px] font-[400]'>Organic Traffic</p>
                </div>
                <div className=' flex flex-col items-center justify-center text-red-400 bg-white p-[5%] mb-[20px] rounded-[10px] border-2 border-[#d3d3d3]'>
                    <p className=' text-[30px] font-[800] text-[#ff5254]'>
                    <CountUp 
                         
                         end={10938} 
                         separator=','
                         prefix='+'
                         duration={3} 
                         enableScrollSpy={true} 
                         scrollSpyOnce={true}
                        />
                    </p>
                    <p className=' text-center text-[#787878] text-[17px] font-[400]'>Landing Page Views</p>
                </div>
                <div className=' flex flex-col items-center justify-center text-red-400 bg-white p-[5%] mb-[20px] rounded-[10px] border-2 border-[#d3d3d3]'>
                    <p className=' text-[30px] font-[800] text-[#ff5254]'>
                    <CountUp 
                          
                         end={167} 
                         prefix='+'
                         suffix='%'
                         duration={3} 
                         enableScrollSpy={true} 
                         scrollSpyOnce={true}
                        />
                    </p>
                    <p className=' text-center text-[#787878] text-[17px] font-[400]'>Inquiries</p>
                </div>
                <div className=' flex flex-col items-center justify-center text-red-400 bg-white p-[5%] mb-[20px] rounded-[10px] border-2 border-[#d3d3d3]'>
                    <p className=' text-[30px] font-[800] text-[#ff5254]'>
                    <CountUp 
                          
                          end={352} 
                         separator=','
                         prefix='+'
                         suffix='%'
                         duration={3} 
                         enableScrollSpy={true} 
                         scrollSpyOnce={true}
                        />
                    </p>
                    <p className='  text-[#787878]  font-[400]'>Social media Impressions</p>
                </div>
            </div>
        </div>
      
        </div>

  )
}

export default NumberCounter
