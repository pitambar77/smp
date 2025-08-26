import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaTags } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { blogPosts } from "./BlogData"; // Make sure blogPosts is exported from BlogSection
import CategoriesSection from "./CategoriesSection";
import Common from "../../components/Common";
import vector from '../../assets/images/vector-bg.png'


import HeaderContainerBlue from "../../components/HeaderContainerBule";
import NavbarBlue from "../../components/NavbarBlue";
import Footer from "../../components/Footer";
import Sidebar from "./Sidebar";

const BlogDetails = () => {



  const { slug } = useParams(); // Get blog id from URL
  const blog = blogPosts.find((post) => post.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!blog) {
    return <h2 className="text-center text-red-500">Blog not found!</h2>;
  }

  // Get related blogs from same category
  const relatedBlogs = blogPosts.filter(
    (post) => post.category === blog.category && post.slug !== blog.slug
  );

  return (
    <>
    <NavbarBlue/>
    <HeaderContainerBlue/>
      <div className=" mt-20">
    
        <div className=" max-w-[1140px] mx-auto">
          <h1 className=" text-left font-montserrat font-bold text-[60px]  capitalize text-[#3467d8] leading-[1.2] px-10">
            How to Optimise Your Website For Google AI Overview and Get Featured
          </h1>
        </div>
        <div
          className="relative mt-40  w-full bg-white bg-no-repeat bg-top bg-contain flex justify-center items-center "
          style={{
            backgroundImage:
              `url(${vector})`,
          }}
        >
          <div className="">
            <img
              className="rounded-xl -mt-10 shadow-lg max-w-xl text-center "
              src="https://www.heroesofdigital.com/wp-content/uploads/2025/07/Is-Your-Website-Optimised-for-AIO.png.webp"
              alt=""
            />
          </div>
        </div>

        <div className=" max-w-[1140px] mx-auto  flex justify-between mt-30 relative ">
          <div className=" max-w-[700px] ">
            <h3>TLDR</h3>
            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              To appear in Google AI Overview, your content needs to be clear,
              structured, trustworthy, and aligned with the right search intent.
              As the Google Search experience evolves with AI, your SEO strategy
              must adapt with it.
            </p>
            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px] m-0 ">
              AI SEO today isn’t about stuffing keywords or chasing rankings.
              It’s about creating content Google’s AI can trust — and easily
              summarise.
            </p>
            <div className=" py-10 text-gray-400">
              <hr />
            </div>

            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              Welcome to the era of zero click search, where Google AI Overview
              serves up answers before users even think about clicking a link.
            </p>
            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              If your website isn’t showing up in these AI-generated summaries,
              your traffic (and leads) may already be slipping away.
            </p>
            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              You might be doing everything that used to work:
            </p>
            <div className=" ml-10 font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px] ">
              <li>creating content</li>
              <li>ranking well</li>
              <li>showing up on page one.</li>
            </div>

            <div>
              <img
                src="https://www.heroesofdigital.com/wp-content/uploads/2025/07/What-is-Zero-Click-Search-with-Google-AI-Overview.png.webp"
                alt=""
                className=" w-fll"
              />
            </div>
            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              To appear in Google AI Overview, your content needs to be clear,
              structured, trustworthy, and aligned with the right search intent.
              As the Google Search experience evolves with AI, your SEO strategy
              must adapt with it.
            </p>
            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px] m-0 ">
              AI SEO today isn’t about stuffing keywords or chasing rankings.
              It’s about creating content Google’s AI can trust — and easily
              summarise.
            </p>

            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px] m-0 ">
              RELATED:
              <Link className=" text-blue-600 mx-2">
                How to Rank in AI Overviews in 2025 and Beyond
              </Link>
            </p>
            <h1 className="mt-6 text-2xl md:text-[36px] text-[#3467d8] font-bold">
              What is Google AI Overview?
            </h1>
            <img
              className=" my-8"
              src="https://www.heroesofdigital.com/wp-content/uploads/2025/07/What-is-Google-AIO-or-AI-Overview.png.webp"
              alt=""
            />

            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              Welcome to the era of zero click search, where Google AI Overview
              serves up answers before users even think about clicking a link.
            </p>
            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              If your website isn’t showing up in these AI-generated summaries,
              your traffic (and leads) may already be slipping away.
            </p>
            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              You might be doing everything that used to work:
            </p>
            <div className=" ml-10 font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px] ">
              <li>creating content</li>
              <li>ranking well</li>
              <li>showing up on page one.</li>
            </div>

            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              The result? Users get their answers instantly, without clicking a
              single link.
            </p>

            <img
              className=" my-8"
              src="https://www.heroesofdigital.com/wp-content/uploads/2025/07/What-is-Google-AIO-or-AI-Overview.png.webp"
              alt=""
            />

            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              Welcome to the era of zero click search, where Google AI Overview
              serves up answers before users even think about clicking a link.
            </p>
            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              If your website isn’t showing up in these AI-generated summaries,
              your traffic (and leads) may already be slipping away.
            </p>
            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              Here’s what Google looks for:
            </p>
            <div className=" ml-5 font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px] ">
              <li>
                {" "}
                <span className=" font-semibold">
                  Clear, high-quality content writing{" "}
                </span>{" "}
                in natural, human-friendly language
              </li>
              <li>
                {" "}
                <span className=" font-semibold">Topical authority,</span> built
                through internal linking and in-depth coverage of a topic
              </li>
              <li>
                <span className=" font-semibold">E-E-A-T:</span> Experience,
                Expertise, Authoritativeness, Trustworthiness
              </li>
            </div>

            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              <span className=" font-semibold">Pro Tip:</span> If you’re missing
              any of these, Google’s AI may not even register your content —
              much less summarise it.
            </p>

            <h1 className="mt-6 text-2xl md:text-[36px] text-[#3467d8] font-bold">
              What types of websites does Google AI Overview prioritise?
            </h1>

            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              Google&rsquo;s AI tends to favour websites that demonstrate
              authority, trust, and comprehensive coverage of any given topic.
              Such websites include:
            </p>
            <div className=" ml-5 font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              <li>High domain authority sites (e.g. Wikipedia, Mayo Clinic)</li>
              <li>
                Government or academic institutions (e.g. gov.sg, nus.edu.sg)
              </li>
              <li>Industry leaders with deep topical coverage</li>
            </div>
            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              But smaller businesses aren&rsquo;t out of the game. Local
              companies and niche specialists can show up for:
            </p>
            <div className=" ml-5 font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              <li>
                Location-specific queries (&ldquo;Best dermatologist
                Singapore&rdquo;)
              </li>
              <li>
                Commercial comparisons (&ldquo;Ultherapy vs Thermage&rdquo;)
              </li>
              <li>
                Industry pain points (&ldquo;Preschool for speech delay
                Singapore&rdquo;)
              </li>
            </div>

            <h1 className="mt-6 text-2xl md:text-[36px] text-[#3467d8] font-bold">
              Should your business aim to appear in Google AI Overview?
            </h1>
            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              Welcome to the era of zero click search, where Google AI Overview
              serves up answers before users even think about clicking a link.
            </p>
            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              If your website isn’t showing up in these AI-generated summaries,
              your traffic (and leads) may already be slipping away.
            </p>

            <img
              className=" my-8"
              src="https://www.heroesofdigital.com/wp-content/uploads/2025/07/What-is-Google-AIO-or-AI-Overview.png.webp"
              alt=""
            />
            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              Welcome to the era of zero click search, where Google AI Overview
              serves up answers before users even think about clicking a link.
            </p>

            <p className=" font-normal sm:text-[18px] text-[14px] sm:text-left text-justify text-[#787878] leading-[1.5] sm:pt-[15px]  m-0 ">
              <span className=" font-semibold">Pro Tip:</span> If you’re missing
              any of these, Google’s AI may not even register your content —
              much less summarise it.
            </p>
          </div>

          {/* right side */}
          <div className=" max-w-[350px] h-fit sticky top-30 self-start">
         <Sidebar/>
          </div>
        </div>

<div className="max-w-6xl mx-auto px-6 py-12">
{/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-6 text-[#3467d8]">Related Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedBlogs.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.slug}>
                  <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover "
                    />
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-[#3467d8] line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center mt-2 text-xs text-gray-500 gap-3">
                        <span className="flex items-center gap-1">
                          <FaTags size={12} /> {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <SlCalender size={12} /> {post.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
</div>
        
      </div>

      <CategoriesSection />
      <Common />
      <Footer/>
    </>
  );
};

export default BlogDetails;
