import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Step = ({ id, number, title, children, isFirst = false }) => {
  return (
    <div id={id} className="pt-14  pb-5 ">
      {" "}
      {/* Reduced padding top and bottom */}
      {!isFirst && (
        <div className="max-w-[1140px] mx-auto">
          <div className="border-t border-gray-300 w-full" />
        </div>
      )}
      {/* Step content */}
      <div className="max-w-[1140px] mt-10 mx-auto px-4 grid md:grid-cols-12 gap-6 items-start">
        {" "}
        {/* Reduced margin top */}
        {/* Left side */}
        <div className="md:col-span-4">
          <h3 className="text-2xl font-bold text-[#0b2239]">STEP {number}:</h3>
          <h4 className="mt-2 text-white text-2xl font-semibold leading-snug whitespace-pre-line">
            {title}
          </h4>
        </div>
        {/* Right side */}
        <div className="md:col-span-8 text-white space-y-4 text-[17px]">
          {children}
        </div>
      </div>
    </div>
  );
};

const Strategiessocial = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#ff5254] min-h-screen ">
      {/* Step 1 */}

      <Step
        id="step-1"
        number={1}
        isFirst={true}
        title={`Understanding Client Goals`}
      >
        <p>
          Our first step is to understand the client’s goals. Like, what the
          client wants to achieve with their social media presence.
        </p>
        <p>
          Is it to increase brand awareness, drive traffic to their safari
          website, generate leads, or engage with the customers?
        </p>

        <p>
          We then thoroughly research and identify the platforms where the
          target audience is most active and tailor the content that would
          perform the best
        </p>
      </Step>

      {/* Step 2 */}
      <Step id="step-2" number={2} title={`Account Optimization.`}>
        <p>
          <strong>
            Social Media Accounts Optimization For African Safari Operators{" "}
          </strong>{" "}
          is one of the building blocks of a successful social media strategy.
        </p>
        <p>
          We first do a precise competitor analysis to know what parameters
          should be worked upon on the various social profiles.
        </p>
        <p>We specifically give attention to:</p>
        <ul className="space-y-2 ml-9">
          {[
            "Optimizing your profile images",
            "Stating your safari business goals clearly",
            "Keeping your important links and contact information",
            "Compiling your essential information in a place like Instagram highlights",
            // 'Who are your competitors and how they are performing?',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <i className="fas fa-check text-white mt-1"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Step>

      {/* Step 3 */}
      <Step id="step-3" number={3} title={`Developing A Content Calendar`}>
        <p>
          We then give attention to developing a{" "}
          <strong>Social Media Content Calendar</strong>with super-intended
          content ideas that are proven to generate sales..
        </p>
        <p>A content calendar can benefit you in:</p>
        <ul className="space-y-2 ml-9">
          {[
            "Saving from last-minute planning",
            "Maintaining consistency in posting",
            "KMaintaining the safari brand’s positioning",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <i className="fas fa-check text-white mt-1"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>A basic content calendar includes:</p>
        <ul className="space-y-2 ml-9">
          {[
            "The title of the content",
            "Date and time",
            "The platforms, and",
            "Type of content (like images, videos, surveys, or blogs)",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <i className="fas fa-check text-white mt-1"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Step>
      {/* Step 4 */}
      <Step id="step-4" number={4} title={`Creating And Posting Content`}>
        <p>
          We curate high-quality creative{" "}
          <strong>Social Media Image Designs</strong> that go hand in hand with
          the client’s business values and needs.{" "}
        </p>
        <p>We then post a variety of creatives like:</p>
        <ul className="space-y-2 ml-9">
          {[
            "Carousels for better engagement",
            "Reels for a better reach, and",
            "Long videos for informative content",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <i className="fas fa-check text-white mt-1"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>We mainly focus on 5 platforms:</p>
        <ul className="space-y-2 ml-9">
          {["Instagram", "Facebook", "Twitter", "LinkedIn, and", "YouTube"].map(
            (item, i) => (
              <li key={i} className="flex items-start gap-2">
                <i className="fas fa-check text-white mt-1"></i>
                <span>{item}</span>
              </li>
            )
          )}
        </ul>
        <p>
          We believe in adding value to the customers in every post we make!
        </p>
      </Step>
      {/* Step 5 */}
      <Step id="step-5" number={5} title={`Engaging With The Audience`}>
        <p>
          We make sure to engage with the audience regularly and effectively
          while producing content that has high engagement rates.
        </p>
        <p>Some of our engagement strategies include:</p>
        <ul className="space-y-2 ml-9">
          {[
            "Replying to each customer’s queries",
            "Sharing safari brand stories",
            "Promoting the special offers",
            "Asking for regular customer feedback",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <i className="fas fa-check text-white mt-1"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Using highly trending hashtags</p>
      </Step>
      {/* Step 6 */}
      <Step id="step-6" number={6} title={`Analyzing the results`}>
        <p>
          Keeping track of the{" "}
          <strong>Social Media Performance Of African Safari Operator</strong>{" "}
          is an important step to growing your safari brand.
        </p>
        <p>
          We constantly analyze if the social media content aligns with your
          safari marketing goals. We monitor how every post is performing and
          which are the lowest and highest performing ones. After that, we
          analyze all the likes, comments, and every other form of engagement to
          plan the content that would work best for your business to generate
          revenue.
        </p>
        <div className="px-[10px] py-[10px] text-[16px] mt-15 mb-8">
          <button
            onClick={() => {
              navigate("/lets-grow-business");
              window.scrollTo(0, 0);
            }}
            className="bg-[#011833] cursor-pointer text-white text-[16px] uppercase font-semibold px-10 py-[15px] rounded-[5px] border border-[#ff5254] hover:bg-[#ff5254] hover:text-white transition-colors duration-300"
          >
            <strong>STAND OUT AMONGST THE CROWD</strong>
          </button>
        </div>
      </Step>
    </div>
  );
};

export default Strategiessocial;
