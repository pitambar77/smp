// SuccessStoriesCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import cardData from '../../data/CardData';
import { useNavigate } from 'react-router-dom';

// const caseStudies = [
//  {
//     company: 'African Scenic Safaris',
//     title: 'The results speak for themselves',
//     metrics: [
//       { value: '+360%', label: 'Organic Traffic' },
//       { value: '+68%', label: 'New Users' },
//       { value: '+58%', label: 'Overall Sessions' },
//     ],
//     tags: ['SEO', 'Ads', 'Social Media', 'Website Maintenance'],
   
//     image: 'https://safarimarketingpro.com/images/fwhdatysbl1.png',
//   },
//   {
//     company: 'Lifetime Safaris',
//     title: 'SMP goes above and beyond',
//     metrics: [
//       { value: '+300%', label: 'Organic Traffic' },
//       { value: '10938+', label: 'Page Views' },
//       { value: '+167%', label: 'Inquiries' },
//     ],
//     tags: ['SEO', 'Ads', 'Social Media', 'Website Maintenance'],
   
//     image: 'https://safarimarketingpro.com/images/fwhdatysbl2.png',
//   },
//   {
//     company: 'Jerry Tanzania Tours',
//     title: 'Delivers SEO results without a hitch!',
//     metrics: [
//       { value: '+360%', label: 'Organic Traffic' },
//       { value: '+78%', label: 'New Users' },
//       { value: '+250%', label: 'Goal Completions' },
//     ],
//     tags: ['SEO',  'Ads', 'Social Media', 'Website Maintenance'],
  
//     image: 'https://safarimarketingpro.com/images/fwhdatysbl3.png',
//   },
//   {
//     company: 'Falcon Safaris',
//     title: 'Designed Overland Expeditions!',
//     metrics: [
//       { value: '+360%', label: 'Organic Traffic' },
//       { value: '+88%', label: 'Ad Clicks' },
//       { value: '+352%', label: 'Facebook Impressions' },
//     ],
//     tags: ['SEO',  'SMO', 'Social Media', 'Website Maintenance'],
   
//     image: 'https://safarimarketingpro.com/images/fwhdatysbl4.png',
//   },
//   {
//     company: 'Taitu Tour And Travel',
//     title: 'Ultimate Luxury Experience!',
//     metrics: [
//       { value: '+300%', label: 'Organic Traffic' },
//       { value: '+78%', label: 'Ad Clicks' },
//       { value: '+355%', label: 'Facebook Impressions' },
//     ],
//     tags: ['SEO', 'SMO', 'Social Media', 'Website Maintenance'],
   
//     image: 'https://safarimarketingpro.com/images/fwhdatysbl5.png',
//   },
//   {
//     company: 'Cape Archives Tours',
//     title: 'Elevating Travel Experiences!',
//     metrics: [
//       { value: '+301%', label: 'Page Views' },
//       { value: '+54%', label: 'Revenue' },
//       { value: '+68%', label: 'Increase in value' },
//     ],
//     tags: ['SEO', 'SMO','Ads', 'Social Media', 'Website Maintenance'],
   
//     image: 'https://safarimarketingpro.com/images/fwhdatysbl6.png',
//   },
//    {
//     company: 'Extraordinary Safaris',
//     title: 'Providing Exceptional Service!',
//     metrics: [
//       { value: '+300', label: 'Page Views' },
//       { value: '+64%', label: 'Revenue' },
//       { value: '+68%', label: 'Increase in value' },
//     ],
//     tags: ['SEO', 'SMO','Ads', 'Social Media', 'Website Maintenance'],
   
//     image: 'https://safarimarketingpro.com/images/fwhdatysbl6.png',
//   },
//   {
//     company: 'Off We Go',
//     title: 'Effective With Business Objectives!',
//     metrics: [
//       { value: '+150%', label: 'Organic Traffic' },
//       { value: '+25%', label: 'Average Session' },
//       { value: '+355%', label: 'Facebook Impressions' },
//     ],
//     tags: ['SEO', 'SMO', 'Social Media', 'Website Maintenance'],
   
//     image: 'https://safarimarketingpro.com/images/fwhdatysbl9.png',
//   },
//   {
//     company: 'Wow Travel & Tours',
//     title: 'Clean And Intuitive Service!',
//     metrics: [
//       { value: '+68%', label: 'New Users' },
//       { value: '+64%', label: 'Page Sessions' },
//       { value: '+368%', label: 'Traffic' },
//     ],
//     tags: ['SEO', 'SMO', 'Social Media', 'Website Maintenance'],
   
//     image: 'https://safarimarketingpro.com/images/fwhdatysbl10.png',
//   },
//    {
//     company: 'Wilderness First Travel',
//     title: 'Clean And Intuitive Service!',
//     metrics: [
//       { value: '+168%', label: 'Onsite Goal' },
//       { value: '+64%', label: 'Page Views' },
//       { value: '+40%', label: 'New Session' },
//     ],
//     tags: ['SEO', 'SMO', 'Social Media', 'Website Maintenance'],
   
//     image: 'https://safarimarketingpro.com/images/fwhdatysbl8.png',
//   },
//   {
//     company: 'Tanzania Outdoor Adventures',
//     title: 'Ahead Of The Game!',
//     metrics: [
//       { value: '+18%', label: 'Bounce Rate' },
//       { value: '+25%', label: 'Average Session' },
//       { value: '+40%', label: 'New Session' },
//     ],
//     tags: ['SEO', 'SMO', 'Social Media', 'Website Maintenance'],
   
//     image: 'https://safarimarketingpro.com/images/fwhdatysbl11.png',
//   },
// ];

export default function CardCarousel() {
  let navigate = useNavigate()
  return (
    <div className="py-12 px-4">
      
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[ Autoplay]}
      >
        {cardData.map((study, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-[#00142E] text-white flex flex-col text-start overflow-hidden ">
               <div className=' p-4'>
                <h4 className="font-[600] pb-[5px] text-[16px]">{study.company}</h4>
                <h3 className="text-[24px] font-semibold tracking-wide leading-[1.2]">{study.title}</h3>
                <div className="grid grid-cols-3 gap-[15px] pt-[30px]">
                  {study.metrics.map((stat, sIdx) => (
                    <div key={sIdx}>
                      <div className="text-[28px] pb-[5px] font-[700]">{stat.value}</div>
                      <div className="text-[14px] font-[600]">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap pt-[30px]">
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
              <div className=' flex absolute  '>
                <button
                 onClick={() =>{navigate(study.link);window.scrollTo(0, 0); }} 
                 
                 className=" border-white border-2 pl-[15px] py-[10px] pr-[25px] cursor-pointer  rounded hover:bg-[#ff5254] hover:border-[#ff5254] duration-500  text-[14px] bg-transparent">
                READ FULL CASE STUDY →
              </button>
              </div>
              <img
          src={study.image}
          alt={study.company}  className=' w-[60%] ml-[200px] -mt-[50px] -mb-5'/>
         
              
              
              </div>
              

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}



