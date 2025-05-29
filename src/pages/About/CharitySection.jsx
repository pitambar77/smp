import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
 
function CharitySection() {
  const images = [
    'https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-7.jpg',
    'https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-3.jpg',
    'https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-5.jpg',
  ];
 
  return (
    <section className="bg-[#4A83C8] py-20 px-6 md:px-16 text-white  mt-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          We Rise By Lifting Others
        </h2>
        <p className="text-xl ">
          Because when we give, we also receive
        </p>
      </div>
 
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch  gap-2">
        {/* Left Text Section */}
        <div className="lg:w-1/2 w-full flex items-center justify-center min-h-[420px] ml-7" >
          <div className="ml-10 px-4 text-left text-[18px]   text-white">
            <p className="pb-[15px]  ">
              Imagine a world where every single person on the planet is given
              free access to the sum of all human needs. At Safari Marketing Pro, <span className=' font-semibold'>
                we’re dedicated to building a better world; both virtually and communally.
              </span>
         
              We believe helping your community is an opportunity to grow as a
              person, to better understand how you fit into this world.
              Contributing for the common good is of paramount importance to us.
              That’s why we organize charity events with various volunteer
              groups and non-profit organizations.
           
              </p>
              <p className='font-semibold'>Putting a smile on someone’s face is worth a million dollars to us.
</p>
          </div>
        </div>
 
        {/* Right Slider Section */}
        <div className="lg:w-1/2 w-full flex items-center justify-center min-h-[420px] mr-22">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="w-[120%] max-w-2xl "
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
    </section>
  );
}
 
export default CharitySection;