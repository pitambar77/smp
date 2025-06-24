import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'

import SectionLayout from '../../components/SectionLayout'
import TitleBlock from '../../components/TitleBlock'
import Button from '../../components/Button'
import ImageBlock from '../../components/ImageBlock'
import TextImageSection from '../../components/TextImageSection'
import CardCarousel from '../taituTour/CardCarousel'
import Common from '../../components/Common'
import Content9 from '../../pages/home/Content9'

import aficanluxurysafari1 from '../../assets/images/africanluxurysafari-case-study1.png'
import axios from 'axios'
// import aficanluxurysafari2 from '../../assets/images/africanluxurysafari-case-study2.png'

import { BASE_URL } from '../../api/config';

const AfricanluxurysafariCaseStudy = () => {
   
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${ BASE_URL }/api/all-banners/africanluxurySafariBanner`);
        setBannerData(res.data);
      } catch (err) {
        console.error("Failed to fetch banner", err);
      }
    };
    fetchBanner();
  }, []);

  if (!bannerData) return <div>Loading...</div>;

  

  return (
    <>
       <Banner
        title={bannerData.title}
        description={bannerData.description}
        imageUrl={`${ BASE_URL }/${bannerData.imageUrl}`}
      />
    <SectionLayout>
      <div className="sm:max-w-[60%] mx-auto text-center sm:px-0 px-4">
        <TitleBlock
          title="Elevating Luxury Travel Experiences"
          description="Extraordinary Safaris, a prominent player in the realm of luxury global travel, sought the expertise of Safari Marketing Pro to redefine its online presence. The mission was crystal clear: to design a website that would not only mirror the lavishness of Extraordinary Safaris' tailor-made African journeys but also significantly boost lead generation."
          center
        />
        <div className="mt-[50px] text-white">
          <Button 
          link='https://africanluxurysafari.com'
          label="Launch Project" />
        </div>
      </div>

      <ImageBlock
        src={aficanluxurysafari1}
        alt="laptop"
      />

      <TextImageSection
        title="Challenges Faced"
        image={{ src: 'https://safarimarketingpro.com/images/africanluxurysafari-case-study2.png', alt: 'challenge image' }}
        content={
          <>
            <p><strong>Competitive Luxury Travel Market: </strong> The luxury travel industry is fiercely competitive, with travellers seeking exceptional experiences. Extraordinary Safaris needed to stand out in this crowded market.</p>
            <p>&nbsp;</p>
            <p><strong>Global Audience: </strong>Serving an international, high-net-worth clientele added complexity. The website had to resonate with a diverse array of cultures and languages.</p>
            <p>&nbsp;</p>
            <p><strong>Building Trust:</strong> Establishing trust was essential, as luxury travellers often invest substantial sums in their experiences. Extraordinary Safaris needed to showcase its expertise and build confidence.</p>
          
          </>
        }
      />

      <TextImageSection
        title="Solutions   Implemented"
        image={{ src: 'https://safarimarketingpro.com/images/africanluxurysafari-case-study3.png', alt: 'solutions image' }}
        imageFirst
        content={
          <>
            <p><strong>Unveiling Unprecedented Luxury:</strong></p>
           
            <p>The new website introduced visitors to the unparalleled luxury of Extraordinary Safaris with full-screen, high-quality imagery and captivating videos, promising an unforgettable adventure.</p>
            <p>&nbsp;</p>
            <p><strong>Personalized Itinerary Building:</strong></p>
            
            <p>A key feature, the "itinerary builder," allowed visitors to customize their dream trips, fostering a sense of ownership and anticipation.</p>
            <p>&nbsp;</p>
             <p><strong>Building Trust and Confidence:</strong></p>
            
            <p>Multi-Currency and Dual-Language Functionality: The site accommodated international travelers by seamlessly supporting multiple currencies and languages.An interactive trip finder and map-enabled users to envision their journeys, promoting engagement.</p>
          </>
        }
      />

      <TextImageSection
        title="Results and Impact"
        image={{ src: 'https://safarimarketingpro.com/images/africanluxurysafari-case-study4.png', alt: 'results image' }}
        content={
          <p className=' sm:pb-0 pb-[30px]'>The final website isn't just a digital presence; it's a gateway to a once-in-a-lifetime experience for travelers. It significantly contributed to Extraordinary Safaris' brand reinforcement, lead generation, and sales conversion. The website doesn't just showcase luxury; it embodies it, making it a game-changer in the industry.</p>
        }
      />

      <div className="sm:max-w-[60%] mx-auto text-center text-white sm:px-0 px-4">
        <TitleBlock
          title="Conclusion"
          description="The collaboration between Extraordinary Safaris and Safari Marketing Pro has elevated its digital presence and redefined luxury travel experiences. The website now not only reflects the essence of Extraordinary Safaris but also resonates with and engages a global elite, establishing it as a true industry leader."
          center
        />
      </div>

      <div className="sm:max-w-[75%] mx-auto">
        {["luxurysafari1.png", "luxurysafari3.png", "luxurysafari4.png", "luxurysafari5.png", "luxurysafari6.png","luxurysafari7.png"].map((img, idx) => (
          <img
            key={idx}
            src={`https://safarimarketingpro.com/images/${img}`}
            alt={`taitutour${idx + 1}`}
            className="sm:py-[40px] py-4 sm:px-0 px-4"
          />
        ))}
      </div>
    </SectionLayout>
    <div className=' w-full sm:py-[100px] py-[50px]'>
            <div className=' max-w-[1140px] mx-auto text-center'>
                <h1 className='text-[#3467d8] sm:text-[40px] text-[24px] font-[700] leading-[1.3] sm:px-[15%]'>Let Us <span className='text-[#ff5254]'>PROVE</span>  It To You</h1>
                <p className=' sm:text-[18px] text-[14px] font-[400] py-[15px] px-[30px] text-[#787878]'>Find our work what we have done, we are here to take yoir safari buisness to the next level!</p>
            <CardCarousel/>
            </div>
            
      </div>
      <Common/>
      <Content9/>
    </>
  )
}

export default AfricanluxurysafariCaseStudy
