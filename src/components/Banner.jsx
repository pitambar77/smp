// import React from 'react';

// const Banner = ({ title, description,description1, imageUrl }) => {
//   return (
//     <section
//       className="relative  w-[100%] h-[540px] bg-cover bg-center text-white"
//       style={{ backgroundImage: `url(${imageUrl})` }}
//     >
//       <div className="w-[100%] h-[540px] bg-[linear-gradient(to_right,#0057ffd6_40%,#4679c587_80%,rgba(70,121,197,0.33)_100%)]  pt-[12.4%] px-4 md:px-16">
//         <div className="max-w-[1140px] mx-auto text-center">
//           <h1 className="text-[48px] font-[600] md:text-5xl capitalize  pb-[15px] leading-[1.4]">{title}</h1>
//           <p className="text-lg md:text-[18px] font-[500] px-[10%] leading-[1.5]">{description}</p>
//           <p className=' text-[18px] font-[600] text-center leading-[1.5] '>{description1}</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;
import React from 'react';
 
const Banner = ({ title, description, description1, imageUrl }) => {
  return (
    <section
      className="relative w-full md:h-[540px] h-[480px] lg:h-[540px] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="w-full h-full bg-[linear-gradient(to_right,#0057ffd6_40%,#4679c587_80%,rgba(70,121,197,0.33)_100%)] pt-[60%] md:pt-[20%]   lg:pt-[12.4%] px-4 lg:px-16">
        <div className="max-w-[1140px] mx-auto text-center">
          <h1 className="text-[24px]  md:text-[48px] font-[600] capitalize lg:pb-[15px] lg:leading-[1.4] md:leading-[1.2]">
            {title}
          </h1>
          <p className="hidden sm:block text-[16px] sm:text-[17px] md:text-[18px] font-[500] px-2 sm:px-10 md:px-[10%] leading-[1.5]">
            {description}
          </p>
          <p className=" hidden sm:block md:text-[18px] font-[600] leading-[1.5] mt-2">
            {description1}
          </p>
        </div>
      </div>
    </section>
  );
};
 
export default Banner;
 
 
