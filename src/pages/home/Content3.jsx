import React from 'react';
 
function Content3() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
 
  return (
    <div
      className="relative py-28 px-10 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.01)), url("https://safarimarketingpro.com/images/socs-bg1.jpg")',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center ml-28">
        {/* Left Content */}
        <div className="w-full lg:w-2/3 text-white space-y-6 pl-8 sm:pl-12 pr-4  drop-shadow-md">
          <h2
  className="text-5xl mb-6 font-bold leading-tight drop-shadow-lg font-montserrat "
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
  <div className=" h-[1px] bg-gradient-to-r from-transparent via-[#cfd0d1] to-[#c5c5c5] opacity-50 mr-120 mt-6" />
 
</h2>
 
<p
  className="drop-shadow font-montserrat mr-30"
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
         
         <a href="#" className="text-red-400 font-semibold hover:underline inline-flex items-center gap-2">
  READ MORE
<i class="fas fa-arrow-circle-right"></i>
</a>
 
        </div>
 
        {/* Right Scroll Button */}
        <div className="flex justify-center items-center w-full lg:w-1/3 mt-10 lg:mt-0">
          <button
            onClick={scrollToTop}
            className="w-16 h-16 bg-red-400 text-white rounded-full flex justify-center items-center hover:bg-red-700 transition-transform transform hover:scale-110 shadow-lg"
          >
            <span className="text-2xl">↑</span>
          </button>
        </div>
      </div>
    </div>
  );
}
 
export default Content3;