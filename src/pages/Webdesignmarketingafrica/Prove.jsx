// import React from 'react'

// function Prove() {
//   return (
//     <>
    
    
//      <div className="px-4 py-20 bg-white">
//       {/* Heading */}
//       <h2 className="font-montserrat font-bold text-[40px] text-center capitalize text-[#3467d8] leading-[1.3] px-[15%]">
//       Let Us Prove It To You

//       </h2>
//       <p className="font-montserrat font-normal text-[18px] text-center text-[#787878] leading-inherit m-0 px-[30px] py-[15px]"> 
// Find our work what we have done, we are here to take yoir safari buisness to the next level!


//       </p>
//       </div>
//     </>
//   )
// }

// export default Prove
import React from 'react'
import Slider from 'react-slick'

import img1 from '../../assets/images/Case-studyagency.webp'
import img2 from '../../assets/images/Case-studyBabji.webp'
import img3 from '../../assets/images/Case-study-Cultural-Vibe.webp'
import img4 from '../../assets/images/Case-studyeboney.webp'
import img5 from '../../assets/images/Case-studyFania.webp'
import img6 from '../../assets/images/Case-studyMajel.webp'
import img7 from '../../assets/images/Case-studysafari-Journey.webp'
import img8 from '../../assets/images/Casestudysenicsafaris.jpg'
import img9 from '../../assets/images/Casestudyjerry.jpg'
import img10 from '../../assets/images/Case-studynkuringo.jpg'
import img11 from '../../assets/images/Case-studynkuringo (1).jpg'
import img12 from '../../assets/images/CasestudyJemu.jpg'
import img13 from '../../assets/images/Casestudycape.jpg'
import img14 from '../../assets/images/Case-studysight.webp'

function Prove() {
  const caseStudies = [
    img1, img2, img3, img4, img5, img6, img7,
    img8, img9, img10, img11, img12, img13, img14
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 }
      }
    ],
    appendDots: dots => (
      <div style={{ padding: '2px' }}>
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
          padding: 0,
        }}
        aria-label={`Go to slide ${i + 1}`}
      />
    )
  }

  return (
    <div className="px-4 py-20 pb-16 bg-white">
      <h2 className="font-montserrat font-bold text-[40px] text-center capitalize text-[#3467d8] leading-[1.3] px-[15%]">
        Let Us Prove It To You
      </h2>
      <p className="font-montserrat font-normal text-[18px] text-center text-[#787878] px-[30px] py-[15px]">
        Find our work what we have done, we are here to take your safari business to the next level!
      </p>

      <div className="max-w-[1160px] px-4 mx-auto mt-8">
        <Slider {...settings}>
          {caseStudies.map((src, index) => (
            <div key={index} className="p-2.5">
              <div className="overflow-hidden bg-white">
                <img src={src} alt={`Case Study ${index + 1}`} className="object-cover w-full h-full" />
                <div className="p-4 mt-3 text-center">
                  <a
                    href="/adds-booking"
                    className="font-montserrat bg-[#ff5254] border border-[#ff5254] hover:bg-black hover:border-black hover:text-[#ff5254]
                     text-white px-[30px] py-[12px] relative rounded-[4px] z-0 overflow-hidden 
                     text-base tracking-normal font-semibold capitalize no-underline float-none outline-none"
                  >
                    Read Full Case Study
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Prove

