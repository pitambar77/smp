 
import { Check } from 'lucide-react';
 
export default function Analysisorganic() {
    return (
        <section className="bg-white px-8 py-16 font-[Montserrat]">
            <div className="max-w-[1140px] mx-auto">
                {/* Heading */}
                <div className='pl-52 w-[66%]'>
                    <h2 className="text-4xl font-bold text-blue-600 leading-snug mb-18">
                        How We Do Analysis Of Your <br />
                        Safari Businesses <br />
                        Positioning?
                    </h2>
 
                    {/* Description */}
                    <p className="text-gray-500 text-lg max-w-2xl mb-10 leading-relaxed">
                        By doing an SEO audit, we review all the successes and failures of the
                        organic efforts we put in for our website to rank better. This will help
                        us target what we are doing wrong & where we need to improve. Here are
                        some of the areas to cover for carrying out an SEO audit.
                    </p>
                </div>
 
                {/* Content Section */}
                <div className="mx-auto px-4 grid grid-cols-1 md:grid-cols-2 pl-65 ">
                   
                    {/* Left Side - Circle Image */}
                    <div className="flex justify-end items-end pr-12 mt-50   md:mb-0  ">
                        <div className="w-[450px] h-[450px] -mb-25  rounded-full bg-[#fefefe] flex items-center justify-center ">
                            <img
                                src="https://safarimarketingpro.com/images/awt.png" // Replace with your actual image URL
                                alt="SEO Tools"
                                className="w-[330px] mt-6 mr-12 h-auto object-contain absolute z-10 "
                            />
                           
                        </div>
                    </div>
 
                    {/* Right Side - Checklist */}
                    <div className="flex flex-col gap-6 text-[#787878] text-[18px] font-[Montserrat] font-normal leading-[1.5] text-left py-[15px] pb-[17px] pr-22">
                        <div className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 font-bold"  size={25} />
                            <span>Performance: slow pages, too-large CSS or HTML</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1" size={25} />
                            <span>HTML Tags: missing, duplicate or non-optimal length of title tags, meta descriptions and H1 tags</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1" size={25} />
                            <span>Social Tags: incomplete or missing Open Graph tags and Twitter cards</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1" size={25} />
                            <span>Content Quality: low word counts, unconsolidated duplicate pages</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1" size={25} />
                            <span>Localization: all issues with Hreflang</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1" size={25} />
                            <span>Incoming Links: detecting orphan pages, issues with nofollow links</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1" size={25} />
                            <span>Outgoing Links: detecting links to redirects, broken pages</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1" size={25} />
                            <span>Resources: issues with images, JavaScript, CSS</span>
                        </div>
                         <div className="flex items-start gap-3">
                            {/* <Check className="text-green-500 mt-1" size={25} /> */}
                            <span></span>
                        </div>
                        <div className="flex items-start gap-3">
                            {/* <Check className="text-green-500 mt-1" size={25} /> */}
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
 
 