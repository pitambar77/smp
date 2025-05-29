import React from 'react'
import Banner from '../../components/Banner'
import caseStudies from '../../data/BannerData'
import SectionLayout from '../../components/SectionLayout'
import TitleBlock from '../../components/TitleBlock'
import Button from '../../components/Button'
import ImageBlock from '../../components/ImageBlock'
import TextImageSection from '../../components/TextImageSection'
import CardCarousel from '../taituTour/CardCarousel'
import Common from '../../components/Common'

import aficanluxurysafari1 from '../../assets/images/africanluxurysafari-case-study1.png'
// import aficanluxurysafari2 from '../../assets/images/africanluxurysafari-case-study2.png'


const AfricanluxurysafariCaseStudy = () => {
    const data = caseStudies.africanluxurySafariBanner
  return (
     <>
    <Banner {...data}/>
    <SectionLayout>
      <div className="max-w-[60%] mx-auto text-center">
        <TitleBlock
          title="Elevating Luxury Travel Experiences"
          description="Extraordinary Safaris, a prominent player in the realm of luxury global travel, sought the expertise of Safari Marketing Pro to redefine its online presence. The mission was crystal clear: to design a website that would not only mirror the lavishness of Extraordinary Safaris' tailor-made African journeys but also significantly boost lead generation."
          center
        />
        <div className="mt-[50px] text-white">
          <Button label="Launch Project" />
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
          <p>The final website isn't just a digital presence; it's a gateway to a once-in-a-lifetime experience for travelers. It significantly contributed to Extraordinary Safaris' brand reinforcement, lead generation, and sales conversion. The website doesn't just showcase luxury; it embodies it, making it a game-changer in the industry.</p>
        }
      />

      <div className="max-w-[60%] mx-auto text-center text-white">
        <TitleBlock
          title="Conclusion"
          description="The collaboration between Extraordinary Safaris and Safari Marketing Pro has elevated its digital presence and redefined luxury travel experiences. The website now not only reflects the essence of Extraordinary Safaris but also resonates with and engages a global elite, establishing it as a true industry leader."
          center
        />
      </div>

      <div className="max-w-[75%] mx-auto">
        {["luxurysafari1.png", "luxurysafari3.png", "luxurysafari4.png", "luxurysafari5.png", "luxurysafari6.png","luxurysafari7.png"].map((img, idx) => (
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
                <h1 className='text-[#3467d8] text-[40px] font-[700] leading-[1.3] px-[15%]'>Let Us <span className='text-[#ff5254]'>PROVE</span>  It To You</h1>
                <p className=' text-[18px] font-[400] py-[15px] px-[30px] text-[#787878]'>Find our work what we have done, we are here to take yoir safari buisness to the next level!</p>
            <CardCarousel/>
            </div>
            
      </div>
      <Common/>
    </>
  )
}

export default AfricanluxurysafariCaseStudy
