import React from 'react';
 
const Content1 = () => {
  return (
    <div className="w-full relative flex justify-center bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="font-montserrat font-bold text-[40px] text-center capitalize text-[#3467d8] leading-[1.3] mb-5 px-0 pb-5">
          A Comprehensive Marketing Solution for Your Safari Company
        </h1>
 
        <p className="text-[20px] font-medium leading-[32px] mt-5 text-gray-600 mb-6 text-center  font-montserrat">
         Do you think only having a safari website can make you found by your potential customers? Almost 90% majority of Safari Holidays plans starts with a search in google. With thousands of safari websites and 2.3 millions of searches going every day, your safari website needs to be visible to your potential customers who are looking for a safari holidays
        </p>
 
        <p className="text-[19px] font-normal leading-[1.8] text-center text-[#787878] mb-4 font-montserrat">
          There's nothing more depressing than sitting around & waiting for the inquiries to be full in your inbox. You know that to get more customers you need more inquiries and to get more inquiries you need better marketing. And the problem is you're not a marketing expert; you're a Safari Operator and you understand the safari business well.
        </p>
 
        <p className="text-[19px] font-normal leading-[1.8] text-center text-[#787878] mb-4 font-montserrat">
         Sure, you've heard people talk about things like SEO and PPC, but you don't really know what any of that means, so you feel a bit insecure and inadequate. You may have hired someone to help, but you've just not seen the results you want
        </p>
 
        <p className="text-[19px] font-normal leading-[1.8] text-center text-[#787878] mb-4 font-montserrat">
That’s why we at <strong>Safari Marketing Pro</strong> designed a proven process that helps thousands of safari operators to <strong>10x their revenue.</strong> It’s not
 about the marketing only where we bring customers to your business, we understand <strong>how to create a world-class website, what marketing strategy work and which content will engage your traveller to attract and convince them to book.</strong>
 So from <strong> Managing and planning, to executing,</strong> we refine
  the way that works dedicately to have the winning relationship with your customers.        </p>
 
        <div className="mt-8">
          <h2 className="text-[19px] font-normal text-center text-[#787878] leading-[1.8] mb-4">
            Let’s Get More Qualified Inquiries and Bookings, and Make More Money...
          </h2>
        </div>
 
        {/* Image after content */}
        <div className="mt-10">
          <img
            src="https://safarimarketingpro.com/images/acmsyhc-fig-1.jpg" // Replace with your image URL
            alt="Safari Marketing"
            className="mx-auto rounded-5xl w-full max-w-6xl"
          />
        </div>
 
      <div className="mt-10">
  <button
    className="bg-gray-900 text-white text-l px-12 py-3 rounded-[5px] hover:bg-red-400"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <strong>GET MY FREE PROPOSAL</strong>
  </button>
</div>
 
      </div>
    </div>
  );
};
 
export default Content1;