import React from 'react'

import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/config';
// import galleybg from '../../assets/images/whphrd.png'

const Gallery = () => {

   const [galleryData, setgalleryData] = useState(null);
  
    useEffect(() => {
      axios.get(`${ BASE_URL }/api/team-gallery`)
        .then((res) => {
          setgalleryData(res.data);
        })
        .catch((err) => {
          console.error("Error fetching Galley data:", err);
        });
    }, []);
    
  
    if (!galleryData) return <div className="text-center mt-10">Loading...</div>;
  

  return (
    <div className=' w-full md:pt-[105px] pt-[10px] md:pb-[100px] '>
        
      <div className=' max-w-[1140px] mx-auto   items-center justify-center text-center bg-url(https://safarimarketingpro.com/images/smp-whphrd-sec-bg.png)'>
        <h1 className=' capitalize  md:text-[50px] text-[24px] text-[#3467d8] font-[700]  md:px-[12%] pb-[15px] leading-[1.4]'>{galleryData.heading}</h1>
        <p  className='  text-[#787878] text-[22px] font-[400] leading-[1.4] p-[5px] md:p-0  '>{galleryData.subheading}
    </p>
   
      </div>
      <div className=' max-w-[1140px] px-4 md:px-0 mx-auto'>
        <div className='  '>
            <img src={`${ BASE_URL }/uploads/${galleryData.image}`} alt="gallery image" className=' bg-cover' /> 
        </div>
       
      </div>

      
    </div>
  )
}

export default Gallery
