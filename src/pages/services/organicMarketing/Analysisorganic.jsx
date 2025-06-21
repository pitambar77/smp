 
import { PiCheckFatFill } from 'react-icons/pi';
 
export default function Analysisorganic() {
    return (
        <section className="bg-white sm:px-8 px-4 py-16 ">
            <div className="max-w-[1140px] mx-auto">
                {/* Heading */}
                <div className='sm:pl-52 sm:w-[66%]'>
                    <h2 className="sm:text-4xl text-[24px] font-bold text-[#3467d8] leading-snug sm:mb-18 mb-4">
                        How We Do Analysis Of Your
                        Safari Businesses 
                        Positioning?
                    </h2>
 
                    {/* Description */}
                    <p className="text-gray-500 sm:text-lg text-[14px] sm:text-start text-justify max-w-2xl mb-10 leading-relaxed">
                        By doing an SEO audit, we review all the successes and failures of the
                        organic efforts we put in for our website to rank better. This will help
                        us target what we are doing wrong & where we need to improve. Here are
                        some of the areas to cover for carrying out an SEO audit.
                    </p>
                </div>
 
                {/* Content Section */}
                <div className="mx-auto sm:px-4 grid grid-cols-1 md:grid-cols-2 sm:pl-65 ">
                   
                    {/* Left Side - Circle Image */}
                    <div className="flex sm:justify-end sm:items-end sm:pr-12 sm:mt-50   md:mb-0  ">
                        <div className="sm:w-[450px] sm:h-[450px] sm:-mb-25  rounded-full bg-[#fefefe] flex sm:items-center sm:justify-center ">
                            <img
                                src="https://safarimarketingpro.com/images/awt.png" 
                                alt="SEO Tools"
                                className="sm:w-[330px] sm:mt-6 sm:mr-12 h-auto object-contain sm:absolute z-10 "
                            />
                           
                        </div>
                    </div>
 
                    {/* Right Side - Checklist */}
                    <div className="flex flex-col sm:gap-6 gap-3 text-[#787878] sm:text-[17px] text-[14px]  font-normal leading-[1.5] sm:text-left text-justify py-[15px] pb-[17px] sm:pr-22">
                        <div className="flex items-start gap-3">
                           <span className=' mt-1 sm:mr-[12px] mr-1 text-[#0dc091] text-[14px]  font-[600]'><PiCheckFatFill  /></span>
                            <span>Performance: slow pages, too-large CSS or HTML</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className=' mt-1 sm:mr-[12px] mr-1 text-[#0dc091] text-[14px] font-[600]'><PiCheckFatFill  /></span>
                            <span>HTML Tags: missing, duplicate or non-optimal length of title tags, meta descriptions and H1 tags</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className=' mt-1 sm:mr-[12px] mr-1 text-[#0dc091] text-[14px] font-[600]'><PiCheckFatFill  /></span>
                            <span>Social Tags: incomplete or missing Open Graph tags and Twitter cards</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className=' mt-1 sm:mr-[12px] mr-1 text-[#0dc091] text-[14px] font-[600]'><PiCheckFatFill  /></span>
                            <span>Content Quality: low word counts, unconsolidated duplicate pages</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className=' mt-1 sm:mr-[12px] mr-1 text-[#0dc091] text-[14px] font-[600]'><PiCheckFatFill  /></span>
                            <span>Localization: all issues with Hreflang</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className=' mt-1 sm:mr-[12px] mr-1 text-[#0dc091] text-[14px] font-[600]'><PiCheckFatFill  /></span>
                            <span>Incoming Links: detecting orphan pages, issues with nofollow links</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className=' mt-1 sm:mr-[12px] mr-1 text-[#0dc091] text-[14px] font-[600]'><PiCheckFatFill  /></span>
                            <span>Outgoing Links: detecting links to redirects, broken pages</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className=' mt-1 sm:mr-[12px] mr-1 text-[#0dc091] text-[14px] font-[600]'><PiCheckFatFill  /></span>
                            <span>Resources: issues with images, JavaScript, CSS</span>
                        </div>
                         <div className="flex items-start gap-3">
                            {/* <Check className="text-[#0dc091] mt-1" size={25} /> */}
                            <span></span>
                        </div>
                        <div className="flex items-start gap-3">
                            {/* <Check className="text-[#0dc091] mt-1" size={25} /> */}
                            <span></span>
                        </div>
                       
                       
                    </div>
                </div>
                 <div >
            <img
              src="https://safarimarketingpro.com/images/organic_adm_panel.webp"
              alt="SEO Tools"
              className="w-[1140px] p-3 h-auto object-contain   relative rounded-4xl "
            />
          </div>
            </div>
        </section>
    );
}
 
 