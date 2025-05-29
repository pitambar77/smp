import React from 'react'
import galleyImg from '../../assets/images/whphrd-fig-gallery.png'
// import galleybg from '../../assets/images/whphrd.png'

const Gallery = () => {
  return (
    <div className=' w-full pb-[80px] '>
        
      <div className=' max-w-[1140px] mx-auto pt-20   items-center justify-center text-center bg-url(https://safarimarketingpro.com/images/smp-whphrd-sec-bg.png)'>
        <h1 className=' capitalize  text-5xl text-[#3467d8] font-[700] md:px-48 px-4 leading-relaxed'>Work Hard Party Hard</h1>
        <p  className=' py-4 text-[#787878] text-[22px] font-[400] '>This Is Where Our Basement Stands
    </p>
   
      </div>
      <div className=' max-w-[1140px] mx-auto'>
        <div className='  '>
            <img src={galleyImg} alt="galley" className=' bg-cover' /> 
        </div>
       
      </div>
      
    </div>
  )
}

export default Gallery
