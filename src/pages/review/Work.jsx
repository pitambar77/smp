import React from 'react'
import img1 from '../../assets/images/wgboas-fig-83.png'
import img2 from '../../assets/images/wgboas-fig-1.png'
import img3 from '../../assets/images/wgboas-fig-3.png'



const companies = [
  {
    id: 1,
    img:img3,
   
  },
  {
    id: 2,
    img:img2,
    
  },
  {
    id: 3,
    img:img1,
  },
  {
    id: 4,
   img:img2,
  },
  {
    id: 5,
   img:img1,
  },
  
  {
    id: 6,
   img:img2,
   
  },
  {
    id: 7,
   img:img3,
   
  },
  {
    id: 8,
   img:img3,
   
  },
  {
    id: 9,
   img:img1,
   
  },
  {
    id: 10,
   img:img1,
   
  },
  {
    id: 11,
   img:img3,
   
  },
  {
    id: 12,
   img:img1,
   
  },
  {
    id: 13,
   img:img1,
   
  },
  {
    id: 14,
   img:img3,
   
  },
   {
    id: 15,
   img:img1,
   
  },
   {
    id: 16,
   img:img1,
   
  },
   {
    id: 17,
   img:img1,
   
  },
   {
    id: 18,
   img:img1,
   
  },
   {
    id: 19,
   img:img1,
   
  },
   {
    id: 20,
   img:img1,
   
  },
   {
    id: 21,
   img:img1,
   
  },
   {
    id: 22,
   img:img1,
   
  },
   {
    id: 23,
   img:img1,
   
  },
   {
    id: 24,
   img:img1,
   
  },
   {
    id: 25,
   img:img1,
   
  },
   {
    id: 26,
   img:img1,
   
  },
   {
    id: 27,
   img:img1,
   
  },
   {
    id: 28,
   img:img1,
   
  },
   {
    id: 29,
   img:img1,
   
  },
   {
    id: 30,
   img:img1,
   
  },
   {
    id: 31,
   img:img1,
   
  }, {
    id: 32,
   img:img1,
   
  },
   {
    id: 33,
   img:img1,
   
  },
   {
    id: 34,
   img:img1,
   
  },
   {
    id: 35,
   img:img1,
   
  },
   {
    id: 36,
   img:img1,
   
  },
   {
    id: 37,
   img:img1,
   
  },
   {
    id: 38,
   img:img1,
   
  },
   {
    id: 39,
   img:img1,
   
  },
   {
    id: 40,
   img:img1,
   
  },
   {
    id: 41,
   img:img1,
   
  },
  

];


const Work = () => {
  return (
    <div  className=' w-full'>
      <div className=' max-w-[1140px] mx-auto pt-20  items-center justify-center text-center'>
        <h1 className=' capitalize   md:text-[50px] text-2xl text-[#3467d8] font-[700] md:px-20 px-4 leading-[1.4] '>We Work With Leading Brands</h1>
        <p  className=' px-4 py-4  text-cente text-[#787878] text-[22px] font-[400] leading-[1.4]'>Our latest work with 100% Custom strategy</p>
      </div>

        <div className=' max-w-[1170px] mx-auto'>
            <div className=' grid lg:grid-cols-10 md:grid-cols-5 grid-cols-4 gap-3  p-4'>
                
                    {
                        companies.map((i)=>(
                            <div className='  border border-gray-200 shadow-[0_0_9px_0_rgba(0,0,0,0.1)] items-center p-2'>
                            <div className='' key={i.id}>
                                <div className=' flex'>
                                    <img src={i.img} alt="" className=' w-full bg-cover ' />
                                </div>
                            </div>
                            </div>
                        ))
                    }
                
            </div>
        </div>

      </div>
  )
}

export default Work
