import React from "react";

function Homecontact() {
  return (
    // <div>
    //   <div className="relative">
    //     {/* Background Image with Overlay and Content */}
    //     <div className="w-full h-[540px] bg-[url('https://safarimarketingpro.com/images/contact-us-banner.jpg')] bg-cover bg-center">
    //       <div className="w-full h-full bg-[linear-gradient(to_right,#0057ffd6_40%,#4679c587_80%,rgba(70,121,197,0.33)_100%)] flex items-center justify-center px-4">
    //         <div className="max-w-[1140px] -mt-9 mx-auto text-center text-white">
    //           <h2 className="font-[Montserrat] -mt-1 tetx-center font-semibold text-[48px] capitalize leading-[1.4] mb-2 pb-[10px]">
    //             Ready to Grow?{" "}
    //           </h2>
    //           <p className="font-[Montserrat] -mt-1  font-medium text-[18px] leading-[1.5] my-0 px-[10%] text-center">
    //             Great partnerships begin with great discoveries. We start with
    //             your safari business goals and budget, and then help you find
    //             the right marketing strategy to fuel growth.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className="relative w-full md:h-[580px] h-[480px] lg:h-[540px] bg-cover bg-center text-white bg-[url('https://safarimarketingpro.com/images/contact-us-banner.jpg')]">
      <div className="w-full h-full bg-[linear-gradient(to_right,#0057ffd6_40%,#4679c587_80%,rgba(70,121,197,0.33)_100%)] pt-[60%] md:pt-[20%]   lg:pt-[12.4%] px-4 lg:px-16">
        <div className="max-w-[1140px] mx-auto text-center">
          <h1 className="text-[24px]  md:text-[48px] font-[600] capitalize lg:pb-[15px] md:pt-[8px] lg:leading-[1.4] md:leading-[1.2]">
            Ready to Grow?
          </h1>
          <p className="hidden sm:block text-[16px] sm:text-[17px] md:text-[18px] font-[500] px-2 sm:px-10 md:px-[10%] leading-[1.5]">
            Great partnerships begin with great discoveries. We start with your
            safari business goals and budget, and then help you find the right
            marketing strategy to fuel growth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Homecontact;
