import React, { useEffect } from "react";
import { PiCheckFatFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Step = ({ id, number, title, children, isFirst = false }) => {
  return (
    <div id={id} className=" pt-4 sm:pb-5 pb-0">
      {/* Divider except for first */}
      {!isFirst && (
        <div className="max-w-[1140px] mx-auto">
          <div className="border-t border-gray-300 w-full" />
        </div>
      )}

      {/* Step content */}
      <div className="max-w-[1140px] mt-10 mx-auto px-4 grid md:grid-cols-12 sm:gap-6 gap-2 items-start">
        {/* Left side */}
        <div className="md:col-span-4">
          <h3 className="sm:text-2xl text-[18px] font-bold text-[#0b2239]">STEP {number}:</h3>
          <h4 className="mt-2 text-white sm:text-2xl text-[18px] font-[500] leading-snug whitespace-pre-line">
            {title}
          </h4>
        </div>

        {/* Right side */}
        <div className="sm:col-span-8 text-white space-y-4 sm:text-[17px] text-[14px] sm:text-start text-justify ">
          {children}
        </div>
      </div>
    </div>
  );
};

const Strategiesorganic = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, []);

  return (
    <div className="bg-[#ff5254] sm:pb-[60px] pb-[20px] pt-[20px]">
      {/* Step 1 */}
      <Step id="step-1" number={1} isFirst={true} title={`Competitor Research`}>
        <p>
          Every{" "}
          <span className="font-semibold">Organic Marketing Campaign</span>{" "}
          begins with identifying competitors in your{" "}
          <span className="font-semibold">African Safari Market.</span> The
          process is essential to your success as we can determine what is
          working currently for your competitors. If your competitors perform
          well in search engines, they likely have proven work for ranking in
          your area..
        </p>
        <p>
          Performing{" "}
          <span className="font-semibold">
            African Safari Competitor Research
          </span>
          , also allows you to close the gap between you and your leading safari
          competitor’s content and link-building strategies.:
        </p>
      </Step>

      {/* Step 2 */}
      <Step
        id="step-2"
        number={2}
        title={`Researching & Identifying Intent Keywords`}
      >
        <p>
          Competitor research also consists of identifying Intent keywords your
          competitors are ranking for that you are not. By identifying a list of
          relevant{" "}
          <span className="font-semibold">African Safari Keywords,</span> we
          can plan for every page on your African Safari Website and the
          respective keywords they target.
        </p>
        <p>
          <span className="font-semibold">
            African Safari Keyword Research
          </span>{" "}
          is the key to your organic marketing campaigns and will lay the
          footprint for each and every page on your safari website.
        </p>
        <p>
          Our{" "}
          <span className=" font-[600]">
            Organic Marketing For African Safari Operator{" "}
          </span>
          consists of identifying relevant keywords and mapping them out in an
          easily understood way. That way, you can approve the overall direction
          and understand the marketing strategy.
        </p>
      </Step>

      {/* Step 3 */}

      <Step
        id="step-3"
        number={3}
        title={`Performing Your Content & Technical Audit`}
      >
        <p>
          Unless you’re starting from scratch, all marketing efforts should
          begin with an initial audit to identify any and all issues with your
          Safari website currently. This can include various problems that
          should be tackled before any new content or link-building is begun..
        </p>
      </Step>

      {/* Step 4 */}
      <Step id="step-4" number={4} title={`Give Them What They Want`}>
        <p>
          Once we identify and map out your intent keywords, our content will
          begin to create high-quality and relevant content for each page of
          your safari website. High-quality safari content optimized for your
          target keywords will perform better on search engines and act as
          lead-generating safari website assets.{" "}
          <span className=" font-[600]">
            {" "}
            Understanding search intent, and creating content that matches your
            services with popular customer search queries in the global contexts
            is the most{" "}
          </span>
          .
        </p>
        <p>
          We often see   <span className=" font-[600]"> African Safari Websites </span> with poorly
          written content that serves zero purpose to your website traffic. A
          safari website should include content optimized for your target
          keywords and be used to drive safari website traffic to take your
          desired action
        </p>
      </Step>

      {/* Step 5 */}
      <Step
        id="step-5"
        number={5}
        title={`Identifying And Qualifying Backlink Opportunities For Outreach`}
      >
        <p>
          Your Safari website faces a lot of competition from competitors
          looking to take up the search results and new leads from your{" "}
           <span className=" font-[600]"> African Safari Business </span>. Building relevant and
          authoritative backlinks can be the extra push is higher rankings in
          the Google search results.
        </p>
        <p>
          We use a variety of strategies to identify and qualify quality
          backlink opportunities for your safari website.
        </p>
        <p>
          The truth is building links to your website from relevant websites can
          have a significant benefit on ranking in the Google search results if
          done correctly.
        </p>
      </Step>

      {/* Step 6 */}
      <Step id="step-6" number={6} title={`Transparent Reporting`}>
        <p>
          We maintain full transparency so you can see first-hand how our
          efforts are increasing your online revenue. Our custom, in-depth
          reporting includes 24/7 access to a client, Google Analytics reports
          giving a full overview of your safari site’s performance, regularly
          updated keyword rankings, a monthly breakdown of the tasks we’ve
          performed, and a monthly summary reviewing the{" "}
          <span className=" font-[600]">
            {" "}
            Organic Marketing Improvements For African Safari Business
          </span>
          .
        </p>
      </Step>
      <div className=" sm:px-[10px] sm:py-[10px]  sm:mt-[70px] mt-[50px] text-center">
        <button
          onClick={() => {
            navigate("/lets-grow-business");
            window.scrollTo(0, 0);
          }}
          className="bg-[#011833] text-white sm:text-[16px] text-[14px]  uppercase font-[500] sm:px-10 px-[12px] sm:py-[12px] py-[10px] rounded-[5px] border border-[#011833] cursor-pointer hover:bg-[#ff5254] hover:border-[#ff5254] hover:text-white ease-in duration-300"
        >
          STAND OUT AMONGST THE CROWD!
        </button>
      </div>
    </div>
  );
};

export default Strategiesorganic;
