// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";

// function CharitySection() {
//   const images = [
//     "https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-7.jpg",
//     "https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-3.jpg",
//     "https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-5.jpg",
//   ];

//   return (
//     <div className="bg-[#4679c5] py-[100px] text-white mt-[20px]">
//       <div className="max-w-[1140px] mx-auto text-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-[20px] leading-[1.3]">
//           We Rise By Lifting Others
//         </h2>
//         <p className="text-[22px] font-[500] leading-[inherit] ">
//           Because when we give, we also receive
//         </p>
//       </div>

//       <div className=" max-w-[1140px] mx-auto flex justify-between pt-[40px]">
//         {/* Left Text div */}

//         <div className=" w-[41.67%] text-[18px] px-[15px]  text-white  leading-6.5 ">
//           <p className="pb-[15px] leading-6.5 ">
//             Imagine a world where every single person on the planet is given a
//             free access to the sum of all human needs. In Safari Marketing Pro,{" "}
//             <span className=" font-semibold ">
//               we’re dedicated in building a better world; both virtually and
//               communally. {" "}
//             </span>
//             We believe, helping your community is an opportunity to grow as a
//             person, to better understand how you fit into this world.
//             Contributing for the common good is of paramount importance to
//             us.That’s why we organize charity events with various volunteer
//             groups and non-profit organizations.
//           </p>
//           <p className="font-semibold leading-6.5 ">
//            Putting a smile on someone’s face is worth a million dollar to us.
//           </p>
//         </div>

//         {/* Right Slider div */}
//         <div className=" pr-[15px]">
//           <Swiper
//             modules={[Autoplay]}
//             spaceBetween={20}
//             slidesPerView={1}
//             loop={true}
//             autoplay={{ delay: 3000 }}
//             className="w-[120%] max-w-[635px] "
//           >
//             {images.map((src, index) => (
//               <SwiperSlide key={index}>
//                 <img
//                   src={src}
//                   alt={`Charity Event ${index + 1}`}
//                   className="w-full h-[360px] object-cover rounded shadow-lg"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CharitySection;

//------------------------------------------responsive-----------------------------

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function CharitySection() {
  const images = [
    "https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-7.jpg",
    "https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-3.jpg",
    "https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-5.jpg",
  ];

  return (
    <div className="bg-[#4679c5] py-[40px] lg:py-[100px] text-white mt-[20px]">
      <div className="max-w-[1140px] mx-auto text-center">
        <h2 className="text-[24px] lg:text-5xl font-bold lg:mb-[20px] mb-3 leading-[1.3]">
          We Rise By Lifting Others
        </h2>
        <p className="text-[22px] font-[500] px-2 lg:px-0 leading-[inherit]">
          Because when we give, we also receive
        </p>
      </div>

      {/* Force mobile-style layout on mobile + tablet, desktop keeps original */}
      <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row justify-between pt-[20px] lg:pt-[40px]">
        {/* Left Text div (always first on mobile and tablet) */}
        <div className="px-2 w-full lg:w-[41.67%] lg:text-[18px] text-[15px] text-justify lg:text-left lg:px-[15px] text-white leading-6.5">
          <p className="pb-[15px] leading-6.5">
            Imagine a world where every single person on the planet is given a
            free access to the sum of all human needs. In Safari Marketing Pro,{" "}
            <span className="font-semibold">
              we’re dedicated in building a better world; both virtually and
              communally.{" "}
            </span>
            We believe, helping your community is an opportunity to grow as a
            person, to better understand how you fit into this world.
            Contributing for the common good is of paramount importance to us.
            That’s why we organize charity events with various volunteer groups
            and non-profit organizations.
          </p>
          <p className="font-semibold leading-6.5">
            Putting a smile on someone’s face is worth a million dollar to us.
          </p>
        </div>

        {/* Right Slider div (always second on mobile and tablet) */}
        <div className="w-full lg:w-auto lg:pr-[15px] px-2 lg:px-0 mt-[30px] lg:mt-0">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="w-full lg:w-[120%] max-w-[635px]"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Charity Event ${index + 1}`}
                  className="w-full h-[360px] object-cover rounded shadow-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CharitySection;
