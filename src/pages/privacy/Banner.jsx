import React from "react";

const Banner = () => {
  return (
    <section className="relative w-full md:h-[580px] h-[480px] lg:h-[540px] bg-cover bg-center text-white bg-[url('https://safarimarketingpro.com/images/privacy-policy-banner.jpg')]">
      <div className="w-full h-full bg-[linear-gradient(to_right,#0057ffd6_40%,#4679c587_80%,rgba(70,121,197,0.33)_100%)] pt-[60%] md:pt-[20%]   lg:pt-[12.4%] px-4 lg:px-16">
        <div className="max-w-[1140px] mx-auto text-center">
          <h1 className="text-[24px]  md:text-[48px] font-[600] capitalize lg:pb-[15px] md:pt-[8px] lg:leading-[1.4] md:leading-[1.2]">
            Privacy Policy
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
