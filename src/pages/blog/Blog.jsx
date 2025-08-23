import React from "react";
import BlogHighlights from "./BlogHighlights";
import BlogLayout from "./BlogLayout";
import BlogSection from "./BlogSection";
import CategoriesSection from "./CategoriesSection";
import Common from "../../components/Common";

const Blog = () => {
  return (
    <>
    <div className=" w-full  relative h-screen py-[70px] bg-[rgba(61,114,194,0.95)] flex justify-center items-center content-center">
      <div className=" max-w-[1170px] mx-auto">
        <div className=" w-full relative text-center pt-[160px] px-[170px] pb-0">
          <h1 className="text-[72px] font-poppins  text-center text-white mb-0 mt-0 font-semibold leading-[82px] tracking-[-1px]">
            Level Up Your <br /> Safari Marketing
          </h1>
          <h3 class="text-[18px] font-normal text-white p-0 m-0 mt-[30px] leading-inherit font-poppins">
            Do you need more traffic on your safari website? Join 50,000
            marketers who get exclusive safari marketing tips that we only share
            with our subscribers. And be the first to get new content updates.
            Let's build it together this 2021.{" "}
          </h3>
        </div>
        <div className="items-center justify-between text-center py-[60px] hidden lg:block">
  {/* Heading */}
  <h3 className="text-[#dadada] font-semibold text-[16px] leading-[22px] text-center tracking-[0.55em]">
    FEATURED IN
  </h3>

  {/* Logos */}
  <div className="flex flex-wrap items-center justify-center gap-6 mt-[30px]">
    <img
      className="w-[120px] sm:w-[150px] md:w-[170px]"
      src="https://safarimarketingpro.com/blog/wp-content/themes/ds-child/images/logo-banner.png"
      alt="logo"
    />
    <img
      className="w-[120px] sm:w-[150px] md:w-[170px]"
      src="https://safarimarketingpro.com/blog/wp-content/themes/ds-child/images/logo-banner-1.png"
      alt="logo"
    />
    <img
      className="w-[120px] sm:w-[150px] md:w-[170px]"
      src="https://safarimarketingpro.com/blog/wp-content/themes/ds-child/images/logo-banner-2.png"
      alt="logo"
    />
    <img
      className="w-[120px] sm:w-[150px] md:w-[170px]"
      src="https://safarimarketingpro.com/blog/wp-content/themes/ds-child/images/logo-banner-3.png"
      alt="logo"
    />
    <img
      className="w-[120px] sm:w-[150px] md:w-[170px]"
      src="https://safarimarketingpro.com/blog/wp-content/themes/ds-child/images/logo-banner-4.png"
      alt="logo"
    />
  </div>
</div>

        
      </div>
    </div>
    <BlogHighlights/>
    <BlogLayout/>
    <BlogSection/>
    <CategoriesSection/>
    <Common/>
    </>
  );
};

export default Blog;
