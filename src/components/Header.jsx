import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { IoMdArrowDropdown } from "react-icons/io";
import RequestForm from './RequestForm';


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
      { label: '360 Marketing', href: '/' },
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
          text-white group-hover:text-red-400 transition-all duration-500 ease-out py-[15px] text-[15px]`}
      >
        <p className="flex items-center  ">
          {label}
          
          < IoMdArrowDropdown  className={` text-[24px] transition-all duration-500 ease-out ${
              openDropdown === id ? 'rotate-180' : ''
            } group-hover:text-red-400 `} />
          
          
         
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
      {/* <Navbar /> */}
    <nav className="bg-transparent relative z-50 pt-1 m-0 ">
  <div className="max-w-[1140px] mx-auto pl-1 ">
   <div className="flex justify-between items-center h-[52px] gap-2 text-[15px] text-white font-[600] w-full transition-all duration-500 ease-out  " style={{ letterSpacing: '0.2px' }}>
    
    {navItemWithDropdown('ABOUT US', 'about', true)}
    {navItemWithDropdown('SERVICES', 'services')}
    <Link to="/pricing" className="hover:text-red-400 transition-all duration-500 ease-out">
      PRICING
    </Link>
    <Link to="/our-clients" className="hover:text-red-400 transition-all duration-500 ease-out">
      OUR CLIENTS
    </Link>
    <Link to="/training" className="hover:text-red-400 transition-all duration-500 ease-out">
      TRAINING
    </Link>
    {navItemWithDropdown('RESOURCES', 'resources')}

    <button
      onClick={() => setShowForm(true)}
      className="bg-[#FF5254] text-white cursor-pointer text-[15px] font-semibold hover:bg-black hover:text-red-500 transition-all duration-500 ease-out py-[15px] px-[20px] rounded-[4px]"
    >
      REQUEST A FREE STRATEGY SESSION
    </button>
    
  </div>
  </div>

  {/* Modal */}
  {showForm && (
    
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat]">
       <div className="  relative w-[90%] max-w-[600px] bg-gradient-to-b from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg
                 animate-slide-down-fade">
        
        {/* Close Button */}
        <button
          onClick={() => setShowForm(false)}
          className="absolute cursor-pointer -top-6 -right-5 bg-red-400 hover:bg-[#396bb1] text-white hover:text-red-400 font-bold text-[32px] w-10 h-10 flex items-center justify-center shadow-md"
        >
           ×
        </button>
         <div className="text-white text-center py-8 -mt-5 rounded-t-lg">
          <h3 className="text-[24px] font-medium leading-snug">
            REQUEST A FREE STRATEGY SESSION
          </h3>
          <div className="border-t border-white w-full mx-auto mt-4 -mb-4" />
        </div>
        <RequestForm/>
  
      </div>
     </div>
  )}
</nav>

    </>
  );
}
