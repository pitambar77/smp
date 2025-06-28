import React, { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../../api/config";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const API_URL = `${BASE_URL}/api/review-card`;

const Work = () => {
  const [data, setData] = useState({
    heading: "",
    subheading: "",
    images: [],
  });

  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URL);
        setData(res.data);
      } catch (error) {
        console.error("Failed to fetch marketing proof data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" w-full">
      <div className=" max-w-[1140px] mx-auto md:pt-20  items-center justify-center text-center">
        <h1 className=" capitalize   md:text-[50px] text-2xl text-[#3467d8] font-[700] md:px-20 px-4 leading-[1.4] ">
          {data.heading}
        </h1>
        <p className=" px-4 py-4  text-cente text-[#787878] md:text-[22px] text-[15px] font-[400] leading-[1.4]">
          {data.subheading}
        </p>
      </div>

      <div className="  max-w-[1170px] mx-auto overflow-hidden sm:px-0 px-4">
        <div className="sm:hidden ">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={2500}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay?.start()}
          >
            {Array.isArray(data.images) &&
              data.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg border border-gray-200  p-5  mb-[40px]  flex flex-col justify-between overflow-hidden">
                    <div className="" key={index}>
                      <div className=" flex">
                        <img
                          src={`${BASE_URL}${image.url}`}
                          alt={image.title || `Image ${index + 1}`}
                          className=" w-full bg-cover "
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className=" hidden sm:grid lg:grid-cols-10 md:grid-cols-5 grid-cols-4 gap-3  p-[10px]">
          {Array.isArray(data.images) &&
            data.images.map((image, index) => (
              <div className="  border border-gray-200 shadow-[0_0_9px_0_rgba(0,0,0,0.1)] items-center p-[10px]">
                <div className="" key={index}>
                  <div className=" flex">
                    <img
                      src={`${BASE_URL}${image.url}`}
                      alt={image.title || `Image ${index + 1}`}
                      className=" w-full bg-cover "
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
