import React from 'react';

function SuccessStories() {
  return (
    <section className="relative bg-[#ff5254] text-white py-20 px-4 text-center overflow-hidden">
      {/* Blue decorative blobs */}
      <img
        src={'https://safarimarketingpro.com/images/New%20SMP.png'}
        alt="decorative blob 1"
        className="absolute top-10 right-16 w-170 h-45 object-contain opacity-90"
      />

      <div className="max-w-[1140px] mx-auto mt-8">
        <h2 className="text-[44px] font-[700] font-[Montserrat] mb-6">
          Explore Success Stories
        </h2>
        <h3 className="text-[24px] font-[600] font-[Montserrat] mb-8 leading-snug ">
          Team Up With Safari Marketing Pro – The Next Amazing Case Study Could <span className="text-white font-[700]">Be Yours!</span>
        </h3>
        <p className="text-[17px] font-[500] font-[Montserrat] leading-8 pb-[50px] p-[10px] text-white">
          We bring innovative thinking, an adaptive methodology, strong ethics, and years of expertise to marketing and web design in the safari and tour industry.
          Our team has won awards for our web design expertise and accolades for our effective SEO strategies.
          Our clients know that when they give us a call, we'll pick up the phone and provide them with the time and information they need.
          Our comprehensive approach to online marketing and web design results in a robust and lucrative online presence for each of our clients.
          Click on any project below to see the results!
        </p>
      </div>
    </section>

    
  );
}

export default SuccessStories;
