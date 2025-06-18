import React from 'react'
import Gallery from '../../components/Gallery'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/config';

const SubGallery = () => {
    const [heading, setHeading] = useState(null);


  useEffect(() => {
    
       axios.get(`${ BASE_URL }/api/training-gallery/heading`)
      .then((res) => {
        setHeading(res.data);  // backend returns array of images [{ _id, image }]
      })
      .catch((err) => {
        console.error("Error fetching training Gallery:", err);
      });
  }, []);

  if(!heading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className=' w-full pt-[70px] pb-[10px]'>
      <div className=' max-w-[1140px] mx-auto text-center  '>
        <h1 className='text-[50px] text-[#3467d8] font-[700] px-[57px] pb-[15px] '>{heading.heading}</h1>
        <p className=' text-[18px] font-[500] text-[#787878]'>{heading.subheading}</p>
      </div>
      <Gallery/>
    </div>
  )
}

export default SubGallery
