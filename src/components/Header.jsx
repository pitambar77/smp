import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const dropdownLinks = {
    about: [
      { label: 'Our Company', href: '/about-us' },
      { label: 'Our Team', href: '/team' },
      { label: 'Reviews', href: '/review' },
    ],
    services: [
      { label: '360 Marketing', href: '/360-marketing' },
      { label: 'Web Designing', href: '/web-designing' },
      { label: 'Organic Marketing', href: '/organic-marketing' },
      { label: 'Google Ads', href: '/google-ads' },
      { label: 'Content Marketing', href: '/content-marketing' },
      { label: 'Social Media Marketing', href: '/social-media-marketing' },
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'EBooks', href: '/ebook' },
    ],
  };

  const navItemWithDropdown = (label, id, isBold = false) => (
    <div
      className="relative group"
      onMouseEnter={() => setOpenDropdown(id)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <Link
        to={`#${id}`}
        className={`flex items-center ${isBold ? 'font-semibold' : 'font-semibold'}
          text-white group-hover:text-red-400 transition-colors py-[15px] px-[5px] text-[15px]`}
      >
        <p className="flex items-center gap-2 ">
          {label}
          
          <i
            className={`fa-solid fa-sort-down text-[14px] transition-transform duration-200 ${
              openDropdown === id ? 'rotate-180' : ''
            } group-hover:text-red-400 pt-[2px] pb-2`}
          />
          
         
        </p>
      </Link>

      {openDropdown === id && (
        <div
          className="absolute top-full left-0 bg-white shadow-lg rounded-md w-50 z-50 text-sm text-gray-700"
          onMouseEnter={() => setOpenDropdown(id)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <div className="flex flex-col py-4">
            {dropdownLinks[id].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="p-3 text-[rgba(61,114,194,0.95)] font-bold font-segoe text-center uppercase hover:text-amber-400 hover:bg-gray-100 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <Navbar />
      <nav className=" bg-transparent relative m-0 z-50  pt-1  ">
        <div className=" max-w-[1140px] mx-auto">
          <div className="flex justify-between items-center h-13 text-[16px] tracking-[0.2px]">
            <div className="flex items-center space-x-8 text-[16px]">
              {navItemWithDropdown('ABOUT US', 'about', true)}
              {navItemWithDropdown('SERVICES', 'services')}
              <Link
                to="/pricing"
                className="text-white hover:text-red-400 font-semibold tracking-[0.2px] text-[16px]"
              >
                PRICING
              </Link>
              <Link
                to="/our-clients"
                className="text-white hover:text-red-400 font-semibold tracking-[0.2px] text-[16px]"
              >
                OUR CLIENTS
              </Link>
              <Link
                to="/training"
                className="text-white hover:text-red-400 font-semibold tracking-[0.2px] text-[16px]"
              >
                TRAINING
              </Link>
              {navItemWithDropdown('RESOURCES', 'resources')}
            </div>
            {/* <div className="px-[10px] py-[10px] text-[16px]">
              <Link to="/signup">
                <button className="bg-[#FF5254] text-white text-[16px] hover:bg-black hover:text-red-500 transition-colors font-semibold duration-300 min-w-[148px] rounded-r-md p-3">
                  <strong>REQUEST A FREE STRATEGY SESSION</strong>
                </button>
              </Link>
            </div> */}

<div className=" py-[10px] text-[16px]">
    <button
      onClick={() => setShowForm(true)}
      className="bg-[#FF5254] text-white cursor-pointer rounded-sm text-[15px] font-[600] hover:bg-black hover:text-red-500 transition-colors font-semibold duration-500 py-[15px] px-[20px] rounded-r-md "
    >
      REQUEST A FREE STRATEGY SESSION
    </button>
  </div>
 
  {/* Modal */}
  {showForm && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat]">
      <div className="relative w-[90%] max-w-[600px] bg-[linear-gradient(0deg,_#427fdf_0%,_#396bb1_100%)] rounded-lg shadow-lg">
        {/* Close Button */}
       <button
  onClick={() => setShowForm(false)}
  className="absolute -top-6 cursor-pointer -right-5 bg-red-400 text-white text-2xl font-extrabold w-10 h-10 flex items-center justify-center  shadow-md"
>
  ✕
</button>
 
 
        {/* Heading */}
        <div className="text-white text-center py-8 -mt-5  rounded-t-lg">
          <h3 className="text-[24px] font-[500] leading-snug">
            REQUEST A FREE STRATEGY SESSION
          </h3>
            <div className="border-t border-white w-full mx-auto mt-4 -mb-4" />
 
        </div>
 
        {/* Form */}
        <form className="px-4 sm:px-6 pb-8 space-y-4  -ml-2 -mr-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name*"
              className="  rounded p-4 border-white border  text-[15px] font-semibold  hover:border-red-500 w-full text-gray-700 bg-white"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className=" border p-4 border-white text-[15px] font-semibold  hover:border-red-500 w-full  text-gray-700 bg-white"
            />
          </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select className=" p-4 border border-white  text-[15px] font-semibold  hover:border-red-500  rounded w-full text-gray-500 bg-white">
              <option>Country Code</option>
              <option>+254</option>
              <option>+255</option>
              <option>+256</option>
              <option>+27</option>
            </select>
            <input
              type="tel"
              placeholder="Phone*"
              className="p-4  text-[15px] font-semibold  border-white hover:border-red-500  border rounded w-full text-gray-700 bg-white"
            />
          </div>
 
          <input
            type="text"
            placeholder="Website*"
            className="p-4 border text-[15px] font-semibold border-white  hover:border-red-500  rounded w-full text-gray-700 bg-white"
          />
 
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select className="p-4 border border-white text-[15px] font-semibold  hover:border-red-500n rounded w-full text-gray-600  bg-white">
              <option>Select Services</option>
              <option>Organic Marketing</option>
              <option>Paid Advertising</option>
              <option>360 Marketing</option>
              <option>Web Design & Development</option>
            </select>
            <select className="rounded p-4 border border-white   text-[15px] font-semibold  hover:border-red-500 w-full text-gray-600 bg-white">
              <option>Best Time To Call</option>
              <option>12 AM - 3 AM</option>
              <option>3 AM - 6 AM</option>
              <option>6 AM - 9 AM</option>
              <option>9 AM - 12 PM</option>
              <option>12 PM - 3 PM</option>
              <option>3 PM - 6 PM</option>
              <option>6 PM - 9 PM</option>
              <option>9 PM - 12 AM</option>
              <option>Any Time</option>
            </select>
          </div>
 
          {/* CAPTCHA Simulation */}
          <div className="flex w-[300px] bg-white items-center gap-2  border  text-[15px] font-semibold  hover:border-red-500  rounded p-5 ">
            <input type="checkbox" className="w-5 h-5" />
            <span className="text-gray-600 text-sm">I'm not a robot</span>
            <img
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="reCAPTCHA"
              className="ml-auto w-6 h-6"
            />
          </div>
 
          {/* Submit Button */}
          <button
            type="submit"
            className="w-[200px] bg-[#ff5254] border-[#ff5254] cursor-pointer hover:bg-[#333] text-white font-semibold py-3 rounded text-center"
          >
            Get My Free Quote
          </button>
        </form>
      </div>
    </div>
  )}
</div>


         
        </div>
      </nav>
    </>
  );
}
