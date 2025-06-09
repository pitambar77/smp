import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowCircleRight } from "react-icons/md";
 
function Content3() {
  // // Scroll to top function
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };
 
  return (
    <div
      className="relative py-[100px]  bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.01)), url("https://safarimarketingpro.com/images/socs-bg1.jpg")',
          // smaller size => zoom out
    backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-[1170px]   mx-auto flex flex-col lg:flex-row justify-between items-center ">
        {/* Left Content */}
        <div className=" lg:w-2/3  text-white space-y-6   drop-shadow-md">
          <h2
  className=" mb-6  font-bold leading-tight drop-shadow-lg font-montserrat "
  style={{
    fontWeight: 600,
    fontSize: '36px',
    textAlign: 'left',
    color: '#fff',
    lineHeight: 'inherit',
   
    padding: 0,
    textTransform: 'capitalize',
  }}
>
  SMP is the only choice for safari operators in AFRICA.
  <div className=" h-[1px]  bg-gradient-to-r from-transparent via-[#cfd0d1] to-[#c5c5c5] opacity-50 mr-120 mt-6" />
 
</h2>
 
<p
  className="drop-shadow font-montserrat w-[610px] "
  style={{
   
        fontWeight: 400,
    fontSize: '17px',
    textAlign: 'left',
    color: '#fff',
    lineHeight: 1.5,
    textTransform: 'inherit',
   
    padding: '0 0 15px 0',
  }}
>
We’re just like you, that’s why we understand your safari business needs and work as a bridge between your potential customers and your safari services and make them reach to you in all possible online marketing ways. We understand your destinations better than an owner as we have been working since 10 Years of Great Safari Experience with more than 300+ satisfied customers like Falcon Safaris, 748 Air services LTD, Go2 Africa, Mahlatini Luxury Travel, TANAPA, Rhino Africa, Easy Travels, Altezza Travel, Zara Tours ETC..
</p>
         
         <Link to="/about-us" className="text-[#ff5254]   font-semibold hover:text-white inline-flex items-center gap-2">
  READ MORE
<MdOutlineArrowCircleRight className=' text-md '/>
</Link>
 
        </div>
 
        {/* Right Scroll Button */}
        <div className="flex justify-center items-center w-full lg:w-1/3 mt-10 lg:mt-0">
       <button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="w-[83px] h-[83px] right-20 rounded-full mx-auto relative bg-red-400/95 text-white flex justify-center items-center transition-transform transform hover:scale-110 shadow-2xl"
  style={{
    animation: 'pulse 1.50s infinite cubic-bezier(.66,0,0,1)',
    boxShadow: '0 0 0 0 rgba(217, 217, 217, 0.7)',
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-14 h-14"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
 
  <style>{`
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(217, 217, 217, 0.7);
      }
      70% {
        box-shadow: 0 0 0 20px rgba(217, 217, 217, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(217, 217, 217, 0);
      }
    }
  `}</style>
</button>
 
 
 
        </div>
      </div>
    </div>
  );
}
 
export default Content3;
 