import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner';
import { FaStar, FaRegStar} from 'react-icons/fa';
import Testimonial from './Testimonial';
import Work from './Work';
import Common from '../../components/Common';
import VideoAdd from './VideoAdd';
import { LuCircleCheckBig } from "react-icons/lu";
import axios from 'axios';
import { BASE_URL } from '../../api/config';

const reviews = [
  {
    id: 1,
    name: 'Founder, Samton Safaris',
    rating: 4.0,
    comment: 'Fantastic experience! Highly recommend.',
    description:'"Everyhings is perfects"',
    
  },
  {
    id: 2,
    name: 'Managing Director, Bora Trekking Tours and Safari',
    rating: 5.0,
    comment: 'Great service, will use again.',
    description:'“Their teamwork was amazing, and they listened to what their clients wished.”',
    
  },
  {
    id: 3,
    name: 'CIO, White Plains Safaris',
    rating: 5.0,
    comment: 'Good, but room for improvement.',
   description:'“The price was very good considering the amount of work done.”',
  },
  {
    id: 4,
    name: 'Marketing Director, Dove Adventure Tanzania',
    rating: 5.0,
    comment: 'Fantastic experience! Highly recommend.',
   description:'“They truly stand out as a top-notch company.”',
    
  },
  {
    id: 5,
    name: 'Owner, Safari World Tours',
    rating: 4,
    comment: 'Great service, will use again.',
   description:'“They were swift in responding to questions and working on corrections.”',
    
  },
  {
    id: 6,
    name: 'Carol Williams',
    rating: 5.0,
    comment: 'Good, but room for improvement.',
   description:'“Their work ethic and dedication to satisfying our needs stood out.”',
   
  },
];

const Review = () => {
     const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${ BASE_URL }/api/all-banners/review`);
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

    <VideoAdd/>

      {/* Review card section */}
      <div className=' max-w-[1140px] mx-auto pt-10  items-center justify-center text-center'>
        <h1 className=' capitalize   md:text-[48px] text-2xl text-[#3467d8] font-[700] md:px-20 px-4 leading-[1.3] '>Reviews From one of the worlds most trusted partners</h1>
        <p  className=' px-4 py-4  text-cente text-[#787878] text-[22px] font-[400]'>Don’t just take our word for it. See what our clients are saying.</p>
      </div>
      <div className="max-w-5xl mx-auto py-8 px-8 bg-gray-50">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#17313b] pb-4 hover:underline">
            Manorama Web Solutions Private Limited Reviews
          </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white px-6 pt-4 rounded-lg shadow-md "
          >
            <div className=' flex items-center gap-2'>
            <p>{review.rating}.0</p> 
            <div className="flex justify-center ">

            
              {[...Array(5)].map((_, i) =>
                i < review.rating ? (
                  <FaStar key={i} className=" text-[#e62415]" />
                ) : (
                  <FaRegStar key={i} className="text-gray-300" />
                )
              )}
            </div>
            </div>
            
            <p className="text-[#17313b] py-4 text-[14px] leading-[18px] ">{review.description}</p>
            <p className="text-[#6a7a7e] py-4 text-[12px] leading-[14px] ">{review.name}</p>
           <div className=' flex items-center gap-[5px] '>
            <LuCircleCheckBig className=' w-[15px] text-[#104f79]'/>
            <p className="text-[#757c80] py-4 text-[14px] inline-block align-bottom  items-center">Verified Review  </p>
           </div>
          
          </div>
        ))}
      </div>
    </div>

    {/* Review  section */}
    <Testimonial/>
    <Work/>
    <Common/>
    </div>
  )
}

export default Review
