import React from 'react';
 
export default function Content9() {
  return (
    <>
      <div className="bg-[#011833] mt-[80px]">
        <div
          className="bg-no-repeat bg-left bg-contain   sm:px-6"
          style={{ backgroundImage: "url('https://safarimarketingpro.com/images/lets-talk-img.png')" }}
        >
          <div className="max-w-[1500px] mx-auto rounded-3xl shadow-2xl overflow-hidden md:flex md:space-x-0">
            {/* Left Spacer (Image is in background) */}
            <div className="hidden md:block md:w-1/2 h-[200px]" />
 
            {/* Right Side (Text & Form) */}
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center mr-27 ">
              {/* Heading and Description */}
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
We Don’t Charge To Educate Our Customers                </h2>
                <p className="text-white text-base sm:text-lg font-medium">
                 Customer Education accelerates growth throughout the customer journey. We are a friendly bunch and would love to hear from you. Fill out the form below and we will be in touch.
                </p>
              </div>
<div className="max-w-4xl mx-auto bg-white rounded-md p-8 font-montserrat text-[#333]">
  <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
   
    {/* Full Name */}
    <div>
      <label className="block text-[15px] font-semibold ">Full Name</label>
      <input
        type="text"
        className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500  text-sm"
      />
    </div>
 
    {/* Email */}
    <div>
      <label className="block text-[15px] font-semibold ">Email</label>
      <input
        type="email"
        className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500  text-sm"
      />
    </div>
 
    {/* Company Name */}
    <div>
      <label className="block text-[17px] font-semibold ">Company Name</label>
      <input
        type="text"
        className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500  text-sm"
      />
    </div>
 
    {/* Further Comments */}
    <div>
      <label className="block text-[17px] font-semibold mb-2">Further Comments</label>
      <textarea
        rows="1"
        className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500  text-sm resize-none"
      />
    </div>
 
    {/* Country Code + Phone */}
    <div className="col-span-1 md:col-span-2 flex gap-6">
      <div className="w-1/3">
        <label className="block text-[15px] font-semibold ">Country</label>
        <select className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1.5 text-sm bg-transparent">
          <option>+91</option>
          <option>+1</option>
          <option>+44</option>
        </select>
      </div>
      <div className="flex-1">
        <label className="block text-[15px] font-semibold mb-2">Phone No.</label>
        <input
          type="text"
          className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1.5 text-sm"
        />
      </div>
    </div>
 
    {/* reCAPTCHA Mock */}
    <div className="col-span-1 md:col-span-2">
      <div className="flex items-center border border-gray-300 rounded-md px-4 py-3 w-fit bg-white shadow-sm">
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
    <div className="col-span-1 md:col-span-2 text-[13px] text-gray-600 leading-relaxed">
      By submitting this form, you agree to us for your business marketing requirements.
      We will use your data to send you free marketing tips, news and our latest services.
      You can get everything 24/7. We are available….
    </div>
 
    {/* Submit Button */}
    <div className="col-span-1 md:col-span-2">
      <button
        type="submit"
        className="w-full bg-[#ff4c4c] hover:bg-[#e04343] text-white font-semibold py-3 text-center rounded-md text-lg tracking-wider"
      >
        CONTACT US TODAY
      </button>
    </div>
  </form>
</div>
 
           
 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
 