// import React from "react";
// import { useNavigate } from "react-router-dom";

// const services = [
//   {
//     title: "Website Development",
//     description:
//       "Your Safari business is unique and you need a website that can convince, who are planning to book their trips to Africa and also help separate you from the competition.",
//     image: "https://safarimarketingpro.com/images/dgyhacb-icn-1.png",
//     link:"/web-designing"
//   },
//   {
//     title: "Organic Marketing",
//     description:
//       "We know how important it is for you to maintain a high ranking for your safari website. We can help you with outstanding organic marketing strategy to attract your desired audience.",
//     image: "https://safarimarketingpro.com/images/dgyhacb-icn-2.png",
//     link:"/organic-marketing"
//   },
//   {
//     title: "Google Advertising",
//     description:
//       "The right advertising campaign can be the secret sauce to a safari company’s success. We help you with curating the best Ad strategies for your safari business to get the results.",
//     image: "https://safarimarketingpro.com/images/dgyhacb-icn-3.png",
//     link:"/google-ads"
//   },
// ];

// function Content6() {
//   const navigate = useNavigate();
//   return (
//     <div className="bg-[#011833] py-[100px] ">
//       <div className="max-w-[1140px] mx-auto ">
//         <h2 className=" font-bold text-[48px] px-[5%] pb-[20px] text-white leading-[1.3] text-center">
//           Digital Growth For Your African Safari Business
//         </h2>

//         <div className="flex flex-col lg:flex-row justify-between px-[15px] pt-[15px] ">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-transparent text-white  py-[20px]   transition-all duration-300 hover:bg-[#ffffff0d]  cursor-pointer"
//             >
//               {/* Icon + Title + Description */}
//               <div className="flex mb-4 py-[20px] px-[10px] ">
//                 {/* Icon */}
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-12 h-12 mr-[15px] -mt-[15px] self-start"
//                 />

//                 {/* Right side: Title and Description */}
//                 <div className="flex flex-col justify-end">
//                   {/* Title aligned bottom */}
//                   <h3 className="text-[22px] w-[100px] font-[600]">
//                     {service.title}
//                   </h3>

//                   {/* Description below title */}
//                   <p className="font-[400] w-[266px] text-[16px] leading-[1.6] mt-4 max-w-xs">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>

//               {/* Button */}
//               <div className=" text-center items-center -mt-1">
//                 <button
//                   onClick={() => {
//                     navigate(`${service.link}`);
//                     window.scrollTo(0, 0);
//                   }}
//                   className=" duration-300 cursor-pointer ease-in text-center text-white font-semibold bg-[#ff5254] border border-[#ff5254] hove:text-[#ff5254] hover:bg-[#011833] hover:text-[#ff5254] px-[22px] py-[10px] rounded-[4px] text-[15px] uppercase shadow-md  transition"
//                 >
//                   Read More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Content6;


//-----------------------------------------------------Responsive-----------------------------------------

import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
const services = [
  {
    title: "Website Development",
    description:
      "Your Safari business is unique and you need a website that can convince, who are planning to book their trips to Africa and also help separate you from the competition.",
    image: "https://safarimarketingpro.com/images/dgyhacb-icn-1.png",
  },
  {
    title: "Organic Marketing",
    description:
      "We know how important it is for you to maintain a high ranking for your safari website. We can help you with outstanding organic marketing strategy to attract your desired audience.",
    image: "https://safarimarketingpro.com/images/dgyhacb-icn-2.png",
  },
  {
    title: "Google Advertising",
    description:
      "The right advertising campaign can be the secret sauce to a safari company's success. We help you with curating the best Ad strategies for your safari business to get the results.",
    image: "https://safarimarketingpro.com/images/dgyhacb-icn-3.png",
  },
];
 
function Content6() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
 
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
 
  return (
    <div className="bg-[#011833] md:py-[100px] py-[50px]">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="font-bold text-[24px] md:text-[48px] px-[5%] md:pb-[20px] text-white leading-[1.3] text-center">
          Digital Growth For Your African Safari Business
        </h2>
 
        {isMobile ? (
          <div className="px-[15px] pt-[15px]">
            <Slider {...sliderSettings}>
              {services.map((service, index) => (
                <div key={index} className="px-2">
                  <div className="bg-transparent text-white py-[20px] transition-all duration-300 hover:bg-[#ffffff0d] cursor-pointer">
                    <div className="flex flex-col items-center justify-center  mb-4 py-[20px] px-[10px]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="md:w-12 md:h-12  w-[40.5px] h-[40.5px] mr-[15px] mb-5 -mt-[15px] "
                      />
                      <div className="flex flex-col justify-end items-center">
                        <h3 className="md:text-[22px] text-[18px] font-[600]">
                          {service.title}
                        </h3>
                        <p className="font-[400] text-[14px] md:text-[16px] leading-[1.6] mt-4 text-center">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-center items-center -mt-1">
                      <button
                        onClick={() => {
                          navigate("/web-designing");
                          window.scrollTo(0, 0);
                        }}
                        className="duration-300 cursor-pointer ease-in text-center text-white font-semibold bg-[#ff5254] border border-[#ff5254] hove:text-[#ff5254] hover:bg-[#011833] hover:text-[#ff5254] px-[15px] py-[8px] rounded-[4px] md:text-[15px] text-[13px] uppercase shadow-md transition"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row justify-between px-[15px] pt-[15px]">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-transparent text-white py-[20px] transition-all duration-300 hover:bg-[#ffffff0d] cursor-pointer"
              >
                <div className="flex mb-4 py-[20px] px-[10px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-12 h-12 mr-[15px] -mt-[15px] self-start"
                  />
                  <div className="flex flex-col justify-end">
                    <h3 className="text-[22px] w-[100px] font-[600]">
                      {service.title}
                    </h3>
                    <p className="font-[400] w-[266px] text-[16px] leading-[1.6] mt-4 max-w-xs">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="text-center items-center -mt-1">
                  <button
                    onClick={() => {
                      navigate("/web-designing");
                      window.scrollTo(0, 0);
                    }}
                    className="duration-300 cursor-pointer ease-in text-center text-white font-semibold bg-[#ff5254] border border-[#ff5254] hove:text-[#ff5254] hover:bg-[#011833] hover:text-[#ff5254] px-[22px] py-[10px] rounded-[4px] text-[15px] uppercase shadow-md transition"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
 
export default Content6;
 