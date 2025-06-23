// import React from "react";

// function Africancontinent() {
//   return (
//     <div className="pb-[10px] pt-[98px]" >
//       <div className="text-center pb-[15px] ">
//         {/* Main Heading */}
//         <h2
//           className="
//     font-[Montserrat]
//     font-bold
//     text-[48px]
//     text-center
//     capitalize
//     text-[#3467d8]
//     leading-[1.3]
//     m-0
//     px-[10%]
//     pb-[10px]
//   "
//         >
//           World Is One Click Away From Us.
//         </h2>

//         {/* Subtext */}
//         <p
//           className="
//     text-[22px]
//     font-medium
//     leading-inherit
//     capitalize
//     font-[Montserrat]
//     text-[#787878]
//     text-center
//     p-0
//     pb-[10px]
//     m-0
//     tracking-[0.5px]
//   "
//         >
//           Operating In 13 Countries In Whole African Continents, Serving More
//           Than 1000+ Clients
//         </p>
// </div>
//         {/* Full Width Image */}
//         <div className=" max-w-[1140px] mx-auto ">
//           <img
//             src="https://safarimarketingpro.com/images/global-lg.png"
//             alt="Africa Coverage"
//             className="w-[1150px] h-auto object-cover "
//           />
//         </div>

//     </div>
//   );
// }

// export default Africancontinent;

// ---------------------------------------------------responsive-----------------------

import React from "react";

function Africancontinent() {
  return (
    <div className="md:pt-[98px]  pt-[40px] pb-[10px]">
      <div className="text-center pb-[15px]">
        {/* Main Heading */}
        <h2 className="font-[Montserrat] font-bold md:text-[48px] text-[24px] capitalize text-[#3467d8] leading-[1.3] m-0 px-[10%] pb-[10px]">
          World Is One Click Away From Us.
        </h2>

        {/* Subtext */}
        <p className="md:text-[22px] px-4 md:px-0 text-[15px] font-medium capitalize font-[Montserrat] text-[#787878] leading-[inherit] tracking-[0.5px] pb-[10px] m-0">
          Operating In 13 Countries In Whole African Continents, Serving More
          Than 1000+ Clients
        </p>
      </div>

      {/* Full Width Image */}
      <div className="max-w-[1140px] mx-auto px-4 md:px-0">
        <img
          src="https://safarimarketingpro.com/images/global-lg.png"
          alt="Africa Coverage"
          className="w-[1150px] h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default Africancontinent;
