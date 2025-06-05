import React from 'react';
 
export default function Content9() {
  return (
    <>
      <div className="bg-[#011833]">
        <div
          className="bg-no-repeat bg-left bg-contain   sm:px-6"
          style={{ backgroundImage: "url('https://safarimarketingpro.com/images/lets-talk-img.png')" }}
        >
          <div className="max-w-[1500px] mx-auto rounded-3xl shadow-2xl overflow-hidden md:flex md:space-x-0">
            {/* Left Spacer (Image is in background) */}
            <div className="hidden md:block md:w-1/2 h-[850px]" />
 
            {/* Right Side (Text & Form) */}
            <div className=" md:w-[610PX] p-8 mb-13 flex flex-col justify-center  ">
              {/* Heading and Description */}
              <div className="mb-8">
                <h2 className="text-[40px] sm:text-4xl font-bold text-white mb-4 mt-15 leading-tight">
We Don’t Charge To <br /> Educate Our Customers                </h2>
                <p className="text-[#fff8f8] text-base  font-[300]  text-[17px] font-montserrat " >
Customer Education accelerates growth throughout the customer journey. We are a friendly bunch and would love to hear from you. Fill out the form below and we will be in touch.                </p>
              </div>
<div className="max-w-4xl mx-auto bg-white rounded-t-md p-8 font-montserrat text-[#333]">
  <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
   
    {/* Full Name */}
    <div>
      <label className="block text-[16px] font-[500] -mb-2  text-[#787878]">Full Name</label>
      <input
        type="text"
        className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500  text-sm"
      />
    </div>
 
    {/* Email */}
    <div>
      <label className="block text-[16px] font-[500] -mb-2  text-[#787878] ">Email</label>
      <input
        type="email"
        className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500  text-sm"
      />
    </div>
 
    {/* Company Name */}
    <div>
      <label className="block text-[16px] font-[500] -mb-2  text-[#787878] ">Company Name</label>
      <input
        type="text"
        className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500  text-sm"
      />
    </div>
 
    {/* Further Comments */}
    <div>
      <label className="block text-[16px] font-[500] -mb-2   text-[#787878] mb-2">Further Comments</label>
      <textarea
        rows="1"
        className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500  text-sm resize-none"
      />
    </div>
 
    {/* Country Code + Phone */}
    <div className="col-span-1 md:col-span-2 flex gap-6">
      <div className="w-1/3">
        <label className="block text-[16px] font-[500]  text-[#787878] -mb-5  ">Country</label>
        <select className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1.5 text-sm bg-transparent">
          {/* <option>+91</option>
          <option>+1</option>
          <option>+44</option> */}
        </select>
      </div>
      <div className="flex-1">
        <label className="block text-[16px] font-[500]  text-[#787878] -mb-4  ">Phone No.</label>
        <input
          type="text"
          className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1.5 text-sm"
        />
      </div>
    </div>
 
    {/* reCAPTCHA Mock */}
    <div className="col-span-1 md:col-span-2">
      <div className="flex items-center border -mb-4  border-[#d3d3d3] rounded-md px-4 py-3 w-fit bg-[#f9f9f9] shadow-sm">
        <input
          type="checkbox"
          className="w-5 h-5 mr-4 accent-blue-600"
          id="robotCheck"
        />
        <label htmlFor="robotCheck" className="text-sm text-gray-800 mr-6">
          I'm not a robot
        </label>
        <img
          src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
          alt="reCAPTCHA"
          className="w-10 h-10 object-contain mr-2"
        />
        <div className="text-[10px] text-gray-500 leading-tight">
          <p>reCAPTCHA</p>
          <a
            href="https://policies.google.com/privacy"
            className="underline text-[10px]"
            target="_blank"
            rel="noreferrer"
          >
            Privacy
          </a>{" "}
          ·{" "}
          <a
            href="https://policies.google.com/terms"
            className="underline text-[10px]"
            target="_blank"
            rel="noreferrer"
          >
            Terms
          </a>
        </div>
      </div>
    </div>
 
    {/* Disclaimer */}
    <div className="col-span-1 ml-3 md:col-span-2 text-[15px] text-[#787878] leading-[24px] font-[400]  " >
      By submitting this form, you agree to us for your business marketing requirements.
      We will use your data to send you free marketing tips, news and our latest services.
      You can get everything 24/7. We are available….
    </div>
 
    {/* Submit Button */}
   
  </form>
 
</div>
 <div className="col-span-1 md:col-span-2">
      <button
        type="submit"
        className="w-full bg-[#ff5254] hover:bg-[#3467d8] text-[#fff] font-semibold py-5 text-center rounded-b-sm text-[18px]  tracking-wider"
      >
        CONTACT US TODAY
      </button>
    </div>
 
           
 
</div>
       </div>     </div>
      </div>
   </>
  );
}