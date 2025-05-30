import React from 'react';
 
const Craftsocialmedia = () => {
  return (
        <div
          className="text-white "
          style={{
            background: 'linear-gradient(0deg, #427fdf 0%, #396bb1 100%)',
          }}
        >
          <div className=" max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-15">
 
            {/* Left Text Section */}
            <div  className=' w-[655px] mt-20 '>
             <h1
      style={{
        fontSize: '38px',
        fontFamily: `'Montserrat', sans-serif`,
        textTransform: 'capitalize',
        color: '#fff',
            fontWeight: 700,
 
 
        letterSpacing: '0.45px',
 
 
        lineHeight: '1.2',
      }}
      className="mb-4"
    >
Optimize Growth with Strategic Social Media Mastery    </h1>
 
              <p
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 400,
        fontSize: '17px',
        textAlign: 'left',
        color: '#fff',
        lineHeight: 'inherit',
 
 
      }}
 
    >
For more than a decade, Safari Marketing Pro has been at the forefront of revolutionizing the digital landscape for a diverse array of clients, ranging from small-scale to large safari and tour companies. Our platform's marketing strategies have not only withstood the test of time but have also been proven effective by clients who've witnessed unprecedented success.
 
  </p>
 
              <p className="text-lg md:text-xl mb-5 leading-relaxed"
                style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 400,
        fontSize: '17px',
        textAlign: 'left',
        color: '#fff',
        lineHeight: 'inherit',
 
      }}
 
              >
In the blink of an eye, your audience forms an opinion about your brand. At Safari Marketing Pro, we recognize the critical importance of making that moment count. We are dedicated to crafting unique and exceptional experiences that not only elevate your brand's reputation but also trigger a surge in inquiries.
              </p>
 
 <p className="text-lg md:text-xl mb-5 leading-relaxed"
                style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 400,
        fontSize: '17px',
        textAlign: 'left',
        color: '#fff',
        lineHeight: 'inherit',
 
      }}
 
              >
Why settle for the ordinary when extraordinary results are within reach? Trust Safari Marketing Pro to not just meet but exceed your expectations in the realm of social media management. Join the ranks of those who've harnessed the power of our proven strategies – where each second counts, and each experience leaves an indelible mark on your brand's journey to success.
 
              </p> <p className="text-lg md:text-xl mb-5 leading-relaxed"
                style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 400,
        fontSize: '17px',
        textAlign: 'left',
        color: '#fff',
        lineHeight: 'inherit',
 
      }}
 
              >
Don't just witness the transformation; be a part of it. Elevate your brand with Safari Marketing Pro, where innovation, excellence, and unparalleled results converge. Your brand deserves more than just attention; it deserves a lasting impression. Experience the extraordinary with Safari Marketing Pro – because your success is our adventure.
              </p>
 
              {/* <button
          className="uppercase mb-20 w-[300px] text-[16px] tracking-[1.5px] shadow-[0_12px_18px_0_rgba(0,0,0,0.15)] px-[10px] py-[15px] bg-[#ff5254] text-white border border-[#ff5254] font-semibold hover:bg-black hover:text-red-500 transition-colors duration-300 rounded-md"
        >
          REQUEST A FREE Proposal
        </button> */}
         <div className=" py-[10px] text-[16px] ">
              <a href="/signup">
                <button className="bg-[#FF5254] text-white text-[16px] hover:bg-black hover:text-red-500 transition-colors font-semibold duration-300 min-w-[148px] rounded-r-md p-3 ">
                  <strong>REQUEST A FREE STRATEGY SESSION</strong>
                </button>
              </a>
            </div>
            </div>
 
            {/* Right Image */}
            <div className="flex justify-center ">
              <img
                src="https://safarimarketingpro.com/images/lfsais-figs-2a.png"
                alt="Safari Marketing Pro Representative"
                className="h-[700px] object-cover ml-30 mt-62 "
              />
            </div>
          </div>
       </div>
   
      );
};
 
      export default Craftsocialmedia;