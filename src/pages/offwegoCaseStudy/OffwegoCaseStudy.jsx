import React, { useEffect, useState } from 'react'

import Banner from '../../components/Banner'

import SectionLayout from '../../components/SectionLayout'
import TitleBlock from '../../components/TitleBlock'
import Button from '../../components/Button'
import ImageBlock from '../../components/ImageBlock'
import TextImageSection from '../../components/TextImageSection'
import CardCarousel from '../taituTour/CardCarousel'
import Common from '../../components/Common'
import offwego1 from '../../assets/images/offwego-case-study1.png'
import axios from 'axios'
import { BASE_URL } from '../../api/config'

const OffwegoCaseStudy = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${ BASE_URL }/api/all-banners/offwegoCaseStudyBanner`);
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
      <div className="max-w-[60%] mx-auto text-center">
        <TitleBlock
          title="Enhancing Website Design"
          description="Off We Go Safaris is a well-established East African safari company with a wealth of experience in the tourism industry. They specialize in curating tailor-made safari experiences that cater to a diverse range of client needs, including budget considerations, preferred destinations, and seasonal travel. With a commitment to excellence, Off We Go Safaris is known for its top-notch safari guides, personalized tour services, luxury camps, and an exclusive collection of secluded camps and lodges."
          center
        />
        <div className="mt-[50px] text-white">
          <Button 
          link='https://offwegosafaris.com'
          label="Launch Project" />
        </div>
      </div>

      <ImageBlock
        src={offwego1}
        alt="laptop"
      />

      <TextImageSection
        title="Challenges Faced"
        image={{ src: 'https://safarimarketingpro.com/images/offwego-case-study2.png', alt: 'challenge image' }}
        content={
          <>
             <p>Off We Go Safaris recognized the need to elevate their online presence to better reflect the uniqueness and quality of their safari experiences. They sought the expertise of Safari Marketing Pro to design a website that would not only showcase their offerings but also make a strong impression on their target audience.</p>
          
          </>
        }
      />

      <TextImageSection
        title="Solutions   Implemented"
        image={{ src: 'https://safarimarketingpro.com/images/offwego-case-study3.png', alt: 'solutions image' }}
        imageFirst
        content={
          <>
            <p><strong>Visually Captivating Design:</strong> Safari Marketing Pro created a visually stunning website that conveyed the beauty and allure of East African safaris. High-quality imagery and captivating visuals were used to engage visitors and immerse them in the safari experience.</p>
                   
            <p>&nbsp;</p>
            <p><strong>Customization Features:</strong> A key element of the website design was the incorporation of an "Itinerary Builder." This interactive tool allowed visitors to customize their dream safaris, fostering a sense of ownership and anticipation. It also showcased Off We Go Safaris' commitment to tailoring experiences to individual preferences.</p>
            
            <p>&nbsp;</p>
             <p><strong>Highlighting Luxury and Exclusivity: </strong> The website design emphasized the luxury camps and exclusive lodges in their collection, reinforcing the brand's dedication to providing a premium safari experience.</p>
          </>
        }
      />

      <TextImageSection
        title="Results and Impact"
        image={{ src: 'https://safarimarketingpro.com/images/Luxury%20banner%205%20copy.png', alt: 'results image' }}
        content={
          <p className='  leading-[1.5] text-[17px]'>The redesigned website became more than just an online presence; it became a digital gateway to the extraordinary world of East African safaris. It significantly contributed to Off We Go Safaris' brand reinforcement, lead generation, and sales conversion. The website now effectively communicates the uniqueness of their offerings, their customization capabilities, and the luxury of their safari experiences.</p>
        } 
      />

      <div className="max-w-[60%] mx-auto text-center text-white">
        <TitleBlock
          title="Conclusion"
          description="The collaboration between Off We Go Safaris and Safari Marketing Pro elevated the digital presence of the safari company, redefining the way East African safaris are experienced and marketed. The website design not only mirrors the essence of Off We Go Safaris but also engages and captivates their audience, establishing them as a leading force in the safari industry."
          center
        />
      </div>

     <div className="max-w-[75%] mx-auto">
        {["offwego1.png", "offwego3.png", "offwego4.png", "offwego5.png", "offwego6.png"].map((img, idx) => (
          <img
            key={idx}
            src={`https://safarimarketingpro.com/images/${img}`}
            alt={`taitutour${idx + 1}`}
            className="py-[40px]"
          />
        ))}
      </div> 
    </SectionLayout>
    <div className=' w-full py-[100px]'>
            <div className=' max-w-[1140px] mx-auto text-center'>
                <h1 className='text-[#3467d8] text-[40px] font-[700] leading-[1.3] px-[15%]'>Explore Success Stories</h1>
                <p className=' text-[18px] font-[400] py-[15px] px-[30px] text-[#787878]'>Team Up With Safari Marketing Pro – The Next Amazing Case Study Could Be Yours!</p>
            <CardCarousel/>
            </div>
            
      </div>
      <Common/>
    </>
  )
}

export default OffwegoCaseStudy
