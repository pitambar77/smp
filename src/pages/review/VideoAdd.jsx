// import React from 'react'

// const VideoAdd = () => {
//   return (
//     <div>
//       <div  className=' w-full'>
//       <div className=' max-w-[1140px] mx-auto pt-[90px]  items-center justify-center text-center'>
//         <h1 className=' capitalize  md:text-[40px] text-2xl text-[#3467d8] font-[700] md:px-20 px-4 leading-[1.3] '>When your customers become your no.1 promoters</h1>
//         <p  className=' px-4 py-4 text-cente text-[#787878] text-[22px] font-[400] '>Don’t just take our word for it. See what our clients are saying.</p>
//       </div>
//       </div>
//       <div className=' w-full '>
//         <div className=' max-w-[1140px] mx-auto pb-[10px] p-[15px]'>

//         <div className=' grid sm:grid-cols-1 md:grid-cols-2 gap-[30px]  items-center'>
//          <div className='bg-[url(https://i.ytimg.com/vi_webp/n6JyE-KVCsE/maxresdefault.webp)] h-[304px] bg-cover bg-bg-center'>
//             <iframe src="https://www.youtube.com/embed/n6JyE-KVCsE?controls=0"  allow="autoplay; encrypted-media;" data-gtm-yt-inspected-12="true" className=' bg-cover bg-center w-full h-full'></iframe>
//         </div>
//          <div className='bg-[url(https://i.ytimg.com/vi_webp/n6JyE-KVCsE/maxresdefault.webp)] h-[304px] bg-cover bg-bg-center'>
//            <iframe src="https://www.youtube.com/embed/kskzj2zBEIM?controls=0"  allow="autoplay; encrypted-media;" data-gtm-yt-inspected-12="true" className=' bg-cover bg-center w-full h-full'></iframe>
//         </div>
//          <div className='bg-[url(https://i.ytimg.com/vi_webp/n6JyE-KVCsE/maxresdefault.webp)] h-[304px] bg-cover bg-bg-center'>
//            <iframe src="https://www.youtube.com/embed/11OYDxAxnf4?controls=0"  allow="autoplay; encrypted-media;" data-gtm-yt-inspected-12="true" className=' bg-cover bg-center w-full h-full'></iframe>
//         </div>
//          <div className='bg-[url(https://i.ytimg.com/vi_webp/n6JyE-KVCsE/maxresdefault.webp)] h-[304px] bg-cover bg-bg-center'>
//            <iframe src="https://www.youtube.com/embed/bpHRzjP6dhs?controls=0"  allow="autoplay; encrypted-media;" data-gtm-yt-inspected-12="true" className=' bg-cover bg-center w-full h-full'></iframe>
//         </div>
//       </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default VideoAdd
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoAdd = () => {
  const videos = [
    "n6JyE-KVCsE",
    "kskzj2zBEIM",
    "11OYDxAxnf4",
    "bpHRzjP6dhs",
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
       {/* Heading Section */}
      <div className="w-full">
        <div className="max-w-[1140px] mx-auto md:pt-[90px] pt-[50px]  items-center justify-center text-center">
          <h1 className="capitalize md:text-[40px] text-[24px] text-[#3467d8] font-[700] md:px-20 px-4 leading-[1.3]">
            When your customers become your no.1 promoters
          </h1>
          <p className="px-4 py-4 text-center text-[#787878] md:text-[22px] text-[16px] font-[400]">
            Don’t just take our word for it. See what our clients are saying.
          </p>
        </div>
      </div>
      <div className='w-full'>
        <div className='max-w-[1140px] mx-auto pb-[10px] p-[15px]'>

          {/* ✅ Mobile Slider Only */}
          <div className='block sm:hidden'>
            <Slider {...sliderSettings}>
              {videos.map((id, idx) => (
                <div key={idx}>
                  <div className='h-[190px] bg-cover bg-center'>
                    <iframe
                      src={`https://www.youtube.com/embed/${id}?controls=0`}
                      allow="autoplay; encrypted-media;"
                      className='w-full h-full'
                      title={`video-${idx}`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* ✅ Original Grid for sm and up (unchanged) */}
          <div className='hidden sm:grid sm:grid-cols-1 md:grid-cols-2 gap-[30px] items-center'>
            <div className='bg-[url(https://i.ytimg.com/vi_webp/n6JyE-KVCsE/maxresdefault.webp)] h-[304px] bg-cover bg-bg-center'>
              <iframe src="https://www.youtube.com/embed/n6JyE-KVCsE?controls=0" allow="autoplay; encrypted-media;" className='bg-cover bg-center w-full h-full' />
            </div>
            <div className='bg-[url(https://i.ytimg.com/vi_webp/n6JyE-KVCsE/maxresdefault.webp)] h-[304px] bg-cover bg-bg-center'>
              <iframe src="https://www.youtube.com/embed/kskzj2zBEIM?controls=0" allow="autoplay; encrypted-media;" className='bg-cover bg-center w-full h-full' />
            </div>
            <div className='bg-[url(https://i.ytimg.com/vi_webp/n6JyE-KVCsE/maxresdefault.webp)] h-[304px] bg-cover bg-bg-center'>
              <iframe src="https://www.youtube.com/embed/11OYDxAxnf4?controls=0" allow="autoplay; encrypted-media;" className='bg-cover bg-center w-full h-full' />
            </div>
            <div className='bg-[url(https://i.ytimg.com/vi_webp/n6JyE-KVCsE/maxresdefault.webp)] h-[304px] bg-cover bg-bg-center'>
              <iframe src="https://www.youtube.com/embed/bpHRzjP6dhs?controls=0" allow="autoplay; encrypted-media;" className='bg-cover bg-center w-full h-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAdd;


