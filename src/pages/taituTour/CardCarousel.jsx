// SuccessStoriesCarousel.jsx
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination, Autoplay } from 'swiper/modules';
// import cardData from '../../data/CardData';
// import { useNavigate } from 'react-router-dom';

// export default function CardCarousel() {
//   let navigate = useNavigate()
//   return (
//     <div className="py-12 px-4">

//       <Swiper
//         slidesPerView={1}
//         spaceBetween={24}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         breakpoints={{
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         modules={[ Autoplay]}
//       >
//         {cardData.map((study, idx) => (
//           <SwiperSlide key={idx}>
//             <div className="bg-[#00142E] text-white flex flex-col text-start overflow-hidden ">
//                <div className=' p-4'>
//                 <h4 className="font-[600] pb-[5px] sm:text-[16px] text-[14px] ">{study.company}</h4>
//                 <h3 className="sm:text-[24px] text-[20px]  font-semibold tracking-wide leading-[1.2]">{study.title}</h3>
//                 <div className="grid grid-cols-3 gap-[15px] pt-[30px]">
//                   {study.metrics.map((stat, sIdx) => (
//                     <div key={sIdx}>
//                       <div className="sm:text-[28px] text-[22px] pb-[5px] font-[700]">{stat.value}</div>
//                       <div className="text-[14px] font-[600]">{stat.label}</div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="flex flex-wrap pt-[30px]">
//                   {study.tags.map((tag, tIdx) => (
//                     <span
//                       key={tIdx}
//                       className="bg-[#f2f6fc] font-[600] text-black text-[14px] px-[10px] py-[5px] rounded my-[2px] mx-[3px]"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className=" flex pl-4   ">
//               <div className=' flex absolute  '>
//                 <button
//                  onClick={() =>{navigate(study.link);window.scrollTo(0, 0); }}

//                  className=" border-white border-2 pl-[15px]  py-[10px] pr-[25px]  cursor-pointer  rounded hover:bg-[#ff5254] hover:border-[#ff5254] duration-500  text-[14px] bg-transparent">
//                 READ FULL CASE STUDY →
//               </button>
//               </div>
//               <img
//           src={study.image}
//           alt={study.company}  className=' w-[60%] ml-[200px] -mt-[50px] -mb-5'/>

//               </div>

//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import cardData from "../../data/CardData";
import { useNavigate } from "react-router-dom";

export default function CardCarousel() {
  let navigate = useNavigate();
  return (
    <div className="sm:py-12 py-0 px-4 sm:pt-4 pt-[60px] ">
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay]}
      >
        {cardData.map((study, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-[#00142E] text-white flex flex-col text-start overflow-hidden ">
              <div className=" md:p-4 px-4 pt-4 ">
                <h4 className="font-[600] pb-[5px] text-[16px]">
                  {study.company}
                </h4>
                <h3 className="md:text-[24px] text-[18px] font-semibold md:tracking-wide tracking-tighter leading-[1.2]">
                  {study.title}
                </h3>
                <div className="grid grid-cols-3 md:gap-[15px] pt-[30px]">
                  {study.metrics.map((stat, sIdx) => (
                    <div key={sIdx}>
                      <div className="md:text-[28px] text-[18px] pb-[5px] font-[700]">
                        {stat.value}
                      </div>
                      <div className="text-[14px] font-[600]">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap pt-[30px] pb-5 md:pb-0">
                  {study.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-[#f2f6fc] font-[600] text-black text-[14px] px-[10px] py-[5px] rounded my-[2px] mx-[3px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className=" flex pl-4   ">
                <div className=" flex absolute  ">
                  <button
                    onClick={() => {
                      navigate(study.link);
                      window.scrollTo(0, 0);
                    }}
                    className=" border-white border-2 md:pl-[15px] md:py-[10px] md:pr-[25px] px-2 py-2 cursor-pointer  rounded hover:bg-[#ff5254] hover:border-[#ff5254] duration-500  md:text-[14px] text-[12px] bg-transparent"
                  >
                    READ FULL CASE STUDY →
                  </button>
                </div>
                <img
                  src={study.image}
                  alt={study.company}
                  className=" w-[60%] xl:ml-[200px] md:ml-[180px] lg-:ml-[200px] ml-[170px] -mt-[50px] -mb-5"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
