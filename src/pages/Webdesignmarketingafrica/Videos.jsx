// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Videos = () => {
//   const videos = [
//     "n6JyE-KVCsE",
//     "kskzj2zBEIM",
//     "11OYDxAxnf4",
//     "bpHRzjP6dhs",
//     "oU8lWCy_AtQ"
//   ];

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div>
//        {/* Heading Section */}
//       <div className="w-full">
//         <div className="max-w-[1140px] mx-auto md:pt-[50px] pt-[50px]  items-center justify-center text-center">
//           <h2 className="font-montserrat font-extrabold text-[40px] text-center capitalize text-[#3467d8] leading-[1.3] m-0 px-[5%] pb-[15px]">
//             When your customers become
//             <br/> your no.1 promoters
//           </h2>
//           <p className="font-montserrat font-normal text-[22px] text-center text-[#787878] leading-[inherit] m-0 pb-[15px]"
// >
//             Don’t just take our word for it. See what our clients are saying.
//           </p>
//         </div>
//       </div>
//       <div className='w-full'>
//         <div className='max-w-[1140px] mx-auto pb-[10px] p-[15px]'>

//           {/* ✅ Mobile Slider Only */}
//           <div className='block sm:hidden'>
//             <Slider {...sliderSettings}>
//               {videos.map((id, idx) => (
//                 <div key={idx}>
//                   <div className='h-[190px] bg-cover bg-center'>
//                     <iframe
//                       src={`https://www.youtube.com/embed/${id}?controls=0`}
//                       allow="autoplay; encrypted-media;"
//                       className='w-full h-full'
//                       title={`video-${idx}`}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>

//           {/* ✅ Original Grid for sm and up (unchanged) */}
//           <div className='hidden sm:grid sm:grid-cols-1 md:grid-cols-2 gap-[30px] items-center'>
//             <div className='bg-[url(https://i.ytimg.com/vi_webp/n6JyE-KVCsE/maxresdefault.webp)] h-[304px] bg-cover bg-bg-center'>
//               <iframe src="https://www.youtube.com/embed/n6JyE-KVCsE?controls=0" allow="autoplay; encrypted-media;" className='w-full h-full bg-center bg-cover' />
//             </div>
//             <div className='bg-[url(https://i.ytimg.com/vi_webp/n6JyE-KVCsE/maxresdefault.webp)] h-[304px] bg-cover bg-bg-center'>
//               <iframe src="https://www.youtube.com/embed/kskzj2zBEIM?controls=0" allow="autoplay; encrypted-media;" className='w-full h-full bg-center bg-cover' />
//             </div>
//             <div className='bg-[url(https://i.ytimg.com/vi_webp/n6JyE-KVCsE/maxresdefault.webp)] h-[304px] bg-cover bg-bg-center'>
//               <iframe src="https://www.youtube.com/embed/11OYDxAxnf4?controls=0" allow="autoplay; encrypted-media;" className='w-full h-full bg-center bg-cover' />
//             </div>
//             <div className='bg-[url(https://i.ytimg.com/vi_webp/n6JyE-KVCsE/maxresdefault.webp)] h-[304px] bg-cover bg-bg-center'>
//               <iframe src="https://www.youtube.com/embed/bpHRzjP6dhs?controls=0" allow="autoplay; encrypted-media;" className='w-full h-full bg-center bg-cover' />
//             </div>
//              <div className='relative h-[304px] w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(https://img.youtube.com/vi/oU8lWCy_AtQ/hqdefault.jpg)` }}>
//   <iframe
//     src="https://www.youtube.com/embed/oU8lWCy_AtQ?controls=1"
//     allow="autoplay; encrypted-media"
//     className="absolute top-0 left-0 w-full h-full"
//     frameBorder="0"
//     allowFullScreen
//   />
// </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Videos;
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Videos = () => {
  const videos = [
    "n6JyE-KVCsE",
    "kskzj2zBEIM",
    "11OYDxAxnf4",
    "bpHRzjP6dhs",
    "oU8lWCy_AtQ"
  ];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3500,
  swipe: true,
  draggable: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  appendDots: dots => (
    <div className='pt-5'>
      <ul style={{ margin: '0px', display: 'flex', justifyContent: 'center' }}>
        {dots}
      </ul>
    </div>
  ),
  customPaging: i => (
    <button
      style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        background: '#4775C9',
        border: 'none',
        cursor: 'pointer',
        paddingTop: '10px',
      }}
      aria-label={`Go to slide ${i + 1}`}
    />
  ),


  };

  return (
    <div className="w-full py-10 bg-white">
      <div className="text-center max-w-[1140px] mx-auto mb-10 px-4">
        <h2 className="font-montserrat font-extrabold text-[40px] capitalize text-[#3467d8] leading-[1.3]">
          When your customers become<br /> your no.1 promoters
        </h2>
        <p className="font-montserrat text-[22px] text-[#787878] mt-3">
          Don’t just take our word for it. See what our clients are saying.
        </p>
      </div>

      <div className="max-w-[1140px] mx-auto px-4">
        <Slider {...sliderSettings}>
          {videos.map((id, idx) => (
            <div key={idx} className="px-2">
              <div className="relative w-full h-[304px] overflow-hidden shadow-md">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${id}?controls=1`}
                  title={`video-${idx}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Videos;

